const apiKey = '9b59fa10';
const form = document.getElementById('search-for-movie')
const headerContainerEl = document.querySelector('#header .container')
const contentContainerEl = document.querySelector('#content .container')
const empty = document.querySelector('.empty')

let myWatchList = JSON.parse(localStorage.getItem('mywatchlist')) || []



async function searchForAMovie(movieName) {
    // Fetch our IMDB api and find out the results with the same movie name
    const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${movieName}&type=movie`)
    
    // Getting it as json data type
    const data = await response.json()

    return data
}

form.addEventListener('submit', async function(e) {
    // block our page from reloading
    e.preventDefault()

    // select our movie by class name and store its value in a constant variable.
    const movieName = document.querySelector('.movie-name').value

    // call IMDB api for getting results about our movie name.
    const response = await searchForAMovie(movieName)

    if (response.Response === 'False') return

    // Get full information about your movie searching by it id
    let movies = []
    for (let i = 0; i < response.Search.length; i++) {
        const fullInfoAboutTheMovie = await getAllInfoAboutYourMovie(response.Search[i].imdbID)
        movies.push(fullInfoAboutTheMovie)
    }   

    contentContainerEl.innerHTML = ''
    for (let i = 0; i < movies.length; i++) {
        contentContainerEl.innerHTML += getHTMLMarkup(movies[i])
    }

    const allOfAddToWatch = document.querySelectorAll('.add-to-watchlist')
    allOfAddToWatch.forEach((btn, i) => {
        btn.addEventListener('click', () => moveToLocalStorage(movies[i]))
    })

    empty.classList.add('hide')
})

function getHTMLMarkup(info) {
    const html = `
        <div class='movie'>
            <img src='${info.Poster}' />
            <div class='text'>
                <div class='title-container'>
                    <h2 class='title'>${info.Title}</h2>
                    <span class='rate'>
                        <img src='./icon-2.png' alt='A star icon' class='star-icon' />
                        ${info.Ratings?.[0]?.Value?.replace('/10', '') ?? '0'}
                    </span>
                </div>
                <div class='details'>
                    <span class='runtime'>${info.Runtime}</span>
                    <span class='genre'>${info.Genre}</span>
                    <button class='add-to-watchlist'>
                    <img src='./icon-3.png' alt='A plus icon' /> Watchlist</button>
                </div>
                <div class='plot'>
                    ${info.Plot}
                </div>
            </div>
        </div>
    `
    return html
}

async function getAllInfoAboutYourMovie(movieId) {
    const fullInfo = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${movieId}`)
    const fullInfoJson = await fullInfo.json()
    return fullInfoJson
}

function moveToLocalStorage(movie) {
    if (myWatchList.some(item => item.imdbID === movie.imdbID)) return;

    myWatchList.push(movie);
    localStorage.setItem('mywatchlist', JSON.stringify(myWatchList));
}

