import React, {useState} from 'react';
import Header from '../components/Header';
import {Swipeable} from 'react-native-gesture-handler';
import ImageComponent from '../components/ImageComponent';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';

const initialNotifications = [
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
  const [notifications, setNotifications] = useState(initialNotifications);

  const deleteNotification = id => {
    setNotifications(notifications.filter(item => item.id !== id));
  };

  const renderRightActions = id => (
    <TouchableOpacity
      style={styles.deleteButton}
      onPress={() => deleteNotification(id)}>
      <ImageComponent name="deleteIcon" style={styles.deleteIcon} />
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      <Header
        title="Notifications"
        onBackPress={() => navigation.goBack()}
        rightIcon="moreIcon"
        onRightPress={() => Alert.alert('More options clicked')}
      />
      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        contentContainerStyle={{padding: 15}}
        renderItem={({item}) => (
          <Swipeable renderRightActions={() => renderRightActions(item.id)}>
            <View style={styles.notificationCard}>
              <Image source={item.image} style={styles.profileImage} />
              <View style={{flex: 1}}>
                <Text style={styles.messageText}>{item.message}</Text>
              </View>
              <Text style={styles.timeText}>{item.time}</Text>
            </View>
          </Swipeable>
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
  deleteIcon: {
    width: 30,
    height: 30,
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
  deleteButton: {
    backgroundColor: '#600026',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: '85%',
    borderRadius: 15,
    marginLeft: -15,
  },
};

export default NotificationScreen;
