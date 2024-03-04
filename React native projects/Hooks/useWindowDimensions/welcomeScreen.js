import {ScrollView,Image,StyleSheet,Text,useWindowDimensions} from 'react-native';

export default WelcomeScreen = () => {
// useWindowDimensions provides the current dimensions of the window, such as width and height,fontScale
  const window= useWindowDimensions();
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
          Little Lemon, your local Mediterranean Bistro
        </Text>
        <Text style={styles.regular}>Window Dimensions</Text>
        <Text style={styles.regular}>Height: {window.height}</Text>
        <Text style={styles.regular}>Width: {window.width}</Text>
        <Text style={styles.regular}>Font scale: {window.fontScale}</Text>
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


