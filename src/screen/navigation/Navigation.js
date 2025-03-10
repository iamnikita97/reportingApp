import React from 'react';
import LoginScreen from '../LoginScreen';
import SignUpScreen from '../SignupScreen';
import InviteScreen from '../InviteScreen';
import EditProfileScreen from '../EditProfileScreen';
import BottomTabNavigator from './BottomTabNavigator';
import VerificationScreen from '../VerificationScreen';
import ForgotPasswordScreen from '../ForgotPasswordScreen';
import CreatePasswordScreen from '../CreatePasswordScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import NotificationScreen from '../NotificationScreen';

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
        <Stack.Screen
          name="VerificationScreen"
          component={VerificationScreen}
        />
        <Stack.Screen
          name="CreatePasswordScreen"
          component={CreatePasswordScreen}
        />
        <Stack.Screen name="InviteScreen" component={InviteScreen} />
        <Stack.Screen name="HomeTabs" component={BottomTabNavigator} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
