import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LottieView from 'lottie-react-native';
import Background from '../Component/Background';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const ReferralScreen = () => {
  return (
    <View>
      <Background/>
      <View
        style={{
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>

        <View
          style={{
            height: '25%',
            width: "95%",
            flexDirection: 'column',
            justifyContent: 'space-around',
            padding: '5%',
            //   backgroundColor: 'rgba(255, 255, 255, 0.15)',
            marginTop: "-10%"
          }}>
          <Ionicons name="arrow-back-circle" size={22} color="white" />

          <Text style={{ color: 'white', fontSize: 25 }}>
            Refer Friends Earn Crypto Together.
          </Text>
        </View>
        <View style={{ height: "55%", width: "85%", backgroundColor: " rgba(255, 255, 255, 0.15)", borderRadius: 19, margin: "12%", flexDirection: "column", justifyContent: "space-around", alignItems: "center" }}>
          <View style={{ backgroundColor: "#213131", borderRadius: 7, height: "17%", width: "90%", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
            <Text style={{ textAlign: "center" }}>
              You Recieve {`\n`}20%
            </Text>
            <Text style={{ textAlign: "center" }}>
              Friends Recieve {`\n`}0%
            </Text>
          </View>
          <View style={{ backgroundColor: " rgba(255, 255, 255, 0.15)", borderRadius: 7, height: "17%", width: "90%", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
            <Text style={{ textAlign: "center" }}>
              Referral ID
            </Text>
            <Text style={{ textAlign: "center" }}>

              2571853  <Feather name="copy" size={22} color="white" />

            </Text>
          </View>
          <View style={{ backgroundColor: " rgba(255, 255, 255, 0.15)", borderRadius: 7, height: "17%", width: "90%", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
            <Text style={{ textAlign: "center" }}>
              Referral Link
            </Text>
            <Text style={{ textAlign: "center" }}>
              2571853  <Feather name="copy" size={22} color="white" />
            </Text>
          </View>
          <View style={{ borderRadius: 7, height: "17%", width: "80%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

            <TouchableOpacity style={{ backgroundColor: "#213131", borderRadius: 10, height: "99%", width: "75%", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
              <Text style={{ textAlign: "center" }}>
                Invite Friends
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ borderRadius: 10, height: "100%", width: "10%", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
              <Image source={require('../assets/qrScan.png')} style={{ width: 62, height: 63 }} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

  );
};

export default ReferralScreen;
