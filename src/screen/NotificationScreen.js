import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import ImageComponent from '../components/ImageComponent';

const notifications = [
  {
    id: '1',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit.',
    time: '07:00 AM',
    image: require('../assets/profileIcon.png'),
  },
  {
    id: '2',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    time: '07:00 AM',
    image: require('../assets/profileIcon.png'),
  },
  {
    id: '3',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    time: '07:00 AM',
    image: require('../assets/profileIcon.png'),
  },
  {
    id: '4',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    time: '07:00 AM',
    image: require('../assets/profileIcon.png'),
  },
  {
    id: '5',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    time: '07:00 AM',
    image: require('../assets/profileIcon.png'),
  },
  {
    id: '6',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    time: '07:00 AM',
    image: require('../assets/profileIcon.png'),
  },
  {
    id: '7',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    time: '07:00 AM',
    image: require('../assets/profileIcon.png'),
  },
  {
    id: '8',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    time: '07:00 AM',
    image: require('../assets/profileIcon.png'),
  },
  {
    id: '9',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    time: '07:00 AM',
    image: require('../assets/profileIcon.png'),
  },
];

const NotificationScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <ImageComponent name="arrowIcon" style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Notifications</Text>
        <TouchableOpacity style={styles.menuButton}>
          <ImageComponent name="menuIcon" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        contentContainerStyle={{padding: 15}}
        renderItem={({item}) => (
          <View style={styles.notificationCard}>
            <Image source={item.image} style={styles.profileImage} />

            <View style={{flex: 1}}>
              <Text style={styles.messageText}>{item.message}</Text>
            </View>

            <Text style={styles.timeText}>{item.time}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = {
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#600026',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  backButton: {
    padding: 10,
  },
  menuButton: {
    padding: 10,
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: 'white',
  },
  notificationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAD2E1',
    padding: 12,
    borderRadius: 15,
    marginBottom: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#D88ABF',
  },
  messageText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    flexShrink: 1,
  },
  timeText: {
    fontSize: 12,
    color: 'gray',
    alignSelf: 'flex-end',
  },
};

export default NotificationScreen;
