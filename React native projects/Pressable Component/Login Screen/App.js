import * as React from 'react';
import { View } from 'react-native';
 import Header from './components/header';



import WelcomeScreen from './components/welcomeScreen';

export default function App (){
  return (
    <>
    <View
      style={{
        flex: 1,
        backgroundColor: '#495E57',
      }}>
      <Header/>
      <WelcomeScreen/>
    </View>
    </>
  )
}