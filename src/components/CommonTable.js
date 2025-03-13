import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const CommonTable = ({ columns, data, onActionPress }) => {
  return (
    <ScrollView horizontal>
      <View style={styles.container}>
        {/* Table Header */}
        <View style={styles.headerRow}>
          {columns.map((col, index) => (
            <View key={index} style={[styles.headerCell, { width: col.width || 120 }]}>
              <Text style={styles.headerText}>{col.header}</Text>
            </View>
          ))}
          <View style={[styles.headerCell, { width: 100 }]}>
            <Text style={styles.headerText}>Action</Text>
          </View>
        </View>

        {/* Table Body */}
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ flexGrow: 1 }}
          renderItem={({ item, index }) => (
            <View style={[styles.row, index % 2 === 0 ? styles.rowEven : styles.rowOdd]}>
              {columns.map((col, colIndex) => (
                <View key={colIndex} style={[styles.cell, { width: col.width || 120 }]}>
                  <Text style={styles.cellText} numberOfLines={1} ellipsizeMode="tail">
                    {item[col.accessor]}
                  </Text>
                </View>
              ))}
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => onActionPress(item)}
              >
                <Text style={styles.actionText}>Edit</Text>
              </TouchableOpacity>
            </View>
          )}
          ListEmptyComponent={<Text style={styles.noData}>No data found</Text>}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
    margin: 10,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#0056b3',
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  headerCell: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: '#ddd',
  },
  headerText: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  rowEven: {
    backgroundColor: '#f1f1f1',
  },
  rowOdd: {
    backgroundColor: '#ffffff',
  },
  cell: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: '#ddd',
  },
  cellText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  noData: {
    textAlign: 'center',
    padding: 15,
    fontSize: 16,
    color: '#888',
  },
  actionButton: {
    width: 80,
    paddingVertical: 5,
    backgroundColor: '#28a745',
    borderRadius: 5,
    alignItems: 'center',
  },
  actionText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default CommonTable;
