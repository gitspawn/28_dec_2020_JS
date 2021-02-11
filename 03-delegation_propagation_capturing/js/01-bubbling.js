/*
 * Event Bubbling
 * event.target
 * event.currentTarget
 */


const refs = {
  parent: document.querySelector('#parent'),
  child: document.querySelector('#child'),
  innerChild: document.querySelector('#inner-child')
}

let parentClickHandler = (event) => {
  console.log('PARENT click')
  console.log('target', event.target)
  console.log('currentTarget', event.currentTarget)

}

let childClickHandler = (event) => {
  console.log('CHILD click')
  console.log('target', event.target)
  console.log('currentTarget', event.currentTarget)

  // event.stopPropagation()
  // event.preventDefault()
}

let innerClickHandler = (event) => {
  console.log('INNER click')
  console.log('target', event.target)
  console.log('currentTarget', event.currentTarget)
}




refs.parent.addEventListener('click', parentClickHandler)
refs.child.addEventListener('click', childClickHandler)
refs.innerChild.addEventListener('click', innerClickHandler)