import React from 'react';
import Context from '../context';
import { View, Text, Image, StyleSheet } from 'react-native';
import IconButton from '../components/buttons/IconButton';
import Routes from '../navigation/routes';
import { useNavigation } from '@react-navigation/native';
import { Responsive, Theme } from '../libs';
import { AppIcons } from '../constants/icons';

const HeaderCard = ({ name, image }) => {
  const navigation = useNavigation();
  const { languageString } = React.useContext(Context);
  return (
    <View style={styles.header}>
      {/* StatusBar controlled centrally by RootView to avoid overrides */}
      <View style={styles.left}>
        <Image source={image} style={styles.profileImg} />
        <View>
          <Text style={styles.welcome}>{languageString?.labels?.welcomeBack || 'Welcome Back!'}</Text>
          <Text style={styles.username}>{languageString?.labels?.welcomeBack ? `Hello! ${name}` : `Hello! ${name}`}</Text>
        </View>
      </View>

      <IconButton
        icon={AppIcons.bell}
        size={Responsive.getWidth('10%')}
        iconSize={Responsive.getWidth('4.5%')}
        borderRadius={Theme.borders.mediumRadius}
        backgroundColor={Theme.colors.white}
        iconColor={Theme.colors.primary}
        onPress={() => navigation.navigate(Routes.notifications)}
      />
    </View>
  );
};

export default HeaderCard;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Theme.colors.primary,
    borderBottomLeftRadius: Theme.borders.largeRadius,
    borderBottomRightRadius: Theme.borders.largeRadius,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Responsive.getWidth('5%'),
    paddingVertical: Responsive.getHeight('2.5%'),
    // paddingTop: Responsive.getHeight('5%'),
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Responsive.getWidth('3%'),
  },
  profileImg: {
    height: Responsive.getHeight('5%'),
    width: Responsive.getHeight('5%'),
    borderRadius: Theme.borders.fullRadius,
  },
  welcome: {
    color: Theme.colors.white,
    fontSize: Responsive.AppFonts.t2,
    fontFamily: Theme.typography.body.fontFamily,
  },
  username: {
    color: Theme.colors.white,
    fontSize: Responsive.AppFonts.h6,
    fontFamily: Theme.typography.subheading.fontFamily,
  },
});
