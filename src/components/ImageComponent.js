import React from 'react';
import {Image} from 'react-native';

// Centralized Image Mapping
const images = {
  emailIcon: require('../assets/emailIcon.png'),
  lockIcon: require('../assets/lockIcon.png'),
  topVector: require('../assets/topVector.png'),
  bottomVector: require('../assets/bottomVector.png'),
  AppLogo: require('../assets/AppLogo.png'),
  visbleOnIcon: require('../assets/visbleOnIcon.png'),
  visbleOffIcon: require('../assets/visbleOffIcon.png'),
  userIcon: require('../assets/userIcon.png'),
  phoneIcon: require('../assets/phoneIcon.png'),
  messageIcon: require('../assets/messageIcon.png'),
  mailIcon: require('../assets/mailIcon.png'),
};

const ImageComponent = ({name, style}) => {
  const source = images[name] || null;
  return source ? <Image source={source} style={style} /> : null;
};

export default ImageComponent;
