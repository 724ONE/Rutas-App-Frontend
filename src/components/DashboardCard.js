import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image, View } from 'react-native';
import { Responsive, Theme } from '../libs';

const DashboardCard = ({ title, value, bg, iconColor, onPress, icon, iconBg, textClr }) => (
  <TouchableOpacity
    activeOpacity={0.85}
    style={[
      styles.card,
      { backgroundColor: bg || Theme.colors.white },
    ]}
    onPress={onPress}>
   <View style={{justifyContent: 'center', alignItems: 'center',padding:Responsive.sizeMatter.scale(6), borderRadius:Theme.borders.largeRadius, backgroundColor: iconBg, borderRadius:Theme.borders.largeRadius,}}>
     <Image
      source={icon}
      style={[styles.icon, { tintColor: iconColor }]}
    />
   </View>
    <Text style={styles.value}>{value}</Text>
    <Text style={[styles.title, { color: textClr }]}>{title}</Text>
  </TouchableOpacity>
);

export default DashboardCard

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: Theme.borders.normalRadius,
    paddingVertical: Responsive.sizeMatter.verticalScale(15),
    paddingHorizontal: Responsive.sizeMatter.scale(12),
    marginHorizontal: Responsive.sizeMatter.scale(2),
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  icon: {
    // padding: Responsive.sizeMatter.scale(6),
    borderRadius: Theme.borders.largeRadius,
    height: Responsive.sizeMatter.scale(20),
    width: Responsive.sizeMatter.scale(20),
    resizeMode: 'contain',
  },
  value: {
    fontSize: Responsive.AppFonts.h5,
    fontFamily: Theme.typography.subheading.fontFamily,
    color: Theme.colors.black,
    marginTop: Responsive.sizeMatter.verticalScale(8),
  },
  title: {
    fontSize: Responsive.AppFonts.t1,
    fontFamily: Theme.typography.subheading.fontFamily,
    marginTop: Responsive.sizeMatter.verticalScale(2),
  },
});
