let openModalBtn = document.querySelector('button[data-action="open-modal"]');
let closeModalBtn = document.querySelector('button[data-action="close-modal"]');
let backDropRef = document.querySelector('.js-backdrop');


openModalBtn.addEventListener('click', onOpenModal)
closeModalBtn.addEventListener('click', onCLoseModal)
backDropRef.addEventListener('click', onBackdropClick)

function onOpenModal() {
  window.addEventListener('keydown', onPressEsc)
  document.body.classList.add('show-modal')
}

function onCLoseModal() {
  window.removeEventListener(onPressEsc)
  document.body.classList.remove('show-modal')
}

function onBackdropClick(event) {
  // console.log('target', event.target)
  // console.log('currentTarget', event.currentTarget)
  if (event.target === event.currentTarget) {
    onCLoseModal()
  }
}

function onPressEsc(event) {
  if (event.code === 'Escape') {
    onCLoseModal()
    console.log('Надо закрыть модалку')
  }
}