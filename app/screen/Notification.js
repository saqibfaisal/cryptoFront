import {View, Text, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Logo from '../assets/seficoin-app-icon.png';
import GroupNot from '../assets/Group19292.png';
import LottieView from 'lottie-react-native';
// import group19292 from "../assets/Group 19292.svg"
import Background from "../Component/Background"
const Notification = () => {
  return (
    <View style={{height: '100%', width: '100%'}}>
      <Background/>
      <View
        style={{
          height: '20%',
          flexDirection: 'column',
          justifyContent: 'space-around',
          padding: '5%',
        }}>
        <AntDesign name="back" size={18} color="white" />

        <Text style={{color: 'white', fontSize: 20}}>Notifications </Text>
      </View>
      <View></View>
      {/* <Image source={Logo} style={{ width: 100, height: 100 }} /> */}

      <View
        style={{
          height: '50%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '5%',
        }}>
        <Image source={GroupNot} style={{height: 100, width: 96}} />
        <Text style={{color: '#646D78', fontSize: 18, marginTop: '10%'}}>
          No Notifications Found
        </Text>
      </View>
    </View>
  );
};

export default Notification;
