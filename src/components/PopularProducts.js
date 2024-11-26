import React, { useState } from "react";

const PopularProducts = () => {
  const [showProducts, setShowProducts] = useState(false);

  const popularProducts = [
    { id: 1, name: "Wireless Earbuds", price: "$49.99" },
    { id: 2, name: "Smartwatch", price: "$199.99" },
    { id: 3, name: "Gaming Mouse", price: "$29.99" },
    { id: 4, name: "Mechanical Keyboard", price: "$89.99" },
  ];

  return (
    <div>
      <button
        onClick={() => setShowProducts(!showProducts)}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {showProducts ? "Hide Popular Products" : "Show Popular Products"}
      </button>

      {showProducts && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "#f9f9f9", // Add or change this line for background color
          }}
        >
          <h2 style={{ color: "#333" }}>Popular Products</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {popularProducts.map((product) => (
              <li
                key={product.id}
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  margin: "10px 0",
                  backgroundColor: "#fff", // Background color for individual items
                }}
              >
                <h3 style={{ color: "#007bff" }}>{product.name}</h3>
                <p>{product.price}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PopularProducts;
