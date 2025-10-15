import { StyleSheet } from 'react-native';
import { Theme, Responsive } from '../../libs';

export const registerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.screenBg,
    paddingHorizontal: Responsive.getWidth('5%'),
  },
  loginButton: {
    height: Responsive.getHeight('6%'),
    borderRadius: Theme.borders.fullRadius,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: Responsive.getHeight('2%'),
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
    paddingBottom: Responsive.getHeight('0.6%'),
  },
  signupLink: {
    color: Theme.colors.primary,
    fontFamily: Theme.typography.subheading.fontFamily,
  },
});