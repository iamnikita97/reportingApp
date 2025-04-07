import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import {useTheme} from 'react-native-paper';
import {CustomThemeType} from '../theme/theme';
import ImageComponent from '../components/ImageComponent';
import NotificationMenu from '../components/NotificationMenu';
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';

type Notification = {
  id: string;
  message: string;
  time: string;
  image: any;
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

const NotificationScreen: React.FC<{navigation: any}> = ({navigation}) => {
  const theme = useTheme() as CustomThemeType;
  const [menuVisible, setMenuVisible] = useState(false);
  const [notifications, setNotifications] = useState(initialNotifications);

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter(item => item.id !== id));
  };

  const handleMarkAllRead = () => {
    // logic to mark all as read
    setMenuVisible(false);
  };

  const handleDeleteAll = () => {
    setNotifications([]);
    setMenuVisible(false);
  };

  const renderRightActions = (id: string) => (
    <TouchableOpacity
      style={[styles.deleteButton, {backgroundColor: theme.colors.primary}]}
      onPress={() => deleteNotification(id)}>
      <ImageComponent
        name="deleteIcon"
        style={[styles.deleteIcon, {tintColor: theme.colors.inputText}]}
      />
    </TouchableOpacity>
  );

  return (
    <GestureHandlerRootView style={styles.container}>
      <View
        style={[styles.container, {backgroundColor: theme.colors.background}]}>
        <Header
          title="Notifications"
          onBackPress={() => navigation.goBack()}
          showRightIcon={true}
          onRightIconPress={() => setMenuVisible(true)}
        />
        <FlatList
          data={notifications}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
          renderItem={({item}) => (
            <Swipeable renderRightActions={() => renderRightActions(item.id)}>
              <View
                style={[
                  styles.notificationCard,
                  {
                    backgroundColor: theme.colors.lightPink,
                    shadowColor: theme.colors.textColor,
                  },
                ]}>
                <Image
                  source={item.image}
                  style={[
                    styles.profileImage,
                    {borderColor: theme.colors.roseColor},
                  ]}
                />
                <View style={styles.messageContainer}>
                  <Text
                    style={[
                      styles.messageText,
                      {color: theme.colors.textColor},
                    ]}>
                    {item.message}
                  </Text>
                </View>
                <Text
                  style={[styles.timeText, {color: theme.colors.lightColor}]}>
                  {item.time}
                </Text>
              </View>
            </Swipeable>
          )}
        />
        <NotificationMenu
          visible={menuVisible}
          onClose={() => setMenuVisible(false)}
          onMarkAllRead={handleMarkAllRead}
          onDeleteAll={handleDeleteAll}
        />
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    padding: 15,
  },
  deleteIcon: {
    width: 30,
    height: 30,
  },
  notificationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 15,
    marginBottom: 10,
    elevation: 3,
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
  },
  messageContainer: {
    flex: 1,
  },
  messageText: {
    fontSize: 14,
    fontWeight: 'bold',
    flexShrink: 1,
  },
  timeText: {
    fontSize: 12,
    alignSelf: 'flex-end',
  },
  deleteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: '85%',
    borderRadius: 15,
    marginLeft: -15,
  },
});

export default NotificationScreen;
