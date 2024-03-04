import * as React from 'react';
import { Image, Pressable, StyleSheet, View,Text } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
  <View style={styles.container}>
    <Image style={styles.imageStyle} source={require("../img/little-lemon-logo.png")}/>
    <Text style={styles.textStyle}>Little Lemon, your local Mediterranean Bistro</Text>
    <Pressable style={styles.buttonStyle} onPress={()=>navigation.navigate('Subs')}><Text style={styles.buttonText}>Newsletter</Text></Pressable>
  </View>
  );
};

export default WelcomeScreen;


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#EDEFEE"
    },
    imageStyle:{
        marginTop: 150,
        marginLeft: 100,
        height: 200,
        width: 200,
        resizeMode: "contain"
    },
    textStyle:{
        padding:100,
        fontSize: 19,
        fontWeight: "bold",
        textAlign: 'center'
    },
    buttonStyle:{
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: "#333333",
        padding: 10,
        borderRadius: 10,
        fontSize: 16,
        fontWeight: "bold",
    },
    buttonText:{
        color:"#EDEFEE",
        textAlign:"center"
    }

})
