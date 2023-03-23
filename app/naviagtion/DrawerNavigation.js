import * as React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import StackNavigtion from './stackNavigation';
import Home from "../screen/Home"
import { Button, StyleSheet, Text, View } from 'react-native';
const Drawer = createDrawerNavigator();
import Login from "../screen/Login"
function DrawerNavigation(props) {
    return (
        <Drawer.Navigator initialRouteName='Home' 
        drawerStyle={styles.drawer}
            // drawerContentOptions={{
            //     activeTintColor: '#fff',
            //     inactiveTintColor: '#fff',
            //     activeBackgroundColor: '#4e4e4e',
            //     itemStyle: styles.item,
            //     labelStyle: styles.label
            // }}
            >
            <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Drawer.Screen name="Login" component={Login} options={{ headerShown: false }} />
        </Drawer.Navigator>
    )
}
export default DrawerNavigation
const styles = StyleSheet.create({
    container: {
      flex: 1,
      resizeMode: 'cover'
    },
    header: {
      padding: 20,
      backgroundColor: 'rgba(0,0,0,0.3)'
    },
    headerTitle: {
      fontSize: 24,
      color: '#fff'
    },
    drawer: {
    //   backgroundColor: 'rgba(0,0,0,0.6)',
      backgroundColor: 'Black',
      width: '80%',
      borderRightWidth: 0
    },
    item: {
      borderRadius: 5,
      marginVertical: 5
    },
    label: {
      fontSize: 16,
      marginHorizontal: 10,
      fontWeight: 'bold'
    }
  });