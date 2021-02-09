/*
 Event Submit
 Default browser actions
 Elements property
 Class FormData() - https://developer.mozilla.org/ru/docs/Web/API/FormData
*/


let formRef = document.querySelector('.js-register-form');


formRef.addEventListener('submit', (event) => {
  // event.preventDefault()

  // Get all elements
  // event.target.elements // 

  // let inputName = document.querySelector('input[name="name"]')
  // let inputEmail = document.querySelector('input[name="email"]')

  // console.log(inputName.value)


  // console.log(event.target.elements.email.value)
  // console.log(event.target.elements.subscription.value)


  // console.log('Form submit!!!!')

  // FormData
  // let formRet = event.target;
  // let formData = new FormData(formRet);
  // console.log(formData)

  // let submitedData = {}

  // formData.forEach((value, key) => {
  //   // console.log('value', value)
  //   // console.log('key', key)

  //   submitedData[key] = value

  //   console.log(submitedData)
  // })
})