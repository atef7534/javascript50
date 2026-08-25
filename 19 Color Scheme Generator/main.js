// select the color picker input
const colorPicker = document.querySelector("#color-picker")
const viewSchemeContainer = document.querySelector("#view-scheme .container")
const viewSchemeForm = document.querySelector('#scheme-form')
const colorMode = document.querySelector('#color-mode')
const cols = document.querySelectorAll('.col')

// Generate 6 random colors 
let colors = []
for (let i = 0; i < 6; i++) {
    colors.push(getRandomColor())
}

viewSchemeForm.addEventListener("submit", function(e) {
    e.preventDefault()
    colors = []
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker.value.slice(1)}&mode=${colorMode.value}`)
        .then(response => response.json())
        .then(data => {
            data.colors.forEach(color => colors.push(color.hex.value))
            showScheme(colors)
        })
})

function showScheme(colors) {
    viewSchemeContainer.innerHTML = ''
    colors.forEach((color, index) => addNewColor(color, index))
}

function addNewColor(color, index) {
    const divEl = document.createElement('div')
    divEl.className = `col col-${index + 1}`
    divEl.style.backgroundColor = color

    const spanEl = document.createElement('span')
    spanEl.className = 'value'
    spanEl.textContent = color

    const img = document.createElement('img')
    img.src = 'copy.svg'
    img.alt = 'Copy Icon'
    img.className = 'copy-icon'

    divEl.append(spanEl)
    divEl.append(img)

    brightness = calculateBrightness(color)
    img.style.filter = brightness <= 128 ? 'invert(1)' : 'none'

    viewSchemeContainer.append(divEl)

    divEl.addEventListener('click', (event) => copyToClipboard(event, color, divEl))
}

function copyToClipboard(e, currentColor, divEl) {
    // copy to clipboard
    navigator.clipboard.writeText(currentColor)

    const img = divEl.querySelector('img')
    
    const inverted = img.style.filter === 'none' ? 0 : 1
    img.src = 'party.svg'
    img.style.filter = 'none'

    setTimeout(() => {
        img.src = 'copy.svg'
        img.style.filter = inverted ? 'invert(1)' : 'none'
    }, 700);
}

function hexToRgb(hex) {
  hex = hex.slice(1);

  if (hex.length === 3) {
    hex = hex.split('').map(char => char + char).join('');
  }

  const num = parseInt(hex, 16);

  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255
  };
}

function calculateBrightness(cl) {
    RGB = hexToRgb(cl)
    brightness = 0.299 * RGB.r + 0.587 * RGB.g + 0.114 * RGB.b
    return brightness 
}

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777216)
        .toString(16)
        .padStart(6, '0');
}

showScheme(colors)

