import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from '.navigation/TabNavigator';
import  Profile from '../screens/Profile'

const Drawer=createDrawerNavigator();
const DrawerNavigator=()=>{
  return(
    <Drawer.Navigator screenOptions={{headerShown:false}}>
    <Drawer.Screen name="home" component={TabNavigator}/>
     <Drawer.Screen name="profile" component={Profile}/>
    
    </Drawer.Navigator>
  )
}
export default DrawerNavigator;