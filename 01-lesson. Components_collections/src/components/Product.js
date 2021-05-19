import React from "react";
import PropTypes from "prop-types";

const Product = ({ imageUrl, name, price, qty }) => {
  // let { imageUrl, name, price } = props;
  return (
    <div>
      <img src={imageUrl} alt="Tacos With Lime" width="300" />
      {/* <h2>Tacos With Lime</h2> */}
      <h2>{name}</h2>
      <p>Price: {price}$</p>
      <p>{qty < 50 ? "Few left" : "In Stock"}</p>
      <button type="button">Add to cart</button>
    </div>
  );
};

// Default props
Product.defaultProps = {
  imageUrl:
    "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholde",
};

// PropTypes
Product.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
