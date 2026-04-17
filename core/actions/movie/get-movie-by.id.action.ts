import { movieApi } from "@/core/api/movie-api"
import { CompleteMovie } from "@/infraestructure/interfaces/movie.interface"
import { MovieDBMovieResponse } from "@/infraestructure/interfaces/moviedb-response"
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper"

export const getMovieByIdAction = async (
    id: number | string
): Promise<CompleteMovie> => {
    try {
        const { data } = await movieApi.get<MovieDBMovieResponse>(`/${id}`);

        console.log('Película - HTTP cargada');

        return MovieMapper.fromTheMovieDBToCompleteMovie(data);
    } catch (error) {
        console.log(error);
        throw 'Cannot load now playing movies';
    }
};