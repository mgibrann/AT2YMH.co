import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './navigation';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  );
};

export default App;
