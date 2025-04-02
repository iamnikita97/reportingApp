import React, {useState} from 'react';
import {useTheme} from 'react-native-paper';
import {CustomThemeType} from '../theme/theme';
import LogoutPopup from '../components/LogoutPopup';
import ImageComponent from '../components/ImageComponent';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

type SettingOption = {
  id: string;
  name: string;
  icon: string;
};

type SettingScreenProps = {
  navigation: StackNavigationProp<any>;
};

const settingsOptions: SettingOption[] = [
  {id: '1', name: 'Edit profile', icon: 'userProfileIcon'},
  {id: '2', name: 'Security', icon: 'security'},
  {id: '3', name: 'Notifications', icon: 'notificationIcon'},
  {id: '4', name: 'Privacy', icon: 'privacyIcon'},
  {id: '5', name: 'Help & Support', icon: 'helpIcon'},
  {id: '6', name: 'Terms and Policies', icon: 'policiesIcon'},
  {id: '7', name: 'Log out', icon: 'logoutIcon'},
];

// Extracted ItemSeparator component
const ItemSeparator: React.FC<{color: string}> = ({color}) => (
  <View style={[styles.separator, {backgroundColor: color}]} />
);

// Extracted List Item Component
const SettingsListItem: React.FC<{
  item: SettingOption;
  onPress: () => void;
}> = ({item, onPress}) => (
  <TouchableOpacity style={styles.listItem} onPress={onPress}>
    <ImageComponent name={item.icon} style={styles.listIcon} />
    <Text style={styles.listText}>{item.name}</Text>
  </TouchableOpacity>
);

const SettingScreen: React.FC<SettingScreenProps> = ({navigation}) => {
  const theme = useTheme() as CustomThemeType;
  const [isLogoutVisible, setLogoutVisible] = useState(false);

  const handleLogout = () => {
    setLogoutVisible(true);
  };

  const handleNavigation = (item: SettingOption) => {
    switch (item.name) {
      case 'Edit profile':
        navigation.navigate('EditProfile');
        break;
      case 'Notifications':
        navigation.navigate('Notifications');
        break;
      case 'Log out':
        handleLogout();
        break;
      case 'Security':
        navigation.navigate('ChangePassword');
        break;
      case 'Terms and Policies':
        navigation.navigate('TermsAndPolicies');
        break;
      case 'Help & Support':
        navigation.navigate('HelpSupport');
        break;
      case 'Privacy':
        navigation.navigate('PrivacyPolicy');
        break;
      default:
        break;
    }
  };

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.whiteSmoke}]}>
      <View style={[styles.header, {backgroundColor: theme.colors.secondary}]}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <ImageComponent
            name="arrowIcon"
            style={[styles.icon, {tintColor: theme.colors.inputText}]}
          />
        </TouchableOpacity>
        <Text style={[styles.headerText, {color: theme.colors.inputText}]}>
          Settings
        </Text>
        <View style={styles.iconPlaceholder} />
      </View>
      <View
        style={[
          styles.card,
          {
            backgroundColor: theme.colors.inputText,
            shadowColor: theme.colors.textColor,
          },
        ]}>
        <FlatList
          data={settingsOptions}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={ItemSeparator.bind(null, {
            color: theme.colors.iconColor,
          })}
          renderItem={({item}) => (
            <SettingsListItem
              item={item}
              onPress={() => handleNavigation(item)}
            />
          )}
        />
      </View>
      <LogoutPopup
        visible={isLogoutVisible}
        onClose={() => setLogoutVisible(false)}
        onConfirm={() => {
          setLogoutVisible(false);
          navigation.replace('Login');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  header: {
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 80,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    width: '100%',
  },
  backButton: {padding: 10},
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  icon: {width: 28, height: 28},
  iconPlaceholder: {width: 38},
  card: {
    width: '90%',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 5,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.15,
    shadowRadius: 6,
    marginTop: -50,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    marginHorizontal: 10,
  },
  separator: {height: 1, marginVertical: 5},
  listIcon: {width: 26, height: 26, marginRight: 15, resizeMode: 'contain'},
  listText: {fontSize: 17, fontWeight: '500'},
});

export default SettingScreen;
