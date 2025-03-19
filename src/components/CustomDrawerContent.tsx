import React, {useState} from 'react';
import {
  DrawerItemList,
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {useTheme} from 'react-native-paper';
import LogoutPopup from './LogoutPopup';
import {useNavigation} from '@react-navigation/native';
import ImageComponent from '../components/ImageComponent';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = props => {
  const {colors} = useTheme();
  const navigation = useNavigation();
  const [isLogoutVisible, setLogoutVisible] = useState<boolean>(false);

  const handleLogoutConfirm = (): void => {
    setLogoutVisible(false);
    navigation.replace('Login' as never); // Type-casting to avoid type errors
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      {/* Logout Confirmation Popup */}
      <LogoutPopup
        visible={isLogoutVisible}
        onClose={() => setLogoutVisible(false)}
        onConfirm={handleLogoutConfirm}
      />

      {/* Drawer Header */}
      <View style={[styles.header, {backgroundColor: colors.primary}]}>
        <ImageComponent name="userProfileIcon" style={styles.profileImage} />
        <Text style={styles.userName}>Nikita Mahajan</Text>
        <Text style={styles.userEmail}>mrs.mahajan@gmail.com</Text>
      </View>

      {/* Drawer Items */}
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.drawerItemsContainer}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* Logout Button */}
      <TouchableOpacity
        style={[styles.logoutButton, {backgroundColor: colors.button}]}
        onPress={() => setLogoutVisible(true)}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
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
