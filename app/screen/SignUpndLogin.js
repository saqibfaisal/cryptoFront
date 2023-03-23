import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Background from '../Component/Background'
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';


const SignUpndLogin = ({ navigation }) => {
  const [selectedButton, setSelectedButton] = useState(null)

  const handlePress = (buttonName) => {
    setSelectedButton(buttonName)
    console.log(`${buttonName} button pressed`)
  }


  const getButtonStyle = (buttonName) => {
    const baseStyle = {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      width: '90%',
      height: "7%",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 12,
      marginTop: '10%',
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: 'transparent',
    };

    const isSelected = selectedButton === buttonName;
    const isSignUp = buttonName === 'SignUp';
    const borderWidth = isSelected ? 2 : 0;
    const borderColor = isSelected ? '#fff' : 'transparent';

    if (selectedButton === null && isSignUp) {
      return { ...baseStyle, borderWidth: 2, borderColor: '#fff' };
    } else if (isSignUp) {
      return { ...baseStyle, borderWidth, borderColor };
    } else {
      return { ...baseStyle, borderWidth, borderColor, marginBottom: 20 };
    }
  };

  return (
    <View style={styles.container}>
      <Background />

      <Image
        source={require('../assets/seficoin-app-icon.png')}
        style={{ width: '50%', height: '25%', marginBottom: '50%' }}
      />
      {/* <LoginSignupImage /> */}
      {/* <LottieView
                style={{height:"100%",width:"100%"}}
                    source={require('../assets/LoginSignUpAnimation.json')}
                    autoPlay
                    loop
                /> */}
      <TouchableOpacity

        style={getButtonStyle('SignUp')}
        onPress={() => navigation.navigate("Register")}
        // onPress={() => navigation.navigate("Home")}
      >
        <LinearGradient
          colors={['#1A5261', '#1C9D98']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        >

          <Text style={styles.buttonText}>SignUp</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity
        style={getButtonStyle('Login')}
        onPress={() => navigation.navigate("Login")}
      >
        <LinearGradient
          colors={['#1A5261', '#1C9D98']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        >

          <Text style={styles.buttonText}>Login</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: "Quicksand-Regular",
    fontWeight: "700"

  },
  gradient: {
    position: 'absolute',
    // top: -2,
    // bottom: -2,,
    height: "110%",
    alignItems: "center",
    justifyContent: "center",
    left: -2,
    right: -2,
    borderRadius: 1,
    borderWidth: 0,
  },
})

export default SignUpndLogin