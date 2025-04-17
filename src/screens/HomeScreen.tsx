import React from 'react';
import Header from '../components/Header';
import {useTheme} from 'react-native-paper';
import {CustomThemeType} from '../theme/theme';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
} from 'react-native';

interface CountItem {
  title: string;
  count: number;
}

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const theme = useTheme() as CustomThemeType;

  const counts: CountItem[] = [
    {title: 'Users', count: 120},
    {title: 'Customers', count: 10},
  ];

  const renderItem: ListRenderItem<CountItem> = ({item}) => (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        if (item.title === 'Users') {
          navigation.navigate('UserProfile' as never);
        } else if (item.title === 'Customers') {
          navigation.navigate('Customers' as never);
        }
      }}>
      <View
        style={[
          styles.card,
          {
            backgroundColor: theme.colors.inputText,
            shadowColor: theme.colors.textColor,
          },
        ]}>
        <Text style={[styles.cardTitle, {color: theme.colors.subTitle}]}>
          {item.title}
        </Text>
        <Text style={[styles.cardCount, {color: theme.colors.primary}]}>
          {item.count}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.whiteSmoke}]}>
      <Header title="Home" onBackPress={() => navigation.goBack()} />
      <View style={styles.mainContainer}>
        <FlatList
          data={counts}
          renderItem={renderItem}
          keyExtractor={(item, index) => `${item.title}-${index}`}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    paddingBottom: 20,
  },
  mainContainer: {
    padding: 20,
  },
  card: {
    width: '100%',
    marginBottom: 15,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  cardCount: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default HomeScreen;
