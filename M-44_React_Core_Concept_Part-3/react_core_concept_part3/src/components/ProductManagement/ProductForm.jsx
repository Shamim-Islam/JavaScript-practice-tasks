import React, { useState } from "react";

const ProductForm = ({ handleAddProduct }) => {
  const [error, setError] = useState("");

  const handleProductSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;

    //Validation
    if (name.length === 0) {
      setError("Please provide a product name");
      return;
    } else if (price.length === 0) {
      setError("Please provide a price");
      return;
    } else if (price < 0) {
      setError("Price can not be nagative.");
      return;
    } else {
      setError("");
    }

    const newProduct = {
      name,
      price,
      quantity,
    };

    // console.log(newProduct);
    handleAddProduct(newProduct);
  };

  return (
    <div>
      <form onSubmit={handleProductSubmit}>
        <input type="text" name="name" placeholder="Product name" />
        <br />
        <input type="text" name="price" placeholder="Product price" />
        <br />
        <input type="text" name="quantity" placeholder="Product quantity" />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: "red" }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ProductForm;
