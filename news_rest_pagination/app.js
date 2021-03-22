/*
Thank you for registering with the open platform.
A new key has been created for you: 3534a47c-f615-488a-ac2b-1cbb3a5481ee
You can try this key by accessing https://content.guardianapis.com/search?api-key=3534a47c-f615-488a-ac2b-1cbb3a5481ee in your browser.
*/

// https://open-platform.theguardian.com/documentation/
// Example: https://content.guardianapis.com/search?page=2&q=debate&api-key=test

// let API_KEY = '3534a47c-f615-488a-ac2b-1cbb3a5481ee'

// let URL = `https://content.guardianapis.com/search?api-key=${API_KEY}`
// let URL = `https://content.guardianapis.com/search?page=5&q=debate&api-key=${API_KEY}`

// fetch(URL, {})
//   .then(res => res.json())
//   .then(news => console.log(news))
//   .catch(err => console.log(err))


class News {
  constructor(url) {
    this.counter = 1;
    this.url = url;
    this.list = document.querySelector('.list');
    this.prevButton = document.querySelector('#prev');
    this.nextButton = document.querySelector('#next');
    this.input = document.querySelector('input');
    this.span = document.querySelector('.page-amount');
  }


  renderNews = (arr) => {
    // console.log(arr);
    this.list.innerHTML = '';
    let liCollection = arr.map((el) => {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.setAttribute('href', el.webUrl)
      a.setAttribute('target', '_blank')
      a.textContent = el.webTitle
      // console.log(a)
      let content = document.createElement('div');
      content.classList.add('content');
      li.append(a);
      // console.log(li)
      return li
    })
    this.list.append(...liCollection)
  }


  renderPagination = (response) => {
    // console.log(response)
    let pageAmount = this.span;
    pageAmount.textContent = `${response.pages}`
    this.input.value = response.currentPage;
  }


  fetchNews = async () => {
    try {
      let url = this.url + this.counter;

      let res = await fetch(url);
      let data = await res.json();

      if (data.response.status === 'ok') {
        this.renderNews(data.response.results)
        this.renderPagination(data.response)
      } else {
        renderErrorMassage('Response Err')
      }

    } catch (error) {
      this.renderErrorMassage(error)
    }
  }



  // fetchNews = () => {
  //   let url = this.url + this.counter;
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data)

  //       if (data.response.status === 'ok') {
  //         this.renderNews(data.response.results)
  //         this.renderPagination(data.response)
  //       } else {
  //         renderErrorMassage('Response Err')
  //       }
  //     })
  //     // .catch(err => this.renderErrorMassage(err))
  //     .catch(this.renderErrorMassage)
  // }

  renderErrorMassage = (err) => {
    document.body.innerHTML = '';
    const titleError = document.createElement("h1");
    titleError.textContent = err;
    document.body.append(titleError)

  }

  prevPage = () => {
    if (this.counter === 1) {
      return;
    }
    this.counter--;
    this.fetchNews();
    this.input.value = this.counter
  }

  nextPage = () => {
    this.counter++;
    this.fetchNews();
    this.input.value = this.counter
  }

  inputChange = (event) => {
    let inputValue = event.target.value;
    if (!Number(inputValue)) {
      return;
    }
    this.counter = inputValue;
    this.fetchNews();
  }

  addListeners = () => {
    this.nextButton.addEventListener('click', this.nextPage)
    this.prevButton.addEventListener('click', this.prevPage)
    this.input.addEventListener('input', this.inputChange)
  }


  init = () => {
    // window.addEventListener('load', this.fetchNews.bind(this))
    window.addEventListener('load', this.fetchNews)
    this.addListeners()
  }
}

let API_KEY = '3534a47c-f615-488a-ac2b-1cbb3a5481ee';
let url = `https://content.guardianapis.com/search?&q=debate&api-key=${API_KEY}&page=`;
new News(url).init();


