import React, {useState, useEffect} from 'react';
import {useTheme} from 'react-native-paper';
import {
  View,
  Text,
  Modal,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

interface UserDetails {
  name: string;
  email: string;
  phone: string;
}

interface EditDetailsModalProps {
  visible: boolean;
  onClose: () => void;
  userDetails: UserDetails | null;
  onSave: (details: UserDetails) => void;
}

const EditDetailsModal: React.FC<EditDetailsModalProps> = ({
  visible,
  onClose,
  userDetails,
  onSave,
}) => {
  const theme = useTheme();
  const [editedDetails, setEditedDetails] = useState<UserDetails | null>(
    userDetails,
  );

  useEffect(() => {
    setEditedDetails(userDetails);
  }, [userDetails]);

  const handleSave = (): void => {
    if (editedDetails) {
      onSave(editedDetails);
      onClose();
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View
        style={[styles.modalOverlay, {backgroundColor: theme.colors.backdrop}]}>
        <View
          style={[
            styles.modalContainer,
            {backgroundColor: theme.colors.background},
          ]}>
          <Text style={styles.modalTitle}>Edit User Details</Text>

          <TextInput
            style={[styles.input, {borderColor: theme.colors.outline}]}
            placeholder="Name"
            placeholderTextColor={theme.colors.onSurfaceDisabled}
            value={editedDetails?.name || ''}
            onChangeText={text =>
              setEditedDetails(prev => (prev ? {...prev, name: text} : null))
            }
          />
          <TextInput
            style={[styles.input, {borderColor: theme.colors.outline}]}
            placeholder="Email"
            placeholderTextColor={theme.colors.onSurfaceDisabled}
            value={editedDetails?.email || ''}
            onChangeText={text =>
              setEditedDetails(prev => (prev ? {...prev, email: text} : null))
            }
          />
          <TextInput
            style={[styles.input, {borderColor: theme.colors.outline}]}
            placeholder="Phone"
            placeholderTextColor={theme.colors.onSurfaceDisabled}
            value={editedDetails?.phone || ''}
            onChangeText={text =>
              setEditedDetails(prev => (prev ? {...prev, phone: text} : null))
            }
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, {backgroundColor: theme.colors.primary}]}
              onPress={handleSave}>
              <Text
                style={[styles.buttonText, {color: theme.colors.onPrimary}]}>
                Save
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, {backgroundColor: theme.colors.secondary}]}
              onPress={onClose}>
              <Text
                style={[styles.buttonText, {color: theme.colors.onSecondary}]}>
                Cancel
              </Text>
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
    fontWeight: 'bold',
  },
});

export default EditDetailsModal;
