import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, { useState } from 'react';
import Background from '../../Component/Background';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LottieView from 'lottie-react-native';


const PaymentScreen2 = () => {

  const [isButtonClicked, setIsButtonClicked] = useState(false);
 
  
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Background />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '10%',
          marginTop: '5%',
        }}>
        <Text style={{color: 'white', fontSize: 25}}>Add Card</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          height: '20%',
          width: '100%',
          // backgroundColor:"gray"
        }}>
        <View style={{width: '80%'}}>
          <TextInput
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              height: '13%',
              width: '95%',
              flexDirection: 'row',
              justifyContent: 'space-around',
              margin: '4%',
              alignItems: 'center',
              borderRadius: 8,
              paddingHorizontal: '6%',
            }}>
            <MaterialIcons
              style={{}}
              name="person-outline"
              size={25}
              color="white"
            />

            <Text style={{fontSize: 18}}> Cardholder Name</Text>
          </TextInput>
          <TextInput
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              width: '95%',
              height: '13%',
              flexDirection: 'row',
              margin: '4%',

              justifyContent: 'space-around',
              alignItems: 'center',
              borderRadius: 8,
            }}
            keyboardType={'numeric'}>
            <AntDesign
              style={{margin: '5%'}}
              name="creditcard"
              size={25}
              color="white"
            />

            <Text style={{fontSize: 18}}>    Card Number</Text>
          </TextInput>
          <TextInput
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              width: '95%',
              height: '13%',
              flexDirection: 'row',
              margin: '4%',

              justifyContent: 'space-around',
              alignItems: 'center',
              borderRadius: 8,
            }}
            keyboardType={'numeric'}>
            <Fontisto
              style={{padding: '5%'}}
              name="date"
              size={25}
              color="white"
            />

            <Text style={{fontSize: 18}}>    Expiry Date</Text>
          </TextInput>
          <TextInput
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              width: '95%',
              height: '13%',
              flexDirection: 'row',
              margin: '4%',

              justifyContent: 'space-around',
              alignItems: 'center',
              borderRadius: 8,
            }}
            keyboardType={'numeric'}>
            <MaterialIcons
              style={{margin: '5%'}}
              name="security"
              size={25}
              color="white"
            />

            <Text style={{fontSize: 18}}>    Security Code</Text>
          </TextInput>
          <View style={{flex:1,justifyContent:"center",alignItems:"center",borderRadius:100,marginTop:"15%"}}>
          {isButtonClicked && (
    <LottieView
      style={{ width: 200, height: 200 }}
      source={require('../../assets/84125-payment-successfully-in-green-colore.json')}
      autoPlay
      loop={false}
      onAnimationFinish={() => setIsButtonClicked(false)}
    />
  )}
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              width: '90%',
              height: '10%',
              flexDirection: 'row',
              marginHorizontal: '8%',
              marginTop: '10%',
              justifyContent: 'space-around',
              alignItems: 'center',
              borderRadius: 100,
            }}
            onPress={() => setIsButtonClicked(true)}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>
              Add New Card
            </Text>
            <AntDesign name="right" size={22} color="white" />
          </TouchableOpacity>
          <View>
          
          </View>
        </View>
      </View>
    </View>
  );
};

export default PaymentScreen2;
