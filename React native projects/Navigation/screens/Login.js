import { useState } from "react";
import { ScrollView, StyleSheet, TextInput, Text, Pressable } from "react-native";

// we should pass navigation to Login function. The naming is important
// Then we can navigato to menu screen with navigation.navigate('Menu)
export default Login = ({navigation}) => {
  const [firstUsername, setUsername] = useState('');
  const [firstPass, setPass] = useState('');

  return (
    <ScrollView style={loginStyles.container}>
        <>
          <Text style={loginStyles.headerText}>Welcome to menu app</Text>
          <Text style={loginStyles.innerText}>Login to continue</Text>
          <TextInput style={loginStyles.input} value={firstUsername} onChangeText={setUsername} placeholder="Username" />
          <TextInput style={loginStyles.input} value={firstPass} onChangeText={setPass} secureTextEntry={true} placeholder="Password" />
          <Pressable style={loginStyles.button} onPress={() => navigation.navigate('Menu')}>
            <Text style={loginStyles.buttonText}>Login</Text>
          </Pressable>
        </>
    </ScrollView>
  );
}

const loginStyles = StyleSheet.create({
  container: {
    flex: 0.95,
    backgroundColor: "black"
  },
  headerText: {
    color: 'white',
    fontSize: 34,
    textAlign: 'center',
    flexWrap: "wrap",
    margin: 30
  },
  innerText: {
    color: 'white',
    fontSize: 26,
    flexWrap: 'wrap',
    textAlign: 'center',
    margin: 20
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    backgroundColor: '#EDEFEE',
  },
  button: {
    backgroundColor: '#F4CE14',
    padding: 10,
    alignItems: 'center',
    marginHorizontal: 12,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
  },
});
