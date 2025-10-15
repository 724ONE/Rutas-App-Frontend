import { StyleSheet } from 'react-native';
import { Theme, Responsive } from '../../libs';

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.screenBg,
    paddingHorizontal: Responsive.getWidth('5%'),
    paddingTop: Responsive.getHeight('2%'),
  },
  loginButton: {
    marginVertical: Responsive.getHeight('2%'),
  },
    loginText: {
    color: Theme.colors.white,
    fontSize: Responsive.AppFonts.t1,
    fontFamily: Theme.typography.medium.fontFamily,
  },
  signupText: {
    textAlign: 'center',
    fontSize: Responsive.AppFonts.t2,
    color: Theme.colors.secondryText,
    fontFamily: Theme.typography.body.fontFamily,
    includeFontPadding: false,
  },
  signupLink: {
    color: Theme.colors.primary,
    fontFamily: Theme.typography.medium.fontFamily,
    includeFontPadding: false,
  },
});
