import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TaxCalculatorScreen from "./screen/TaxCalculatorScreen";
import SearchCarScreen from "./screen/SearchCarScreen";
import FilterCarScreen from "./screen/FilterCarScreen";
import { LogBox } from "react-native";

const Stack = createStackNavigator();
LogBox.ignoreAllLogs();
const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="TaxCalculatorScreen" component={TaxCalculatorScreen} />
				<Stack.Screen name="SearchCarScreen" component={SearchCarScreen} />
				<Stack.Screen name="FilterCarScreen" component={FilterCarScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
