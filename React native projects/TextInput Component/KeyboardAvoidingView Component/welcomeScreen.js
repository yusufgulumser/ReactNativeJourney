import { useState } from 'react';
import * as React from 'react';
import { ScrollView, Text, TextInput,StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

export default function WelcomeScreen() {
  const [firstNAME,changedName]= useState('');
  const [firstnumber,changedNumber]=useState('')
// We can use KeyboardAvoidingView to push the screen when we type the form and we can see whole form.
  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <ScrollView keyboardDismissMode="on-drag">
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
    </KeyboardAvoidingView>
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