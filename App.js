import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TaxCalculatorScreen from './screen/TaxCalculatorScreen';
import SearchCarScreen from './screen/SearchCarScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="TaxCalculatorScreen" component={TaxCalculatorScreen} />
        <Stack.Screen name="SearchCarScreen" component={SearchCarScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
