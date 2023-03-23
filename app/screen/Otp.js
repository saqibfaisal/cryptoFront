import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Background from '../Component/Background';
import { useDispatch, useSelector } from 'react-redux'
import { Otp } from '../redux/reducer/auth';
import LinearGradient from 'react-native-linear-gradient';
// const OTPScreen = ({ navigation, route }) => {
const OTPScreen = ({ navigation }) => {
  // let data = route.params.user.emails
  // console.log(route.params.user.email);
  const state = useSelector(state => state);
  const [otp, setOTP] = useState(['', '', '', '', '']);
  const otpInputs = useRef([]);
  const [load, setLoad] = useState(false)
  const handleInputChange = (index, value) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    if (value.length === 1 && index < otpInputs.current.length - 1) {
      otpInputs.current[index + 1].focus();
    } else if (value.length === 0 && index > 0) {
      otpInputs.current[index - 1].focus();
    }
  };
  // console.log(otp);
  const handleAutoDone = () => {

    // setLoad(true)
    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");

    // var raw = JSON.stringify({
    //   otp
    // });

    // var requestOptions = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: 'follow'
    // };

    // fetch(`http://192.168.100.145:3000/api/v1/confirm/${data}`, requestOptions)
    //   .then(response => response.text())
    //   .then(result => {
    //     setLoad(false)
    //     console.log(result)
    //     setOTP("")
    //   })
    //   .catch(error => {
    //     setLoad(false)
    //     console.log('error', error)
    //     setOTP("")
    //   });
  };

  return (
    <View style={styles.container}>
      <Background />
      <View style={styles.loginContainer}>
        <Text style={styles.text1}>Verify Code</Text>
        <Text style={styles.text}>Enter the verification code sent to your phone number</Text>
        <View style={styles.otpContainer}>
          {otp.map((value, index) => (
            <TextInput
              key={index}
              style={styles.input}
              value={value}
              maxLength={1}
              keyboardType='numeric'
              onChangeText={(text) => handleInputChange(index, text)}
              ref={(ref) => (otpInputs.current[index] = ref)}
              // onSubmitEditing={handleAutoDone}
              returnKeyType={index === 4 ? 'done' : 'next'}
            />
          ))}
        </View>
        <TouchableOpacity style={styles.button} onPress={() => { handleAutoDone() }}>
          <LinearGradient
            colors={['#1A5261', '#1C9D98']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradient}
          >

            <Text style={styles.buttonText}>{load ? "Loading" : "Register"}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    width: "90%",
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    padding: 20,
    borderColor: "grey",
    // width: '100%',
    borderWidth: 2,
    alignSelf: "center",
    paddingBottom: 0,

  },
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 30,
    width: '75%',
    color: "#fff"
  },
  text1: {
    fontSize: 26,
    marginBottom: 30,
    fontWeight: 'bold',
    width: '75%'
    , color: "#fff"
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 12,
    paddingHorizontal: 7,
    paddingVertical: 3,
    color: "#fff",
    // width:"100%"
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: '100%',
    height: "16%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: '10%',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: "Quicksand-Regular",
    fontWeight: "700"
  },
  gradient: {
    position: 'absolute',
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    left: -2,
    right: -2,
    borderRadius: 1,
    borderWidth: 0,
  },
});

export default OTPScreen;