import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SubscribeScreen from "../screens/Subscribe";
import WelcomeScreen from "../screens/welcomeScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="Subs" component={SubscribeScreen}/>
    </Stack.Navigator>
  );
};

export default RootNavigator;
