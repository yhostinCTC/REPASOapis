
let jsonData = ''
$.ajax({
    type: 'GET',
    url: 'https://api.themoviedb.org/3/discover/movie?api_key=744826e45203ee1dca4eec0479fc3eee&with_companies=3',
    dataType: 'json',
    async: true,
    success: function(data){
        jsonData = data;
        // funcion que voy a llamar para procesar el archivo json que obtengo
        obtenerPeliculas(data);
    }
})

function crearCarta(movie){
    let card = document.createElement('div')
    card.className = 'card_item'
    card.innerHTML = `
        <h2><a href='resultados.html?id=${movie.id}'> ${movie.original_title} </a></h2>
        <img alt='${movie.title}' src='https://image.tmdb.org/t/p/original${movie.poster_path}'>
        <p>${movie.overview}</p>
        <span>${movie.popularity}</span>
    `
    return card.outerHTML;
}


function obtenerPeliculas(data){
    
    let container_cards = document.getElementsByClassName('container_cards')[0]

    for (let index_movie = 0; index_movie < data.results.length; index_movie++){
        container_cards.innerHTML += crearCarta(data.results[index_movie]);
    }

}

