import { StyleSheet } from 'react-native';
import { Theme, Responsive } from '../../libs';

export const forgotPasswordCodeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.white,
    paddingHorizontal: Responsive.getWidth('5%'),
    paddingTop: Responsive.getHeight('4%'),
  },

  // Header section (matches Login/ForgotPassword)
  headerSection: {
    marginBottom: 25,
  },

  title: {
    fontSize: Responsive.AppFonts.h2,
    fontFamily: Theme.typography.subheading.fontFamily,
    color: Theme.colors.text,
    marginBottom: Responsive.getHeight('1%'),
  },

  subtitle: {
    fontSize: Responsive.AppFonts.t1,
    fontFamily: Theme.typography.body.fontFamily,
    color: Theme.colors.textLight || '#7a7a7a',
    lineHeight: Responsive.getHeight('2.2%'),
  },

  // OTP label + code input area
  otpContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },

  otpLabel: {
    fontSize: Responsive.AppFonts.t1,
    fontFamily: Theme.typography.medium.fontFamily,
    color: Theme.colors.text,
    marginBottom: Responsive.getHeight('1%'),
  },

  codeFieldRoot: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },

  cell: {
    width: Responsive.getWidth('12%'),
    height: Responsive.getHeight('7%'),
    borderRadius: Theme.borders.regularRadius,
    borderWidth: Theme.borders.width,
    borderColor: Theme.colors.borderClr || '#bfbfbf',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: Responsive.AppFonts.h5,
    fontFamily: Theme.typography.medium.fontFamily,
    color: Theme.colors.text,
    backgroundColor: Theme.colors.white,
  },

  focusCell: {
    borderColor: Theme.colors.primary,
    borderWidth: 2,
  },

  // Continue button (reuses login button theme)
  continueButton: {
    backgroundColor: Theme.colors.primary,
    borderRadius: Theme.borders.regularRadius,
    height: Responsive.getHeight('6%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Responsive.getHeight('2%'),
  },

  continueText: {
    fontFamily: Theme.typography.subheading.fontFamily,
    fontSize: Responsive.AppFonts.t1,
    color: Theme.colors.white,
  },

  // Resend code text/link (footer area)
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },

  resendText: {
    fontFamily: Theme.typography.body.fontFamily,
    fontSize: Responsive.AppFonts.t2,
    color: Theme.colors.text,
  },

  resendLink: {
    fontFamily: Theme.typography.medium.fontFamily,
    fontSize: Responsive.AppFonts.t2,
    color: Theme.colors.primary,
    marginLeft: Responsive.getWidth('1%'),
  },
});
