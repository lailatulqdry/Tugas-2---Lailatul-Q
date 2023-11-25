import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Quran from './screen/Quran'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Quran" component={Quran} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;