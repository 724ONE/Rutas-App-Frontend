import { StyleSheet } from 'react-native';
import AppColors from '../../constants/colors';
import Fonts from '../../constants/fonts';

export const forgotPasswordCodeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.whiteClr,
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  // Header section (matches Login/ForgotPassword)
  headerSection: {
    marginBottom: 25,
  },

  title: {
    fontSize: 28,
    fontFamily: Fonts.poppinsBemiBold,
    color: AppColors.blackClr,
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 14,
    fontFamily: Fonts.poppinsRegular,
    color: AppColors.textLightGrey || '#7a7a7a',
    lineHeight: 20,
  },

  // OTP label + code input area
  otpContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },

  otpLabel: {
    fontSize: 14,
    fontFamily: Fonts.poppinsMedium,
    color: AppColors.blackClr,
    marginBottom: 12,
  },

  codeFieldRoot: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },

  cell: {
    width: 45,
    height: 55,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: AppColors.borderClr || '#bfbfbf',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    fontFamily: Fonts.poppinsMedium,
    color: AppColors.blackClr,
    backgroundColor: AppColors.whiteClr,
  },

  focusCell: {
    borderColor: AppColors.primaryClr,
    borderWidth: 2,
  },

  // Continue button (reuses login button theme)
  continueButton: {
    backgroundColor: AppColors.primaryClr,
    borderRadius: 12,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  continueText: {
    fontFamily: Fonts.poppinsBemiBold,
    fontSize: 16,
    color: AppColors.whiteClr,
  },

  // Resend code text/link (footer area)
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },

  resendText: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: 13,
    color: AppColors.blackClr,
  },

  resendLink: {
    fontFamily: Fonts.poppinsMedium,
    fontSize: 13,
    color: AppColors.primaryClr,
    marginLeft: 3,
  },
});
