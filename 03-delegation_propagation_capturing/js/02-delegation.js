const refs = {
  tags: document.querySelector('.js-tags'),
  activeTagOutput: document.querySelector('.js-active-tag')

}
refs.tags.addEventListener('click', onTagsClick);


function onTagsClick(event) {
  // console.log(event.target)
  if (event.target.nodeName !== "BUTTON") {
    return
  }

  let currentActiveTag = event.currentTarget.querySelector('.tags__btn--active');
  // console.log('currentActiveTag', currentActiveTag)

  if (currentActiveTag) {
    console.log('Уже есть активный. Снять класс')
    currentActiveTag.classList.remove('tags__btn--active')
  }

  console.log(event.target.dataset.value)

  let nextActiveTag = event.target
  nextActiveTag.classList.add('tags__btn--active')

  refs.activeTagOutput.textContent = nextActiveTag.dataset.value
}