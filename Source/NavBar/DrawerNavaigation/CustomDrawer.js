import {View, Text, ImageBackground} from 'react-native';
import React from 'react';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const CustomDrawer = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#8200d6'}}>
        {/* <ImageBackground
          source={require('../../../assets/images/drawer.jpg')}
          style={{padding: 20}}>
          <Image
            source={require('../../../assets/images/logo.png')}
            style={{height:80 , width: 80, borderRadius: 40 , marginBottom: 10}}
          />
          <Text style={{color : '#fff'}}>Taha Ahmed</Text>
        </ImageBackground> */}
        <View style={{flex:1,backgroundColor:'#fff',paddingTop:10}}>
         <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      {/* Last View  */}
      <View>
        <Text>last View</Text>
      </View>
    </View>
  );
};

export default CustomDrawer;
