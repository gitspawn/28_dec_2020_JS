/*
 * Input
 */

// _.debounce(func, [wait = 0], [options = {}])
// _.throttle(func, [wait = 0], [options = {}])


let checkScroll = () => {
  console.log(pageYOffset)
}

let checkScreenSize = () => {
  console.log(innerWidth)
}

window.addEventListener('resize', _.debounce(checkScreenSize, 2000))


