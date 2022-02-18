import axios from "axios";

class MovieService {
    trendingMovie()  {
        return axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=daec360a48d3f2d487024c78a901cf46").then(value => value.data).catch(e => console.log(e))
    }
}
export default new MovieService()