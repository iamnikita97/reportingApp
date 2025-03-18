import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const HomeScreen = () => {
  const counts = [
    {title: 'Users', count: 120},
    {title: 'Reports', count: 45},
    {title: 'Customers', count: 10},
  ];

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardCount}>{item.count}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={counts}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  listContainer: {
    paddingBottom: 20, // Adds space at the bottom
  },
  card: {
    width: '100%', // All cards will have the same width
    marginBottom: 15,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#555',
  },
  cardCount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007BFF',
    marginTop: 5,
  },
});

export default HomeScreen;
