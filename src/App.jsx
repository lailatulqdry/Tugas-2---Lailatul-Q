import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import awal from './screen/awal';
import Quran from './screen/Quran';
import detail from './screen/detail';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Quran" component={QuranScreen} />
      <Tab.Screen name="detail" component={detailScreen} />
    </Tab.Navigator>
    )
  }

function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="awal">
            <Stack.Screen 
            name="Main"
            options={{
              headerShown: false,
            }}
            component={awal} />
        <Stack.Screen
          name="Quran"
          options={{ headerShown: false }}
          component={Quran}
        />
        <Stack.Screen
          name="detail"
          options={{ headerShown: true }}
          component={detail}
        />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;