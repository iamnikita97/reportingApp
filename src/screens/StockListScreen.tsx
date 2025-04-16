import React, {useState, useMemo} from 'react';
import Header from '../components/Header';
import {useTheme} from 'react-native-paper';
import {CustomThemeType} from '../theme/theme';
import StockListItem from '../components/StockListItem';
import StockFormModal from '../components/StockFormModal';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

type StockItem = {
  id: string;
  name: string;
  quantity: number;
  unit: string;
};

const initialData: StockItem[] = [
  {id: '1', name: 'Duphaston', quantity: 25, unit: 'tablets'},
  {id: '2', name: 'Folic Acid', quantity: 80, unit: 'strips'},
  {id: '3', name: 'Clomiphene Citrate', quantity: 40, unit: 'packs'},
  {id: '4', name: 'Progesterone', quantity: 35, unit: 'capsules'},
  {id: '5', name: 'Letrozole', quantity: 20, unit: 'tablets'},
  {id: '6', name: 'Estrogen Cream', quantity: 15, unit: 'tubes'},
];

type StockListScreenProps = {
  navigation: StackNavigationProp<any>;
};

const ItemSeparator: React.FC<{color: string}> = ({color}) => (
  <View style={[styles.separator, {backgroundColor: color}]} />
);

const StockListScreen: React.FC<StockListScreenProps> = ({navigation}) => {
  const theme = useTheme() as CustomThemeType;
  const [stockList, setStockList] = useState<StockItem[]>(initialData);
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState<StockItem>({
    id: '',
    name: '',
    quantity: 0,
    unit: '',
  });

  const separator = useMemo(() => {
    return () => <ItemSeparator color={theme.colors.whiteSmoke} />;
  }, [theme.colors.whiteSmoke]);

  const openForm = (item?: StockItem) => {
    setFormData(item ?? {id: '', name: '', quantity: 0, unit: ''});
    setModalVisible(true);
  };

  const handleSave = () => {
    if (formData.id) {
      setStockList(prev =>
        prev.map(item => (item.id === formData.id ? formData : item)),
      );
    } else {
      setStockList(prev => [
        ...prev,
        {...formData, id: (Math.random() * 10000).toFixed(0)},
      ]);
    }
    setModalVisible(false);
  };

  const handleDelete = (id: string) => {
    setStockList(prev => prev.filter(item => item.id !== id));
  };

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.whiteSmoke}]}>
      <Header title="Stock List" onBackPress={() => navigation.goBack()} />

      <FlatList
        contentContainerStyle={styles.listContainer}
        data={stockList}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <StockListItem
            item={item}
            theme={theme}
            onEdit={openForm}
            onDelete={handleDelete}
          />
        )}
        ItemSeparatorComponent={separator}
      />

      <TouchableOpacity
        style={[styles.fab, {backgroundColor: theme.colors.secondary}]}
        onPress={() => openForm()}>
        <Text style={[styles.fabIcon, {color: theme.colors.inputText}]}>
          ＋
        </Text>
      </TouchableOpacity>
      <StockFormModal
        visible={modalVisible}
        formData={formData}
        setFormData={setFormData}
        onClose={() => setModalVisible(false)}
        onSave={handleSave}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  listContainer: {padding: 16},
  separator: {height: 12},
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  fabIcon: {
    fontSize: 20,
  },
});

export default StockListScreen;
