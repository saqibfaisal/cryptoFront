import { View, Text, Image } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Logo from "../assets/seficoin-app-icon.png"
import LottieView from 'lottie-react-native';
import Background from '../Component/Background';


const About = () => {
  return (
    <View style={{height:"100%",width:"100%"}}>
        <Background />
      
      <View style={{height:"20%",flexDirection:"column",justifyContent:"space-around",padding:"5%"}}>
      <AntDesign name="back" size={18} color="white" />
        
      <Text style={{color: 'white', fontSize: 20}}>About us </Text>

      </View>
      <View style={{width:"100%",height:"15%",justifyContent:"center",alignItems:"center"}}>
      <Image source={Logo} style={{ width: 100, height: 100 }} />


       
      </View>
      <View style={{width:"100%",height:"15%",justifyContent:"center",alignItems:"center",flexDirection:"row",}}>
<AntDesign name="facebook-square" size={22} color="white" />
<Text style={{color: 'white', fontSize: 15 }} >
  Like us on Facebook
</Text>
      </View>
      <View style={{width:"100%",height:"5%",justifyContent:"center",alignItems:"center",flexDirection:"row",}}>
<AntDesign name="twitter-square" size={22} color="white" />
<Text style={{color: 'white', fontSize: 15 }} >
  Like us on twitter
</Text>
      </View>
      <View style={{height:"20%",width:"100%",justifyContent:"center",alignItems:"center"}}>
      <LottieView
                        style={{ height: "100%", width: "100%" ,backgroundColor:"transparent"}}
                        source={require('../assets/77116-mobile-app-payment-gateway.json')}
                        autoPlay
                        loop
                    />
      </View>
    </View>
  )
}

export default About