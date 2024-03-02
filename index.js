const startChangingColor = document.getElementById('start')
const stopChangingColor = document.getElementById('stop')
let body = document.querySelector('body')

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

let hexVal
const changingColor = () => {
    hexVal = randomColor()
    body.style.backgroundColor = hexVal
}

let startBgColor
startChangingColor.addEventListener('click', () => {
    startBgColor = setInterval(changingColor, 1000)
})

stopChangingColor.addEventListener('click', () => {
    clearInterval(startBgColor)
})