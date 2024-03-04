// npm install @react-navigation/drawer
// npx expo install react-native-gesture-handler react-native-reanimated
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import welcomeScreen from './screens/welcomeScreen';
import MenuItems from './screens/menuItems';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer=createDrawerNavigator();

  export default function App() {
    const Drawer=createDrawerNavigator();
    return (
      <NavigationContainer>
        <Drawer.Navigator
        useLegacyImplementation
          screenOptions={{ drawerPosition: "right" }}>
          <Drawer.Screen name="Welcome" component={welcomeScreen} />
          <Drawer.Screen name="Menu" component={MenuItems} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
    }