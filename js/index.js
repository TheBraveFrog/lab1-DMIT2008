import { movieTemplate } from "./template"

let movies = []
 
async function getMovieData(data) {
    const response = await fetch(data) 
    movies = [ ... await response.json()] 
        renderMovie(movies)
} 

getMovieData('/data/movie_data.json')
 

function renderMovie (films){
    const container = document.createElement('div')
    
       films.forEach((movie)=>{
         container.append(movieTemplate(movie))
       
       })

       document.querySelector('#movies').append(container)


}

