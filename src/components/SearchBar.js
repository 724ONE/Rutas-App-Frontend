import React from 'react';
import {  Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Theme, Responsive } from '../libs';
import { AppIcons } from '../constants/icons';

const SearchBar = ({
  placeholder = 'Search',
  onPress,
  containerStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.container, containerStyle]}
    >
      <Image style={styles.icon} source={AppIcons.search} />
      <Text style={[styles.text, textStyle]}>{placeholder}</Text>
    </TouchableOpacity>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Theme.colors.white,
    borderWidth: 1,
    borderColor: Theme.colors.borderClr,
    borderRadius: Theme.borders.normalRadius,
    paddingHorizontal: Responsive.getWidth('3%'),
    height: Responsive.getHeight('5.5%'),
    marginTop: Responsive.getHeight('2%'),
    marginVertical: Responsive.getHeight('1.5%'),
  },
  icon: {
    marginRight: Responsive.getWidth('2%'),
    height: Responsive.getHeight('2.5%'),
    width: Responsive.getHeight('2.5%'),
    resizeMode: 'contain',
    tintColor: Theme.colors.primary,
  },
  text: {
    flex: 1,
    fontSize: Responsive.AppFonts.t1,
    fontFamily: Theme.typography.body.fontFamily,
    color: Theme.colors.hintText,
  },
});
