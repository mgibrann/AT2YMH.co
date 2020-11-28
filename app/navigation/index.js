import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SplashScreen from '../screens/SplashScreen';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import LogIn from '../screens/LogIn';
import Menu from '../screens/Menu';
import CreateAccount from '../screens/CreateAccount';
import ListItem from '../screens/ListItem';
import ShoppingCart from '../screens/ShoppingCart';
import BottomNavigator from '../component/BottomNavigator';
import DetailItem from '../screens/DetailItem';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="ListItem" component={ListItem} />
      <Tab.Screen name="ShoppingCart" component={ShoppingCart} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
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
        name="LogIn"
        component={LogIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailItem"
        component={DetailItem}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
