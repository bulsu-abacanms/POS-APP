import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './app/Login';
import Dashboard from './app/Dashboard';
import Ticket from './app/Ticket';

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Dashboard" component={Dashboard} />
				<Stack.Screen name="Ticket" component={Ticket} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;

//import StorybookUI from "./.storybook";

//const useStorybook = false; // Change to true to use Storybook
//export default StorybookUI;