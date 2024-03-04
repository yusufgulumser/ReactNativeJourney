import {ScrollView,Image,StyleSheet,Text,useWindowDimensions} from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks' 
// useDeviceOrientation provides information about the current orientation of the device, indicating whether it is in landscape or portrait mode
export default WelcomeScreen = () => {
  const orientation = useDeviceOrientation() 
  return (
      <ScrollView style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../img/lemon.png')}
          resizeMode="center"
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}
        />
        <Text style={styles.title}>
          Little Lemon, your local Mediterranean dsadfas
        </Text>
        <Text style={styles.regular}>orientation is {orientation}</Text>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    logo: {
      height: 100,
      width: 300,
      resizeMode: 'contain',
    },
    container: {
      flex: 1,
      padding: 24,
      marginTop: 25,
      backgroundColor: '#fff',
    },
  
    title: {
      marginTop: 16,
      paddingVertical: 10,
      color: '#333333',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    },
  });


