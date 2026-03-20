import { View, Text , StyleSheet , ImageBackground} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { MENU_ITEMS } from '@/constants/MenuItems';
import MENU_IMAGES from '@/constants/MenuImages';

export default function Detail() {

    const { id } = useLocalSearchParams();

    const { title , description} = MENU_ITEMS.find(item => item.id.toString() === id);
    const image = MENU_IMAGES[id - 1];

    return (
        <View style={styles.container}>
            <ImageBackground 
                source={image}
                resizeMode='cover'
                style={styles.image}
            >
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Item ID: {id}</Text>
                    <Text style={styles.text}>Item Title: {title}</Text>
                    <Text style={styles.text}>Item Description: {description}</Text>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center'
    },
    textContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
