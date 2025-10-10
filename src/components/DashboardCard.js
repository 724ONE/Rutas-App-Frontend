import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors';
import { AppIcons } from '../constants/icons';
import { Image } from 'react-native';
import Fonts from '../constants/fonts';

const DashboardCard = ({ title, value, bg, iconColor ,onPress ,icon}) => (
  <TouchableOpacity style={[styles.card, { backgroundColor: bg }]} onPress={onPress}>
    <Image source={icon} style={[styles.icon, { tintColor: iconColor }]} />
    <Text style={styles.value}>{value}</Text>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

export default DashboardCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 5,
  },
  icon: { height: 20, width: 20 ,resizeMode:'contain'},
  value: { fontSize: 18, fontFamily: Fonts.bold, color: Colors.blackClr, marginTop: 8 },
  title: { fontSize: 13, fontFamily: Fonts.medium, color: '#555', marginTop: 2 },
});
