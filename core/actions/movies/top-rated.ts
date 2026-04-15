import { movieApi } from "@/core/api/movie-api"
import { MovieDBMovieResponse } from "@/infraestructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";

interface Options {
    page?: number;
    limit?: number;
}

export const topRatedMoviesAction = async({ page = 1, limit = 10 }: Options) => {
    try {
        const {data} = await movieApi.get<MovieDBMovieResponse>('/top_rated', {
            params: {
                page: page,
            }
        })
        // console.log(JSON.stringify(data, null, 2))
        
        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie)
        // console.log(movies)
        return movies

    } catch (error) {
        console.log(error)
        throw 'Cannot load top_rated movies'
    }
}