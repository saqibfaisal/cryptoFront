import React,{useEffect} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';


const ConvertScreen = () => {
  
  return (
    <View style={{height: '100%', width: '100%'}}>
      <Image
        source={require('../assets/bg2.png')}
        style={{position: 'absolute', width: '100%', height: '100%'}}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: '10%',
          padding: '5%',
        }}>
        <Text>
          {/* <FontAwesomeIcon icon="fa-light fa-paper-plane-top" />     */}
        </Text>
        {/* <Ionicons name="chevron-back" size={24} color="white" />
        <Ionicons name="book-outline" size={24} color="white" /> */}
      </View>

      <View style={{height: '20%', width: '100%'}}>
        <Text style={{color: 'white', fontSize: 35, paddingHorizontal: '5%'}}>
          Convert
        </Text>
        <Text
          style={{
            color: 'gray',
            fontSize: 15,
            paddingHorizontal: '5%',
            width: '80%',
            paddingHorizontal: '6%',
          }}>
          Zero fees | No slippage | One-click transactions
      
        </Text>
        <Text></Text>
      </View>
      <View
        style={{
          height: '70%',
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          borderRadius: 15,
          marginTop: '-5%',
        }}>
        <View
          style={{
            marginTop: '4%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: 'white', fontSize: 25, paddingHorizontal: '5%'}}>
            Crypto
          </Text>
          {/* <Ionicons
            style={{ paddingHorizontal: "5%" }}
            name="newspaper-outline"
            size={24}
            color="white"
          /> */}
        </View>
        <View
          style={{
            height: '20%',
            width: '90%',
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            margin: '5%',
            padding: '3%',
            borderRadius: 11,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color: 'white', fontSize: 17}}>Spend </Text>
              <TouchableOpacity  onPress={() => navigation.navigate('CurrencyDataScreen')} >
                
                <AntDesign name="down" size={18} color="white" />
              </TouchableOpacity>
            </View>

            <Text style={{color: '#939393', fontSize: 17}}>Available :</Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: 'white', fontSize: 27, fontWeight: 700}}>
              {/* <FontAwesome name="dollar" size={24} color="white" /> USD {<CurrencyPicker  />} */}
            </Text>
            <Text style={{color: 'grey', fontSize: 27, fontWeight: 700}}>
              0.000
            </Text>
          </View>
        </View>

        {/* TRANSFER MONEY ICON */}
        <TouchableOpacity
          style={{
            backgroundColor: 'rgba(295, 295, 295, 0.3)',
            width: '10%',
            height: '7%',
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: '45%',
            marginVertical: '-8%',
          }}>
          {/* <MaterialIcons name="transform" size={28} color="black" /> */}
          <AntDesign name="swap" size={30} color="white" />
        </TouchableOpacity>
        <View
          style={{
            height: '20%',
            width: '90%',
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            margin: '5%',
            padding: '3%',
            borderRadius: 11,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color: 'white', fontSize: 17}}>Recieve </Text>
              <TouchableOpacity>
                <AntDesign name="down" size={18} color="white" />
              </TouchableOpacity>
            </View>
            <Text style={{color: '#939393', fontSize: 17}}>Available :</Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: 'white', fontSize: 27, fontWeight: 700}}>
              {/* <FontAwesome name="dollar" size={24} color="white" /> USD */}
            </Text>
            <Text style={{color: 'grey', fontSize: 27, fontWeight: 700}}>
              0.000
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            height: '12%',
            width: '90%',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            marginHorizontal: '5%',
            marginVertical: '5%',
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          
          onPress={()=>{navigation.navigate("ConvertPreview")}}>
          <Text style={{color: 'white', fontSize: 23, fontWeight: 600}}>
            Convert
          </Text>
          {/* <CountryPicker /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ConvertScreen;
