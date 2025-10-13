import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Theme, Responsive } from '../../libs';
import RootView from '../../components/RootView';
import IconButton from '../../components/buttons/IconButton';
import { AppIcons } from '../../constants/icons';
import Fonts from '../../constants/fonts';

const Notifications = ({ navigation }) => {
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
      backgroundColor={Theme.colors.screenBg}
      statusColor={Theme.colors.primary}
    >
      {/* Header */}
      <View style={styles.header}>
        <IconButton
          icon={AppIcons.backArrow}
          onPress={() => navigation.goBack()}
          backgroundColor={Theme.colors.white}
          size={Responsive.getWidth('10%')}
          iconSize={Responsive.getWidth('4%')}
          borderRadius={Theme.borders.fullRadius}
        />
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      {/* ✅ Scrollable Content */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* New Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>New</Text>
          <TouchableOpacity>
            <Text style={styles.markAll}>Mark all as read</Text>
          </TouchableOpacity>
        </View>

        {newNotifications.map((item) => renderNotification({ item }))}

        {/* Earlier Section */}
        <Text style={[styles.sectionTitle, { marginTop: Responsive.getHeight('2%') }]}>
          Earlier
        </Text>

        {earlierNotifications.map((item) => renderNotification({ item }))}
      </ScrollView>
    </RootView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Theme.colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Responsive.getWidth('5%'),
    paddingVertical: Responsive.getHeight('2%'),
    borderBottomLeftRadius: Theme.borders.largeRadius,
    borderBottomRightRadius: Theme.borders.largeRadius,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontFamily: Fonts.poppinsSemiBold,
    fontSize: Responsive.AppFonts.h5,
    color: Theme.colors.white,
    marginRight: Responsive.getWidth('10%'),
  },
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
    fontFamily: Fonts.poppinsSemiBold,
    fontSize: Responsive.AppFonts.t1,
    color: Theme.colors.text,
  },
  markAll: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Responsive.AppFonts.t2,
    color: Theme.colors.text,
  },
  card: {
    borderWidth: Theme.borders.width,
    borderColor: Theme.colors.borderClr,
    borderRadius: Theme.borders.fullRadius,
    padding: Responsive.getWidth('4%'),
    marginTop: Responsive.getHeight('1.5%'),
    backgroundColor: Theme.colors.white,
    ...Theme.shadows.small,
    elevation: Theme.elevation.small,
  },
  title: {
    fontFamily: Fonts.poppinsMedium,
    fontSize: Responsive.AppFonts.t1,
    color: Theme.colors.text,
  },
  desc: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Responsive.AppFonts.t2,
    color: Theme.colors.secondryText,
    marginTop: Responsive.getHeight('0.5%'),
    lineHeight: Responsive.getHeight('2.2%'),
  },
});
