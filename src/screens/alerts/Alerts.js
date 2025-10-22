import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Theme, Responsive } from '../../libs';
import RootView from '../../components/RootView';
import AppHeader from '../../components/headers/AppHeader';
import { AppIcons } from '../../constants/icons';
import Context from '../../context';

const Alerts = ({ navigation }) => {

  const { languageString } = useContext(Context);

  const alertsData = [
    {
      id: 1,
      driverName: 'Driver Ahmad',
      driverImage: AppIcons.profile,
      status: languageString.alerts.onTheWay,
      statusColor: Theme.colors.primary,
      timestamp: `2 ${languageString.alerts.mintAgo}`,
      sender: 'John Smith',
      timeReceived: `2 ${languageString.alerts.minAgo}`,
    },
    {
      id: 2,
      driverName: 'Driver Sarah',
      driverImage: AppIcons.profile,
      status: languageString.alerts.routeStarted,
      statusColor: '#FF8C00',
      timestamp: `2 ${languageString.alerts.mintAgo}`,
      sender: 'John Smith',
      timeReceived: `2 ${languageString.alerts.minAgo}`,
    },
    {
      id: 3,
      driverName: 'Driver John',
      driverImage: AppIcons.profile,
      status: languageString.alerts.routeCompleted,
      statusColor: '#4CAF50',
      timestamp: `2 ${languageString.alerts.mintAgo}`,
      sender: 'John Smith',
      timeReceived: `2 ${languageString.alerts.minAgo}`,
    },
    {
      id: 4,
      driverName: 'Driver Maria',
      driverImage: AppIcons.profile,
      status: languageString.alerts.trafficDelay,
      statusColor: Theme.colors.primary,
      timestamp: `2 ${languageString.alerts.mintAgo}`,
      sender: 'John Smith',
      timeReceived: `2 ${languageString.alerts.minAgo}`,
    },
  ];

  const handleAcknowledge = (alertId) => {
    console.log('Acknowledge alert:', alertId);
    // Handle acknowledge logic here
  };

  const handleReply = (alertId) => {
    console.log('Reply to alert:', alertId);
    // Handle reply logic here
  };

  const renderAlertCard = (alert) => (
    <View key={alert.id} style={styles.alertCard}>
      
      {/* Header with driver info and timestamp */}
      <View style={styles.cardHeader}>
        <View style={styles.driverInfo}>
          <Image // source={alert.driverImage}
            source={{
              uri: 'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=2048x2048&w=is&k=20&c=8QovDK9XochFpaIC-N3pn5EEaRSVuE1SKpQDVUxLSUk=',
            }}
            style={styles.driverImage} />
          <View style={styles.driverDetails}>
            <Text style={styles.driverName}>{alert.driverName}</Text>
            <Text style={[styles.statusText, { color: alert.statusColor }]}>
              {alert.status}
            </Text>
          </View>
        </View>
        <Text style={styles.timestamp}>{alert.timestamp}</Text>
      </View>

      {/* Alert details */}
      <View style={styles.alertDetails}>
        <View style={styles.detailItem}>
          <Image source={AppIcons.circleClock} style={styles.iconImage} />
          <Text style={styles.detailText}>{alert.timeReceived}</Text>
        </View>

        <View style={[styles.detailItem, { marginLeft: Responsive.getWidth('10%'), }]}>
          <Image source={AppIcons.userCicle} style={styles.iconImage} />
          <Text style={styles.detailText}>{alert.sender}</Text>
        </View>
      </View>

      {/* Action buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity
          style={styles.acknowledgeButton}
          onPress={() => handleAcknowledge(alert.id)}
        >
          <Text style={styles.acknowledgeButtonText}>{languageString.alerts.acknowledge}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.replyButton}
          onPress={() => handleReply(alert.id)}
        >
          <Text style={styles.replyButtonText}>{languageString.alerts.reply}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <RootView statusColor={Theme.colors.primary} backgroundColor={Theme.colors.primary} addBottomPadding={false}>
      <AppHeader
        title={languageString.alerts.headerTitle}
        rightIcon={false}
        showBack={true}
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {alertsData.map(renderAlertCard)}
      </ScrollView>
    </RootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.screenBg,
  },
  scrollContent: {
    paddingHorizontal: Responsive.getWidth('5%'),
    paddingTop: Responsive.getHeight('2%'),
    paddingBottom: Responsive.getHeight('3%'),
  },
  alertCard: {
    backgroundColor: Theme.colors.white,
    borderRadius: Theme.borders.mediumRadius,
    borderWidth: Theme.borders.width,
    borderColor: Theme.colors.borderClr,
    padding: Responsive.getWidth('4%'),
    marginBottom: Responsive.getHeight('2%'),
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Responsive.getHeight('1.5%'),
  },
  driverInfo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
  },
  driverImage: {
    width: Responsive.getWidth('10%'),
    height: Responsive.getWidth('10%'),
    borderRadius: Responsive.getWidth('6%'),
    marginRight: Responsive.getWidth('2%'),
  },
  driverDetails: {
    flex: 1,
  },
  driverName: {
    fontSize: Responsive.AppFonts.t1,
    fontFamily: Theme.typography.medium.fontFamily,
    color: Theme.colors.text,
  },
  statusText: {
    fontSize: Responsive.AppFonts.t2,
    fontFamily: Theme.typography.body.fontFamily,
  },
  timestamp: {
    fontSize: Responsive.AppFonts.t3,
    fontFamily: Theme.typography.body.fontFamily,
    color: Theme.colors.secondryText,
  },
  alertDetails: {
    marginBottom: Responsive.getHeight('1.5%'),
    flexDirection: 'row'
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Responsive.getHeight('0.5%'),
  },

  iconImage: {
    width: Responsive.getWidth('6%'),
    height: Responsive.getWidth('6%'),
    resizeMode: 'contain',
  },
  detailText: {
    fontSize: Responsive.AppFonts.t2,
    fontFamily: Theme.typography.body.fontFamily,
    color: Theme.colors.text,
    marginLeft: Responsive.getWidth(2)
  },
  actionButtons: {
    flexDirection: 'row',
    gap: Responsive.getWidth('3%'),
  },
  acknowledgeButton: {
    backgroundColor: Theme.colors.primary,
    paddingHorizontal: Responsive.getHeight('2%'),
    borderRadius: Theme.borders.normalRadius,
    alignItems: 'center',
    justifyContent: 'center',

  },
  acknowledgeButtonText: {
    fontSize: Responsive.AppFonts.t1,
    includeFontPadding: false,
    fontFamily: Theme.typography.medium.fontFamily,
    color: Theme.colors.white,
  },
  replyButton: {
    backgroundColor: 'transparent',
    borderWidth: Theme.borders.width,
    borderColor: Theme.colors.primary,
    paddingVertical: Responsive.getHeight('1%'),
    paddingHorizontal: Responsive.getHeight('1%'),
    borderRadius: Theme.borders.normalRadius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  replyButtonText: {
    fontSize: Responsive.AppFonts.t2,
    paddingHorizontal: Responsive.getHeight('2%'),
    fontFamily: Theme.typography.medium.fontFamily,
    color: Theme.colors.primary,
  },
});

export default Alerts;