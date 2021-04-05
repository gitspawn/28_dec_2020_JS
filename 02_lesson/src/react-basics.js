//  React.createElement(type, [props], [...children])
// document.createElement()

import React from 'react';
import ReactDom from 'react-dom';

/*
let link = React.createElement(
  'a',
  {
    href: 'https://translate.google.ru/',
    target: '_blank',
  },
  'Сcылка на Google'
);
// console.log(link)


let image = React.createElement('img', {
  src: 'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  alt: 'Kebab',
  width: 300
})
// console.log(image)

let title = React.createElement('h2', {}, 'Kebab in lavash');
let price = React.createElement('p', {}, 'Price 9.50$');
let button = React.createElement('button', { type: 'button' }, 'Add to cart')
// let product = React.createElement('div', {}, image, title, price, button)
// console.log(product)

let productWithChildrenProps = React.createElement('div', { children: [image, title, price, button] })
console.log(productWithChildrenProps)


ReactDom.render(productWithChildrenProps, document.querySelector('#root'))
*/

//====================================
// JSX

// let link = React.createElement(
//   'a',
//   {
//     href: 'https://translate.google.ru/',
//     target: '_blank',
//   },
//   'Сcылка на Google'
// );

// let linkJSX = (<a href="https://translate.google.ru/" target="_blank">Сcылка на Google</a>)

// let price = 9.50;
// let imageUrl = 'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

// let product = (
//   <div>
//     <img src={imageUrl} alt="Kebab" width="300" />
//     <h2>Kebab in lavash</h2>
//     <p>Price {price}$</p>
//     <button>Add to cart</button>
//   </div>
// )


// React.Fragment


// let product = (
//   <>
//     {/* < React.Fragment > */}
//     <img src={imageUrl} alt="Kebab" width="300" />
//     <h2>Kebab in lavash</h2>
//     <p>Price {price}$</p>
//     <button>Add to cart</button>
//     {/* </React.Fragment> */}
//   </>
// )


// let fn = (
//   React.createElement('h1', {}),
//   React.createElement('p', {}),
// )

// ReactDom.render(product, document.querySelector('#root'))

// ================================
// Components

// let product = (
//   <>
//     {/* < React.Fragment > */}
//     <img src={imageUrl} alt="Kebab" width="300" />
//     <h2>Kebab in lavash</h2>
//     <p>Price {price}$</p>
//     <button>Add to cart</button>
//     {/* </React.Fragment> */}
//   </>
// )



let Product = ({ imageUrl, name, price }) => {
  // let { imageUrl, name, price } = props;
  return (
    <div>
      <img src={imageUrl} alt="Kebab" width="300" />
      <h2>{name}</h2>
      <p>Price {price}$</p>
      <button>Add to cart</button>
    </div>
  )
}

let App = () => {
  return (
    <>
      <h1>Best products</h1>
      <Product imageUrl='https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' name='Kebab in lavash' price={20} />
      <Product imageUrl='https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' name='Pizza time' price={15} />
      <Product imageUrl='https://images.pexels.com/photos/1105325/bbq-meet-eating-diner-1105325.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' name='Best Grill' price={15} />
    </>
  )
}



ReactDom.render(<App />, document.querySelector('#root'))