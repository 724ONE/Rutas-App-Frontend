// Example usage of CustomModal components

import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import {
  CustomModal,
  EditNameModal,
  EditEmailModal,
  EditPasswordModal,
  DeleteConfirmationModal,
  LogoutConfirmationModal,
} from '../../components/modals/CustomModal';

const ExampleUsage = () => {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [customModalVisible, setCustomModalVisible] = useState(false);

  const handleDelete = () => {
    console.log('Item deleted');
    setDeleteModalVisible(false);
  };

  const handleLogout = () => {
    console.log('User logged out');
    setLogoutModalVisible(false);
  };

  const handleCustomAction = () => {
    console.log('Custom action performed');
    setCustomModalVisible(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Trigger buttons */}
      <TouchableOpacity onPress={() => setDeleteModalVisible(true)}>
        <Text>Show Delete Modal</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setLogoutModalVisible(true)}>
        <Text>Show Logout Modal</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setCustomModalVisible(true)}>
        <Text>Show Custom Modal</Text>
      </TouchableOpacity>

      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal
        visible={deleteModalVisible}
        onClose={() => setDeleteModalVisible(false)}
        onConfirm={handleDelete}
        itemName="route"
      />

      {/* Logout Confirmation Modal */}
      <LogoutConfirmationModal
        visible={logoutModalVisible}
        onClose={() => setLogoutModalVisible(false)}
        onConfirm={handleLogout}
      />

      {/* Custom Modal with custom content */}
      <CustomModal
        visible={customModalVisible}
        onClose={() => setCustomModalVisible(false)}
        title="Custom Action"
        onConfirm={handleCustomAction}
        confirmText="Proceed"
      >
        <Text>This is a custom modal with any content you want!</Text>
      </CustomModal>
    </View>
  );
};

export default ExampleUsage;