import React from "react";
import ReactDom from "react-dom";

let link = React.createElement(
  "a",
  {
    href: "https://reactjs.org/",
    target: "_blank",
    rel: "noreferrer noopener",
  },
  "Ссылка на google"
);

// console.log(link);

// Multiple elements
const image = React.createElement("img", {
  src:
    "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640",
  alt: "Tacos With Lime",
  width: 640,
});

const title = React.createElement("h2", null, "Tacos With Lime");
const price = React.createElement("p", null, "Price: 10.99$");
const button = React.createElement("button", { type: "button" }, "Add to cart");

/*const product;  = React.createElement("div", null, image, title, price, button);
console.log("product", product); */

const productWithChildrenInProps = React.createElement("div", {
  children: [image, title, price, button],
});

console.log(productWithChildrenInProps);
// ================================
// Render to DOM
// ReactDom.render(link, document.querySelector("#root"));
// ReactDom.render(productWithChildrenInProps, document.querySelector("#root"));
// ==============================
// -- JSX --
// let jsxLinc = (
//   <a href="https://reactjs.org/" target="_blank">
//     Ссылка на google
//   </a>
// );

// const jsxProduct = (
//   <div>
//     <img
//       src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//       alt="Tacos With Lime"
//       width="640"
//     />
//     <h2>Tacos With Lime</h2>
//     <p>Price: 99$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );

// ReactDom.render(jsxProduct, document.querySelector("#root"));
// ==============================
// -- JSX Expressions --
// let imgUrl =
//   "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";
// let itemPrice = 9.99;
// const jsxProduct = (
//   <div>
//     <img src={imgUrl} alt="Tacos With Lime" width="640" />
//     <h2>Tacos With Lime {2 < 1 ? "qwe" : "asd"}</h2>
//     <p>Price: {itemPrice}$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );

// ReactDom.render(jsxProduct, document.querySelector("#root"));
// ==============================
// -- JSX Single parent --
/* <React.Fragment></React.Fragment> */
// let a = (
//   <>
//     <p>sdfsf</p>
//     <h1>11111</h1>
//   </>
// );
// ===============================================
// Components
{
  /* <Product></Product>; */
}
const Product = (props) => {
  let { imageUrl, name, price } = props;
  return (
    <div>
      <img src={imageUrl} alt="Tacos With Lime" width="300" />
      {/* <h2>Tacos With Lime</h2> */}
      <h2>{name}</h2>
      <p>Price: {price}$</p>
      <button type="button">Add to cart</button>
    </div>
  );
};

const App = () => {
  return (
    <>
      <h1>Best products</h1>
      <Product
        imageUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        name="Tacos With Lime"
        price={20}
      />
      <Product
        imageUrl="https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        name="Kebab"
        price={40}
      />
    </>
  );
};
ReactDom.render(<App />, document.querySelector("#root"));
