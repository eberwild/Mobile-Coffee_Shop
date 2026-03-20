import { View , Text , StyleSheet , Pressable} from 'react-native';
import { Link } from 'expo-router'

const Home = () => {

  return(
    <View style={styles.container}>
      <Text style={styles.infoText}>Home Page von Stack</Text>

      {/*asChild -> use the child Pressable as the pressable element , not the link itself*/}
        <Link href={'/myContact'} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Contact Page</Text>
          </Pressable>
        </Link>

        <Link href={'/profile'} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Profile Page</Text>
          </Pressable>
        </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  infoText: {
    color: 'white',
    marginBottom: 20,
    fontSize: 30,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    height: 50,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.8)',
    padding: 6, 
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
})

export default Home;