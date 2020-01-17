
import './style.sass'

const darken = (forceColor: string) => {
  if (forceColor == 'darken') {
    document.body.classList.add('vs-darken')
    return
  } else if (forceColor == 'lighten') {
    document.body.classList.remove('vs-darken')
    return
  }

  if (!document.querySelector('.vs-darken')) {
    document.body.classList.add('vs-darken')
  } else {
    document.body.classList.remove('vs-darken')
  }

  localStorage.vsDarken = document.querySelector('.vs-darken')
}

export default darken
