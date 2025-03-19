import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../LoginScreen';
import SignUpScreen from '../SignupScreen';
import InviteScreen from '../InviteScreen';
import HelpSupportScreen from '../HelpSupportScreen';
import EditProfileScreen from '../EditProfileScreen';
import VerificationScreen from '../VerificationScreen';
import NotificationScreen from '../NotificationScreen';
import MainDrawerNavigator from '../MainDrawerNavigator';
import PrivacyPolicyScreen from '../PrivacyPolicyScreen';
import ChangePasswordScreen from '../ChangePasswordScreen';
import ForgotPasswordScreen from '../ForgotPasswordScreen';
import CreatePasswordScreen from '../CreatePasswordScreen';
import TermsAndPoliciesScreen from '../TermsAndPoliciesScreen';

// Define Stack Navigator
type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  ForgotPasswordScreen: undefined;
  VerificationScreen: undefined;
  CreatePasswordScreen: undefined;
  InviteScreen: undefined;
  EditProfile: undefined;
  Notification: undefined;
  ChangePassword: undefined;
  HelpSupportScreen: undefined;
  PrivacyPolicyScreen: undefined;
  TermsAndPoliciesScreen: undefined;
  HomeTabs: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
};

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
        <Stack.Screen
          name="VerificationScreen"
          component={VerificationScreen}
        />
        <Stack.Screen
          name="CreatePasswordScreen"
          component={CreatePasswordScreen}
        />
        <Stack.Screen name="InviteScreen" component={InviteScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
        <Stack.Screen name="HelpSupportScreen" component={HelpSupportScreen} />
        <Stack.Screen
          name="PrivacyPolicyScreen"
          component={PrivacyPolicyScreen}
        />
        <Stack.Screen
          name="TermsAndPoliciesScreen"
          component={TermsAndPoliciesScreen}
        />
        <Stack.Screen name="HomeTabs" component={MainDrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
