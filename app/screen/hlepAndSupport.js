import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import  Email  from "../img/emailus.svg";
import LottieView from 'lottie-react-native';
import Background from './Background';

const HalpandSupport = () => {
  return (
    <View style={styles.container}>
        <Background/>
        <LottieView
          source={require('../img/helpandSupport.json')}
          autoPlay
          loop
          style={styles.animation}
        />
    <View style={styles.textContainer}>
      <Text style={styles.text1}>How can we help You?</Text>
      <Text style={styles.text}>It looks like you are experiencing problems </Text>
      <Text style={styles.text}>with our process We are here to help</Text>
      <Text style={styles.text}>so please get in touch with us</Text>
      <View style={styles.card}>
      <Email width={120} height={40} style={styles.centered}/>
      <Text style={styles.text2}>Email us</Text>
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      animation: {
        width: 200,
        height: 200,
        marginBottom: 20,
      },
      textContainer: {
        alignItems: 'center',
        marginBottom: 20,
      },
      text: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 10,
        color:'#fff',
        
      },
      text1: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 10,
        color:'#fff',
        fontWeight:'bold'
      },
      text2: {
        fontSize: 18,
        textAlign: 'center',
        marginTop:10,
        color:'#fff',
        
      },
      card: {
        width: 250,
        height: 200,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        // borderWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:25,
        marginTop:20
      },
      centered: {
        width: 80,
        height: 80,
      },
    });

export default HalpandSupport;