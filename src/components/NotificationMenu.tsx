// components/NotificationMenu.tsx
import React from 'react';
import {useTheme} from 'react-native-paper';
import {CustomThemeType} from '../theme/theme';
import {Modal, TouchableOpacity, View, Text, StyleSheet} from 'react-native';

type Props = {
  visible: boolean;
  onClose: () => void;
  onMarkAllRead: () => void;
  onDeleteAll: () => void;
};

const NotificationMenu: React.FC<Props> = ({
  visible,
  onClose,
  onMarkAllRead,
  onDeleteAll,
}) => {
  const theme = useTheme() as CustomThemeType;

  return (
    <Modal transparent visible={visible} animationType="fade">
      <TouchableOpacity style={styles.overlay} onPress={onClose}>
        <View
          style={[
            styles.menuContainer,
            {backgroundColor: theme.colors.whiteSmoke},
          ]}>
          <TouchableOpacity style={styles.menuItem} onPress={onMarkAllRead}>
            <Text style={{color: theme.colors.textColor}}>
              Mark all as read
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={onDeleteAll}>
            <Text style={{color: theme.colors.textColor}}>
              Delete all notifications
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    padding: 15,
    marginTop: 50,
  },
  menuContainer: {
    width: 200,
    borderRadius: 8,
    paddingVertical: 10,
    elevation: 5,
  },
  menuItem: {
    padding: 15,
  },
});

export default NotificationMenu;
