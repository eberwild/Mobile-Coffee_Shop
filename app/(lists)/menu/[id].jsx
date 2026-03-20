import { View, Text , StyleSheet , Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import { MENU_ITEMS } from '@/constants/MenuItems';
import MenuImages from '@/constants/MenuImages';

export default function Detail() {

    const { id } = useLocalSearchParams();

    const { title , description} = MENU_ITEMS.find(item => item.id.toString() === id);

    const image = MenuImages[id -1];

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>{title}</Text>

                <Image source={image}
                        style={styles.image}
                />
                
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{description}</Text>
                </View>
            
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'start',
        alignItems: 'center',
        marginTop: 10,
    },
    title: {
        fontSize: 30,
        alignSelf: 'center',
        color: 'rgba(218, 130, 15, 0.6)'
    },
    text: {
        color: 'white',
        fontSize: 19,
        textAlign: 'center'
    },
    textContainer: {
        backgroundColor: 'rgba(218, 130, 15, 0.6)',
        padding: 15,
        marginHorizontal: 10,
        borderRadius: 10
    },
    image: {
        resizeMode: 'cover',
        borderRadius: 15,
        alignSelf: 'center',
        borderColor: 'rgba(218, 130, 15, 0.6)',
        borderWidth: 1,
        marginBottom: 30,
        marginTop: 30
    }
})
