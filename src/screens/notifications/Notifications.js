import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Theme, Responsive } from '../../libs';
import RootView from '../../components/RootView';
import IconButton from '../../components/buttons/IconButton';
import { AppIcons } from '../../constants/icons';
import Context from '../../context';
import AppHeader from '../../components/headers/AppHeader';
import Heading from '../../components/text/Heading';

const Notifications = ({ navigation }) => {
  const { languageString } = React.useContext(Context);
  const newNotifications = [
    { id: '1', title: 'Lorem', description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.' },
    { id: '2', title: 'Lorem', description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.' },
    { id: '3', title: 'Lorem', description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.' },
  ];

  const earlierNotifications = [
    { id: '4', title: 'Lorem', description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.' },
    { id: '5', title: 'Lorem', description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.' },
    { id: '6', title: 'Lorem', description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.' },
  ];

  const renderNotification = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.desc}>{item.description}</Text>
    </View>
  );

  return (
    <RootView
      backgroundColor={Theme.colors.primary}
      statusColor={Theme.colors.primary}
      addBottomPadding={false}
      innerViewColor={Theme.colors.screenBg}>

      <AppHeader
        title={languageString?.notifications?.headerTitle}
        onBackPress={() => navigation.goBack()}
      />

      {/* ✅ Scrollable Content */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* New Section */}
        {/* <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{languageString?.notifications?.new}</Text>
          <TouchableOpacity>
            <Text style={styles.markAll}>{languageString?.notifications?.markAllAsRead}</Text>
          </TouchableOpacity>
        </View> */}

        <Heading title={languageString?.notifications?.new}
          customStyles={styles.sectionTitle} />

        {newNotifications.map((item) => renderNotification({ item }))}

        {/* Earlier Section */}
        {/* <Text style={[styles.sectionTitle, { marginTop: Responsive.getHeight('2%') }]}>
          Earlier
        </Text> */}


        <Heading title={"Earlier"}
          customStyles={[styles.sectionTitle, { marginTop: Responsive.getHeight('2%') }]} />

        {earlierNotifications.map((item) => renderNotification({ item }))}
      </ScrollView>
    </RootView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  // header: {
  //   backgroundColor: Theme.colors.primary,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   paddingHorizontal: Responsive.getWidth('5%'),
  //   paddingVertical: Responsive.getHeight('2%'),
  //   borderBottomLeftRadius: Theme.borders.largeRadius,
  //   borderBottomRightRadius: Theme.borders.largeRadius,
  // },
  // headerTitle: {
  //   flex: 1,
  //   textAlign: 'center',
  //   fontFamily: Theme.typography.subheading.fontFamily,
  //   fontSize: Responsive.AppFonts.h5,
  //   color: Theme.colors.white,
  //   marginRight: Responsive.getWidth('10%'),
  // },
  scrollContainer: {
    paddingHorizontal: Responsive.getWidth('5%'),
    paddingTop: Responsive.getHeight('2%'),
    paddingBottom: Responsive.getHeight('3%'),
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontFamily: Theme.typography.subheading.fontFamily,
    fontSize: Responsive.AppFonts.t1,
    color: Theme.colors.text,
    marginBottom: Responsive.getHeight('0%')
  },
  markAll: {
    fontFamily: Theme.typography.body.fontFamily,
    fontSize: Responsive.AppFonts.t2,
    color: Theme.colors.text,
  },
  card: {
    borderWidth: Theme.borders.width,
    borderColor: Theme.colors.borderClr,
    borderRadius: Theme.borders.normalRadius,
    padding: Responsive.getWidth('3%'),
    marginTop: Responsive.getHeight('1.5%'),
    backgroundColor: Theme.colors.white,
  },
  title: {
    fontFamily: Theme.typography.medium.fontFamily,
    fontSize: Responsive.AppFonts.t1,
    color: Theme.colors.text,
  },
  desc: {
    fontFamily: Theme.typography.body.fontFamily,
    fontSize: Responsive.AppFonts.t2,
    color: Theme.colors.text,
    marginTop: Responsive.getHeight('0.2%'),
    lineHeight: Responsive.getHeight('2.2%'),
  },
});
