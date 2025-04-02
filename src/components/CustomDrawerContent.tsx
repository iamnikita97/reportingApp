import React, {useState} from 'react';
import {
  DrawerItemList,
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import LogoutPopup from './LogoutPopup';
import {useTheme} from 'react-native-paper';
import {CustomThemeType} from '../theme/theme';
import ImageComponent from '../components/ImageComponent';
import {useNavigation, StackActions} from '@react-navigation/native';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = props => {
  const theme = useTheme() as CustomThemeType;
  const navigation = useNavigation();
  const [isLogoutVisible, setLogoutVisible] = useState<boolean>(false);

  const handleLogoutConfirm = (): void => {
    setLogoutVisible(false);
    navigation.dispatch(StackActions.replace('Login'));
  };

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <LogoutPopup
        visible={isLogoutVisible}
        onClose={() => setLogoutVisible(false)}
        onConfirm={handleLogoutConfirm}
      />
      <View style={[styles.header, {backgroundColor: theme.colors.primary}]}>
        <ImageComponent
          name="userProfileIcon"
          style={[
            styles.profileImage,
            {
              borderColor: theme.colors.outline,
              tintColor: theme.colors.onPrimary,
            },
          ]}
        />
        <Text style={[styles.userName, {color: theme.colors.onPrimary}]}>
          Nikita Mahajan
        </Text>
        <Text style={[styles.userEmail, {color: theme.colors.onPrimary}]}>
          mrs.mahajan@gmail.com
        </Text>
      </View>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.drawerItemsContainer}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity
        style={[styles.logoutButton, {backgroundColor: theme.colors.primary}]}
        onPress={() => setLogoutVisible(true)}>
        <Text style={[styles.logoutText, {color: theme.colors.onPrimary}]}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  userEmail: {
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
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomDrawerContent;
