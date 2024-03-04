import * as React from 'react';
import {View, Text} from 'react-native';
export default function Header(){
    return (
        <View style={{ flex: 0.15, backgroundColor: '#F4CE14' }}>
            <Text style={{padding: 40,fontSize: 30,color: 'black',textAlign: 'center',}}>Welcome to my app</Text>
        </View>
    );
}