let refs = {
  gallery: document.querySelector('.js-gallery'),
  largeImage: document.querySelector('.js-large-image'),
}


refs.gallery.addEventListener('click', onGalleryClick)


function onGalleryClick(event) {
  event.preventDefault()
  // console.log(event.target)

  if (event.target.nodeName !== "IMG") {
    return
  }

  console.log('Click in to image')
  let imageRef = event.target;
  let largeImageURL = imageRef.dataset.source

  refs.largeImage.src = largeImageURL
}