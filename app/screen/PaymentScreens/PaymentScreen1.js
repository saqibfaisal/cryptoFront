import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import Logo from '../assets/seficoin-app-icon.png';
// import GroupNot from '../assets/Group19292.png';
import LottieView from 'lottie-react-native';
import Background from '../../Component/Background';
// import group19292 from "../assets/Group 19292.svg"

const PaymentScreen1 = () => {
  return (
    <View style={{height: '100%', width: '100%'}}>
        <Background />
      <View
        style={{
          height: '25%',
          flexDirection: 'column',
          justifyContent: 'space-around',
          padding: '5%',
        }}>
        <AntDesign name="back" size={18} color="white" />

        <Text style={{color: 'white', fontSize: 20}}>Payment Settings </Text>
      </View>

      <View
        style={{
          height: '40%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        //   marginTop: '15%',
        }}>
        <View style={{}}></View>
        {/* <Text style={{color: 'white', fontSize: 18}}>My Card </Text> */}

        <View>
          <LottieView
            style={{height: '100%', width: '100%'}}
            source={require('../../assets/108334-bitcoin-wallet-lottie-animation (2).json')}
            autoPlay
            loop
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#4FFC34',
            width: '55%',
            height: '20%',
            flexDirection:"row",

            justifyContent: 'space-around',
            alignItems: 'center',
            borderRadius:100
          }}>
          <Text style={{color: 'black',fontSize:18,fontWeight:"500"}}>Add New Card</Text>
<AntDesign name="right" size={22} color="black" />
       
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentScreen1;
