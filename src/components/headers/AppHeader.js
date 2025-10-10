import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppColors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import { AppIcons } from '../../constants/icons';
import IconButton from '../buttons/IconButton';

const AppHeader = ({
  title = '',
  onBackPress,
  rightIcon,
  onRightPress,
  backgroundColor = AppColors.primaryClr,
  textColor = AppColors.whiteClr,
  showBack = true,
  containerStyle,
}) => {
  return (
    <View style={[styles.header, { backgroundColor }, containerStyle]}>
      {/* Back Button */}
      {showBack ? (
        <IconButton
          icon={AppIcons.backArrow}
          onPress={onBackPress}
          style={styles.backButton}
          size={36}
          iconSize={16}
        />
      ) : (
        <View style={{ width: 40 }} /> // placeholder for alignment
      )}

      {/* Title */}
      <Text style={[styles.title, { color: textColor }]}>{title}</Text>

      {/* Optional Right Icon */}
      {rightIcon ? (
        <IconButton
          icon={rightIcon}
          onPress={onRightPress}
          style={styles.rightButton}
          size={22}
        />
      ) : (
        <View style={{ width: 40 }} /> // maintain layout
      )}
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  header: {
    height: 110,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    paddingTop: 50,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  backButton: {
    backgroundColor: AppColors.whiteClr,
    borderRadius: 100,
    padding: 8,
  },
  title: {
    fontFamily: Fonts.poppinsSemiBold,
    fontSize: 17,
    textAlign: 'center',
    flex: 1,
  },
  rightButton: {
    backgroundColor: AppColors.whiteClr,
    borderRadius: 100,
    padding: 8,
  },
});
