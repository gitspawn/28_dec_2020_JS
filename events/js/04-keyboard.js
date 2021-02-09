/**
 * keydown, keypress, keyup
 * keypress - only for symbol buttons (doesn't work for - ctrl, shift, alt and so on)
 * keydown - all buttons: symbol buttons, ctrl, shift, alt and so on
 * event.key
 * event.code
 * https://keycode.info/
 */

// window.addEventListener("keypress", function (event) {
//   console.log('key', event.key);
//   console.log('code', event.code);
// });


// window.addEventListener("keydown", function (event) {
//   console.log('key', event.key);
//   console.log('code', event.code);
// });

// window.addEventListener('keydown', (event) => {
//   if ('Escape' === event.code) {
//     console.log('Нажали Ескейп')
//   }
// })

// let clearRef = document.querySelector('.js-clear')
// clearRef.addEventListener('click', (event) => {
//   console.log(event)
// })



let clearRef = document.querySelector('.js-clear')
let ouputRef = document.querySelector('.js-output');

window.addEventListener('keypress', (event) => {
  ouputRef.textContent += event.key
})