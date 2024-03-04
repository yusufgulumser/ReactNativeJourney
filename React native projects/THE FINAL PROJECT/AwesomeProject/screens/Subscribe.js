import * as React from 'react';
import { Alert, Image, Pressable, StyleSheet, TextInput, View,Text } from 'react-native';
import { useState } from 'react';
import { validateEmail } from '../utils';

const SubscribeScreen = () => {
  const [mail,setMail]= useState('')
  const checkMail=validateEmail(mail);
  return( 
  <View style={styles.container}>
    <Image style={styles.imageStyle} source={ require("../img/little-lemon-logo-grey.png") }/>
    <Text style={styles.textStyle}>Subscribe to our newsletter for our latest delicious recipes!</Text>
    <TextInput style={styles.inputStyle} value={mail} onChangeText={setMail} placeholder='Type your email' keyboardType='email-address'  ></TextInput>
    <Pressable style={styles.buttonStyle} onPress={()=>Alert.alert("Thanks for subscribing, stay tuned!")} disabled={!checkMail}><Text style={styles.buttonText}>Subscribe</Text></Pressable>
  </View>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container : {
    marginLeft: 25,
    marginRight: 25,
  },
  imageStyle : {
    marginTop: 40,
    marginLeft: 75,
    height: 120,
    width: 200,
    resizeMode: "contain"
  },
  textStyle : {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 19,
    textAlign: 'center'
  },
  inputStyle : {
    marginBottom: 20,
    fontSize: 16,
    borderColor: "#000000",
    borderWidth: 1,
    height: 40,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  buttonStyle:{
    backgroundColor: "gray",
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText:{
    color:"#EDEFEE"
  }
  
})