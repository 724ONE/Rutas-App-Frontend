import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { isIOS } from '../../libs/platform';
import ProfileHeader from '../../components/headers/ProfileHeader';
import ProfileOption from '../../components/ProfileOption';
import { Responsive, Theme } from '../../libs';
import { AppIcons } from '../../constants/icons';
import AppHeader from '../../components/headers/AppHeader';
import Routes from '../../navigation/routes';
import Context from '../../context';
import RootView from '../../components/RootView';

const Profile = ({ navigation }) => {
  const { languageString } = React.useContext(Context);
  const profileOptions = [
    { id: 1, icon: AppIcons.user, title: 'Edit Profile', screen: Routes.editProfile },
    { id: 2, icon: AppIcons.language, title: 'Language', value: 'English (US)', },
    { id: 3, icon: AppIcons.lock, title: 'Privacy Policy' },
    { id: 4, icon: AppIcons.help, title: 'Help Center' },
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
                onPress={() => !!item.screen && navigation.navigate(item?.screen)}
              />
            ))}
          </View>
        </ScrollView>

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
