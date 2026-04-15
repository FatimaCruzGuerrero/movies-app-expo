import { nowPlayingAction } from "@/core/actions/movies/now-playing.action"
import { popularMoviesAction } from "@/core/actions/movies/popular"
import { topRatedMoviesAction } from "@/core/actions/movies/top-rated"
import { upcomingMoviesAction } from "@/core/actions/movies/upcoming"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"

export const useMovies = () => {

    // Queries
    const nowPlayingQuery = useQuery({
        queryKey: ['movies', 'nowPlaying'],
        queryFn: nowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24  // 24 horas
    })

    const popularQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ['movies', 'popular'],
        queryFn: ({pageParam}) => {
            console.log({pageParam})
            return popularMoviesAction({page: pageParam})
        },
        staleTime: 1000 * 60 * 60 * 24, // 24 horas
        getNextPageParam: (lastPage, pages) => pages.length + 1,
    })

    const topRatedQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ['movies', 'top-rated'],
        queryFn: ({pageParam}) => {
            console.log({pageParam})
            return topRatedMoviesAction({page: pageParam})
        },
        staleTime: 1000 * 60 * 60 * 24,  // 24 horas
        getNextPageParam: (lastPage, pages) => pages.length + 1,
    })

    const upcomingQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ['movies', 'upcoming'],
        queryFn: ({pageParam}) => {
            console.log({pageParam})
            return upcomingMoviesAction({page: pageParam})
        },
        staleTime: 1000 * 60 * 60 * 24,  // 24 horas
        getNextPageParam: (lastPage, pages) => pages.length + 1,
    })

    return {
        nowPlayingQuery,
        popularQuery,
        upcomingQuery,
        topRatedQuery
    }
}