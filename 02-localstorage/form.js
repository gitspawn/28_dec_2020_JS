let from = document.querySelector(".js-feedback-form");
let textArea = document.querySelector(".feedback-form textarea");

textArea.addEventListener('input', ofTextAreaHandle)
function ofTextAreaHandle(event) {
  let message = event.currentTarget.value;
  localStorage.setItem('fdb-msg', message)
}


getMessageFromLocalStorage()


from.addEventListener('submit', (event) => {
  event.preventDefault();
  // console.log('Sending to server ...')
  // REmove from localstorage
  localStorage.removeItem('fdb-msg')
  // Reset form
  // textArea.value = ''
  event.currentTarget.reset()

})



function getMessageFromLocalStorage() {
  let fedbackMessage = localStorage.getItem('fdb-msg');
  if (fedbackMessage) {
    console.log(fedbackMessage)
    textArea.value = fedbackMessage
  }
}