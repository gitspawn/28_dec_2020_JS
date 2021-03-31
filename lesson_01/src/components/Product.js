import React from 'react';
import PropTypes from 'prop-types';

let Product = ({ imageUrl, name, price, qty }) => {
  // let { imageUrl, name, price, qty } = props;
  return (
    <div>
      <img src={imageUrl} alt="Kebab" width="300" />
      <h2>{name}</h2>
      <p>Price {price}$</p>
      <p> {qty < 50 ? "Few left" : "In Stock"}</p>
      <button>Add to cart</button>
    </div>
  )
}

// Default props
Product.defaultProps = {
  imageUrl: 'https://media.istockphoto.com/photos/mannequins-in-a-clothing-store-picture-id692910526?s=612x612',
  price: 0
}


// PropTypes
Product.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}


export default Product