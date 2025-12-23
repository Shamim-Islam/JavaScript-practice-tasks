const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

const port = 5000;
const app = express();

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://assignment-10:4p8kSr4zuEqpr2MA@cluster0.8ng1xny.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const database = client.db("petService");
    const petServices = database.collection("listing");

    // CREATE LISTING
    app.post("/api/listing", async (req, res) => {
      try {
        const data = req.body;

        data.category = {
          name: data.category,
          slug: slugify(data.category),
        };

        data.owner = {
          id: req.user?.id || null,
          name: data.owner?.name || "Unknown",
          email: data.owner?.email || "",
          phone: data.owner?.phone || "",
        };

        data.createdAt = new Date();

        const result = await petServices.insertOne(data);

        res.send({
          success: true,
          data: result,
        });
      } catch (error) {
        res.status(500).send({ message: "Failed to create listing" });
      }
    });

    // GET ALL LISTINGS (Pagination + Filters)
    app.get("/api/listing", async (req, res) => {
      try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 12;
        const skip = (page - 1) * limit;

        const query = {};

        // Category filter
        if (req.query.category) {
          query["category.slug"] = req.query.category;
        }

        // Search by name
        if (req.query.search) {
          query.name = { $regex: req.query.search, $options: "i" };
        }

        // Price range filter
        if (req.query.minPrice || req.query.maxPrice) {
          query.price = {};
          if (req.query.minPrice) {
            query.price.$gte = Number(req.query.minPrice);
          }
          if (req.query.maxPrice) {
            query.price.$lte = Number(req.query.maxPrice);
          }
        }

        const totalItems = await petServices.countDocuments(query);

        const listings = await petServices
          .find(query)
          .sort({ createdAt: -1 })
          .skip(skip)
          .limit(limit)
          .toArray();

        res.send({
          data: {
            listings,
            pagination: {
              totalItems,
              totalPages: Math.ceil(totalItems / limit),
              currentPage: page,
              itemsPerPage: limit,
            },
          },
        });
      } catch (error) {
        res.status(500).send({ message: "Failed to load listings" });
      }
    });

    // GET category counts
    app.get("/api/listing/category-counts", async (req, res) => {
      try {
        const counts = await petServices
          .aggregate([
            {
              $group: {
                _id: "$category.slug",
                name: { $first: "$category.name" },
                count: { $sum: 1 },
              },
            },
          ])
          .toArray();

        res.send({ counts });
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Failed to load category counts" });
      }
    });

    // GET RECENT LISTINGS (HOME PAGE)
    app.get("/api/listing/recent", async (req, res) => {
      try {
        const limit = 3;

        const listings = await petServices
          .find()
          .sort({ createdAt: -1 })
          .limit(limit)
          .toArray();

        res.send({
          listings,
        });
      } catch (error) {
        res.status(500).send({
          message: "Failed to load recent listings",
        });
      }
    });

    // GET LISTINGS BY CATEGORY
    app.get("/api/listing/category/:category", async (req, res) => {
      try {
        const category = req.params.category;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 12;
        const skip = (page - 1) * limit;

        const query = { category };

        const totalItems = await petServices.countDocuments(query);

        const listings = await petServices
          .find(query)
          .sort({ createdAt: -1 })
          .skip(skip)
          .limit(limit)
          .toArray();

        res.send({
          listings,
          pagination: {
            totalItems,
            totalPages: Math.ceil(totalItems / limit),
            currentPage: page,
          },
        });
      } catch (error) {
        res.status(500).send({ message: "Failed to load category listings" });
      }
    });

    // View Details
    app.get("/api/listing/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await petServices.findOne(query);
        if (!result) {
          return res.status(404).send({ message: "Listing not found" });
        }
        res.send(result);
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Failed to load listing details" });
      }
    });

    // GET my listings
    app.get("/api/my-listings", async (req, res) => {
      try {
        const { email } = req.query;

        if (!email) {
          return res.status(400).send({
            success: false,
            message: "Email is required",
          });
        }

        const listings = await petServices
          .find({ "owner.email": email })
          .sort({ createdAt: -1 })
          .toArray();

        res.send({
          success: true,
          listings,
        });
      } catch (error) {
        console.error(error);
        res.status(500).send({
          success: false,
          message: "Failed to load your listings",
        });
      }
    });

    // api health check
    app.get("/api/health", (req, res) => {
      res.send({
        success: true,
        message: "API is healthy",
      });
    });

    // MongoDB connection test
    await client.db("admin").command({ ping: 1 });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error(error);
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello, Developers");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
