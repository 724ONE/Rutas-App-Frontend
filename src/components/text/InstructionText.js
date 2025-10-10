import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Fonts from '../../constants/fonts';

const InstructionText = ({ text, customStyles }) => {
  return <Text style={[styles.instruction, customStyles]}>{text}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instruction: {
    fontFamily: Fonts.poppinsRegular,
    includeFontPadding: false,
    fontSize: 16,
    color: '#6b6b6b',
    marginBottom: 24,
  },
});
