import React, {useState, ReactNode} from 'react';
import {useTheme} from 'react-native-paper';
import ImageComponent from './ImageComponent';
import {CustomThemeType} from '../theme/theme';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface CommonCardProps {
  title: string;
  email: string;
  phone: string;
  extraContent?: ReactNode;
  onEdit?: () => void;
  onView?: () => void;
  profileIcon?: string;
}

const CommonCard: React.FC<CommonCardProps> = ({
  title,
  email,
  phone,
  extraContent,
  onEdit,
  onView,
  profileIcon = 'profileIcon',
}) => {
  const theme = useTheme() as CustomThemeType;
  const [expanded, setExpanded] = useState(false);

  return (
    <TouchableOpacity
      style={[styles.card, {backgroundColor: theme.colors.background}]}
      onPress={() => setExpanded(!expanded)}>
      <View style={styles.userContainer}>
        <ImageComponent name={profileIcon} style={styles.profileIcon} />
        <View style={styles.userInfo}>
          <Text style={[styles.title, {color: theme.colors.textColor}]}>
            {title}
          </Text>
          <View style={styles.detailRow}>
            <ImageComponent name="emailIcon" style={styles.detailIcon} />
            <Text style={[styles.detailText, {color: theme.colors.textColor}]}>
              {email}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <ImageComponent name="phoneIcon" style={styles.detailIcon} />
            <Text style={[styles.detailText, {color: theme.colors.textColor}]}>
              {phone}
            </Text>
          </View>
        </View>
        <ImageComponent
          name={expanded ? 'chevronUpIcon' : 'chevronDownIcon'}
          style={styles.expandIcon}
        />
      </View>

      {expanded && <View style={styles.details}>{extraContent}</View>}
      <View style={styles.bottomIcons}>
        {onView && (
          <TouchableOpacity onPress={onView} style={styles.iconButton}>
            <ImageComponent name="ViewIcon" style={styles.icon} />
          </TouchableOpacity>
        )}
        {onEdit && (
          <TouchableOpacity onPress={onEdit} style={styles.iconButton}>
            <ImageComponent
              name="EditIcon"
              style={[styles.icon, {tintColor: theme.colors.textColor}]}
            />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3,
    position: 'relative',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  userInfo: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  detailIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  detailText: {
    fontSize: 14,
  },
  expandIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  details: {
    marginTop: 10,
  },
  bottomIcons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  iconButton: {
    padding: 5,
    marginLeft: 10,
  },
  icon: {
    width: 30,
    height: 20,
  },
});

export default CommonCard;
