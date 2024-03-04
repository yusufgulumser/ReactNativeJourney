import { useState } from 'react';
import * as React from 'react';
import { ScrollView, Text, TextInput,StyleSheet } from 'react-native';

// TextInput component's some props are: value,onChangeText,style,keyboard,autoCorrect, placeholder,keyboardType,autoCapitalize,multiLine,maxLength,secureTextEntry(for password field)
// useState used to manage state variables in functional components. 
export default function WelcomeScreen() {
  const [firstNAME,changedName]= useState('');   
  const [firstnumber,changedNumber]=useState('')
// when user scrolls the screen the koyboard will dismissed with keyboardDismissMode
  return (
    <ScrollView indicatorStyle="white" style={styles.container} keyboardDismissMode='on-drag'>
      <Text
        style={styles.headingSection
        }>
        Welcome to Little Lemon
      </Text>
      <Text
        style={
        styles.infoSection}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
      <TextInput style={styles.input} value={firstNAME} onChangeText={changedName} ></TextInput>
      <TextInput style={styles.input} value={firstnumber} onChangeText={changedNumber} keyboardType='numeric'></TextInput>
    </ScrollView>
  );
}
const styles = StyleSheet.create({ 
    container: { 
      flex: 1, 
    }, 
    input: { 
      height: 40, 
      margin: 12, 
      borderWidth: 1, 
      padding: 10, 
      fontSize: 16, 
      borderColor: '#EDEFEE', 
      backgroundColor: '#F4CE14', 
    }, 
    messageInput: { 
      height: 100, 
      margin: 12, 
      borderWidth: 1, 
      padding: 10, 
      fontSize: 16, 
      backgroundColor: '#F4CE14', 
    }, 
    infoSection: { 
      fontSize: 24, 
      padding: 20, 
      marginVertical: 8, 
      color: '#EDEFEE', 
      textAlign: 'center', 
      backgroundColor: '#495E57', 
    }, 
    headingSection: { 
      fontSize: 28, 
      padding: 20, 
      marginVertical: 8, 
      color: '#EDEFEE', 
      textAlign: 'center', 
      backgroundColor: '#495E57', 
    }, 
  }); 