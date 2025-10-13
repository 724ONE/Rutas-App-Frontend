import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AppIcons } from '../../constants/icons';
import { Responsive, Theme } from '../../libs';

const InputText = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  isInvalid = false,
  leftIcon,          // optional left icon
  rightIcon,         // optional right icon (edit, custom, etc.)
  showToggle = false, // if true -> show password toggle icon
  heading,
  onRightPress,      // optional right icon press handler
}) => {
  const [hide, setHide] = useState(secureTextEntry);

  return (
    <View>
      {heading && <Text style={styles.heading}>{heading}</Text>}

      <View style={[styles.container, isInvalid && styles.errorBorder]}>
        {/* 👈 Left Icon */}
        {leftIcon && <Image source={leftIcon} style={styles.leftIcon} />}

        {/* 📝 Text Input */}
        <TextInput
          style={[
            styles.input,
            { paddingLeft: leftIcon ? Responsive.getWidth('2%') : 0 },
          ]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={hide}
          keyboardType={keyboardType}
          placeholderTextColor={Theme.colors.hintText}
        />

        {/* 👉 Right Icon (Custom or Password Toggle) */}
        {showToggle ? (
          <TouchableOpacity onPress={() => setHide(!hide)}>
            <Image
              source={hide ? AppIcons.showPass : AppIcons.hidePass}
              style={styles.rightIcon}
            />
          </TouchableOpacity>
        ) : (
          rightIcon && (
            <TouchableOpacity onPress={onRightPress}>
              <Image source={rightIcon} style={styles.rightIcon} />
            </TouchableOpacity>
          )
        )}
      </View>
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  heading: {
    fontSize: Responsive.sizeMatter.moderateScale(14),
    fontFamily: Theme.typography.medium.fontFamily,
    color: Theme.colors.text,
    marginBottom: Responsive.getHeight('1%'),
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: Theme.borders.width,
    borderColor: Theme.colors.borderClr,
    borderRadius: Theme.borders.regularRadius,
    paddingHorizontal: Responsive.getWidth('3.5%'),
    height: Responsive.getHeight('6%'),
    marginBottom: Responsive.getHeight('2%'),
    backgroundColor: Theme.colors.white,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: Responsive.sizeMatter.moderateScale(15),
    color: Theme.colors.text,
    fontFamily: Theme.typography.body.fontFamily,
  },
  leftIcon: {
    resizeMode: 'contain',
    width: Responsive.getWidth('4.5%'),
    height: Responsive.getWidth('4.5%'),
    tintColor: Theme.colors.primary,
    marginRight: Responsive.getWidth('2%'),
  },
  rightIcon: {
    width: Responsive.getWidth('4.5%'),
    height: Responsive.getWidth('4.5%'),
    tintColor: Theme.colors.primary,
    resizeMode: 'contain',
    marginLeft: Responsive.getWidth('2%'),
  },
  errorBorder: {
    borderColor: Theme.colors.error,
  },
});
