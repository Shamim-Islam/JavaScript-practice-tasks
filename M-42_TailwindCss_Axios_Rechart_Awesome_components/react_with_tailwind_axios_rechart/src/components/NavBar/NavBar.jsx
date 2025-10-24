import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { id: 1, name: "Home", path: "/home" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "Contact", path: "/contact" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const links = navLinks.map((link) => <Link key={link.id} link={link}></Link>);

  return (
    <nav className="flex justify-between p-5 ">
      <span className="flex " onClick={() => setOpen(!open)}>
        {open ? (
          <X className="md:hidden"></X>
        ) : (
          <Menu className="md:hidden"></Menu>
        )}

        <ul
          className={`md:hidden absolute duration-1000 text-black
        ${open ? "top-13" : "-top-40"}
             bg-amber-200`}
        >
          {links}
        </ul>

        <h3 className="text-2xl ml-4">My Logo</h3>
      </span>

      <ul className="md:flex hidden">{links}</ul>
      <button>Sign In</button>
    </nav>
  );
};

export default NavBar;
