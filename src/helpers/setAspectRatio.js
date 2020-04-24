export default (img) => {
  const padding = ( img.naturalHeight / img.naturalWidth ) * 100
  img.parentNode.style.paddingTop = `${padding}%`

  const revealImg = () => {
    if (img.getBoundingClientRect().top <= window.innerHeight * .8) {
      img.style.opacity = 1
      img.parentNode.style.background = 'transparent'
      document.removeEventListener('scroll', revealImg)
    }
  }

  if (img.getBoundingClientRect().top <= window.innerHeight * .8) {
    img.style.opacity = 1
    img.parentNode.style.background = 'transparent'
    document.removeEventListener('scroll', revealImg)
  }

  document.addEventListener('scroll', revealImg)
}
