import React from 'react';
import Home from '../../Home/Home';

// for Navigation
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';

const DrawerStack = createDrawerNavigator();

const Drawer = ({navigation}) => {
  return (
    <DrawerStack.Navigator drawerContent={props => <CustomDrawer {...props} />} initialRouteName="Home">
      <DrawerStack.Screen
        name="Home"
        component={Home}
        // options={{headerShown: false}}
      />
      <DrawerStack.Screen name="Home" component={Home} />
    </DrawerStack.Navigator>
  );
};

export default Drawer;
