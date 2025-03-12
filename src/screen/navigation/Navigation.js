import React from 'react';
import LoginScreen from '../LoginScreen';
import SignUpScreen from '../SignupScreen';
import InviteScreen from '../InviteScreen';
import HelpSupportScreen from '../HelpSupportScreen';
import EditProfileScreen from '../EditProfileScreen';
import BottomTabNavigator from './BottomTabNavigator';
import VerificationScreen from '../VerificationScreen';
import NotificationScreen from '../NotificationScreen';
import PrivacyPolicyScreen from '../PrivacyPolicyScreen';
import ChangePasswordScreen from '../ChangePasswordScreen';
import ForgotPasswordScreen from '../ForgotPasswordScreen';
import CreatePasswordScreen from '../CreatePasswordScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import TermsAndPoliciesScreen from '../TermsAndPoliciesScreen';

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
        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
        <Stack.Screen name="HelpSupportScreen" component={HelpSupportScreen} />
        <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />
        <Stack.Screen
          name="TermsAndPoliciesScreen"
          component={TermsAndPoliciesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
