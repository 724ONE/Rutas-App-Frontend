import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Image,
  Share,
  Alert,
} from 'react-native';
import { isIOS } from '../../libs/platform';
import ProfileHeader from '../../components/headers/ProfileHeader';
import ProfileOption from '../../components/ProfileOption';
import { Responsive, Theme } from '../../libs';
import { AppIcons } from '../../constants/icons';
import AppHeader from '../../components/headers/AppHeader';
import Routes from '../../navigation/routes';
import Context from '../../context';
import RootView from '../../components/RootView';
import { DeleteConfirmationModal, LogoutConfirmationModal } from '../../components/modals/CustomModal';

const Profile = ({ navigation }) => {
  const { languageString } = React.useContext(Context);
  const [deleteModalVisible, setDeleteModalVisible] = React.useState(false);
  const [logoutModalVisible, setLogoutModalVisible] = React.useState(false);

  const handleDeleteAccount = () => {
    setDeleteModalVisible(false);
    // Add your delete account logic here
    console.log('Account deleted');
  };

  const handleLogout = () => {
    setLogoutModalVisible(false);
    // Add your logout logic here
    console.log('User logged out');
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: Routes.login }],
    // });
  };

  const handleDirectSMS = () => {
    const smsUrl = `sms:?body=${encodeURIComponent(languageString.invite?.smsMessage || 'Check out Rutas App! https://rutasapp.com/download')}`;
    Linking.openURL(smsUrl).catch((err) => {
      console.error('Error opening SMS:', err);
    });
  };

  const handleDirectEmail = () => {
    const emailUrl = `mailto:?subject=${encodeURIComponent(languageString.invite?.emailSubject || 'Try Rutas App')}&body=${encodeURIComponent(languageString.invite?.emailBody || 'Check out Rutas App: https://rutasapp.com/download')}`;
    Linking.openURL(emailUrl).catch((err) => {
      console.error('Error opening Email:', err);
    });
  };

  const handleInviteFriends = async () => {
    try {
      // Analytics tracking (add your analytics service here)
      // Analytics.track('invite_friends_initiated');

      const shareOptions = {
        title: languageString.invite?.shareTitle || 'Join Rutas App!',
        message: languageString.invite?.shareMessage || 
          '🚗 Hey! I\'m using Rutas App to save locations and create optimized routes. It\'s amazing for planning trips and deliveries!\n\n📲 Download it now:\niOS: https://apps.apple.com/app/rutas\nAndroid: https://play.google.com/store/apps/details?id=com.rutas',
        url: languageString.invite?.shareUrl || 'https://rutasapp.com/download',
      };

      const result = await Share.share(shareOptions);
      
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Shared via specific activity (WhatsApp, SMS, Email, etc.)
          console.log('Shared via:', result.activityType);
          // Analytics.track('invite_friends_shared', { method: result.activityType });
        } else {
          // Shared successfully (generic)
          console.log('Shared successfully');
          // Analytics.track('invite_friends_shared', { method: 'generic' });
        }
        
        // Optional: Show success message
        // Alert.alert(
        //   languageString.invite?.successTitle || 'Thanks!',
        //   languageString.invite?.successMessage || 'Thanks for sharing Rutas with your friends!',
        //   [{ text: languageString.common?.ok || 'OK' }]
        // );
      } else if (result.action === Share.dismissedAction) {
        // Share dismissed by user
        console.log('Share dismissed');
        // Analytics.track('invite_friends_dismissed');
      }
    } catch (error) {
      // Analytics.track('invite_friends_error', { error: error.message });
      Alert.alert(
        languageString.invite?.errorTitle || 'Error',
        languageString.invite?.errorMessage || 'Something went wrong while trying to share. Please try again.',
        [{ text: languageString.common?.ok || 'OK' }]
      );
      console.error('Share error:', error);
    }
  };

  const handleOptionPress = (item) => {
    if (item.id === 5) { // Invite Friends
      handleInviteFriends();
    } else if (item.id === 6) { // Delete Account
      setDeleteModalVisible(true);
    } else if (item.id === 7) { // Logout
      setLogoutModalVisible(true);
    } else if (item.screen) {
      navigation.navigate(item.screen);
    }
  };

  const profileOptions = [
    { id: 1, icon: AppIcons.user, title: 'Edit Profile', screen: Routes.editProfile },
    { id: 2, icon: AppIcons.language, title: 'Language', value: 'English (US)', screen: Routes.language  },
    { id: 3, icon: AppIcons.lock, title: 'Privacy Policy' , screen: Routes.privacyPolicy },
    { id: 4, icon: AppIcons.help, title: 'Help Center', screen: Routes.helpCenter },
    { id: 5, icon: AppIcons.invite, title: 'Invite Friends' },
    { id: 6, icon: AppIcons.delete, title: 'Delete Account' },
    { id: 7, icon: AppIcons.logout, title: 'Logout', },
  ];

  return (
      <RootView statusColor={Theme.colors.primary} backgroundColor={Theme.colors.primary} addBottomPadding={false} innerViewColor={Theme.colors.screenBg}>


        <AppHeader
          title={languageString?.labels?.profile}
          rightIcon={false}
          showBack={false}
        />

        <ScrollView contentContainerStyle={{ paddingBottom: Responsive.getHeight('10%') }}>

          <ProfileHeader
            name="Andrew Ainsley"
            image={{ uri: 'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=2048x2048&w=is&k=20&c=8QovDK9XochFpaIC-N3pn5EEaRSVuE1SKpQDVUxLSUk=' }}
          />
          <View style={styles.optionsContainer}>
            {profileOptions.map((item, index) => (
              <ProfileOption
                key={item.id}
                icon={item.icon}
                title={item.title}
                value={item.value}
                color={item.color}
                hideBorder={index === profileOptions.length - 1}
                onPress={() => handleOptionPress(item)}
              />
            ))}
          </View>
        </ScrollView>

        {/* Delete Account Modal */}
        <DeleteConfirmationModal
          visible={deleteModalVisible}
          onClose={() => setDeleteModalVisible(false)}
          onConfirm={handleDeleteAccount}
          itemName="your account"
        />

        {/* Logout Modal */}
        <LogoutConfirmationModal
          visible={logoutModalVisible}
          onClose={() => setLogoutModalVisible(false)}
          onConfirm={handleLogout}
        />

    </RootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: isIOS ? '#F8F8F8' : '#FFFFFF',
  },
  optionsContainer: {
    marginTop: Responsive.getHeight('2%'),
  },
});

export default Profile;
