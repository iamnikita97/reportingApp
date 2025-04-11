import React from 'react';
import {Image, ImageStyle, StyleProp} from 'react-native';

const images: Record<string, any> = {
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
  homeIcon: require('../assets/homeIcon.png'),
  analyticsIcon: require('../assets/analyticsIcon.png'),
  settingIcon: require('../assets/settingIcon.png'),
  securityIcon: require('../assets/securityIcon.png'),
  reportIcon: require('../assets/reportIcon.png'),
  arrowIcon: require('../assets/arrowIcon.png'),
  cameraIcon: require('../assets/cameraIcon.png'),
  dropdownIcon: require('../assets/dropdownIcon.png'),
  notificationIcon: require('../assets/notificationIcon.png'),
  helpIcon: require('../assets/helpIcon.png'),
  policiesIcon: require('../assets/policiesIcon.png'),
  logoutIcon: require('../assets/logoutIcon.png'),
  userProfileIcon: require('../assets/userProfileIcon.png'),
  security: require('../assets/security.png'),
  privacyIcon: require('../assets/privacyIcon.png'),
  moreIcon: require('../assets/moreIcon.png'),
  deleteIcon: require('../assets/deleteIcon.png'),
  menuIcon: require('../assets/menuIcon.png'),
  filterIcon: require('../assets/filterIcon.png'),
  UserDeatilsIcon: require('../assets/UserDeatilsIcon.png'),
  chevronUpIcon: require('../assets/chevronUpIcon.png'),
  chevronDownIcon: require('../assets/chevronDownIcon.png'),
  customerIcon: require('../assets/customerIcon.png'),
  searchIcon: require('../assets/searchIcon.png'),
  profileIcon: require('../assets/profileIcon.png'),
  createIcon: require('../assets/createIcon.png'),
  CloseIcon: require('../assets/CloseIcon.png'),
  EditIcon: require('../assets/EditIcon.png'),
  ViewIcon: require('../assets/ViewIcon.png'),
  productIcon: require('../assets/productIcon.png'),
  stateIcon: require('../assets/stateIcon.png'),
  cityIcon: require('../assets/cityIcon.png'),
  masterIcon: require('../assets/masterIcon.png'),
  countryIcon: require('../assets/countryIcon.png'),
  PlusIcon: require('../assets/PlusIcon.png'),
};

interface ImageComponentProps {
  name: keyof typeof images;
  style?: StyleProp<ImageStyle>;
}

const ImageComponent: React.FC<ImageComponentProps> = ({name, style}) => {
  const source = images[name];

  if (!source) {
    console.warn(`⚠️ ImageComponent: Image "${name}" not found.`);
    return null;
  }

  console.log(` Rendering ImageComponent with: ${name}`);

  return <Image source={source} style={style} />;
};

export default ImageComponent;
