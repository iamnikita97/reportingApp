import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../LoginScreen';
import SignUpScreen from '../SignupScreen';
import ForgotPasswordScreen from '../ForgotPasswordScreen';
import VerificationScreen from '../VerificationScreen';
import CreatePasswordScreen from '../CreatePasswordScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
        <Stack.Screen name="CreatePasswordScreen" component={CreatePasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
