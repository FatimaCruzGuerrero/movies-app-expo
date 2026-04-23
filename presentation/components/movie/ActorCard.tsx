import { Cast } from '@/infraestructure/interfaces/cast';
import { Image, Text, View } from 'react-native';

interface Props {
    actor: Cast;
    isLast?: boolean;
}

export const ActorCard = ({ actor, isLast }: Props) => {
    return (
        <View className={`mt-4 ${isLast ? 'mr-11' : 'mr-16'} w-[60px]`}>
            <Image
                source={{ uri: actor.avatar }}
                className="w-[100px] h-[150] rounded-2xl shadow"
                resizeMode="cover"
            />

            <View >
                <Text
                    numberOfLines={2}
                    // adjustsFontSizeToFit
                    className="font-bold text-lg"
                >
                    {actor.name}
                </Text>
                <Text 
                    numberOfLines={3}
                    // adjustsFontSizeToFit
                    className="text-gray-600 text-xs"
                >
                    {actor.character}
                </Text>
            </View>
        </View>
    );
};