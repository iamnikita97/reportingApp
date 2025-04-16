import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {CustomThemeType} from '../theme/theme';
import ImageComponent from './ImageComponent';

type StockItem = {
  id: string;
  name: string;
  quantity: number;
  unit: string;
};

type Props = {
  item: StockItem;
  theme: CustomThemeType;
  onEdit: (item: StockItem) => void;
  onDelete: (id: string) => void;
};

const StockListItem: React.FC<Props> = ({item, theme, onEdit, onDelete}) => {
  return (
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
        <TouchableOpacity onPress={() => onEdit(item)} style={styles.iconBtn}>
          <ImageComponent
            name="EditIcon"
            style={[styles.icon, {tintColor: theme.colors.secondary}]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onDelete(item.id)}
          style={styles.iconBtn}>
          <ImageComponent name="deleteIcon" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default StockListItem;
