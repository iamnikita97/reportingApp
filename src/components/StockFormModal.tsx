import React, {useEffect, useState} from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import {CustomThemeType} from '../theme/theme';

type StockItem = {
  id: string;
  name: string;
  quantity: number;
  unit: string;
};

type Props = {
  visible: boolean;
  formData: StockItem;
  setFormData: (data: StockItem) => void;
  onClose: () => void;
  onSave: () => void;
};

const StockFormModal: React.FC<Props> = ({
  visible,
  formData,
  setFormData,
  onClose,
  onSave,
}) => {
  const theme = useTheme<CustomThemeType>();
  const [editedData, setEditedData] = useState<StockItem>(formData);

  useEffect(() => {
    setEditedData(formData);
  }, [formData]);

  const handleSave = () => {
    setFormData(editedData);
    onSave();
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
          <Text style={[styles.modalTitle, {color: theme.colors.onSurface}]}>
            {formData.id ? 'Edit' : 'Add'} Stock
          </Text>

          <TextInput
            style={[
              styles.input,
              {
                borderColor: theme.colors.outline,
                color: theme.colors.onSurface,
              },
            ]}
            placeholder="Medicine Name"
            placeholderTextColor={theme.colors.onSurfaceDisabled}
            value={editedData.name}
            onChangeText={text =>
              setEditedData(prev => ({...prev, name: text}))
            }
          />

          <TextInput
            style={[
              styles.input,
              {
                borderColor: theme.colors.outline,
                color: theme.colors.onSurface,
              },
            ]}
            placeholder="Quantity"
            keyboardType="numeric"
            placeholderTextColor={theme.colors.onSurfaceDisabled}
            value={editedData.quantity.toString()}
            onChangeText={text =>
              setEditedData(prev => ({...prev, quantity: Number(text)}))
            }
          />

          <TextInput
            style={[
              styles.input,
              {
                borderColor: theme.colors.outline,
                color: theme.colors.onSurface,
              },
            ]}
            placeholder="Unit (e.g. tablets)"
            placeholderTextColor={theme.colors.onSurfaceDisabled}
            value={editedData.unit}
            onChangeText={text =>
              setEditedData(prev => ({...prev, unit: text}))
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
    fontSize: 16,
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
    fontSize: 16,
  },
});

export default StockFormModal;
