import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Theme, Responsive } from '../../libs';
import RootView from '../../components/RootView';
import AppHeader from '../../components/headers/AppHeader';
import Context from '../../context';

const PrivacyPolicy = ({ navigation }) => {
  const context = useContext(Context);
  const languageString = context?.languageString || {};

  const privacyContent = [
    {
      id: 1,
      text: languageString.privacyPolicy?.section1 || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 2,
      text: languageString.privacyPolicy?.section2 || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 3,
      text: languageString.privacyPolicy?.section3 || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  const renderPrivacySection = (section) => (
    <View key={section.id} style={styles.section}>
      <Text style={styles.sectionText}>{section.text}</Text>
    </View>
  );

  return (
    <RootView statusColor={Theme.colors.primary} backgroundColor={Theme.colors.primary} addBottomPadding={false}>
      <AppHeader
        title={languageString.privacyPolicy?.headerTitle || 'Privacy Policy'}
        rightIcon={false}
        showBack={true}
        onBackPress={() => navigation.goBack()}
      />

      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {privacyContent.map(renderPrivacySection)}
        </ScrollView>
      </View>
    </RootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.white,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: Responsive.getWidth('5%'),
    paddingTop: Responsive.getHeight('2%'),
    paddingBottom: Responsive.getHeight('3%'),
  },
  section: {
    marginBottom: Responsive.getHeight('2.5%'),
  },
  sectionText: {
    fontSize: Responsive.AppFonts.t1,
    fontFamily: Theme.typography.body.fontFamily,
    color: Theme.colors.text,
    lineHeight: Responsive.getHeight('3%'),
    textAlign: 'left',
  },
});

export default PrivacyPolicy;