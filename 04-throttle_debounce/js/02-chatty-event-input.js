/*
 * Input
 */

// <input type="text" class="js-input" />
//   <p class="js-output"></p>

let inputRef = document.querySelector('.js-input');
let outputRef = document.querySelector('.js-output');


function checkInput(event) {
  console.log(event.target.value);
  outputRef.textContent = event.target.value
}

inputRef.addEventListener('input', _.debounce(checkInput, 1000))


