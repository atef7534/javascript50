const minValue = 0
const maxValue = 3

export default function getStockData() {
    return {
        name: 'QtechAI',
        sym: 'QTA',
        price: getRandomDecimal(minValue, maxValue), 
        time: getDateFormat()
    }
}
  
function getRandomDecimal(min, max) {
    // Get the random values in a range between min & max
    const randomValue = Math.random() * (max - min) + min
    
    // Return value as a decimal number
    return randomValue.toFixed(2)
}

function getDateFormat() {
    // Create an instance as a date object [current time]
    const date = new Date()
    
    // Keeping the format as it's required hh/mm/ss
    const hours = (date.getHours() < 10) ? `0${date.getHours()}` : date.getHours()
    const minutes = (date.getMinutes() < 10) ? `0${date.getMinutes()}` : date.getMinutes()
    const seconds = (date.getSeconds() < 10) ? `0${date.getSeconds()}` : date.getSeconds()
    
    // return value [string]
    return `${hours}:${minutes}:${seconds}`
}
