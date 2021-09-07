function lazyLoad() {
  let images = document.querySelectorAll("img")
  for (let i = 0; i < images.length; i++) {
    let image = images[i]
    if (
      getElementTop(image) <=
      window.innerHeight + document.documentElement.scrollTop
    ) {
      image.srcset = image.getAttribute("data-srcset")
    }
  }
}

function getElementTop(element) {
  let actualTop = element.offsetTop
  let parent = element.offsetParent

  while (parent !== null) {
    actualTop += parent.offsetTop
    parent = parent.offsetParent
  }

  return actualTop
}

lazyLoad()

window.onscroll = lazyLoad
