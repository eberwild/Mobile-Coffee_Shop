import { View , Text , StyleSheet , ImageBackground } from 'react-native';
import { Link } from 'expo-router';

import icedCoffeeImage from '../../assets/images/coffee-images/iced-coffee.png';

const App = () => {
  return(
    
      <View style={styles.container}>
        <ImageBackground
          source={icedCoffeeImage}
          resizeMode='cover'
          style={styles.image}
        >
          <Text style={styles.text}> Home Page </Text>
          <Link href='/menu'>Go to Menu</Link>
        </ImageBackground>
      </View>
    
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    marginBottom: 20
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

