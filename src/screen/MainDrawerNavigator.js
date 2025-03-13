import React from 'react';
import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';
import {useTheme} from 'react-native-paper';
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
});

function HomeStack({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <CustomHeader navigation={navigation} title="Home" />,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

const MainDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Profile" component={EditProfileScreen} />
      <Drawer.Screen name="Notifications" component={NotificationScreen} />
      <Drawer.Screen name="Settings" component={SettingScreen} />
    </Drawer.Navigator>
  );
};

export default MainDrawerNavigator;
