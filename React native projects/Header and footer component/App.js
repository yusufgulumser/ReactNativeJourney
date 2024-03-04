import * as React from 'react';
import { View } from 'react-native';

 // Import a local component here
 import Header from './components/header';
import Footer from './components/footer';

export default function App (){
  return (
    // <></> is fragment. it allows to add multiple children
    <>
    <View
      style={{
        flex: 1,
        backgroundColor: '#495E57',
      }}>
      <Header/>
    </View>
    <View style={{backgroundColor: '#495E57'}}>
      <Footer/>
    </View>
    </>
  )
}