import React from 'react';
import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native';

interface LogoutPopupProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  themeColor?: {
    overlay: string;
    background: string;
    text: string;
    buttonCancel: string;
    buttonLogout: string;
    buttonText: string;
  };
}

const LogoutPopup: React.FC<LogoutPopupProps> = ({
  visible,
  onClose,
  onConfirm,
  themeColor = {
    overlay: 'rgba(0,0,0,0.5)',
    background: 'white',
    text: 'gray',
    buttonCancel: '#E0E0E0',
    buttonLogout: '#600026',
    buttonText: 'white',
  },
}) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={[styles.overlay, {backgroundColor: themeColor.overlay}]}>
        <View style={[styles.popup, {backgroundColor: themeColor.background}]}>
          <Text style={[styles.title, {color: themeColor.text}]}>Log Out</Text>
          <Text style={[styles.message, {color: themeColor.text}]}>
            Are you sure you want to log out?
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={onClose}
              style={[
                styles.button,
                {backgroundColor: themeColor.buttonCancel},
              ]}>
              <Text style={[styles.cancelText, {color: themeColor.text}]}>
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onConfirm}
              style={[
                styles.button,
                {backgroundColor: themeColor.buttonLogout},
              ]}>
              <Text style={[styles.logoutText, {color: themeColor.buttonText}]}>
                Log Out
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    width: '80%',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  title: {fontSize: 20, fontWeight: 'bold', marginBottom: 10},
  message: {fontSize: 16, textAlign: 'center', marginBottom: 20},
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    padding: 12,
    borderRadius: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  cancelText: {fontSize: 16},
  logoutText: {fontSize: 16},
});

export default LogoutPopup;
