import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';
import { ToastAndroid } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { useSelector } from 'react-redux';
 let signupEmail;
export interface AuthState {
  onboarding: boolean;
  token: string;
}
const initialState: AuthState = {
  onboarding: false,
  token: '',
};
export const authState = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onboarding: (state, action) => {
      state.onboarding = action.payload;
    },
  },
});
export const { onboarding } = authState.actions;
export default authState.reducer;
export function registerUser(raw: any, navigation: any, setLoad: any) {
  return function thunkForRegister(dispatch, getState) {
    setLoad(true);
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://192.168.100.145:3000/api/v1/register", requestOptions)
        .then(response => response.text())
        .then(async (result) => {
          setLoad(false);
          let json = JSON.parse(result);
          // signupEmail = json.user.email
          
          console.log(json.user.email,"email");
          if (json.message) {
            console.log("mess", result);
          }
          else {
            // navigation.navigate("Otp",json)
            navigation.navigate("Otp")
            console.log(result, "result")
          }
          // await AsyncStorage.setItem("email",JSON.stringify(json.user.email))
        }).catch(err => {
          setLoad(false)
          console.log("err", err)
        })
    } catch (err) {
      setLoad(false);
      console.log('error', err);
    }
  };
}
export function LoginUser(raw: any, navigation: any, setLoad: any) {
  return function thunkForLogin(dispatch, getState) {
    setLoad(true);
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://192.168.100.145:3000/api/v1/login", requestOptions)
        .then(response => response.text())
        .then(async (result) => {
          setLoad(false);
          let json = JSON.parse(result)
          if (json.message) {
            console.log("mess", result);
          }
          else {
            navigation.navigate("Home")
            console.log(result, "result")
          }
          // console.log(result, "result")
          // navigation.navigate("Home")
        }).catch(err => {
          setLoad(false)
          console.log("err", err)
        })
    } catch (err) {
      setLoad(false);
      console.log('error', err);
    }
  };
}
export function getOnboarding(onboard: boolean) {
  return function forOnboarding(dispatch, getState) {
    try {
      console.log('---->>> from auth slicer', user);

      dispatch(onboarding(onboard));
    } catch (err) {
      console.log('error--->>', err);
    }
  };
}
// export function Otp(raw: any) {
//   return function thunkForOtp(dispatch, getState) {
//     try {
//       var myHeaders = new Headers();
//       myHeaders.append("Content-Type", "application/json");
//       var requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//       };
//       // console.log(AsyncStorage.getItem('email'));
//       fetch(`http://192.168.100.145:3000/api/v1/confirm/${signupEmail}`, requestOptions)
//         .then(response => response.text())
//         .then(result => console.log(result))
//         .catch(error => console.log('error', error));
//     }
//     catch (err) {
//       console.log('error--->>', err);
//     }
//   }
// }