import React from 'react';
import {useTheme} from 'react-native-paper';
import {CustomThemeType} from '../theme/theme';
import {Modal, View, Text, TouchableOpacity, StyleSheet} from 'react-native';

type FilterOption = {
  label: string;
  values: {label: string; value: string}[];
  selectedValue: string;
  onSelect: (value: string) => void;
};

type CommonFilterModalProps = {
  visible: boolean;
  title: string;
  options: FilterOption[];
  onClose: () => void;
};

const CommonFilterModal: React.FC<CommonFilterModalProps> = ({
  visible,
  title,
  options,
  onClose,
}) => {
  const theme = useTheme() as CustomThemeType;

  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      animationType="slide"
      transparent>
      <View
        style={[
          styles.modalBackdrop,
          {backgroundColor: theme.colors.backdrop},
        ]}>
        <View
          style={[
            styles.modalContent,
            {backgroundColor: theme.colors.background},
          ]}>
          <Text style={[styles.modalTitle, {color: theme.colors.textColor}]}>
            {title}
          </Text>

          {options.map((option, index) => (
            <View key={index} style={styles.filterOption}>
              <Text style={{color: theme.colors.textColor}}>
                {option.label}:
              </Text>
              <View style={styles.filterButtons}>
                {option.values.map((val, idx) => (
                  <TouchableOpacity
                    key={idx}
                    onPress={() => option.onSelect(val.value)}
                    style={[
                      styles.filterButton,
                      {backgroundColor: theme.colors.lightColor},
                      option.selectedValue === val.value && {
                        backgroundColor: theme.colors.primary,
                      },
                    ]}>
                    <Text style={{color: theme.colors.textColor}}>
                      {val.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ))}
          <TouchableOpacity
            style={[
              styles.closeButton,
              {backgroundColor: theme.colors.primary},
            ]}
            onPress={onClose}>
            <Text
              style={[styles.closeButtonText, {color: theme.colors.textColor}]}>
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackdrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  filterOption: {
    marginBottom: 10,
  },
  filterButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  filterButton: {
    padding: 5,
    margin: 2,
    borderRadius: 5,
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    fontWeight: 'bold',
  },
});

export default CommonFilterModal;
