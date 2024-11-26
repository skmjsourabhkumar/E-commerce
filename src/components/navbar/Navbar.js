import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { GlobalContext } from "../../context/GlobalState";

const Navbar = () => {
  const { cart } = useContext(GlobalContext);
  return (
    // <nav className="navbar bg-primary overflow-auto" data-bs-theme="dark">

    <div className="navbar bg-dark">
      <Link to="/">
        <h2>Shoppinn</h2>
      </Link>
      <ul className="navbar-ul text-white ">
        <li>Womens</li>
        <li>Mens</li>
        <li>Clothing</li>
        <li>Brands</li>
        <Link to="/cart">
          <li>
            &#128722;{" "}
            <span className="card-count" style={{ color: "red" }}>
              ({cart.length})
            </span>
          </li>
        </Link>
        <Link to="/orders">
          <li>Orders</li>
        </Link>
        <button className="nav-btn">Hi, John</button>
      </ul>
    </div>
    // </nav>
  );
};

export default Navbar;
