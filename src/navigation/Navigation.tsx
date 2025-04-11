// AppNavigator.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MenuPage from '../Pages/MenuPage';
import HomeScreen from '../screens/HomeScreen';
import CityScreen from '../screens/CityScreen';
import UsersScreen from '../screens/UsersScreen';
import LoginScreen from '../screens/LoginScreen';
import StateScreen from '../screens/StateScreen';
import SignupScreen from '../screens/SignupScreen';
import SettingScreen from '../screens/SettingScreen';
import CustomerScreen from '../screens/CustomerScreen';
import StockListScreen from '../screens/StockListScreen';
import HelpSupportScreen from '../screens/HelpSupportScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import VerificationScreen from '../screens/VerificationScreen';
import NotificationScreen from '../screens/NotificationScreen';
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';
import CreatePasswordScreen from '../screens/CreatePasswordScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import TermsAndPoliciesScreen from '../screens/TermsAndPoliciesScreen';

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
  VerificationScreen: undefined;
  CreatePasswordScreen: undefined;
  ForgotPassword: undefined;
  Setting: undefined;
  UserProfile: undefined;
  Customers: undefined;
  Notifications: undefined;
  EditProfile: undefined;
  PrivacyPolicy: undefined;
  ChangePassword: undefined;
  HelpSupport: undefined;
  TermsAndPolicies: undefined;
  State: undefined;
  City: undefined;
  StockList: undefined;
  MenuPage: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignupScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VerificationScreen"
        component={VerificationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreatePasswordScreen"
        component={CreatePasswordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserProfile"
        component={UsersScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="State"
        component={StateScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="City"
        component={CityScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Customers"
        component={CustomerScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StockList"
        component={StockListScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePasswordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicyScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HelpSupport"
        component={HelpSupportScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TermsAndPolicies"
        component={TermsAndPoliciesScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MenuPage"
        component={MenuPage}
        options={{headerShown: false, presentation: 'transparentModal'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
