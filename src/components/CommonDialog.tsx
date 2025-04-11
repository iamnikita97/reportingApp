import React, {FC, ReactNode} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {Dialog, Portal, useTheme} from 'react-native-paper';
import ImageComponent from './ImageComponent';
import {CustomThemeType} from '../theme/theme';

interface CommonDialogProps {
  visible: boolean;
  title: string;
  content?: ReactNode;
  loading?: boolean;
  onDismiss: () => void;
  onSubmit?: () => void;
}

const CommonDialog: FC<CommonDialogProps> = ({
  visible,
  title,
  content,
  onDismiss,
}) => {
  const theme = useTheme() as CustomThemeType;

  return (
    <Portal>
      <Dialog
        visible={visible}
        onDismiss={onDismiss}
        style={[
          styles.dialog,
          {
            backgroundColor: theme.colors.background,
          },
        ]}>
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
        {content && <View style={styles.contentWrapper}>{content}</View>}
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  dialog: {
    borderRadius: 16,
    marginHorizontal: 20,
    overflow: 'hidden',
  },
  customHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
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
