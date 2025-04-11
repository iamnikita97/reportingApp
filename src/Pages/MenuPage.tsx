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
import {useTheme} from 'react-native-paper';
import {CustomThemeType} from '../theme/theme';
import {useNavigation} from '@react-navigation/native';
import ImageComponent from '../components/ImageComponent';
import {RootStackParamList} from '../navigation/Navigation';
import {StackNavigationProp} from '@react-navigation/stack';

const {width} = Dimensions.get('window');

const MenuPage: React.FC = () => {
  const theme = useTheme() as CustomThemeType;
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const translateX = useRef(new Animated.Value(-width * 0.7)).current;
  const [isClosing, setIsClosing] = useState(false);
  const [selected, setSelected] = useState('Dashboard');
  const [showMasterSubmenu, setShowMasterSubmenu] = useState(false);

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [translateX]);

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

  const navigateTo = (screen: keyof RootStackParamList, label: string) => {
    setSelected(label);
    closeMenu();
    setTimeout(() => {
      navigation.navigate(screen);
    }, 300);
  };

  const menuOptions = [
    {id: '1', label: 'Home', icon: 'homeIcon', screen: 'Home'},
    {id: '2', label: 'Users', icon: 'userProfileIcon', screen: 'UserProfile'},
    {id: '3', label: 'Customers', icon: 'customerIcon', screen: 'Customers'},
    {
      id: '4',
      label: 'Master',
      icon: 'masterIcon',
      isExpandable: true,
      subMenu: [
        {id: '4-1', label: 'Country', icon: 'countryIcon', screen: 'Country'},
        {id: '4-2', label: 'State', icon: 'stateIcon', screen: 'State'},
        {id: '4-3', label: 'City', icon: 'cityIcon', screen: 'City'},
      ],
    },
    {id: '5', label: 'Settings', icon: 'settingIcon', screen: 'Setting'},
  ];

  const renderMenuItem = (item: any) => {
    const isSelected = selected === item.label;

    return (
      <>
        <TouchableOpacity
          style={[
            styles.menuItem,
            isSelected &&
              !item.isExpandable && {
                backgroundColor: theme.colors.lightColor,
              },
          ]}
          onPress={() => {
            if (item.isExpandable) {
              setShowMasterSubmenu(!showMasterSubmenu);
            } else {
              navigateTo(item.screen, item.label);
            }
          }}>
          <ImageComponent
            name={item.icon}
            style={[
              styles.menuIcon,
              {tintColor: theme.colors.lightColor},
              isSelected &&
                !item.isExpandable && {
                  tintColor: theme.colors.lightBlue,
                },
            ]}
          />
          <Text
            style={[
              styles.menuText,
              isSelected &&
                !item.isExpandable && {
                  color: theme.colors.lightBlue,
                },
              isSelected && !item.isExpandable && styles.menuTextSelected,
            ]}>
            {item.label}
          </Text>

          {item.isExpandable && (
            <ImageComponent
              name={showMasterSubmenu ? 'chevronUpIcon' : 'chevronDownIcon'}
              style={[styles.chevronIcon, {tintColor: theme.colors.lightColor}]}
            />
          )}
        </TouchableOpacity>

        {item.isExpandable && showMasterSubmenu && (
          <View style={styles.subMenuContainer}>
            {item.subMenu.map((sub: any) => {
              const isSubSelected = selected === sub.label;
              return (
                <TouchableOpacity
                  key={sub.id}
                  style={[
                    styles.subMenuItem,
                    isSubSelected && {
                      backgroundColor: theme.colors.lightColor,
                    },
                  ]}
                  onPress={() => navigateTo(sub.screen, sub.label)}>
                  <ImageComponent
                    name={sub.icon}
                    style={[
                      styles.menuIcon,
                      {tintColor: theme.colors.lightColor},
                      isSubSelected && {tintColor: theme.colors.lightBlue},
                    ]}
                  />
                  <Text
                    style={[
                      styles.subMenuText,
                      isSubSelected && {color: theme.colors.lightBlue},
                    ]}>
                    {sub.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      </>
    );
  };

  return (
    <View
      style={[styles.overlay, {backgroundColor: theme.colors.overlayColor}]}>
      {!isClosing && (
        <TouchableOpacity
          style={styles.backdrop}
          onPress={closeMenu}
          activeOpacity={1}
        />
      )}
      {!isClosing && (
        <Animated.View
          style={[
            styles.container,
            {transform: [{translateX}]},
            {backgroundColor: theme.colors.inputText},
          ]}>
          <TouchableOpacity
            style={[
              styles.profileSection,
              {backgroundColor: theme.colors.whiteSmoke},
            ]}>
            <ImageComponent
              name="userProfileIcon"
              style={[
                styles.profileImage,
                {borderColor: theme.colors.inputText},
              ]}
            />
            <View style={styles.userInfo}>
              <Text
                style={[styles.profileName, {color: theme.colors.textColor}]}>
                Nikita Mahajan
              </Text>
              <Text
                style={[styles.profileEmail, {color: theme.colors.lightColor}]}>
                Developer
              </Text>
            </View>
          </TouchableOpacity>

          <FlatList
            data={menuOptions}
            keyExtractor={item => item.id}
            extraData={[selected, showMasterSubmenu]}
            renderItem={({item}) => renderMenuItem(item)}
          />

          <TouchableOpacity
            style={[
              styles.logoutButton,
              {borderTopColor: theme.colors.disabledColor},
            ]}
            onPress={() => {
              closeMenu();
              setTimeout(() => {
                navigation.reset({
                  index: 0,
                  routes: [{name: 'Login' as keyof RootStackParamList}],
                });
              }, 300);
            }}>
            <ImageComponent
              name="logoutIcon"
              style={[styles.menuIcon, {tintColor: theme.colors.subTitle}]}
            />
            <Text style={[styles.menuText, {color: theme.colors.subTitle}]}>
              Logout
            </Text>
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
    borderRadius: 10,
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
  },
  userInfo: {
    marginLeft: 15,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 14,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 5,
  },
  menuText: {
    fontSize: 16,
    marginLeft: 15,
  },
  menuTextSelected: {
    fontWeight: 'bold',
  },
  menuIcon: {
    width: 24,
    height: 24,
  },
  chevronIcon: {
    width: 18,
    height: 18,
    marginLeft: 'auto',
  },
  subMenuContainer: {
    paddingLeft: 30,
    marginBottom: 10,
  },
  subMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 8,
  },
  subMenuText: {
    fontSize: 15,
    marginLeft: 15,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    marginTop: 'auto',
    borderTopWidth: 1,
  },
});

export default MenuPage;
