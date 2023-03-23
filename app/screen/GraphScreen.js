import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, View, Text } from 'react-native';
import { CandleStickChart } from 'react-native-charts-wrapper';
import Background from '../Component/Background';
// import ScrollExtended from './ScrollExtended';

const GoogleChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch('https://www.okx.com/api/v5/market/candles?instId=${instid}')
      .then(response => response.json())
      .then(data => {
        const formattedData = data.map(item => ({
          x: new Date(item.date).getTime(),
          open: item.open,
          high: item.high,
          low: item.low,
          close: item.close
        }));
        setChartData(formattedData);
      })
      .catch(error => console.error(error));
  }, []);

  // function to add new data
  const addData = () => {
    const newData = [
      {
        x: new Date('2023-03-17').getTime(),
        open: 100,
        high: 120,
        low: 90,
        close: 110
      },
      {
        x: new Date('2023-03-18').getTime(),
        open: 110,
        high: 130,
        low: 95,
        close: 120
      },
    ];

    setChartData(prevData => [...prevData, ...newData]);
  };

  const xAxisFormatter = (value) => {
    // Format the x-axis label to show the date
    const date = new Date(value);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const yAxisFormatter = (value) => {
    // Format the y-axis label to show the price
    return `$${value.toFixed(2)}`;
  };

  return (
    <View style={styles.container}>
      <Background/>
<View style={{ display: 'flex', flexDirection: 'row' }}>
  <View style={{justifyContent:'space-between', width: '80%', flexDirection: 'row'}}>
    {/* First View */}
    <View style={{ marginRight: 10 }}>
      <Text style={{ fontSize:35,color:'green' }}>26,081.4</Text>
       <View style={{display:'flex',flexDirection:'row'}}>
      <Text style={{ fontSize:15,color:'#fff' }}>$26,147.91</Text>
      <Text style={{marginLeft:5,fontSize:15,color:'green' }}>+4.31%</Text>
      </View>
    </View>

    {/* Second View */}
    <View style={{ marginRight: 10 }}>
      <Text style={{ color:'#fff' }}>24h high</Text>
      <Text style={{ color:'#fff' }}>24h low</Text>
      <Text style={{ color:'#fff' }}>24h vol(BTC)</Text>
      <Text style={{ color:'#fff' }}>24h turnover(us...)</Text>
    </View>
  </View>

  {/* Third View */}
  <View>
    <Text style={{ color:'#fff' }}>26,216.0</Text>
    <Text style={{ color:'#fff' }}>24,373.4</Text>
    <Text style={{ color:'#fff' }}>23,103.6</Text>
    <Text style={{ color:'#fff' }}>579.72M</Text>
  </View>
</View>
<View style={{ flexDirection: 'row',width:'90%',marginBottom:10,marginTop:10 }}>
  <TouchableOpacity style={{ backgroundColor: 'transparent',borderWidth:1,width:50,justifyContent:'center',alignItems:'center',borderColor:'orange' }}>
    <Text style={{ color:'#fff' }}>NO 1</Text>
  </TouchableOpacity>

  <TouchableOpacity style={{ backgroundColor: 'transparent',marginLeft:10,borderWidth:1,width:50,justifyContent:'center',alignItems:'center',borderColor:'orange' }}>
    <Text style={{ color:'#fff' }}>Top</Text>
  </TouchableOpacity>
</View>



      <View style={{width:'90%',height:'30%'}}>

      <Text style={styles.title}>React Candlestick Chart Example</Text>
      {chartData.length > 0 ? (
        <CandleStickChart
        style={styles.chart}
          data={{
            dataSets: [
              {
                values: chartData,
                label: '',
                config: {
                  color: 0x2196F3,
                  increasingColor: 65280,
                  decreasingColor: 16711680,
                  barSpace: 0.1,
                  shadowColor: 0xD3D3D3,
                  shadowWidth: 1,
                  shadowOffset: {
                    height: 1,
                    width: 1,
                  },
                },
              },
            ],
            xValues: chartData.map((row) => new Date(row.x).toLocaleDateString()),
          }}
          xAxis={{
            drawLabels: true,
            valueFormatter: chartData.map((row) => new Date(row.x).getTime()),
            position: 'BOTTOM',
            granularityEnabled: true,
            granularity: 1,
            valueFormatterPattern: 'dd/MM/yyyy',
            labelCount: 5,
          }}
          yAxis={{ drawLabels: false }}
          legend={{ enabled: false }}
          />
          ) : (
            <Text style={{ color:'#fff' }}>Loading data...</Text>
            )}
      
      <TouchableOpacity onPress={addData}>
  <Text style={{ color:'#fff' }}>Add Dummy Data</Text>
</TouchableOpacity>
{/* <ScrollExtended dataSets={dataSets} /> */}
<View style={{ flexDirection: 'row',marginTop:10 }}>
  <Text style={{ color:'#fff' }}>Order Book</Text>
  <Text style={{ marginLeft:15,color:'#fff' }}>Depth</Text>
  <Text style={{ marginLeft:15,color:'#fff' }}>Last trades</Text>
</View>
<View style={{ flexDirection: 'column', alignItems: 'center' }}>
  <View style={{  width: '100%', height: 1, backgroundColor: '#fff' }} />
  <View style={{ flexDirection: 'row',justifyContent:'space-between',width:'100%',height:30,alignItems:'center' }}>
    <Text style={{ color:'#fff' }} >Buy</Text>
    <Text style={{ color:'#fff' }} >Sell</Text>
    <Text style={{ color:'#fff' }} >0.1</Text>
  </View>
  <View style={{  width: '100%', height: 1, backgroundColor: '#fff' }} />
</View>
<View style={{ flexDirection: 'row',justifyContent:'space-between',width:'100%' }}>
    <Text style={{ color:'#fff' }} >Amount (BTC)</Text>
    <Text style={{ color:'#fff' }} >Price(USDT)</Text>
    <Text style={{ color:'#fff' }} >Amount (BTC)</Text>
  </View>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop:10 }}>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between',width:'50%' }}>
  <Text style={{ color:'#fff' }}>18.344</Text>
  <Text style={{ color:'#fff' }}>27,025.8</Text>
  </View>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between',width:'45%',marginLeft:5 }}>
  <Text style={{ color:'#fff' }}>27,025.4</Text>
  <Text style={{ color:'#fff' }}>122.002</Text>
  </View>
  </View>


            </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    height:'100%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#fff'
    // marginVertical: 10,
  },
  chart: {
    width: '100%',
    height: 450,
  },
  Text:{
    color:'#fff'
  }
});

export default GoogleChart;

react-native-charts-wrapper //library