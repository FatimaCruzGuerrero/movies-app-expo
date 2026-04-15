import { movieApi } from "@/core/api/movie-api"
import { MovieDBMovieResponse } from "@/infraestructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";

export const upcomingMoviesAction = async() => {
    try {
        const {data} = await movieApi.get<MovieDBMovieResponse>('/upcoming')
        // console.log(JSON.stringify(data, null, 2))
        
        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie)
        console.log(movies)
        return movies

    } catch (error) {
        console.log(error)
        throw 'Cannot load upcoming movies'
    }
}