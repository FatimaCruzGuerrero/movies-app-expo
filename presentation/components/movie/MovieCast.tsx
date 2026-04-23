import { Cast } from '@/infraestructure/interfaces/cast';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ActorCard } from './ActorCard';

interface Props {
    cast: Cast[];
}

const MovieCast = ({ cast }: Props) => {
    return (
        <View className="mt-5 mb-[25px]">
            <Text className="font-bold text-xl px-5">Actores</Text>

            <FlatList
                className='ml-1'
                data={cast}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 20 }}
                renderItem={({ item, index }) => (
                    <ActorCard
                        actor={item}
                        isLast={index === cast.length - 1}
                    />
                )}
            />
        </View>
    );
};
export default MovieCast;