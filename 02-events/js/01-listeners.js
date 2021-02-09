/*
  https://devdocs.io/dom_events/
  Event listeners
  Callback identity
  Event Object
*/


let mainButton = document.querySelector('.js-target-btn');
let addListnerBtnRef = document.querySelector('.js-add-listener')
let removeListenerBrnRef = document.querySelector('.js-remove-listener')


mainButton.addEventListener('click', (event) => {
  console.dir(event)
  console.dir(event.type)
  console.log('event.target', event.target)
  console.log('event.currentTarget', event.currentTarget)
  document.body.style.backgroundColor = 'yellow'
})


// addListnerBtnRef.addEventListener('click', (event) => {
//   console.dir(event)
//   document.body.style.backgroundColor = 'blue'
// })
// function doSOmeListener() {
//   console.log('Click!!!')
// }



// addListnerBtnRef.addEventListener('click', () => {
//   mainButton.addEventListener('click', doSOmeListener)
// })


// removeListenerBrnRef.addEventListener('click', () => {
//   mainButton.removeEventListener('click', doSOmeListener)
// })





// window.addEventListener('DOMContentLoaded', () => {
//   console.log('DOMContentLoaded loaded')
// })