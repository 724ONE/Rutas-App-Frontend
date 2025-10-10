import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AppIcons } from '../../constants/icons';
import AppColors from '../../constants/colors';
import Fonts from '../../constants/fonts';

const InputText = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  isInvalid,
  icon,
  showToggle = false,
  heading
}) => {
  const [hide, setHide] = useState(secureTextEntry);

  return (
    <View>
      <Text style={styles.heading}>{heading}</Text>
      <View style={[styles.container, isInvalid && styles.errorBorder]}>
        {icon && <Image source={icon} style={styles.icon} />}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={hide}
          keyboardType={keyboardType}
          placeholderTextColor="#9a9a9a"
        />
        {showToggle && (
          <TouchableOpacity onPress={() => setHide(!hide)}>
            <Image
              source={hide ? AppIcons.showPass : AppIcons.hidePass}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  heading: {
    fontSize: 14,
    fontFamily: Fonts.poppinsMedium,
    color: AppColors.blackClr,
    marginBottom: 8,
  },
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: AppColors.borderClr,
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 12,
    height:50,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#000',
  },
  icon: {
    resizeMode: 'center',
    width: 20,
    height: 20,
    tintColor: AppColors.primaryClr,
    marginRight: 8,
  },
  eyeIcon: {
    width: 22,
    height: 22,
    tintColor: AppColors.primaryClr,
    resizeMode: 'contain'
  },
  errorBorder: {
    borderColor: '#e53935',
  },
});
