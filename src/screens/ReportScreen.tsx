import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'react-native-paper';
import Header from '../components/Header';
import {CustomThemeType} from '../theme/theme';

interface ReportItem {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'Info' | 'Warning' | 'Critical';
}

const reports: ReportItem[] = [
  {
    id: '1',
    title: 'Paracetamol Stock Updated',
    description: 'Stock updated to 120 units.',
    date: '2025-04-03',
    type: 'Info',
  },
  {
    id: '2',
    title: 'Cough Syrup Out of Stock',
    description: 'No units left in stock.',
    date: '2025-04-02',
    type: 'Critical',
  },
  {
    id: '3',
    title: 'New Product Added - Vitamin D',
    description: 'Added under Supplements category.',
    date: '2025-04-01',
    type: 'Info',
  },
  {
    id: '4',
    title: 'Low Inventory - Aspirin',
    description: 'Only 10 units remaining.',
    date: '2025-03-30',
    type: 'Warning',
  },
];

const ReportScreen: React.FC = () => {
  const navigation = useNavigation();
  const theme = useTheme() as CustomThemeType;

  const getBorderColor = (type: ReportItem['type']) => {
    switch (type) {
      case 'Info':
        return theme.colors.primary;
      case 'Warning':
        return theme.colors.orangeColor || '#FFA500';
      case 'Critical':
        return theme.colors.orangeColor || '#FF4C4C';
    }
  };

  const renderItem = ({item}: {item: ReportItem}) => (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.colors.inputText,
          borderColor: getBorderColor(item.type),
        },
      ]}>
      <Text style={[styles.title, {color: theme.colors.textColor}]}>
        {item.title}
      </Text>
      <Text style={[styles.description, {color: theme.colors.subTitle}]}>
        {item.description}
      </Text>
      <Text style={[styles.date, {color: theme.colors.lightColor}]}>
        {item.date}
      </Text>
    </View>
  );

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.whiteSmoke}]}>
      <Header title="Reports" onBackPress={() => navigation.goBack()} />
      <FlatList
        data={reports}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity
        style={[styles.addButton, {backgroundColor: theme.colors.primary}]}
        onPress={() => {
          // Navigate to create report screen
        }}>
        <Text style={[styles.addButtonText, {color: theme.colors.inputText}]}>
          + Create Report
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 20,
  },
  card: {
    borderWidth: 1.5,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
  },
  date: {
    fontSize: 12,
    fontStyle: 'italic',
  },
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

export default ReportScreen;
