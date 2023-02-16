const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

$.ajax({
    type: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}?api_key=744826e45203ee1dca4eec0479fc3eee&language=es`,
    dataType: 'json',
    async: true,
    success: function(data){
        jsonData = data;
        // funcion que voy a llamar para procesar el archivo json que obtengo
        mostrarPelicula(data);
    }
})

function mostrarPelicula(data){
    let body = document.getElementsByTagName('body')[0]

    body.innerHTML += `
        <h2><a href='resultados.html?id=${data.id}'> ${data.original_title} </a></h2>
        <img alt='${data.title}' src='https://image.tmdb.org/t/p/original${data.poster_path}'>
        <p>${data.overview}</p>
        <span>${data.popularity}</span>
    
    `
}