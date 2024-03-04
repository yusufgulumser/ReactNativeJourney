import React from 'react';
import { ScrollView, Image, StyleSheet, Text } from 'react-native';

export default WelcomeScreen = () => {
// accessible: Allows assistive technologies to recognize the component.
// accessibilityLabel: Describes the component for users with disabilities.
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
      <Image
        style={styles.image}
        source={require('../img/pic1.png')}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={'Picture 1'}
      />
      <Image
        style={styles.image}
        source={require('../img/pic2.png')}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={'Picture 2'}
      />
      <Image
        style={styles.image}
        source={require('../img/pic3.png')}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={'Picture 3'}
      />
      <Image
        style={styles.image}
        source={require('../img/pic4.png')}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={'Picture 4'}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 300,
  },
  image: {
    width: 350,
    height: 250,
    borderRadius: 10,
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

// resize mode's terms:
// cover: This is used to scale the image uniformly and maintain the image’s aspect ratio
// contain: This scales the image uniformly so that both dimensions of the image will be equal to or less than the corresponding dimension of the view.
// stretch: This is used to scale with height independently and may change the original image's aspect ratio.
// repeat: The image is repeated to cover the frame of the view. 
// center: The image is centered in the view along with both dimensions. 