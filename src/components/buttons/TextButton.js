import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppColors from '../../constants/colors';
import Fonts from '../../constants/fonts';

const TextButton = ({ onPress, isInvalid,textStyles ,text,customStyles}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container,customStyles]}>
      <Text style={[styles.text, isInvalid && styles.errorText, textStyles]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    marginBottom: 25,
  },
  text: {
    fontSize: 14,
    color: AppColors.primaryClr,
    fontFamily: Fonts.poppinsRegular,
  },
  errorText: {
    color: '#e53935',
  },
});
