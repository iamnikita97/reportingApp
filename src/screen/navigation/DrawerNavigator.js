import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useTheme} from 'react-native-paper';
import BottomTabNavigator from './BottomTabNavigator';
import HelpSupportScreen from '../HelpSupportScreen';
import EditProfileScreen from '../EditProfileScreen';
import PrivacyPolicyScreen from '../PrivacyPolicyScreen';
import TermsAndPoliciesScreen from '../TermsAndPoliciesScreen';
import CustomDrawerContent from '../../components/CustomDrawerContent'; // Optional custom drawer

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const {colors} = useTheme();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {backgroundColor: colors.background, width: 250},
        headerShown: false,
        drawerActiveTintColor: colors.primary,
        drawerInactiveTintColor: colors.text,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="HomeTabs" component={BottomTabNavigator} />
      <Drawer.Screen name="Edit Profile" component={EditProfileScreen} />
      <Drawer.Screen name="Help & Support" component={HelpSupportScreen} />
      <Drawer.Screen name="Privacy Policy" component={PrivacyPolicyScreen} />
      <Drawer.Screen
        name="Terms & Policies"
        component={TermsAndPoliciesScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
