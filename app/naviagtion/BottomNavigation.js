import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
const Tab = createBottomTabNavigator();
import Login from '../screen/Login';
import Register from '../screen/Register';
import FingerPrint from '../screen/FingerPrint';
import Otp from "../screen/Otp"
import DrawerNavigation from './DrawerNavigation';
import Bottom1 from "../assets/Bottom1.svg"
import Bottom2 from "../assets/Bottom2.svg"
import Bottom3 from "../assets/Bottom3.svg"
import Bottom4 from "../assets/Bottom4.svg"
import Bottom5 from "../assets/Bottom5.svg"
function BottomNavigation() {
    return (
        // <BlurView
        //     style={{
        //         position: 'absolute',
        //         top: 0,
        //         left: 0,
        //         right: 0,
        //         bottom: 0,
        //     }}
        //     blurType="light"
        //     blurAmount={5}></BlurView>
        <Tab.Navigator 
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 15,
                    height: 80,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: -4,
                    },
                    shadowOpacity: 0.1,
                    shadowRadius: 4,
                    elevation: 0,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={DrawerNavigation}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        // <Icon name="home" size={30} color={focused ? '#000000' : '#A7A8B2'} />
                        <Bottom1 width={20} height={19}/>
                    ),
                    tabBarLabel: () => null,
                }}
            />
            <Tab.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        // <Icon name="compare-arrows" size={30} color={focused ? '#000000' : '#A7A8B2'} />
                        <Bottom2 width={20} height={19}/>
                    ),
                    tabBarLabel: () => null,
                }}
            />
            <Tab.Screen
                name="Otp"
                component={Otp}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        // <Icon name="home" size={50} color={focused ? '#000000' : '#A7A8B2'} />
                        <Bottom3 width={40} height={40}/>
                    ),
                    tabBarLabel: () => null,
                }}
            />
            <Tab.Screen
                name="FingerPrint"
                component={FingerPrint}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        // <Icon name="compare-arrows" size={30} color={focused ? '#000000' : '#A7A8B2'} />
                        <Bottom4 width={40} height={40}/>
                    ),
                    tabBarLabel: () => null,
                }}
            />
            <Tab.Screen
                name="Register"
                component={Register}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        // <Icon name="home" size={30} color={focused ? '#000000' : '#A7A8B2'} />
                        <Bottom5 width={40} height={40}/>
                    ),
                    tabBarLabel: () => null,
                }}
            />

        </Tab.Navigator>
    );
}
export default BottomNavigation