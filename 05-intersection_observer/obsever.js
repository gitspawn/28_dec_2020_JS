/**
 * IntersectionObserver
 * Lazy loading
 * https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
 */

// let box = document.querySelector('.js-observe-box');
// let observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       // console.log(entry)
//       // console.log(entry.target)
//       console.log(entry.target.textContent = 'IMG is intersecting')
//       entry.target.src = entry.target.dataset.src
//       observer.disconnect()
//     }
//   })
// }, {});

// observer.observe(box)



// Lazy Loading
let settings = {
  rootMargin: '0px 0px -200px 0px'
}

if (!!window.IntersectionObserver) {
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // console.log(entry)
        // console.log(entry.target)
        console.log(entry.target.textContent = 'IMG is intersecting')
        entry.target.src = entry.target.dataset.src
        observer.unobserve(entry.target)
      }
    })
  }, settings);


  document.querySelectorAll('img').forEach((img) => {
    observer.observe(img)
  })

} else {
  document.querySelector('#warning').style.display = 'block'
}




