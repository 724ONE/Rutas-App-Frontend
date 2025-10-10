import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import AppColors from '../../constants/colors';

const IconButton = ({
  icon,
  size = 45,
  iconSize = 22,
  backgroundColor = AppColors.whiteClr,
  iconColor = AppColors.primaryClr,
  borderRadius = 12,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor,
          borderRadius,
          height: size,
          width: size,
        },
        style,
      ]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Image
        source={icon}
        style={{
          height: iconSize,
          width: iconSize,
          tintColor: iconColor,
        }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
