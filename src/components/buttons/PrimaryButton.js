import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Theme, Responsive } from '../../libs';

export function PrimaryButton({
  text,
  btnFun,
  customStyles,
  isDisabled,
  textStyles,
}) {
  return (
    <TouchableOpacity
      disabled={isDisabled}
      activeOpacity={0.8}
      style={[
        styles.buttonContainer,
        isDisabled && { backgroundColor: Theme.colors.border },
        customStyles,
      ]}
      onPress={btnFun}
    >
      <Text
        style={[
          styles.textContainer,
          textStyles,
          isDisabled && { color: Theme.colors.hintText },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: Responsive.getHeight('6%'),
    width: '90%',
    alignSelf: 'center',
    borderRadius: Theme.borders.normalRadius,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.colors.primary,
  },
  textContainer: {
    includeFontPadding: false,
    fontSize: Responsive.AppFonts.h6,
    color: Theme.colors.white,
    fontFamily: Theme.typography.subheading.fontFamily,
  },
});
