import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import LogIn from '../screens/LogIn';
import Menu from '../screens/Menu';
import CreateAccount from '../screens/CreateAccount';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainApp = () => {
  <Tab.Navigator>
    <Tab.Screen name="Menu" component={Menu} />
  </Tab.Navigator>;
};
const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Menu">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LogIn"
        component={LogIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
