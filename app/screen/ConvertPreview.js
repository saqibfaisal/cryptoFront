import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';


const ConvertPreview = () => {
  return (
    <View style={{height: '100%', width: '100%'}}>
      <Image
        source={require('../assets/bg2.png')}
        style={{position: 'absolute', width: '100%', height: '100%'}}
      />

      <View
        style={{justifyContent: 'center', alignItems: 'center', margin: '7%'}}>
        <Text style={{color: 'white', fontSize: 30, paddingHorizontal: '5%'}}>
          Order Preview
        </Text>
      </View>

      <View
        style={{
          height: '90%',
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          marginTop: '8%',
          borderRadius:13,
          borderWidth:1,
          borderColor:"gray",
          paddingTop:"10%"
        }}>
        <View style={{height: '100%'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding:"5%"
            }}>
                <Text style={{ color: "white", fontSize: 17 }}>
                    Pay With
                </Text>
            <Text style={{ color: "#939393", fontSize: 17 }}>Available :</Text>

            </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding:"5%"
            }}>
                <Text style={{ color: "white", fontSize: 17,marginRight:"5%" }}>
                Exchange Rate :   
 <AntDesign  name="barchart" size={23} color="white"style={{marginLeft:10}} />
                </Text>

            <Text style={{ color: "#939393", fontSize: 17 }}>Available :</Text>

            </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding:"5%"
            }}>
                <Text style={{ color: "white", fontSize: 17 }}>
                CoinBase Fee
 {/* <AntDesign  name="file-invoice-dollar" size={23} color="white"style={{marginLeft:10}} /> */}

                </Text>
            <Text style={{ color: "#939393", fontSize: 17 }}>Available :</Text>

            </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding:"5%"
            }}>
                <Text style={{ color: "white", fontSize: 17 }}>
                  total
                </Text>
            <Text style={{ color: "#939393", fontSize: 17 }}>Available :</Text>

            </View>

          <TouchableOpacity
            style={{
              height: '10%',
              width: '85%',
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              marginHorizontal: '7%',
              marginVertical: '5%',
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 23, fontWeight: 600}}>
              Convert Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ConvertPreview;
