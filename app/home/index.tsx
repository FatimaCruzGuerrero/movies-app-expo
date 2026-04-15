import MainSlideshow from '@/presentation/components/movies/MainSlideshow';
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList';
import { useMovies } from '@/presentation/hooks/useMovies'
import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {

    const safeArea = useSafeAreaInsets();
    const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } = useMovies();

    if (nowPlayingQuery.isLoading) {
        return (
            <View className='justify-center items-center flex-1'>
                <ActivityIndicator color='purple' size={30} />
            </View>
        )
    }

    return (
        <ScrollView>
            <View className='mt-2 pb-10' style={{ paddingTop: safeArea.top }}>
                <Text className='text-3xl font-bold px-4 mb-2'>My MoviesApp</Text>
                {/* <Text>{JSON.stringify(nowPlayingQuery.data)}</Text> */}

                {/* Carousel de imágenes */}
                <MainSlideshow movies={nowPlayingQuery.data ?? []} />

                {/* Películas populares */}
                <MovieHorizontalList
                    title='Populares'
                    movies={popularQuery.data?.pages.flat() ?? []}
                    className='mb-3'
                    loadNextPage={popularQuery.fetchNextPage}
                />

                {/* Mejor calificadas */}
                <MovieHorizontalList
                    title='Mejor calificadas'
                    movies={topRatedQuery.data?.pages.flat() ?? []}
                    className='mb-3'
                    loadNextPage={topRatedQuery.fetchNextPage}
                />

                {/* Próximamente */}
                <MovieHorizontalList
                    title='Próximamente'
                    movies={upcomingQuery.data?.pages.flat() ?? []}
                    loadNextPage={upcomingQuery.fetchNextPage}
                />
            </View>
        </ScrollView>
    )
}

export default HomeScreen
