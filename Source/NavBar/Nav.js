import React from 'react'
import Home from '../Home/Home';

// for Navigation
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Drawer from './DrawerNavaigation/Drawer';

const Stack = createStackNavigator();

const MainNavaigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Drawer"
        component={Drawer}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
</Stack.Navigator>
  )
}
const Navigation = () => {
  return (
    <NavigationContainer>
      <MainNavaigation />
    </NavigationContainer>
  );
};    

const Nav = () => {
  return <Navigation />
}

export default Nav