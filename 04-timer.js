let promotion = new Date('mar 14, 2021 22:00:00').getTime()
console.log(promotion)

let p = document.querySelector('p');
console.log(p)

let id = setInterval(() => {
  let now = new Date().getTime()
  let distance = promotion - now
  // console.log(now)
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
  let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60))
  let seconds = Math.floor(distance % (1000 * 60) / (1000))

  p.innerHTML = `Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Sec: ${seconds}`

  if (distance < 0) {
    clearInterval(id)
    p.innerHTML = 'Акция закончлась'
  }

}, 1000);




