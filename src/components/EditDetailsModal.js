import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Modal} from 'react-native';
import {useTheme} from 'react-native-paper';

const EditDetailsModal = ({visible, onClose, userDetails, onSave}) => {
  const {colors} = useTheme();
  const [editedDetails, setEditedDetails] = useState(userDetails);

  useEffect(() => {
    setEditedDetails(userDetails);
  }, [userDetails]);

  const handleSave = () => {
    onSave(editedDetails);
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={[styles.modalContainer, {backgroundColor: colors.background}]}>
          <Text style={styles.modalTitle}>Edit User Details</Text>

          <TextInput
            style={styles.input}
            placeholder="Name"
            value={editedDetails?.name}
            onChangeText={text => setEditedDetails({...editedDetails, name: text})}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={editedDetails?.email}
            onChangeText={text => setEditedDetails({...editedDetails, email: text})}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone"
            value={editedDetails?.phone}
            onChangeText={text => setEditedDetails({...editedDetails, phone: text})}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, {backgroundColor: colors.primary}]} onPress={handleSave}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {backgroundColor: 'gray'}]} onPress={onClose}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default EditDetailsModal;
