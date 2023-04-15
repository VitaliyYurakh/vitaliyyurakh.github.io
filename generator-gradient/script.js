const random = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

const main = document.querySelector('.main')
const title = main.querySelector('.title')
const btnChange = main.querySelector('.change')
const btnCopy = main.querySelector('.copy')
const rangeInput = main.querySelector('#range')


let startColor = '#000000'
let endColor = '#000000'
let range = '45deg'
let linearGradient = `linear-gradient(${range}, ${startColor}, ${endColor})`

setColor()

btnChange.addEventListener('click', () => {

    const firstColor = generatorColor()
    const secondColor = generatorColor()

    startColor = firstColor
    endColor = secondColor

    setColor(firstColor, secondColor)

})

btnCopy.addEventListener('click', () => {
    copy(linearGradient)
})

rangeInput.addEventListener('input', ({target}) => {
    range = `${target.value}deg`

    linearGradient = `linear-gradient(${range}, ${startColor}, ${endColor})`

    setLinearGradient(linearGradient)
})

async function copy(linearGradient) {
    try {
        await navigator.clipboard.writeText(`background: ${linearGradient}`)
    } catch (err) {
        console.log(err)
    }
}

function setColor(firstColor = '#000000', secondColor = '#000000') {
    linearGradient = `linear-gradient(${range}, ${firstColor}, ${secondColor})`

    setLinearGradient(linearGradient)

}

function generatorColor() {
    let hexColor = '#';

    for (let i = 0; i < 6; i++){
        hexColor += `${randomSymbol()}`
    }

    return hexColor
}

function randomSymbol() {
    const randomNumber = Math.floor(Math.random() * 15)

    return random[randomNumber]
}

function setLinearGradient(linearGradient) {
    main.style.background = linearGradient
    title.textContent = `background: ${linearGradient}`
}