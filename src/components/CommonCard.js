import React, {useState} from 'react';
import {useTheme} from 'react-native-paper';
import ImageComponent from './ImageComponent';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CommonCard = ({title, content, extraContent, onEdit}) => {
  const {colors} = useTheme();
  const [expanded, setExpanded] = useState(false);

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => setExpanded(!expanded)}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <ImageComponent
          name={expanded ? 'chevronUpIcon' : 'chevronDownIcon'}
          size={20}
        />
      </View>
      {content}
      {expanded && (
        <View style={styles.details}>
          {extraContent}
          {onEdit && (
            <TouchableOpacity
              style={[styles.editButton, {backgroundColor: colors.primary}]}
              onPress={onEdit}>
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {fontSize: 16, fontWeight: 'bold'},
  details: {marginTop: 10},
  editButton: {
    marginTop: 5,
    padding: 5,
    borderRadius: 5,
  },
  editText: {color: '#fff', textAlign: 'center'},
});

export default CommonCard;
