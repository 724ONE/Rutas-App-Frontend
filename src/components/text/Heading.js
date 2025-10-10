import React from 'react';
import { Text, StyleSheet } from 'react-native';
import AppColors from '../../constants/colors';
import Fonts from '../../constants/fonts';

const Heading = ({ title ,customStyles}) => {
  return <Text style={[styles.heading,customStyles]}>{title}</Text>;
};

export default Heading;

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    fontFamily: Fonts.poppinsBold,
    color: AppColors.blackClr,
    includeFontPadding:false,
    marginBottom: 8,
  },
});
