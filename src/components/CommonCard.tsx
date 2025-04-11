import React, {useState, ReactNode} from 'react';
import {useTheme} from 'react-native-paper';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import ImageComponent from './ImageComponent';
import {CustomThemeType} from '../theme/theme';

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
    <View style={styles.cardWrapper}>
      <View style={[styles.card, {backgroundColor: theme.colors.background}]}>
        <View style={styles.row}>
          <View style={styles.leftContent}>
            <ImageComponent name={profileIcon} style={styles.profileIcon} />
            <View style={styles.userInfo}>
              <Text style={[styles.title, {color: theme.colors.textColor}]}>
                {title}
              </Text>
              <View style={styles.detailRow}>
                <ImageComponent name="emailIcon" style={styles.detailIcon} />
                <Text
                  style={[styles.detailText, {color: theme.colors.textColor}]}>
                  {email}
                </Text>
              </View>
              <View style={styles.detailRow}>
                <ImageComponent name="phoneIcon" style={styles.detailIcon} />
                <Text
                  style={[styles.detailText, {color: theme.colors.textColor}]}>
                  {phone}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.iconColumn}>
            <TouchableOpacity
              onPress={() => setExpanded(!expanded)}
              style={styles.iconButton}>
              <ImageComponent
                name={expanded ? 'chevronUpIcon' : 'chevronDownIcon'}
                style={styles.icon}
              />
            </TouchableOpacity>
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
        </View>
        {expanded && <View style={styles.details}>{extraContent}</View>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  card: {
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftContent: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 35,
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  userInfo: {
    flex: 1,
    justifyContent: 'center',
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
  iconColumn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  iconButton: {
    marginVertical: 5,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  details: {
    marginTop: 10,
  },
});

export default CommonCard;
