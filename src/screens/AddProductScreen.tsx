import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Picker,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'react-native-paper';
import Header from '../components/Header';
import {CustomThemeType} from '../theme/theme';

const AddProductScreen: React.FC = () => {
  const theme = useTheme() as CustomThemeType;
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [status, setStatus] = useState<'Available' | 'Out of Stock'>(
    'Available',
  );

  const handleAddProduct = () => {
    if (!name || !category || !quantity) {
      alert('Please fill all fields');
      return;
    }

    // You can add your logic here to save the product
    console.log({name, category, quantity, status});

    navigation.goBack(); // Navigate back to product list after adding
  };

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.whiteSmoke}]}>
      <Header title="Add Product" onBackPress={() => navigation.goBack()} />

      <View style={styles.form}>
        <Text style={[styles.label, {color: theme.colors.textColor}]}>
          Product Name
        </Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={[
            styles.input,
            {
              borderColor: theme.colors.disabledColor,
              color: theme.colors.textColor,
            },
          ]}
          placeholder="Enter product name"
          placeholderTextColor={theme.colors.subTitle}
        />

        <Text style={[styles.label, {color: theme.colors.textColor}]}>
          Category
        </Text>
        <TextInput
          value={category}
          onChangeText={setCategory}
          style={[
            styles.input,
            {
              borderColor: theme.colors.disabledColor,
              color: theme.colors.textColor,
            },
          ]}
          placeholder="Enter product category"
          placeholderTextColor={theme.colors.subTitle}
        />

        <Text style={[styles.label, {color: theme.colors.textColor}]}>
          Quantity
        </Text>
        <TextInput
          value={quantity}
          onChangeText={setQuantity}
          keyboardType="numeric"
          style={[
            styles.input,
            {
              borderColor: theme.colors.disabledColor,
              color: theme.colors.textColor,
            },
          ]}
          placeholder="Enter quantity"
          placeholderTextColor={theme.colors.subTitle}
        />

        <Text style={[styles.label, {color: theme.colors.textColor}]}>
          Status
        </Text>
        <View
          style={[
            styles.pickerContainer,
            {borderColor: theme.colors.disabledColor},
          ]}>
          <Picker
            selectedValue={status}
            onValueChange={itemValue => setStatus(itemValue)}
            style={{color: theme.colors.textColor}}>
            <Picker.Item label="Available" value="Available" />
            <Picker.Item label="Out of Stock" value="Out of Stock" />
          </Picker>
        </View>

        <TouchableOpacity
          style={[styles.button, {backgroundColor: theme.colors.primary}]}
          onPress={handleAddProduct}>
          <Text style={[styles.buttonText, {color: theme.colors.inputText}]}>
            Save Product
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  form: {padding: 20},
  label: {
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 15,
    fontSize: 14,
  },
  pickerContainer: {
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AddProductScreen;
