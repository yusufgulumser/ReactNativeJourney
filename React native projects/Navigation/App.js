// npm install @react-navigation/native
// npx expo install react-native-screens react-native-safe-area-context
// npm install @react-navigation/native-stack
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MenuItems from './screens/menuItems';
import Login from './screens/Login';
import { Image } from 'react-native';

function HeaderImage(){
  return(
    <Image source={require("./img/lemonl.png")} style={{height:40,width:40,resizeMode:"cover",alignSelf:"center"}}/>
  )
}
// all styling must added to options or screenOptions prop
export default function App (){
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerStyle: { backgroundColor: '#333333' }}}>
        <Stack.Screen name="Menu" component={MenuItems} options={{headerTitle:(props)=><HeaderImage {...props}/>}}/>             {/* This line sets the header title of the screen to be a component named HeaderImage, passing any props received to it.





*/}
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}