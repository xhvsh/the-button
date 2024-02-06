let button = document.querySelector('.button')
let clicked = false

let max = localStorage.getItem('max') || 0
let total = localStorage.getItem('total') || 0
let resets = localStorage.getItem('resets') || 0
let number = localStorage.getItem('number') || 0
let percent = localStorage.getItem('percent') || 100

document.querySelector('.max').innerHTML = `Max: ${max}`
document.querySelector('.total').innerHTML = `Total: ${total}`
document.querySelector('.resets').innerHTML = `Resets: ${resets}`
button.innerHTML = `<div class="number">${number}</div>`

function setItems() {
  localStorage.setItem('max', max)
  localStorage.setItem('total', total)
  localStorage.setItem('resets', resets)
  localStorage.setItem('number', number)
  localStorage.setItem('percent', percent)
}

function reset() {
  percent = 100
  number = 0
  button.innerHTML = `<div class="number">${number}</div>`
  resets++
  document.querySelector('.resets').innerHTML = `Resets: ${resets}`
  setItems()
}

button.addEventListener('click', () => {
  if (!clicked) {
    button.classList.add('clicked')
    clicked = true
    total++

    setItems()

    let randomNum = Math.floor(Math.random() * 100) + 1
    if (randomNum > percent) {
      if (number > max) {
        max = number
        document.querySelector('.max').innerHTML = `Max: ${max}`
      }
      setItems()

      reset()
    } else {
      number++
      percent--
      setItems()
    }

    button.innerHTML = `<div class="number">${number}</div>`
    document.querySelector('.total').innerHTML = `Total: ${total}`

    setTimeout(() => {
      button.classList.remove('clicked')
    }, 200)
    setTimeout(() => {
      clicked = false
    }, 400)
  }
})
