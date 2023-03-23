import {Colors, Typography} from 'react-native-ui-lib';
import React, {useEffect} from 'react';
import Home from"./app/screen/Home"
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './app/redux/store/store';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigtion from '@app/naviagtion/stackNavigation';
import Trade from "./app/screen/Trade"
export default function App() {
  return (
    <SafeAreaProvider>
       <Provider store={store}>
         {/* <NavigationContainer>
           <StackNavigtion />
         </NavigationContainer> */}
         <Trade/>
       </Provider>
     </SafeAreaProvider>
  );
}