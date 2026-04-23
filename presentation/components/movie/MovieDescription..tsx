import { Formatter } from '@/config/helpers/formatter';
import { CompleteMovie } from '@/infraestructure/interfaces/movie.interface'
import { Text, View } from 'react-native'

interface Props {
    movie: CompleteMovie;
}

const MovieDescription = ({movie}: Props) => {

    return (
        <View className='mx-5'>
            <View className='flex flex-row'>
                <Text className='mt-2'>{movie.rating}</Text>
                <Text className='mt-2'> - {movie.genres.join(', ')}</Text>
            </View>

            <Text className='font-bold mt-5 text-xl'>Historia</Text>
            <Text className='font-normal mt-2'>{movie.description}</Text>
            <Text className='font-bold mt-5 text-xl'>Presupuesto</Text>
            <Text className='font-normal mt-2'>{Formatter.currency(movie.budget)}</Text>
        </View>
    )

}

export default MovieDescription
