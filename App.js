import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import DrawerNavigator from './navigation/DrawerNavigator'
import  {NavigationContainer} from '@react-navigation/native';

export default function App (){
  return(
<NavigationContainer>
<DrawerNavigator/>

</NavigationContainer>
  )
}