import React from 'react';
import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native';

interface LogoutPopupProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const LogoutPopup: React.FC<LogoutPopupProps> = ({
  visible,
  onClose,
  onConfirm,
}) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.popup}>
          <Text style={styles.title}>Log Out</Text>
          <Text style={styles.message}>Are you sure you want to log out?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={onClose}
              style={[styles.button, styles.cancelButton]}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onConfirm}
              style={[styles.button, styles.logoutButton]}>
              <Text style={styles.logoutText}>Log Out</Text>
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
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  title: {fontSize: 20, fontWeight: 'bold', marginBottom: 10},
  message: {fontSize: 16, color: 'gray', textAlign: 'center', marginBottom: 20},
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {flex: 1, padding: 12, borderRadius: 10, alignItems: 'center'},
  cancelButton: {backgroundColor: '#E0E0E0', marginRight: 10},
  logoutButton: {backgroundColor: '#600026'},
  cancelText: {fontSize: 16, color: '#333'},
  logoutText: {fontSize: 16, color: 'white'},
});

export default LogoutPopup;
