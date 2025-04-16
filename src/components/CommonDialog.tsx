import React, {FC, ReactNode} from 'react';
import ImageComponent from './ImageComponent';
import {CustomThemeType} from '../theme/theme';
import {Portal, useTheme} from 'react-native-paper';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

interface CommonDialogProps {
  visible: boolean;
  title: string;
  content?: ReactNode;
  onDismiss: () => void;
}

const CommonDialog: FC<CommonDialogProps> = ({
  visible,
  title,
  content,
  onDismiss,
}) => {
  const theme = useTheme() as CustomThemeType;

  if (!visible) return null;

  return (
    <Portal>
      <View style={[styles.overlay, {backgroundColor: theme.colors.backdrop}]}>
        <View
          style={[styles.dialog, {backgroundColor: theme.colors.background}]}>
          {/* Custom Header */}
          <View
            style={[
              styles.customHeader,
              {borderBottomColor: theme.colors.iconColor},
            ]}>
            <Text style={[styles.title, {color: theme.colors.primary}]}>
              {title}
            </Text>
            <TouchableOpacity onPress={onDismiss} style={styles.closeButton}>
              <ImageComponent
                name="CloseIcon"
                style={[styles.closeIcon, {tintColor: theme.colors.subTitle}]}
              />
            </TouchableOpacity>
          </View>

          {/* Content */}
          {content && <View style={styles.contentWrapper}>{content}</View>}
        </View>
      </View>
    </Portal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialog: {
    width: '90%',
    borderRadius: 16,
    overflow: 'hidden',
  },
  customHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    flex: 1,
    paddingRight: 10,
  },
  closeButton: {
    padding: 5,
    marginLeft: 8,
  },
  closeIcon: {
    width: 22,
    height: 22,
  },
  contentWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
});

export default CommonDialog;
