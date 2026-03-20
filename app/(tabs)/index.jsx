import { View , Text , StyleSheet , ImageBackground } from 'react-native';

import icedCoffeeImage from '../../assets/images/coffee-images/iced-coffee.png';

const App = () => {
  return(
    
      <View style={styles.container}>
        <ImageBackground
          source={icedCoffeeImage}
          resizeMode='cover'
          style={styles.image}
        >
          <Text style={styles.text}> Home Page von Tab </Text>
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
    padding: 10
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

