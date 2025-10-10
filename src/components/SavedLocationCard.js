import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Colors from '../constants/colors';
import { AppIcons } from '../constants/icons';
import Fonts from '../constants/fonts';

const SavedLocationCard = ({ name, coordinates, contact, note, isLast }) => (
  <View style={[styles.card, isLast && { marginBottom: 30 }]}>
    <View style={styles.row}>
      <Image source={AppIcons.locationPin} style={styles.icon} />
      <Text style={styles.name}>{name}</Text>
    </View>

    <Text style={styles.sub}>Coordinates {coordinates}</Text>
    <Text style={styles.sub}>Contact: {contact}</Text>
    <Text style={styles.note}>Note: <Text style={{ color: Colors.primaryClr }}>{note}</Text></Text>

    {isLast && (
      <TouchableOpacity style={styles.addBtn}>
        <Image source={AppIcons.plus} style={styles.addIcon} />
      </TouchableOpacity>
    )}
  </View>
);

export default SavedLocationCard;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
    backgroundColor: Colors.whiteClr,
    position: 'relative',
  },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
  icon: { height: 16, width: 16, tintColor: Colors.primaryClr, marginRight: 6 },
  name: { fontFamily: Fonts.semiBold, fontSize: 14, color: Colors.blackClr },
  sub: { fontFamily: Fonts.regular, fontSize: 13, color: '#555', marginTop: 2 },
  note: { fontFamily: Fonts.regular, fontSize: 13, marginTop: 2, color: '#888' },
  addBtn: {
    backgroundColor: Colors.primaryClr,
    height: 40,
    width: 40,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
  addIcon: { height: 18, width: 18, tintColor: Colors.whiteClr },
});
