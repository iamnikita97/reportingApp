import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import {useTheme} from 'react-native-paper';
import {CustomThemeType} from '../theme/theme';
import {DatePickerModal} from 'react-native-paper-dates';
import ImageComponent from '../components/ImageComponent';
import {StackNavigationProp} from '@react-navigation/stack';

type Props = {
  navigation: StackNavigationProp<any>;
};

const EditProfileScreen: React.FC<Props> = ({navigation}) => {
  const theme = useTheme() as CustomThemeType;
  const [date, setDate] = useState<Date>(new Date(1997, 3, 25));
  const [showPicker, setShowPicker] = useState<boolean>(false);

  const onConfirm = (params: {date?: Date}) => {
    setShowPicker(false);
    if (params.date) {
      setDate(params.date);
    }
  };

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <Header title="Edit Profile" onBackPress={() => navigation.goBack()} />
      <View style={styles.imageContainer}>
        <Image
          source={{uri: 'https://randomuser.me/api/portraits/women/65.jpg'}}
          style={[styles.profileImage, {borderColor: theme.colors.primary}]}
        />
        <TouchableOpacity
          style={[styles.editIcon, {backgroundColor: theme.colors.surface}]}>
          <ImageComponent
            name="cameraIcon"
            style={[styles.cameraIcon, {tintColor: theme.colors.primary}]}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <Text style={[styles.label, {color: theme.colors.textColor}]}>
          Name
        </Text>
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: theme.colors.surface,
              borderColor: theme.colors.inputBorder,
            },
          ]}
          value="Nikita Mahajan"
          editable={false}
        />

        <Text style={[styles.label, {color: theme.colors.textColor}]}>
          Email
        </Text>
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: theme.colors.surface,
              borderColor: theme.colors.inputBorder,
            },
          ]}
          value="nikita.mahajan87@gmail.com"
          keyboardType="email-address"
          editable={false}
        />

        <Text style={[styles.label, {color: theme.colors.textColor}]}>
          Password
        </Text>
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: theme.colors.surface,
              borderColor: theme.colors.inputBorder,
            },
          ]}
          value="**********"
          secureTextEntry
          editable={false}
        />

        <Text style={[styles.label, {color: theme.colors.textColor}]}>
          Date of Birth
        </Text>
        <TouchableOpacity
          style={[
            styles.datePickerContainer,
            {
              backgroundColor: theme.colors.surface,
              borderColor: theme.colors.inputBorder,
            },
          ]}
          onPress={() => setShowPicker(true)}
          activeOpacity={0.7}>
          <TextInput
            style={[styles.dateInput, {color: theme.colors.textColor}]}
            value={date.toLocaleDateString('en-GB')}
            editable={false}
            pointerEvents="none"
          />
          <ImageComponent
            name="dropdownIcon"
            style={[styles.arrowIcon, {tintColor: theme.colors.primary}]}
          />
        </TouchableOpacity>

        <DatePickerModal
          locale="en"
          mode="single"
          visible={showPicker}
          date={date}
          onConfirm={onConfirm}
          onDismiss={() => setShowPicker(false)}
        />
      </View>
      <TouchableOpacity
        style={[styles.saveButton, {backgroundColor: theme.colors.primary}]}>
        <Text style={[styles.saveButtonText, {color: theme.colors.onPrimary}]}>
          Save Changes
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
  imageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
  },
  editIcon: {
    position: 'absolute',
    bottom: 5,
    right: 10,
    borderRadius: 20,
    padding: 5,
    elevation: 3,
  },
  cameraIcon: {
    width: 18,
    height: 18,
  },
  form: {
    width: '85%',
    marginTop: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 15,
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    height: 50,
  },
  dateInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
  },
  arrowIcon: {
    width: 18,
    height: 18,
    marginLeft: 10,
  },
  saveButton: {
    marginTop: 20,
    paddingVertical: 12,
    width: '40%',
    alignItems: 'center',
    borderRadius: 12,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditProfileScreen;
