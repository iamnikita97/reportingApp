import React from 'react';
import ImageComponent from '../components/ImageComponent';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

const settingsOptions = [
  {id: '1', name: 'Edit profile', icon: 'userProfileIcon'},
  {id: '2', name: 'Security', icon: 'security'},
  {id: '3', name: 'Notifications', icon: 'notificationIcon'},
  {id: '4', name: 'Privacy', icon: 'privacyIcon'},
  {id: '5', name: 'Help & Support', icon: 'helpIcon'},
  {id: '6', name: 'Terms and Policies', icon: 'policiesIcon'},
  {id: '7', name: 'Log out', icon: 'logoutIcon'},
];

const SettingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <ImageComponent name="arrowIcon" style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Settings</Text>
        <View style={styles.iconPlaceholder} />
      </View>
      <View style={styles.card}>
        <FlatList
          data={settingsOptions}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.listItem}
              onPress={() => {
                if (item.name === 'Edit profile') {
                  navigation.navigate('EditProfile');
                } else if (item.name === 'Notifications') {
                  navigation.navigate('Notification'); // Ensure 'Notification' exists in the stack
                }
              }}>
              <ImageComponent name={item.icon} style={styles.listIcon} />
              <Text style={styles.listText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    paddingTop: 0,
  },
  header: {
    height: 150,
    backgroundColor: '#600026',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 80,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    width: '100%',
  },
  backButton: {
    padding: 10,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    flex: 1,
    textAlign: 'center',
  },
  icon: {
    width: 28,
    height: 28,
    tintColor: 'white',
  },
  iconPlaceholder: {
    width: 38,
  },
  card: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 5,
    shadowColor: '#000',
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
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 5,
  },
  listIcon: {
    width: 26,
    height: 26,
    marginRight: 15,
    resizeMode: 'contain',
  },
  listText: {
    fontSize: 17,
    fontWeight: '500',
  },
});

export default SettingScreen;
