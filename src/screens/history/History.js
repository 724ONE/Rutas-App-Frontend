import React from 'react';
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

const History = ({ navigation }) => {

  const routeHistoryData = [
    {
      id: 1,
      title: 'Box 44',
      date: '15 Feb 2024',
      time: '09:30 Am',
      startLocation: 'Warehouse A',
      endLocation: 'Downtown Hub',
      duration: '2h 15 mints',
      distance: '200 Km',
      stops: ['Warehouse A', 'Client Office', 'Box 44'],
    },
    {
      id: 2,
      title: 'Morning Pickups Route',
      date: '15 Feb 2024',
      time: '09:30 Am',
      startLocation: 'Warehouse A',
      endLocation: 'Downtown Hub',
      duration: '2h 15 mints',
      distance: '200 Km',
      stops: ['Distribution Center', 'Customer site B'],
    },
    {
      id: 3,
      title: 'Weekly Supply route',
      date: '15 Feb 2024',
      time: '09:30 Am',
      startLocation: 'Warehouse A',
      endLocation: 'Downtown Hub',
      duration: '2h 15 mints',
      distance: '200 Km',
      stops: ['Distribution Center', 'Customer site B'],
    },
  ]

  const renderRouteCard = (route) => (
    <View key={route.id} style={styles.routeCard}>
      {/* Header with title and reuse button */}
      <View style={styles.cardHeader}>
        <Text style={styles.routeTitle}>{route.title}</Text>
        <TouchableOpacity style={styles.reuseButton}>
          <Image source={AppIcons.reuse} style={styles.reuseIcon} />
          <Text style={styles.reuseText}>Reuse</Text>
        </TouchableOpacity>
      </View>

      {/* Date and time */}
      <Text style={styles.dateTime}>
        {route.date} {route.time}
      </Text>

      {/* Route info */}
      <Text style={styles.routeInfo}>
        {route.startLocation} → {route.endLocation}
      </Text>

      {/* Duration and Distance */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Image source={AppIcons.clock} style={styles.statIcon} />
          <Text style={styles.statLabel}>Duration</Text>
        </View>
        <View style={styles.statItem}>
          <Image source={AppIcons.car} style={[styles.statIcon]} />
          <Text style={styles.statLabel}>Distance</Text>
        </View>
      </View>

      <View style={styles.statsValues}>
        <Text style={styles.statValue}>{route.duration}</Text>
        <Text style={styles.statValue}>{route.distance}</Text>
      </View>

      {/* Route Stops */}
      <Text style={styles.stopsTitle}>Route Stops({route.stops.length})</Text>
      <View style={styles.stopsContainer}>
        {route.stops.map((stop, index) => (
          <View key={index} style={styles.stopBadge}>
            <Text style={styles.stopText}>{index + 1}</Text>
            <Text style={styles.stopName}>{stop}</Text>
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <RootView statusColor={Theme.colors.primary} backgroundColor={Theme.colors.primary}>
      <AppHeader
        title="Route History"
        rightIcon={false}
        showBack={true}
        onBackPress={() => navigation.goBack()}
      />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {routeHistoryData.map(renderRouteCard)}
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
    paddingBottom: Responsive.getHeight('4%'),
  },
  routeCard: {
    backgroundColor: Theme.colors.white,
    borderRadius: Theme.borders.mediumRadius,
    borderWidth: Theme.borders.width,
    borderColor: Theme.colors.borderClr,
    padding: Responsive.getWidth('3%'),
    marginBottom: Responsive.getHeight('2%'),
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Responsive.getHeight('0.5%'),
  },
  routeTitle: {
    fontSize: Responsive.AppFonts.h5,
    fontFamily: Theme.typography.subheading.fontFamily,
    color: Theme.colors.primary,
  },
  reuseButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Responsive.getWidth('3%'),
    paddingVertical: Responsive.getHeight('0.5%'),
  },
  reuseIcon: {
    width: Responsive.getWidth('4%'),
    height: Responsive.getWidth('4%'),
    tintColor: Theme.colors.primary,
    marginRight: Responsive.getWidth('1%'),
  },
  reuseText: {
    fontSize: Responsive.AppFonts.t2,
    fontFamily: Theme.typography.medium.fontFamily,
    color: Theme.colors.primary,
  },
  dateTime: {
    fontSize: Responsive.AppFonts.t2,
    fontFamily: Theme.typography.body.fontFamily,
    color: Theme.colors.black,
    marginBottom: Responsive.getHeight('0.5%'),
  },
  routeInfo: {
    fontSize: Responsive.AppFonts.t2,
    fontFamily: Theme.typography.body.fontFamily,
    color: Theme.colors.secondryText,
    marginBottom: Responsive.getHeight('1.5%'),
  },
  statsContainer: {
    flexDirection: 'row',
    marginBottom: Responsive.getHeight('0.5%'),
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  statIcon: {
    width: Responsive.getWidth('6%'),
    height: Responsive.getWidth('6%'),
    marginRight: Responsive.getWidth('2%'),
  },
  statLabel: {
    fontSize: Responsive.AppFonts.t2,
    fontFamily: Theme.typography.medium.fontFamily,
    color: Theme.colors.text,
  },
  statsValues: {
    flexDirection: 'row',
    marginBottom: Responsive.getHeight('1.5%'),
  },
  statValue: {
    fontSize: Responsive.AppFonts.t2,
    fontFamily: Theme.typography.medium.fontFamily,
    color: Theme.colors.textLight,
    flex: 1,
  },
  stopsTitle: {
    fontSize: Responsive.AppFonts.t2,
    fontFamily: Theme.typography.medium.fontFamily,
    color: Theme.colors.text,
    marginBottom: Responsive.getHeight('1%'),
  },
  stopsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Responsive.getWidth('2%'),
  },
  stopBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.colors.primaryBg,
    borderRadius: Theme.borders.normalRadius,
    paddingHorizontal: Responsive.getWidth('3%'),
    paddingVertical: Responsive.getHeight('0.5%'),
    marginBottom: Responsive.getHeight('0.5%'),
  },
  stopText: {
    backgroundColor: Theme.colors.primary,
    color: Theme.colors.white,
    fontSize: Responsive.AppFonts.t3,
    fontFamily: Theme.typography.body.fontFamily,
    width: Responsive.getWidth('4%'),
    height: Responsive.getWidth('4%'),
    marginVertical: Responsive.getHeight('0.%'),
    borderRadius: Responsive.getWidth('2.5%'),
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Responsive.getWidth('2%'),
  },
  stopName: {
    fontSize: Responsive.AppFonts.t3,
    fontFamily: Theme.typography.body.fontFamily,
    color: Theme.colors.secondryText,
  },
});

export default History;