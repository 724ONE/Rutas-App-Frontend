import { StyleSheet } from "react-native";
import AppColors from "../../constants/colors";
import Fonts from "../../constants/fonts";

export const registerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.screenBg,
    padding: 20,
  },
  loginButton: {
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  signupText: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 14,
    color: '#888888',
    fontFamily:Fonts.poppinsRegular,
    includeFontPadding:false
  },
  signupLink: {
    color: AppColors.primaryClr,
    fontFamily:Fonts.poppinsSemiBold,
    includeFontPadding:false
  },
});