import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  PanResponder,
  Animated,
} from 'react-native';
import { Theme, Responsive } from '../../libs';
import InputText from '../inputs/InputText';
import { PrimaryButton } from '../buttons/PrimaryButton';
import Context from '../../context';

const CustomModal = ({
  visible,
  onClose,
  title,
  children,
  onConfirm,
  confirmText = 'Update',
  showConfirmButton = true,
  confirmButtonStyle = {},
  modalType = 'default', // 'default', 'delete', 'logout'
  showCancelButton = false,
  cancelText = 'Cancel',
}) => {
  const translateY = React.useRef(new Animated.Value(0)).current;

  const panResponder = React.useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return Math.abs(gestureState.dy) > 5 && gestureState.dy > 0;
      },
      onPanResponderMove: (evt, gestureState) => {
        if (gestureState.dy > 0) {
          translateY.setValue(gestureState.dy);
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dy > 100 || gestureState.vy > 0.5) {
          // Close modal if swiped down enough
          Animated.timing(translateY, {
            toValue: 300,
            duration: 200,
            useNativeDriver: true,
          }).start(() => {
            translateY.setValue(0);
            onClose();
          });
        } else {
          // Return to original position
          Animated.spring(translateY, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  React.useEffect(() => {
    if (visible) {
      translateY.setValue(0);
    }
  }, [visible]);

  const getConfirmButtonStyle = () => {
    switch (modalType) {
      case 'delete':
        return {
          backgroundColor: Theme.colors.error || '#FF4444',
        };
      case 'logout':
        return {
          backgroundColor: Theme.colors.warning || '#FF8C00',
        };
      default:
        return {};
    }
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <Animated.View 
          style={[
            styles.modalContainer,
            {
              transform: [{ translateY: translateY }]
            }
          ]}
          {...panResponder.panHandlers}
        >
          <Pressable onPress={() => {}}>
            {/* Modal Header */}
            <View style={styles.header}>
              <View style={styles.headerIndicator} />
              <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <Text style={styles.closeButtonText}>×</Text>
              </TouchableOpacity>
            </View>

            {/* Modal Title */}
            <Text style={styles.title}>{title}</Text>

            {/* Modal Content */}
            <View style={styles.content}>
              {children}
            </View>

            {/* Modal Actions */}
            {(showConfirmButton || showCancelButton) && (
              <View style={showCancelButton ? styles.actionsRow : styles.actions}>
                {showCancelButton && (
                  <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={onClose}
                  >
                    <Text style={styles.cancelButtonText}>{cancelText}</Text>
                  </TouchableOpacity>
                )}
                {showConfirmButton && (
                  <PrimaryButton
                    text={confirmText}
                    btnFun={onConfirm}
                    customStyles={[
                      showCancelButton ? styles.confirmButtonRow : styles.confirmButton,
                      getConfirmButtonStyle(),
                      confirmButtonStyle,
                    ]}
                  />
                )}
              </View>
            )}
          </Pressable>
        </Animated.View>
      </Pressable>
    </Modal>
  );
};

// Predefined Modal Components for common use cases

export const EditNameModal = ({ visible, onClose, oldName, onUpdate }) => {
  const context = React.useContext(Context);
  const languageString = context?.languageString || {};
  const [newName, setNewName] = React.useState(oldName || '');

  const handleUpdate = () => {
    onUpdate(newName);
    onClose();
  };

  return (
    <CustomModal
      visible={visible}
      onClose={onClose}
      title={languageString.modals?.editName || 'Edit Name'}
      onConfirm={handleUpdate}
      confirmText={languageString.modals?.update || 'Update'}
    >
      <InputText
        heading={languageString.modals?.oldFullName || 'Old Full Name'}
        value={oldName}
        editable={false}
        style={styles.readonlyInput}
      />
      <InputText
        heading={languageString.modals?.newFullName || 'New Full Name'}
        value={newName}
        onChangeText={setNewName}
        placeholder={languageString.modals?.enterNewName || 'Enter new name'}
      />
    </CustomModal>
  );
};

export const EditEmailModal = ({ visible, onClose, oldEmail, onUpdate }) => {
  const context = React.useContext(Context);
  const languageString = context?.languageString || {};
  const [newEmail, setNewEmail] = React.useState(oldEmail || '');

  const handleUpdate = () => {
    onUpdate(newEmail);
    onClose();
  };

  return (
    <CustomModal
      visible={visible}
      onClose={onClose}
      title={languageString.modals?.editEmail || 'Edit Email'}
      onConfirm={handleUpdate}
      confirmText={languageString.modals?.update || 'Update'}
    >
      <InputText
        heading={languageString.modals?.oldEmail || 'Old Email'}
        value={oldEmail}
        editable={false}
        style={styles.readonlyInput}
      />
      <InputText
        heading={languageString.modals?.newEmail || 'New Email'}
        value={newEmail}
        onChangeText={setNewEmail}
        placeholder={languageString.modals?.enterNewEmail || 'Enter new email'}
        keyboardType="email-address"
      />
    </CustomModal>
  );
};

export const EditPasswordModal = ({ visible, onClose, onUpdate }) => {
  const context = React.useContext(Context);
  const languageString = context?.languageString || {};
  const [newPassword, setNewPassword] = React.useState('');

  const handleUpdate = () => {
    onUpdate(newPassword);
    onClose();
  };

  return (
    <CustomModal
      visible={visible}
      onClose={onClose}
      title={languageString.modals?.editPassword || 'Edit Password'}
      onConfirm={handleUpdate}
      confirmText={languageString.modals?.update || 'Update'}
    >
      <InputText
        heading={languageString.modals?.oldPassword || 'Old Password'}
        value="••••••••••"
        editable={false}
        style={styles.readonlyInput}
      />
      <InputText
        heading={languageString.modals?.newPassword || 'New Password'}
        value={newPassword}
        onChangeText={setNewPassword}
        placeholder={languageString.modals?.enterNewPassword || 'Enter new password'}
        secureTextEntry
      />
    </CustomModal>
  );
};

export const DeleteConfirmationModal = ({ visible, onClose, onConfirm, itemName }) => {
  const context = React.useContext(Context);
  const languageString = context?.languageString || {};
  
  return (
    <CustomModal
      visible={visible}
      onClose={onClose}
      title={languageString.modals?.delete || 'Delete'}
      onConfirm={onConfirm}
      confirmText={languageString.modals?.yesDelete || 'Yes, Delete'}
      cancelText={languageString.modals?.cancel || 'Cancel'}
      modalType="delete"
      showCancelButton={true}
    >
      <Text style={styles.deleteText}>
        {languageString.modals?.deleteAccountMessage || 'Are you sure you want to Delete your account?'}
      </Text>
    </CustomModal>
  );
};

export const EditPhoneModal = ({ visible, onClose, oldPhone, onUpdate }) => {
  const context = React.useContext(Context);
  const languageString = context?.languageString || {};
  const [newPhone, setNewPhone] = React.useState(oldPhone || '');

  const handleUpdate = () => {
    onUpdate(newPhone);
    onClose();
  };

  return (
    <CustomModal
      visible={visible}
      onClose={onClose}
      title={languageString.modals?.editPhone || 'Edit Phone Number'}
      onConfirm={handleUpdate}
      confirmText={languageString.modals?.update || 'Update'}
    >
      <InputText
        heading={languageString.modals?.oldPhone || 'Old Phone Number'}
        value={oldPhone}
        editable={false}
        style={styles.readonlyInput}
      />
      <InputText
        heading={languageString.modals?.newPhone || 'New Phone Number'}
        value={newPhone}
        onChangeText={setNewPhone}
        placeholder={languageString.modals?.enterNewPhone || 'Enter new phone number'}
        keyboardType="phone-pad"
      />
    </CustomModal>
  );
};

export const LogoutConfirmationModal = ({ visible, onClose, onConfirm }) => {
  const context = React.useContext(Context);
  const languageString = context?.languageString || {};
  
  return (
    <CustomModal
      visible={visible}
      onClose={onClose}
      title={languageString.modals?.logout || 'Logout'}
      onConfirm={onConfirm}
      confirmText={languageString.modals?.yesLogout || 'Yes, Logout'}
      cancelText={languageString.modals?.cancel || 'Cancel'}
      modalType="logout"
      showCancelButton={true}
    >
      <Text style={styles.logoutText}>
        {languageString.modals?.logoutMessage || 'Are you sure you want to log out?'}
      </Text>
    </CustomModal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: Theme.colors.white,
    borderTopLeftRadius: Responsive.getWidth('6%'),
    borderTopRightRadius: Responsive.getWidth('6%'),
    paddingHorizontal: Responsive.getWidth('5%'),
    paddingBottom: Responsive.getHeight('3%'),
    maxHeight: '80%',
  },
  header: {
    alignItems: 'center',
    paddingVertical: Responsive.getHeight('1%'),
    position: 'relative',
  },
  headerIndicator: {
    width: Responsive.getWidth('15%'),
    height: Responsive.getHeight('0.5%'),
    backgroundColor: Theme.colors.borderClr,
    borderRadius: Theme.borders.fullRadius,
  },
  closeButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: Responsive.getWidth('8%'),
    height: Responsive.getWidth('8%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: Responsive.AppFonts.h3,
    color: Theme.colors.text,
    fontFamily: Theme.typography.medium.fontFamily,
  },
  title: {
    fontSize: Responsive.AppFonts.h4,
    fontFamily: Theme.typography.medium.fontFamily,
    color: Theme.colors.text,
    textAlign: 'center',
    marginVertical: Responsive.getHeight('2%'),
  },
  content: {
    marginBottom: Responsive.getHeight('2%'),
  },
  actions: {
    marginTop: Responsive.getHeight('1%'),
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Responsive.getHeight('1%'),
    gap: Responsive.getWidth('3%'),
  },
  confirmButton: {
    width: '100%',
  },
  confirmButtonRow: {
    flex: 1,
  },
  cancelButton: {
    flex: 1,
    paddingVertical: Responsive.getHeight('1.5%'),
    borderRadius: Responsive.getHeight('1%'),
    borderWidth: 1,
    borderColor: Theme.colors.primary,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    fontSize: Responsive.AppFonts.t1,
    fontFamily: Theme.typography.medium.fontFamily,
    color: Theme.colors.primary,
  },
  readonlyInput: {
    backgroundColor: Theme.colors.screenBg,
    opacity: 0.7,
  },
  deleteText: {
    fontSize: Responsive.AppFonts.t1,
    fontFamily: Theme.typography.body.fontFamily,
    color: Theme.colors.text,
    textAlign: 'center',
    lineHeight: Responsive.getHeight('3%'),
  },
  logoutText: {
    fontSize: Responsive.AppFonts.t1,
    fontFamily: Theme.typography.body.fontFamily,
    color: Theme.colors.text,
    textAlign: 'center',
    lineHeight: Responsive.getHeight('3%'),
  },
});

export default CustomModal;