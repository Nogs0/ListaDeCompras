import React from 'react';
import { View } from 'react-native';
import Home from './src/Components/Home';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/Components/Tabs';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  );
}

export default App;
