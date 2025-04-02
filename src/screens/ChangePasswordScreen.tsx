import React, {useState} from 'react';
import Header from '../components/Header';
import {RouteProp} from '@react-navigation/native';
import CommonTextInput from '../components/CommonTextInput';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';

interface ChangePasswordScreenProps {
  navigation: StackNavigationProp<any>;
  route: RouteProp<any, any>;
}

const ChangePasswordScreen: React.FC<ChangePasswordScreenProps> = ({
  navigation,
}) => {
  const theme = useTheme();
  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
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
      <TouchableOpacity
        style={[styles.saveButton, {backgroundColor: theme.colors.primary}]}>
        <Text style={[styles.saveButtonText, {color: theme.colors.onPrimary}]}>
          Change Password
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    paddingVertical: 12,
    width: '50%',
    alignItems: 'center',
    borderRadius: 12,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChangePasswordScreen;
