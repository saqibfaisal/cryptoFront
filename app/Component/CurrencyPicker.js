import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function CurrencyPicker() {
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState('');
  const [coinData, setCoinData] = useState(null);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
      .then(response => response.json())
      .then(data => setCoins(data))
      .catch(error => console.error(error));
  }, []);

  const handleSearch = () => {
    if (!selectedCoin) {
      setCoinData(null);
      return;
    }
    const apiUrl = `https://api.coingecko.com/api/v3/coins/${selectedCoin}`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const name = data.name;
        const price = data.market_data.current_price.usd;
        setCoinData({ name, price });
      })
      .catch(error => console.error(error));
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.heading}>Cryptocurrency Prices</Text> */}
      <Picker
        style={styles.picker}
        selectedValue={selectedCoin}
        onValueChange={(value) => setSelectedCoin(value)}
      >
        <Picker.Item label="" value="" />
        {coins.map((coin) => (
          <Picker.Item
            key={coin.id}
            label={coin.symbol.toUpperCase()}
            value={coin.id}
          />
        ))}
      </Picker>
      {/* <Text style={styles.button} onPress={handleSearch}>Search</Text> */}
      {coinData && (
        <View style={styles.result}>
          <Text style={styles.resultText}>Name: {coinData.name}</Text>
          <Text style={styles.resultText}>Price: {coinData.price} USD</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgba(255, 255, 255, 0.0)",
    color:"white"
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  picker: {
    width: 200,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  result: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
  resultText: {
    fontSize: 18,
    marginBottom: 5,
  },
});
