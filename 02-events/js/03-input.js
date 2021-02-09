/**
 * Focus Event
 * Blur Event
 *
 * Input Event
 * Change Event
 *
 * Checkboxes
 * Checked property
 * */


let inputRef = document.querySelector('.js-input');
let licenseRef = document.querySelector('.js-license')
let btnRef = document.querySelector('.js-button')
let nameLabelRef = document.querySelector('.js-button > span')


inputRef.addEventListener('input', (event) => {
  nameLabelRef.textContent = event.target.value
})

licenseRef.addEventListener('change', (event) => {
  console.log(event.target.checked)

  btnRef.disabled = !event.target.checked
})

// inputRef.addEventListener('focus', (event) => {
//   console.log('Focus')
//   console.log(event.target)
// })


// inputRef.addEventListener('blur', (event) => {
//   console.log('Blur')
//   console.log(event.target)
// })

// inputRef.addEventListener('input', (event) => {
//   console.log(event.target)

// })

// inputRef.addEventListener('change', (event) => {
//   console.log(event.target.value)

// })
