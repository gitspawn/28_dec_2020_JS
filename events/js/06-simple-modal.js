let btn = document.querySelector('#myButton');
let modal = document.querySelector('#myModal');
let span = document.querySelector('.close');


btn.addEventListener('click', () => {
  modal.style.display = 'block'
})

span.addEventListener('click', () => {
  modal.style.display = 'none'
})

span.addEventListener('mouseover', () => {
  span.style.cursor = 'pointer';
})


window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none'
  }
})


window.addEventListener('keydown', (event) => {
  if (event.code === 'Escape') {
    console.log('Нажали Esc')
    modal.style.display = 'none'
  }
})