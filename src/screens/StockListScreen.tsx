import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import {CustomThemeType} from '../theme/theme';
import {StackNavigationProp} from '@react-navigation/stack';
import Header from '../components/Header';
import ImageComponent from '../components/ImageComponent'; // Make sure this path is correct

type StockListScreenProps = {
  navigation: StackNavigationProp<any>;
};

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

  const openForm = (item?: StockItem) => {
    if (item) {
      setFormData(item);
    } else {
      setFormData({id: '', name: '', quantity: 0, unit: ''});
    }
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

  const renderItem = ({item}: {item: StockItem}) => (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.colors.inputText,
          shadowColor: theme.colors.textColor,
        },
      ]}>
      <View style={styles.cardLeft}>
        <Text style={[styles.productName, {color: theme.colors.textColor}]}>
          {item.name}
        </Text>
        <Text style={{color: theme.colors.textColor}}>
          {item.quantity} {item.unit}
        </Text>
      </View>
      <View style={styles.cardRight}>
        <TouchableOpacity onPress={() => openForm(item)} style={styles.iconBtn}>
          <ImageComponent
            name="EditIcon"
            style={[styles.icon, {tintColor: theme.colors.secondary}]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleDelete(item.id)}
          style={styles.iconBtn}>
          <ImageComponent name="deleteIcon" style={[styles.icon]} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.whiteSmoke}]}>
      <Header title="Stock List" onBackPress={() => navigation.goBack()} />

      <FlatList
        contentContainerStyle={styles.listContainer}
        data={stockList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => (
          <View
            style={[
              styles.separator,
              {backgroundColor: theme.colors.whiteSmoke},
            ]}
          />
        )}
      />

      <TouchableOpacity
        style={[styles.fab, {backgroundColor: theme.colors.secondary}]}
        onPress={() => openForm()}>
        <Text style={{color: theme.colors.inputText, fontSize: 20}}>＋</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View
            style={[
              styles.modalContent,
              {backgroundColor: theme.colors.inputText},
            ]}>
            <Text style={[styles.modalTitle, {color: theme.colors.textColor}]}>
              {formData.id ? 'Edit' : 'Add'} Stock
            </Text>
            <TextInput
              placeholder="Medicine Name"
              value={formData.name}
              onChangeText={text => setFormData({...formData, name: text})}
              style={[styles.input, {color: theme.colors.textColor}]}
              placeholderTextColor={theme.colors.disabledColor}
            />
            <TextInput
              placeholder="Quantity"
              keyboardType="numeric"
              value={formData.quantity.toString()}
              onChangeText={text =>
                setFormData({...formData, quantity: Number(text)})
              }
              style={[styles.input, {color: theme.colors.textColor}]}
              placeholderTextColor={theme.colors.disabledColor}
            />
            <TextInput
              placeholder="Unit (e.g. tablets)"
              value={formData.unit}
              onChangeText={text => setFormData({...formData, unit: text})}
              style={[styles.input, {color: theme.colors.textColor}]}
              placeholderTextColor={theme.colors.disabledColor}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={handleSave} style={styles.modalBtn}>
                <Text style={{color: theme.colors.secondary}}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.modalBtn}>
                <Text style={{color: 'red'}}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  listContainer: {padding: 16},
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    elevation: 3,
  },
  cardLeft: {flex: 1},
  productName: {fontSize: 18, fontWeight: '600'},
  cardRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconBtn: {
    padding: 4,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContent: {
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 12,
    fontSize: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  modalBtn: {
    padding: 10,
  },
});

export default StockListScreen;
