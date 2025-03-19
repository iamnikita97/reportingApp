import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';
import Header from '../components/Header';
import ImageComponent from '../components/ImageComponent';

type Notification = {
  id: string;
  message: string;
  time: string;
  image: any; // Since require() is used, keeping it as `any`
};

const initialNotifications: Notification[] = [
  {
    id: '1',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
];

type NotificationScreenProps = {
  navigation: any; // Consider using `NavigationProp` from `@react-navigation/native`
};

const NotificationScreen: React.FC<NotificationScreenProps> = ({
  navigation,
}) => {
  const [notifications, setNotifications] =
    useState<Notification[]>(initialNotifications);

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter(item => item.id !== id));
  };

  const renderRightActions = (id: string) => (
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

const styles = StyleSheet.create({
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
});

export default NotificationScreen;
