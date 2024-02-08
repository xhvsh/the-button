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

let menu = false
let overlay = false

document.querySelector('.hamburger').addEventListener('click', () => {
  if (menu) {
    menu = false
    overlay = false
    document.querySelector('.menu').classList.remove('active')
    document.querySelector('.overlay').classList.remove('active')
  } else {
    menu = true
    overlay = true
    document.querySelector('.menu').classList.add('active')
    document.querySelector('.overlay').classList.add('active')
  }
})
document.querySelector('.overlay').addEventListener('click', () => {
  menu = false
  overlay = false
  document.querySelector('.menu').classList.remove('active')
  document.querySelector('.overlay').classList.remove('active')
})

let redBtn = document.querySelector('.red')
let greenBtn = document.querySelector('.green')
let blueBtn = document.querySelector('.blue')
let yellowBtn = document.querySelector('.yellow')
let cyanBtn = document.querySelector('.cyan')
let pinkBtn = document.querySelector('.pink')
let whiteBtn = document.querySelector('.white')
let blackBtn = document.querySelector('.black')

let color = localStorage.getItem('color') || 'red'

let buttons = [redBtn, greenBtn, blueBtn, yellowBtn, cyanBtn, pinkBtn, whiteBtn, blackBtn]

buttons.forEach((e) => {
  if (e.getAttribute('data-color') == color) {
    e.classList.add('clicked')
  } else {
    e.classList.remove('clicked')
  }
})

buttons.forEach((e) => {
  e.addEventListener('click', () => {
    buttons.forEach((btn) => {
      btn.classList.remove('clicked')
    })
    e.classList.add('clicked')
    color = e.getAttribute('data-color')
    localStorage.setItem('color', color)
    changeColor(color)
  })
})

function changeColor(col) {
  switch (col) {
    case 'red':
      document.documentElement.style.setProperty('--primary', '#f00')
      document.documentElement.style.setProperty('--secondary', '#a00')
      break
    case 'green':
      document.documentElement.style.setProperty('--primary', '#0f0')
      document.documentElement.style.setProperty('--secondary', '#0a0')
      break
    case 'blue':
      document.documentElement.style.setProperty('--primary', '#00f')
      document.documentElement.style.setProperty('--secondary', '#00a')
      break
    case 'yellow':
      document.documentElement.style.setProperty('--primary', '#ff0')
      document.documentElement.style.setProperty('--secondary', '#aa0')
      break
    case 'cyan':
      document.documentElement.style.setProperty('--primary', '#0ff')
      document.documentElement.style.setProperty('--secondary', '#0aa')
      break
    case 'pink':
      document.documentElement.style.setProperty('--primary', '#f0f')
      document.documentElement.style.setProperty('--secondary', '#a0a')
      break
    case 'white':
      document.documentElement.style.setProperty('--primary', '#fff')
      document.documentElement.style.setProperty('--secondary', '#aaa')
      break
    case 'black':
      document.documentElement.style.setProperty('--primary', '#333')
      document.documentElement.style.setProperty('--secondary', '#000')
      break
  }
}

changeColor(color)
