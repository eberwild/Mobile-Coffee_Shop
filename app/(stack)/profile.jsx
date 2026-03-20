import { View , Text , StyleSheet} from 'react-native';

const Profile = () => {

  return(
    <View style={styles.container}>
      <Text style={styles.infoText}>Profile Page</Text>
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
  }
})

export default Profile;