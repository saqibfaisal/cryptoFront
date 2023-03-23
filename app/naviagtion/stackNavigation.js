import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/Home';
import BottomNavigation from "./BottomNavigation"
import OnBoarding from '../screen/Onboarding';
import Register from '../screen/Register';
import SignUpndLogin from '../screen/SignUpndLogin';
import Login from '../screen/Login';
import OTPScreen from '../screen/Otp';
import FingerprintScreen from '../screen/FingerPrint';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

function StackNavigtion() {
    const [onboardingState, setOnboardingState] = React.useState('');

    // React.useEffect(() => {
    //     (async () => {
    //         try {
    //             const onboarding = await AsyncStorage.getItem('onboarding');
    //             console.log('--------welcome screen', onboarding);
    //             setOnboardingState(onboarding);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     })();
    // }, []);
    return (
        <Stack.Navigator>
            {/* {onboardingState === 'true' ? (<Stack.Screen name="Onboarding" component={OnBoarding} options={{ headerShown: false }} />) :
                (<Stack.Screen name="FingerPrint" component={FingerprintScreen} options={{ headerShown: false }} />)} */}
            <Stack.Screen name="Home" component={BottomNavigation} options={{ headerShown: false }} />
            <Stack.Screen name="Onboarding" component={OnBoarding} options={{ headerShown: false }} />
            <Stack.Screen name="FingerPrint" component={FingerprintScreen} options={{ headerShown: false }} />

            <Stack.Screen name="SignUpndLogin" component={SignUpndLogin} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Otp" component={OTPScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}
export default StackNavigtion
