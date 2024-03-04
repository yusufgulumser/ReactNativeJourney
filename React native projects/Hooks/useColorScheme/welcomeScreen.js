import {ScrollView,Image,StyleSheet,Text,useColorScheme} from 'react-native';

export default WelcomeScreen = () => {
  const colorScheme = useColorScheme();
// useColorScheme has three properties depending on the settings within the user’s device, the colorScheme value is updated:
// dark: The user prefers a dark color theme 
// light: The user prefers a light color theme 
// null: No preference from user 
  return (
    <ScrollView
      style={[
        styles.container,
        colorScheme === 'light'
          ? { backgroundColor: '#fff' }
          : { backgroundColor: '#333333' },
      ]}>
      <Image
        style={styles.logo}
        source={require('../img/lemon.png')}
        resizeMode="center"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />
      <Text style={styles.regular}> Color scheme: {colorScheme} </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 300,
  },
  container: {
    flex: 1,
    padding: 24,
    marginTop: 25,
  },
  regular: {
    fontSize: 18,
    textAlign: 'center',
  },
});


