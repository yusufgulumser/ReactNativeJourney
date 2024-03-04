import { useState } from 'react';
import * as React from 'react';
import { ScrollView, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, Pressable } from 'react-native';

export default function WelcomeScreen() {
  const [firstMail, changedMail] = useState('');
  const [firstPass, changedPass] = useState('');
  const [logging, setLogging] = useState(false); 
  
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView keyboardDismissMode="on-drag">
        <Text style={styles.headingSection}>Welcome to Little Lemon</Text>

        {!logging && (
          <>
            <Text style={styles.infoSection}>Login to continue</Text>
            <TextInput
              style={styles.input}
              value={firstMail}
              onChangeText={changedMail}
              placeholder="Email"
              keyboardType="email-address" 
            />

            <TextInput
              style={styles.input}
              value={firstPass}
              onChangeText={changedPass}
              placeholder="Password"
              secureTextEntry={true} 
            />
            <Pressable style={styles.button} onPress={() => setLogging(prevState => !prevState)}>
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>
          </>
        )}
          {logging && (
            <Text style={styles.infoSection}>You are logged in</Text>
          )}

        
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
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 40,
    backgroundColor: '#EDEFEE',
    borderColor: '#EDEFEE',
    borderWidth: 2,
    borderRadius: 12,
  },
  buttonText: {
    color: '#333333',
    textAlign: 'center',
    fontSize: 32,
  },
});
