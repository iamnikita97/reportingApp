import React, {useState} from 'react';
import Header from '../components/Header';
import CommonTextInput from '../components/CommonTextInput';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

interface ChangePasswordScreenProps {
  navigation: StackNavigationProp<any>;
  route: RouteProp<any, any>;
}

const ChangePasswordScreen: React.FC<ChangePasswordScreenProps> = ({
  navigation,
}) => {
  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  return (
    <View style={styles.container}>
      <Header title="Change Password" onBackPress={() => navigation.goBack()} />
      <View style={styles.form}>
        <CommonTextInput
          label="Current Password"
          value={currentPassword}
          onChangeText={setCurrentPassword}
          secureTextEntry
        />

        <CommonTextInput
          label="New Password"
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry
        />

        <CommonTextInput
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Change Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: 70,
    display: 'flex',
    alignItems: 'center',
  },
  saveButton: {
    marginTop: 20,
    backgroundColor: '#600026',
    paddingVertical: 12,
    width: '50%',
    alignItems: 'center',
    borderRadius: 12,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChangePasswordScreen;
