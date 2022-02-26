import axios from "axios";

class MovieService {
    trendingMovie(page)  {
        return axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=daec360a48d3f2d487024c78a901cf46&page=${page}`).then(value => value.data).catch(e => console.log(e))
    }

    searchMovie(type, keyword, page) {
        return axios.get(`https://api.themoviedb.org/3/search/${type}?api_key=daec360a48d3f2d487024c78a901cf46&language=en-US&query=${keyword}&page=${page}&include_adult=false`).then(value => value.data).catch(e => console.log(e))
    }
    
    getMovies(genres, page) {
        return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=daec360a48d3f2d487024c78a901cf46&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate&with_genres=${genres}`)
            .then(value => value.data).catch(e => console.log(e))
    }
        
    getCategories(type) {
        return  axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=daec360a48d3f2d487024c78a901cf46&language=en-US`).then(value => value.data).catch(e => console.log(e))
    }

    getTvs(genres, page) {
        return  axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=daec360a48d3f2d487024c78a901cf46&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate&with_genres=${genres}`).then(value => value.data).catch(e => console.log(e))
    }
    

    getMovie(id, category) {
        return axios.all(
            [axios.get(`https://api.themoviedb.org/3/${category}/${id}?api_key=daec360a48d3f2d487024c78a901cf46&language=en-US`),
                axios.get(`https://api.themoviedb.org/3/${category}/${id}/credits?api_key=daec360a48d3f2d487024c78a901cf46&language=en-US`),
                axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=daec360a48d3f2d487024c78a901cf46`)
        ]).then(axios.spread((...responses) => {
            return {movie: responses[0].data, actors: responses[1].data.cast, video: responses[2].data.results[0]}
        }))                         
    }
    getTv(id) {
        return axios.all(
            [axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=daec360a48d3f2d487024c78a901cf46&language=en-US`),
        ]).then(axios.spread((...responses) => {
            return {tv: responses[0].data}
        }))                         
    }
}
export default new MovieService()