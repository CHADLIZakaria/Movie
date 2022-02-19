import axios from "axios";

class MovieService {
    trendingMovie()  {
        return axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=daec360a48d3f2d487024c78a901cf46").then(value => value.data).catch(e => console.log(e))
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
}
export default new MovieService()