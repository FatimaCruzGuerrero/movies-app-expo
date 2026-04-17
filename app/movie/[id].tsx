import { getMovieByIdAction } from '@/core/actions/movie/get-movie-by.id.action';
import { useMovie } from '@/presentation/hooks/useMovie';
import { useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'

const MovieScreen = () => {

    const { id } = useLocalSearchParams();
    const { movieQuery } = useMovie(+id)

    return (
        <View>
            <Text>MovieScreen</Text>

        </View>
    )
}

export default MovieScreen
