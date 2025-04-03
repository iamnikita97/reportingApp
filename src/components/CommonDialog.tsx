import React, {FC, ReactNode} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
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
      <Dialog visible={visible} onDismiss={onDismiss} style={styles.dialog}>
        <View style={styles.header}>
          <Dialog.Title style={[styles.title, {color: theme.colors.primary}]}>
            {title}
          </Dialog.Title>
          <TouchableOpacity onPress={onDismiss} style={styles.closeButton}>
            <ImageComponent name="CloseIcon" style={styles.closeIcon} />
          </TouchableOpacity>
        </View>
        {content && (
          <Dialog.Content style={styles.content}>{content}</Dialog.Content>
        )}
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  dialog: {
    borderRadius: 12,
    paddingBottom: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flexShrink: 1,
  },
  closeButton: {
    padding: 5,
  },
  closeIcon: {
    width: 20,
    height: 20,
  },
  content: {
    paddingHorizontal: 16,
  },
});

export default CommonDialog;
