import React from 'react';
import HomeScreen from '../HomeScreen';
import ReportScreen from '../ReportScreen';
import {useTheme} from 'react-native-paper';
import SettingScreen from '../SettingScreen';
import {View, StyleSheet} from 'react-native';
import SecurityScreen from '../SecurityScreen';
import ImageComponent from '../../components/ImageComponent';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const {colors} = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: [styles.tabBarStyle, {backgroundColor: colors.primary}],
        tabBarShowLabel: false,
        tabBarIcon: ({color, size, focused}) => {
          const getIconComponent = iconName => (
            <View
              style={[
                styles.iconContainer,
                focused && {backgroundColor: colors.iconColor},
              ]}>
              <ImageComponent
                name={iconName}
                style={[
                  styles.iconStyle,
                  {tintColor: focused ? 'black' : 'white'},
                ]}
              />
            </View>
          );

          switch (route.name) {
            case 'Home':
              return getIconComponent('homeIcon');
            case 'Analytics':
              return getIconComponent('analyticsIcon');
            case 'Security':
              return getIconComponent('securityIcon');
            case 'Report':
              return getIconComponent('reportIcon');
            case 'Setting':
              return getIconComponent('settingIcon');
            default:
              return (
                <Icon name="clipboard-text-outline" size={size} color={color} />
              );
          }
        },
        tabBarActiveTintColor: '#d1d1d1',
        tabBarInactiveTintColor: '#ffffff',
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Security" component={SecurityScreen} />
      <Tab.Screen name="Report" component={ReportScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#600026',
    height: 70,
    paddingBottom: 10,
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'visible',
  },
  iconStyle: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});

export default BottomTabNavigator;
