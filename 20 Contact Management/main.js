const searchArea = document.getElementById("search-area")
const contactsList = document.getElementById('contacts-list')
const noContactsBannel = document.querySelector('.no-contacts-bannel')

searchArea.addEventListener("input", () => searchForTheName(searchArea.value))


async function loadData() {
  const response = await fetch("./contacts.json")
  const data = await response.json()

  return data
}

async function searchForTheName(value) {
    const allContacts = await loadData()

    const foundContacts = allContacts.filter(contact => contact.name.toLowerCase().includes(value.toLowerCase()))

    createBannelsFor(foundContacts)
}

function createBannelsFor(contacts) {
    contactsList.innerHTML = ''
    contacts.forEach((contact) => handleHTMLMarkup(contact))

    if (contactsList.children.length) {
        noContactsBannel.className = 'no-contacts-bannel hide'
    } else {
        noContactsBannel.className = 'no-contacts-bannel'
    }
}

function handleHTMLMarkup(contact) {
    const newContactEl = document.createElement('li')
    newContactEl.className = 'contact'

    const newContactInfo = document.createElement('div')
    newContactInfo.className = 'info'

    const newContactName = document.createElement('h3')
    newContactName.className = 'name'
    newContactName.textContent = contact.name

    const newContactEmail = document.createElement('h4')
    newContactEmail.className = 'email'
    newContactEmail.textContent = contact.email

    const seeDetailsBtn = document.createElement('button')
    seeDetailsBtn.className = 'see-details'
    seeDetailsBtn.textContent = 'See details'

    newContactInfo.append(newContactName, newContactEmail)
    newContactEl.append(newContactInfo, seeDetailsBtn)
    contactsList.append(newContactEl)
}

loadData().then(data => {
    data.forEach(contact => handleHTMLMarkup(contact))
})
// jsonData.forEach(contact => handleHTMLMarkup(contact))