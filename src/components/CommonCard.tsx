import React, {useState, ReactNode} from 'react';
import {useTheme} from 'react-native-paper';
import ImageComponent from './ImageComponent';
import {CustomThemeType} from '../theme/theme';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface CommonCardProps {
  title: string;
  content: ReactNode;
  extraContent?: ReactNode;
  onEdit?: () => void;
}

const CommonCard: React.FC<CommonCardProps> = ({
  title,
  content,
  extraContent,
  onEdit,
}) => {
  const theme = useTheme() as CustomThemeType;
  const [expanded, setExpanded] = useState(false);

  return (
    <TouchableOpacity
      style={[styles.card, {backgroundColor: theme.colors.background}]}
      onPress={() => setExpanded(!expanded)}>
      <View style={styles.header}>
        <Text style={[styles.title, {color: theme.colors.textColor}]}>
          {title}
        </Text>
        <ImageComponent
          name={expanded ? 'chevronUpIcon' : 'chevronDownIcon'}
          style={styles.icon}
        />
      </View>
      {content}
      {expanded && (
        <View style={styles.details}>
          {extraContent}
          {onEdit && (
            <TouchableOpacity
              style={[
                styles.editButton,
                {backgroundColor: theme.colors.primary},
              ]}
              onPress={onEdit}>
              <Text style={[styles.editText, {color: theme.colors.textColor}]}>
                Edit
              </Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
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
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  details: {
    marginTop: 10,
  },
  editButton: {
    marginTop: 5,
    padding: 5,
    borderRadius: 5,
  },
  editText: {
    textAlign: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default CommonCard;
