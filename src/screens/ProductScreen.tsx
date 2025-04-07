// screens/ProductScreen.tsx

import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
import {CustomThemeType} from '../theme/theme';
import Header from '../components/Header';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/Navigation';

interface Product {
  id: string;
  name: string;
  category: string;
  quantity: number;
  status: 'Available' | 'Out of Stock';
}

const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Paracetamol',
    category: 'Pain Relief',
    quantity: 120,
    status: 'Available',
  },
  {
    id: '2',
    name: 'Cough Syrup',
    category: 'Cold & Cough',
    quantity: 0,
    status: 'Out of Stock',
  },
  {
    id: '3',
    name: 'Vitamin C',
    category: 'Supplements',
    quantity: 75,
    status: 'Available',
  },
];

const ProductScreen: React.FC = () => {
  const theme = useTheme() as CustomThemeType;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const renderItem = ({item}: {item: Product}) => (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.colors.inputText,
          borderColor:
            item.status === 'Available'
              ? theme.colors.primary
              : theme.colors.dangerColor,
        },
      ]}>
      <View style={styles.cardHeader}>
        <Text style={[styles.name, {color: theme.colors.textColor}]}>
          {item.name}
        </Text>
        <Text
          style={[
            styles.status,
            {
              color:
                item.status === 'Available'
                  ? theme.colors.primary
                  : theme.colors.dangerColor,
            },
          ]}>
          {item.status}
        </Text>
      </View>
      <Text style={[styles.category, {color: theme.colors.subTitle}]}>
        Category: {item.category}
      </Text>
      <Text style={[styles.quantity, {color: theme.colors.lightColor}]}>
        Quantity: {item.quantity}
      </Text>
    </View>
  );

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.whiteSmoke}]}>
      <Header title="Products" onBackPress={() => navigation.goBack()} />
      <FlatList
        data={sampleProducts}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity
        style={[styles.addButton, {backgroundColor: theme.colors.primary}]}
        onPress={() => navigation.navigate('AddProduct')}>
        <Text style={[styles.addButtonText, {color: theme.colors.inputText}]}>
          + Add Product
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  list: {padding: 20},
  card: {
    borderWidth: 1.5,
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  name: {fontSize: 18, fontWeight: 'bold'},
  status: {fontSize: 14, fontWeight: '600'},
  category: {fontSize: 14},
  quantity: {fontSize: 14, marginTop: 5},
  addButton: {
    margin: 20,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProductScreen;
