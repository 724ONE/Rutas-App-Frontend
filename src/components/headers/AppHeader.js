import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Theme, Responsive } from '../../libs';
import { AppIcons } from '../../constants/icons';
import IconButton from '../buttons/IconButton';
import { useNavigation } from '@react-navigation/native';

const AppHeader = ({
  title = '',
  onBackPress,
  rightIcon,
  onRightPress,
  backgroundColor = Theme.colors.primary,
  showBack = true,
  containerStyle,
}) => {

  const navigation = useNavigation();
  onBackPress = onBackPress || (() => { navigation.goBack() });
  const isWhiteBg = backgroundColor === Theme.colors.white;
  const iconBgColor = isWhiteBg ? Theme.colors.primary : Theme.colors.white;
  const iconTintColor = isWhiteBg ? Theme.colors.white : Theme.colors.primary;
  const titleColor = isWhiteBg ? Theme.colors.text : Theme.colors.white;
  return (
    <View
      style={[
        styles.header,
        {
          backgroundColor,
          borderBottomLeftRadius: Theme.borders.fullRadius,
          borderBottomRightRadius: Theme.borders.fullRadius,
        },
        containerStyle,
      ]}
    >
      {/* Back Button */}
      {showBack ? (
        <IconButton
          icon={AppIcons.backArrow}
          size={Responsive.getWidth('10%')}
          iconSize={Responsive.getWidth('4%')}
          backgroundColor={iconBgColor}
          iconColor={iconTintColor}
          borderRadius={Responsive.getWidth('5%')}
          onPress={onBackPress}
        />
      ) : (
        <View style={{ width: Responsive.getWidth('10%') }} />
      )}

      {/* Title */}
      <Text
        style={[
          styles.title,
          {
            color: titleColor,
            fontFamily: Theme.typography.subheading.fontFamily,
            fontWeight: Theme.typography.medium.fontWeight,
          },
        ]}
        numberOfLines={1}
      >
        {title}
      </Text>

      {/* Right Icon (optional) */}
      {rightIcon ? (
        <IconButton
          icon={rightIcon}
          size={Responsive.getWidth('10%')}
          iconSize={Responsive.getWidth('4%')}
          backgroundColor={iconBgColor}
          iconColor={iconTintColor}
          borderRadius={Responsive.getWidth('5%')}
          onPress={onRightPress}
        />
      ) : (
        <View style={{ width: Responsive.getWidth('10%') }} />
      )}
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: Responsive.getHeight('8%'),
    paddingHorizontal: Responsive.getWidth('6%'),
    // paddingTop: Responsive.getHeight('6%'),
    paddingBottom: Responsive.getHeight('2%'),
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: Responsive.sizeMatter.moderateScale(17),
  },
});
