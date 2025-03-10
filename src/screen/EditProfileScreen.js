import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {DatePickerModal} from 'react-native-paper-dates';
import ImageComponent from '../components/ImageComponent';

const EditProfileScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date(1997, 3, 25));
  const [showPicker, setShowPicker] = useState(false);

  const onConfirm = params => {
    setShowPicker(false);
    if (params.date) {
      setDate(params.date);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <ImageComponent name="arrowIcon" style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Edit Profile</Text>
        <View style={styles.iconPlaceholder} />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: 'https://randomuser.me/api/portraits/women/65.jpg'}}
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.editIcon}>
          <ImageComponent name="cameraIcon" style={styles.cameraIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} value="Nikita Mahajan" />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value="nikita.mahajan87@gmail.com"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value="**********"
          secureTextEntry={true}
        />

        <Text style={styles.label}>Date of Birth</Text>
        <TouchableOpacity
          style={styles.datePickerContainer}
          onPress={() => setShowPicker(true)}
          activeOpacity={0.7}>
          <TextInput
            style={styles.dateInput}
            value={date.toLocaleDateString('en-GB')}
            editable={false}
            pointerEvents="none"
          />
          <ImageComponent name="dropdownIcon" style={styles.arrowIcon} />
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
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
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
  header: {
    height: 80,
    backgroundColor: '#600026',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    width: '100%',
  },
  backButton: {
    padding: 10,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    flex: 1,
    textAlign: 'center',
  },
  icon: {
    width: 28,
    height: 28,
    tintColor: 'white',
  },
  iconPlaceholder: {
    width: 38,
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
    borderColor: 'white',
  },
  editIcon: {
    position: 'absolute',
    bottom: 5,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    elevation: 3,
  },
  cameraIcon: {
    width: 18,
    height: 18,
    tintColor: '#600026',
  },
  form: {
    width: '85%',
    marginTop: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  input: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    height: 50,
  },
  dateInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingVertical: 10,
  },
  arrowIcon: {
    width: 18,
    height: 18,
    tintColor: '#600026',
    marginLeft: 10,
  },

  saveButton: {
    marginTop: 20,
    backgroundColor: '#600026',
    paddingVertical: 12,
    width: '40%',
    alignItems: 'center',
    borderRadius: 12,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditProfileScreen;
