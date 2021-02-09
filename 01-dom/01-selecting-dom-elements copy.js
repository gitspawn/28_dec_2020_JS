// querySelector
// querySelectorAll




// body {
//   background - color: #000;
// }

// .text_lorem {
//   font - weight: 600;
//   font - size: 24px;
//   font - family: Verdana, Geneva, Tahoma, sans - serif;
//   font - style: italic;
// }

// #sign_in {
//   color: blue;
//   font - weight: 600;
// }

// Single elementselector
let h1 = document.querySelector('h1');
let h3 = document.querySelector('#sign_in')
let p = document.querySelector('.text_lorem')
// console.log(p)
// console.log(h3)
// console.log(h1)


// Multiple elements selector
// NodeList
// let ulRef = document.querySelectorAll('.list');
// let ulRef = document.querySelectorAll('.list')[0]
// let ulRef = document.querySelectorAll('.list')[1]
// console.log(ulRef);

// HtmlCollection
// let ulRef = document.getElementsByClassName('list');
// console.log(ulRef)
// ulRef = document.querySelectorAll('.list');
// console.log(ulRef)


// Convert HtmlCollection to Array
// let ulArr = Array.from(ulRef)
// let ulArr = [...ulRef]
// console.log(ulArr)


// let ul = document.querySelectorAll('.list')[0]
// // console.log(ul)

// let list = ul.querySelectorAll('li')
// console.log(list)
// // console.log(ul)

// let imagesRef = document.getElementsByTagName('img')
// console.log(imagesRef)

// let imagesRefArr = [...imagesRef]
// console.log(imagesRefArr)

// imagesRefArr.forEach((image) => {
//   image.style.display = 'block'
// })


// < h3 id = "sign_in" > Sign in</h3>

// let h3Ref = document.getElementById('sign_in')
// h3Ref = document.querySelector('#sign_in')
// console.log(h3Ref)


// let list = document.querySelectorAll('li');
// console.log(list)