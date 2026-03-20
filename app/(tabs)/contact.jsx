import { View , Text , StyleSheet , ImageBackground} from 'react-native';
import SplashCoffee from '../../assets/images/coffee-images/coffee-splash.png';

const Contact = () => {

  return(
    <View style={styles.container}>
      <ImageBackground
        source={SplashCoffee}
        resizeMode='cover'
        style={styles.image}
      >
        <Text style={styles.text}>Contact Page</Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  infoText: {
    color: 'white'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10
  },
})

export default Contact;