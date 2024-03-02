const startChangingColor = document.getElementById('start')
const stopChangingColor = document.getElementById('stop')
// let body = document.querySelector('body')
let body = document.querySelector('#wrapper')

// Generate a random color

const randomColor = () => {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        const random = Math.floor(Math.random() * 16)
        color += hex[random];
    }
    return color
}

let changingColor = () => {
    body.style.backgroundColor = randomColor()
}

let startBgColor
startChangingColor.addEventListener('click', () => {
    if (!startBgColor) {
        startBgColor = setInterval(changingColor, 1000)
    }
})

stopChangingColor.addEventListener('click', () => {
    clearInterval(startBgColor)
    startBgColor = null
})