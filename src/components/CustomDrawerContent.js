import React from 'react';
import {
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {useTheme} from 'react-native-paper';
import {View, Text, StyleSheet} from 'react-native';
import ImageComponent from '../components/ImageComponent';

const CustomDrawerContent = props => {
  const {colors} = useTheme();

  return (
    <View style={{flex: 1}}>
      <View style={[styles.header, {backgroundColor: colors.primary}]}>
        <ImageComponent name="userProfileIcon" style={styles.profileImage} />
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.userEmail}>johndoe@example.com</Text>
      </View>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.drawerItemsContainer}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'white',
    tintColor: 'white',
  },
  userName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  userEmail: {
    color: 'white',
    fontSize: 14,
    opacity: 0.8,
  },
  drawerItemsContainer: {
    flexGrow: 1,
    paddingTop: 10,
  },
  logoutButton: {
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#ff4d4d',
    borderRadius: 10,
    margin: 20,
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomDrawerContent;
