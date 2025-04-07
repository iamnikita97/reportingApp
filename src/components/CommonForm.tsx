import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import {CustomThemeType} from '../theme/theme';

interface FormField {
  name: string;
  label: string;
  placeholder: string;
  keyboardType?: 'default' | 'email-address' | 'phone-pad';
}

interface CommonFormProps {
  fields: FormField[];
  onSubmit: (data: Record<string, string>) => void;
  onCancel: () => void;
  initialValues?: Record<string, string>;
  readOnly?: boolean;
}

const CommonForm: React.FC<CommonFormProps> = ({
  fields,
  onSubmit,
  onCancel,
  initialValues = {},
  readOnly = false,
}) => {
  const theme = useTheme() as CustomThemeType;

  const initialFormState = fields.reduce(
    (acc, field) => {
      acc[field.name] = initialValues[field.name] || '';
      return acc;
    },
    {} as Record<string, string>,
  );

  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    const newInitialFormState = fields.reduce(
      (acc, field) => {
        acc[field.name] = initialValues[field.name] || '';
        return acc;
      },
      {} as Record<string, string>,
    );
    setFormData(newInitialFormState);
  }, [initialValues, fields]);

  const handleChange = (fieldName: string, value: string) => {
    setFormData({...formData, [fieldName]: value});
  };

  return (
    <View style={styles.container}>
      {fields.map(field => (
        <View key={field.name}>
          <Text style={styles.label}>{field.label}</Text>
          <TextInput
            style={[
              styles.input,
              {
                borderColor: theme.colors.inputBorder,
                backgroundColor: readOnly
                  ? theme.colors.iconColor
                  : theme.colors.inputText,
              },
            ]}
            value={formData[field.name]}
            onChangeText={text => handleChange(field.name, text)}
            placeholder={field.placeholder}
            keyboardType={field.keyboardType || 'default'}
            editable={!readOnly}
          />
        </View>
      ))}

      {!readOnly && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.cancelButton,
              {backgroundColor: theme.colors.lightColor},
            ]}
            onPress={onCancel}>
            <Text style={[styles.buttonText, {color: theme.colors.inputText}]}>
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.submitButton,
              {backgroundColor: theme.colors.primary},
            ]}
            onPress={() => onSubmit(formData)}>
            <Text style={[styles.buttonText, {color: theme.colors.inputText}]}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  cancelButton: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginRight: 5,
  },
  submitButton: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginLeft: 5,
  },
  buttonText: {
    fontWeight: 'bold',
  },
});

export default CommonForm;
