import React from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';
import RadialGradient from 'react-native-radial-gradient';
import {BlurView} from '@react-native-community/blur';

const Background2 = () => {
  return (
    <BlurView
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      blurType="light"
      blurAmount={5}>
         <Image
  source={require('../img/bg1.png')}
  style={{ position: 'absolute', width: '100%', height: '100%' }}
/>
     
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Background2;