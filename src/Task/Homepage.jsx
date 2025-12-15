import React from "react";
import products from "./productDetails";

const Home = () => {
  return (
    <div>
      <h2>Menu</h2>

      {products.map(item => (
        <div key={item.id}>
          <h3>{item.dish}</h3>
          <p>₹{item.price}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Home;
