/*
 * Mousemove
 */


// window.addEventListener('mousemove', function (event) {
//   console.log(event)
// })


function checkMouse(event) {
  console.log(event.target);

}

window.addEventListener('mousemove', _.debounce(checkMouse, 1000))
// window.addEventListener('mousemove', checkMouse)
