import React from 'react';
import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';
import {useTheme} from 'react-native-paper';
import CustomerScreen from './CustomerScreen';
import UserDetailsScreen from './UserDetailsScreen';
import EditProfileScreen from './EditProfileScreen';
import NotificationScreen from './NotificationScreen';
import ImageComponent from '../components/ImageComponent';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from '../components/CustomDrawerContent';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const CustomHeader = ({navigation, title}) => {
  const {colors} = useTheme();

  return (
    <View style={[styles.headerContainer, {backgroundColor: colors.primary}]}>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={styles.menuButton}>
        <ImageComponent name="menuIcon" style={styles.menuIcon} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  menuButton: {
    padding: 10,
  },
  menuIcon: {
    width: 24,
    height: 24,
    tintColor: 'white',
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    marginLeft: 20,
  },
  drawerIcon: {
    width: 20,
    height: 20,
    tintColor: 'black',
  },
});

const HomeStack = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      header: () => <CustomHeader navigation={navigation} title="Home" />,
    }}>
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);

const UserDetailsStack = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      header: () => (
        <CustomHeader navigation={navigation} title="User Details" />
      ),
    }}>
    <Stack.Screen name="User Details" component={UserDetailsScreen} />
  </Stack.Navigator>
);

const CustomerStack = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      header: () => <CustomHeader navigation={navigation} title="Customer" />,
    }}>
    <Stack.Screen name="Customer" component={CustomerScreen} />
  </Stack.Navigator>
);

const MainDrawerNavigator = () => {
  const {colors} = useTheme();
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: colors.iconColor,
        drawerActiveTintColor: colors.textColor,
        drawerInactiveTintColor: colors.textColor,
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{
          drawerIcon: ({color, size}) => (
            <ImageComponent
              name="homeIcon"
              style={{width: size, height: size, tintColor: color}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={EditProfileScreen}
        options={{
          drawerIcon: ({color, size}) => (
            <ImageComponent
              name="userProfileIcon"
              style={{width: size, height: size, tintColor: color}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          drawerIcon: ({color, size}) => (
            <ImageComponent
              name="notificationIcon"
              style={{width: size, height: size, tintColor: color}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="User Details"
        component={UserDetailsStack}
        options={{
          drawerIcon: ({color, size}) => (
            <ImageComponent
              name="UserDeatilsIcon"
              style={{width: size, height: size, tintColor: color}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Customer"
        component={CustomerStack}
        options={{
          drawerIcon: ({color, size}) => (
            <ImageComponent
              name="customerIcon"
              style={{width: size, height: size, tintColor: color}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          drawerIcon: ({color, size}) => (
            <ImageComponent
              name="settingIcon"
              style={{width: size, height: size, tintColor: color}}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default MainDrawerNavigator;
