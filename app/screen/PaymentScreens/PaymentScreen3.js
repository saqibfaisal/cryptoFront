import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Background from './Background'
import  Visa  from "../img/visa.svg";
import  Texticon1  from "../img/texticon1.svg";
import  Texticon  from "../img/texticon.svg";


const PaymentScreen3 = () => {
  return (
    <View style={styles.container}>
        <Background/>
        <Text style={{color:'#fff',width:'90%',fontSize:25,marginBottom:20}}>Payment Settings</Text>
        <Text style={{color:'#fff',width:'90%',fontSize:18}}>My Card</Text>
    <View style={styles.card}>
        <View style={{alignItems:'flex-end',justifyContent:'flex-end',width:'90%'}}>
    <Texticon   />
    </View>
    <View style={{justifyContent:'center',alignItems:'center',marginTop:20,width:'90%'}}>
        <View style={{display:'flex',flexDirection:'row',width:'90%'}}>
      <Text style={{color:'#fff' ,fontSize:18}}>5535</Text>
      <Text style={{color:'#fff' ,fontSize:18 ,marginLeft:20}}>****</Text>
     
      <Text style={{color:'#fff' ,fontSize:18 ,marginLeft:20}}>****</Text>
      <Text style={{color:'#fff' ,fontSize:18 ,marginLeft:20}}>2296 </Text>
      </View>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'90%',marginTop:50 }}>
      <Text style={{color:'#fff' ,fontSize:18}}>Margaret navakawsko</Text>
      <Image source={require('../img/Mastercard.png')} resizeMode="contain" style={{ width: 30, height: 30 }}/>
      </View>
      </View>
    </View>
    <View style={styles.card}>
        <View style={{alignItems:'flex-end',justifyContent:'flex-end',width:'90%'}}>
    <Texticon1   />
    </View>
    <View style={{justifyContent:'center',alignItems:'center',marginTop:20,width:'90%'}}>
        <View style={{display:'flex',flexDirection:'row',width:'90%'}}>
      <Text style={{color:'#fff' ,fontSize:18}}>5535</Text>
      <Text style={{color:'#fff' ,fontSize:18 ,marginLeft:20}}>****</Text>
     
      <Text style={{color:'#fff' ,fontSize:18 ,marginLeft:20}}>****</Text>
      <Text style={{color:'#fff' ,fontSize:18 ,marginLeft:20}}>2296 </Text>
      </View>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'90%',marginTop:50 }}>
      <Text style={{color:'#fff' ,fontSize:18}}>Margaret navakawsko</Text>
      <Visa  />
      </View>
      </View>
    </View> 
    <TouchableOpacity style={styles.button} 
      // onPress={handleLogin}
    //   onPress={()=>navigation.navigate('PurchaseCripto')}
      
      >
        <Text style={styles.buttonText}>Add New Card</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    card: {
        width: '90%',
        height: 180,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
   
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:25,
        marginTop:20,
       
      },
      container:{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'100%'
      },
      button: {
        backgroundColor: '#4FFC34',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        marginTop:20
        // marginBottom:150
      },
      buttonText: {
        color: '#16181D',
        // fontWeight: 'bold',
        fontSize:20
      },
})
export default PaymentScreen3