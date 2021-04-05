import React from 'react';
import PropTypes from 'prop-types';
// import './Product.css';
// import './Product.scss';

// CSS Modules
import styles from './Product.module.css'
// console.log(styles)




// Inline styles object
// let styles = {
//   container: {
//     backgroundColor: 'cornflowerblue',
//     outline: '1px solid black'
//   }
// }
// ========================


let Product = ({ imageUrl, name, price, qty }) => {
  let inStoc = qty < 50;
  //  CSS add class by condotiton


  // 1.
  // let quantityClases = ['Product__qty'];
  // if (inStoc) {
  //   quantityClases.push('awailable')
  // } else {
  //   quantityClases.push('not-awailable')
  // }
  // let finalQuantityClases = quantityClases.join(' ');
  // console.log(finalQuantityClases)
  // 2.
  // Good
  // let quantityClases = ['Product__qty', inStoc ? "awailable" : "not-awailable"]
  // Good
  // Bad
  // let quantityClases = ['Product__qty', inStoc ? "awailable" : "not-awailable"].join(' ');
  // Bad
  // quantityClases.push(inStoc ? "awailable" : "not-awailable")
  // let finalQuantityClases = quantityClases.join(' ');
  // console.log(finalQuantityClases)
  // let { imageUrl, name, price, qty } = props;
  //========================================
  // CSS Modules
  // let quantityClases = [
  //   styles.qty,
  //   inStoc ? styles.awailable : styles['not-awailable']
  // ].join(' ')
  // ========
  // CSS MODULES COMOSITION
  let quantityClases = inStoc ? styles.awailable : styles['not-awailable']

  return (
    // Inline
    // <div style={{ backgroundColor: 'cornflowerblue', outline: '1px solid black' }}>
    // <div style={styles.container}>
    // ======
    // CSS
    // <div className="Product">
    // ===============
    // CSS MODULES
    // <div className={styles.container}>
    <div className="main-container">
      <img src={imageUrl} alt="Kebab" width="300" />
      {/* <h2 className="Product__name">{name}</h2> */}
      <h2 className={styles.name}>{name}</h2>
      <p>Price {price}$</p>
      <p>Quantity:{' '}
        {/* Inline style by condition */}
        {/* <span style={{ color: inStoc ? 'red' : "green" }}>
          {inStoc ? "Few left" : "In Stock"}
        </span> */}
        {/* ============= */}
        {/* CSS */}
        {/* <span className={finalQuantityClases}> */}
        {/* <span className={quantityClases.join(' ')}> */}
        {/* <span className={quantityClases}>
          {inStoc ? "Few left" : "In Stock"}
        </span> */}
        {/* ======= */}
        {/* // CSS MODULES */}

        <span className={quantityClases}>
          {inStoc ? "Few left" : "In Stock"}
        </span>

      </p>
      <button>Add to cart</button>
    </div >
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

// class User {

// }

export default Product



// 3 + 4 + 5
// 3 + 4
// 7 + 5
