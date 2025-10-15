import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AppIcons } from '../constants/icons';
import { Responsive, Theme } from '../libs';

const SavedLocationCard = ({ name, coordinates, contact, note, isLast, onAdd }) => (
  <View style={[styles.card, isLast && { marginBottom: Responsive.getHeight('4%') }]}>
    <View style={styles.row}>
      <Image source={AppIcons.locationPin} style={styles.icon} />
      <Text style={styles.name}>{name}</Text>
    </View>

    <Text style={styles.sub}>Coordinates: {coordinates}</Text>
    <Text style={styles.sub}>Contact: {contact}</Text>
    <Text style={styles.note}>
      Note: <Text style={{ color: Theme.colors.primary }}>{note}</Text>
    </Text>

    {isLast && (
      <TouchableOpacity style={styles.addBtn} onPress={onAdd}>
        <Image source={AppIcons.plus} style={styles.addIcon} />
      </TouchableOpacity>
    )}
  </View>
);

export default SavedLocationCard;

const styles = StyleSheet.create({
  card: {
    borderWidth: Theme.borders.width,
    borderColor: Theme.colors.borderClr,
    borderRadius: Theme.borders.normalRadius,
    backgroundColor: Theme.colors.white,
    padding: Responsive.getWidth('4%'),
    marginTop: Responsive.getHeight('1%'),
    position: 'relative',
    ...Theme.shadows.small,
    elevation: Theme.elevation.small,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Responsive.getHeight('0.5%'),
  },
  icon: {
    height: Responsive.getHeight('2%'),
    width: Responsive.getHeight('2%'),
    tintColor: Theme.colors.primary,
    marginRight: Responsive.getWidth('2%'),
  },
  name: {
    fontFamily: Theme.typography.subheading.fontFamily,
    fontSize: Responsive.AppFonts.t2,
    color: Theme.colors.text,
  },
  sub: {
    fontFamily: Theme.typography.body.fontFamily,
    fontSize: Responsive.AppFonts.t3,
    color: Theme.colors.secondryText,
    marginTop: Responsive.getHeight('0.5%'),
  },
  note: {
    fontFamily: Theme.typography.body.fontFamily,
    fontSize: Responsive.AppFonts.t3,
    color: Theme.colors.dark,
    marginTop: Responsive.getHeight('0.5%'),
  },
  addBtn: {
    backgroundColor: Theme.colors.primary,
    height: Responsive.getHeight('5%'),
    width: Responsive.getHeight('5%'),
    borderRadius: Theme.borders.fullRadius * 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: Responsive.getHeight('2%'),
    right: Responsive.getWidth('3%'),
    ...Theme.shadows.medium,
    elevation: Theme.elevation.medium,
  },
  addIcon: {
    height: Responsive.getHeight('2.2%'),
    width: Responsive.getHeight('2.2%'),
    tintColor: Theme.colors.white,
  },
});
