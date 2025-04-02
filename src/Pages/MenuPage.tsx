import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Animated,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ImageComponent from '../components/ImageComponent';

const {width, height} = Dimensions.get('window');

const MenuPage: React.FC = () => {
  const navigation = useNavigation();
  const translateX = useRef(new Animated.Value(-width * 0.7)).current;
  const [isClosing, setIsClosing] = useState(false);
  const [selected, setSelected] = useState('Dashboard');

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  const closeMenu = () => {
    if (isClosing) return;
    setIsClosing(true);

    Animated.timing(translateX, {
      toValue: -width * 0.7,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        navigation.goBack();
        setIsClosing(false);
      }, 100);
    });
  };

  const menuOptions = [
    {id: '1', label: 'Home', icon: 'homeIcon', screen: 'Home'},
    {
      id: '2',
      label: 'User Details',
      icon: 'userProfileIcon',
      screen: 'UserProfile',
    },
    {
      id: '3',
      label: 'Notifications',
      icon: 'notificationIcon',
      screen: 'Notifications',
    },
    {id: '4', label: 'Customers', icon: 'customerIcon', screen: 'Customers'},
    {id: '5', label: 'Settings', icon: 'settingIcon', screen: 'Setting'},
  ];

  return (
    <View style={styles.overlay}>
      {!isClosing && (
        <TouchableOpacity
          style={styles.backdrop}
          onPress={closeMenu}
          activeOpacity={1}
        />
      )}
      {!isClosing && (
        <Animated.View style={[styles.container, {transform: [{translateX}]}]}>
          <TouchableOpacity style={styles.profileSection}>
            <ImageComponent
              name="userProfileIcon"
              style={styles.profileImage}
            />
            <View style={styles.userInfo}>
              <Text style={styles.profileName}>Nikita Mahajan</Text>
              <Text style={styles.profileEmail}>Developer</Text>
            </View>
          </TouchableOpacity>
          <FlatList
            data={menuOptions}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                style={[
                  styles.menuItem,
                  selected === item.label && styles.menuItemSelected,
                ]}
                onPress={() => {
                  setSelected(item.label);
                  closeMenu();

                  setTimeout(() => {
                    if (item.screen) {
                      navigation.navigate(item.screen as never);
                    }
                  }, 300);
                }}>
                <ImageComponent
                  name={item.icon}
                  style={[
                    styles.menuIcon,
                    selected === item.label && styles.menuIconSelected,
                  ]}
                />
                <Text
                  style={[
                    styles.menuText,
                    selected === item.label && styles.menuTextSelected,
                  ]}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => {
              closeMenu();

              setTimeout(() => {
                navigation.reset({
                  index: 0,
                  routes: [{name: 'Login'}],
                });
              }, 300);
            }}>
            <ImageComponent name="logoutIcon" style={styles.menuIcon} />
            <Text style={styles.menuText}>Logout</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-start',
  },
  backdrop: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  container: {
    width: '75%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    paddingTop: 30,
    paddingHorizontal: 15,
    elevation: 5,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#F4F7FC',
    borderRadius: 10,
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },
  userInfo: {
    marginLeft: 15,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  profileEmail: {
    fontSize: 14,
    color: '#666',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 5,
  },
  menuItemSelected: {
    backgroundColor: '#EAF1FF',
  },
  menuText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
  },
  menuTextSelected: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
  menuIcon: {
    width: 24,
    height: 24,
    tintColor: '#333',
  },
  menuIconSelected: {
    tintColor: '#007BFF',
  },
  badge: {
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    position: 'absolute',
    right: 15,
  },
  badgeText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    marginTop: 'auto',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
});

export default MenuPage;
