
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Image } from 'react-native';
import axios from 'axios';
import Background from '../Component/Background';
import { useNavigation } from '@react-navigation/native';

const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';

const CurrencyData = () => {



  const [currencies, setCurrencies] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchCurrencies = async () => {
      const response = await axios.get(API_URL);
      setCurrencies(response.data);
    };
    fetchCurrencies();
  }, []);

  const filterCurrencies = () => {
    return currencies.filter((currency) =>
      currency.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const renderItem = ({ item }) => {
    return (
      <View>
         {/* <Image
        source={require("../assets/bg2.png")}
        style={{ position: "absolute", width: "100%", height: "99%" }}
      /> */}
      
      <View style={{flexDirection: 'row',
          justifyContent: 'space-between',padding:"2%",backgroundColor: 'rgba(255, 255, 255, 0.17)'}}>
            <View style={{flexDirection:"row",alignItems:"center"}}>

        <Image source={{uri: item.image}} style={{width: 40, height: 40}} />
        <Text style={{margin:"7%"}}>{item.name}</Text>

            </View>
        <Text style={{margin:"3%"}}>{item.current_price} $</Text>
      </View>
    </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {/* <Image
        source={require("../assets/bg2.png")}
        style={{ position: "absolute", width: "100%", height: "100%" }}
      /> */}
      <Background />
      <TextInput
        placeholder="Search"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        style={{ padding: 10, borderBottomWidth: 1,borderBottomColor:"gray" }}
      />
      <FlatList
        data={filterCurrencies()}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default CurrencyData;
