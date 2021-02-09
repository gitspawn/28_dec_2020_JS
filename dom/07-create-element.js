// 1. Создать
// 2. Повесить атрибуты
// 3. Добавить текст если надо
// 4. Привязать в дом


// let url = 'https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'


// let imgKebab = document.createElement('img')
// console.log(imgKebab)

// imgKebab.src = url
// imgKebab.setAttribute('alt', 'kebab')
// imgKebab.width = '400'


// let list = document.querySelectorAll('.list')[0];
// console.log(list)

// // list.append(imgKebab)
// // list.prepend(imgKebab)
// // list.before(imgKebab)
// list.after(imgKebab)



// // Remove
// // imgKebab.remove()


// // Replace
// let hefGoogle = document.querySelector('a')
// imgKebab.replaceWith(hefGoogle)





//  insertAdjesentHtml vs innerHTML
{/* <a class="google" href="https://www.google.com/" target="_blank"
// >Google</a> */}
// let list = document.querySelectorAll('.list')[0];
// let hefGoogle = document.querySelector('a')

// list.insertAdjacentHTML('afterbegin')
// list.insertAdjacentHTML('afterend')
// list.insertAdjacentHTML('beforebegin')
// list.insertAdjacentHTML('beforeend')
// list.insertAdjacentHTML('beforeend', hefGoogle)




// 1. Создать
// 2. Повесить атрибуты
// 3. Добавить текст если надо
// 4. Привязать в дом


let h1 = document.querySelector('h1')
let hrefNew = document.createElement('a');
console.log(hrefNew)

hrefNew.setAttribute('href', 'https://yahoo.com')
hrefNew.setAttribute('target', '_blank');
hrefNew.innerText = 'Yahoo';

h1.append(hrefNew)
