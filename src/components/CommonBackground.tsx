import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ImageStyle,
  ViewStyle,
} from 'react-native';
import ImageComponent from './ImageComponent';

const {width, height} = Dimensions.get('screen');

const CommonBackground: React.FC = () => {
  return (
    <>
      <View style={styles.topImageContainer}>
        <ImageComponent name="topVector" style={styles.topImage} />
        <ImageComponent name="AppLogo" style={styles.iconImage} />
      </View>
      <ImageComponent name="bottomVector" style={styles.bottomImage} />
    </>
  );
};

interface Styles {
  topImageContainer: ViewStyle;
  topImage: ImageStyle;
  iconImage: ImageStyle;
  bottomImage: ImageStyle;
}

const styles = StyleSheet.create<Styles>({
  topImageContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
  topImage: {
    width: width * 0.6,
    height: height * 0.18,
    resizeMode: 'contain',
  },
  iconImage: {
    width: height * 0.12,
    height: height * 0.12,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginRight: 30,
  },
  bottomImage: {
    position: 'absolute',
    bottom: -height * 0.05,
    left: 0,
    width: width * 0.8,
    height: height * 0.25,
    resizeMode: 'cover',
  },
});

export default CommonBackground;
