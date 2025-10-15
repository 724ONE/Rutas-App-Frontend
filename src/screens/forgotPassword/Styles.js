import { StyleSheet } from "react-native";
import { Theme, Responsive } from '../../libs';

export const forgotPasswordStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.screenBg,
    paddingHorizontal: Responsive.getWidth('5%'),
    paddingTop: Responsive.getHeight('2%'),
  },
  loginButton: {
    width: Responsive.getWidth('90%'),
    marginBottom: Responsive.getHeight('2%'),
  },
  loginText: {
    color: Theme.colors.white,
    fontSize: Responsive.AppFonts.t1,
    fontFamily: Theme.typography.subheading.fontFamily,
  },
  signupText: {
    textAlign: 'center',
    marginTop: Responsive.getHeight('3%'),
    fontSize: Responsive.AppFonts.t2,
    color: Theme.colors.textLight,
    fontFamily: Theme.typography.body.fontFamily,
    includeFontPadding: false,
  },
  signupLink: {
    color: Theme.colors.primary,
    fontFamily: Theme.typography.subheading.fontFamily,
    includeFontPadding: false,
  },
});