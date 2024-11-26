import React from "react";
import "./Item.css";

function Item({ name, rating, price, saleDiscount, image, brand }) {
  return (
    <div className="item-card --bs-primary-bg-subtle">
      <img src={image} alt={"Item image"} />
      <div className="item-brand">{brand}</div>
      <div className="item-name">{name}</div>
      <div className="item-info">
        <div className="item-price">₹{price}</div>
        <div className="item-rating">{rating}&#9733;</div>
        <div><button type="button" class="btn btn-outline-info">Add to bag</button></div>
      </div>
    </div>
  );
}

export default Item;
