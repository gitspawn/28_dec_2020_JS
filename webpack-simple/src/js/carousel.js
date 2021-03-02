import Siema from 'siema';

let siema = new Siema({
  duration: 2000,
  easing: 'ease-out',
});

let prevBtn = document.querySelector('.js-prev');
let nextBtn = document.querySelector('.js-next');

console.log(prevBtn)
console.log(nextBtn)

prevBtn.addEventListener('click', () => siema.prev());
nextBtn.addEventListener('click', () => siema.next());