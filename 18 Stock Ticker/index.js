import getStockData from './fakeStockAPI'

const nameEl = document.getElementById('name')
const symEl = document.getElementById('symbol')
const priceEl = document.getElementById('price')
const priceIconEl = document.getElementById('price-icon')
const timeEl = document.getElementById('time')

let previousPrice

setInterval(function() {
    const { name, sym, price, time } = getStockData()

    const img = document.createElement('img')

    if (previousPrice === undefined) {
        img.src = '/svg/grey.svg'
    } else if (price > previousPrice) {
        img.src = '/svg/green.svg'
    } else if (price < previousPrice) {
        img.src = '/svg/red.svg'
    } else {
        img.src = '/svg/grey.svg'
    }

    priceIconEl.replaceChildren(img)

    nameEl.textContent = name
    symEl.textContent = sym
    priceEl.textContent = price
    timeEl.textContent = time

    previousPrice = price
}, 1500)