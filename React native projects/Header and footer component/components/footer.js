import * as React from 'react';
import {View, Text} from 'react-native';
export default function Footer(){
    return (
        <View style={{ marginBottom:10, backgroundColor: '#F4CE14' }}>
            <Text style={{fontSize: 15,color: 'black',textAlign: 'center',}}>All rights reserved by Little Lemon, 2024{' '}</Text>
        </View>
    );
}