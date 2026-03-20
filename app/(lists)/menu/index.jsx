import { StyleSheet , Platform, ScrollView , FlatList , View , Text , Image , Pressable} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
//import { Link } from "expo-router";
import {MENU_ITEMS} from '@/constants/MenuItems.js';
import MENU_IMAGES from '@/constants/MenuImages.js';

export default function Menu() {

    const router = useRouter();
    
    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;
    const headerComponent = <Text style={styles.header}>Top Coffees To Go</Text>
    const footerComponent = <Text style={styles.footer}>Footer: Impressum</Text>
    const separatorComponent = <View style={styles.separator}></View>

    return(
        <Container>

            <FlatList
                // data is the array where we 'map' the items from
                data={MENU_ITEMS}
                // like in normal react -> every list item needs an unique key
                keyExtractor={(item) => item.id.toString()}
                showsHorizontalScrollIndicator={false}
                // styles the parent element of a FlatList
                contentContainerStyle={styles.contentContainer}
                // defines a component belowe every item in the list
                ItemSeparatorComponent={separatorComponent}
                // defines a header and a footer above and belowe the list
                ListHeaderComponent={headerComponent}
                ListFooterComponent={footerComponent}
                // defines a styling for header and footer
                    //ListHeaderComponentStyle={styles.header}
                    //ListFooterComponentStyle={styles.footer}
                // if we fetch an empty array -> display this component
                ListEmptyComponent={<Text style={styles.empty}>No items found</Text>}
                renderItem={({item}) => (
                    <Pressable onPress={() => {
                                        router.push(`/menu/${item.id}`)
                    }}>
                        <View style={styles.row}>
                            <View style={styles.textRow}>
                                <Text style={[styles.itemTitle , styles.menuItemText]}>{item.title}</Text>
                                <Text style={[styles.itemDescription , styles.menuItemText]}>{item.description}</Text>
                            </View>
                            <Image
                                style={styles.menuImage}
                                source={MENU_IMAGES[item.id - 1]}
                            />
                        </View>
                    </Pressable>
                )}>
            </FlatList>
            {/*
            <Link href={'/contact'} asChild>
                <Pressable>
                    <Text>
                        Contact Us here!
                    </Text>
                </Pressable>
            </Link>
            */}
            
        </Container>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingTop: 10,
        paddingBottom: 20,
        paddingHorizontal: 15,
        backgroundColor: 'rgba(40, 37, 37, 0.5)',
        alignItems: 'center',
        marginTop: 0
    },
    row: {
        flexDirection: 'row',
        width: '100%',
        maxWidth: 350,
        height: 125,
        marginBottom: 10,
        borderStyle: 'solid',
        borderColor: 'rgba(218, 130, 15, 0.6)',
        borderWidth: 1,
        borderRadius: 12,
        overflow: 'hidden',
        marginHorizontal: 'auto'
    },
    textRow: {
        width: '65%',
        paddingLeft: 10,
        paddingTop: 10,
        paddingRight: 5,
        flexGrow: 1
    },
    itemTitle: {
        fontSize: 18,
        textDecorationLine: 'underline',
    },
    menuItemText: {
        color: 'white'
    },
    menuImage: {
        width: 125,
        height: 125
    },
    separator: {
        height: 1,
        backgroundColor: 'white',
        width: 175,
        marginBottom: 10,
        alignSelf: 'center',
        borderRadius: 1

    },
    header: {
        color: 'rgba(218, 130, 15, 0.6)',
        marginBottom: 15,
        fontSize: 30,
        fontWeight: 'bold',
    },
    footer: {
        color: 'white'
    },
    empty: {
        color: 'white'
    }
})

