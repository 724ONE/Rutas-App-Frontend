import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import AppColors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import { CustomBackButton } from '../../components/buttons/BackButton';
import Heading from '../../components/text/Heading';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import RootView from '../../components/RootView';
import { Color } from 'react-native/types_generated/Libraries/Animated/AnimatedExports';

const ForgotPasswordCode = ({ navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(59);
  const [isResendVisible, setIsResendVisible] = useState(false);

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else {
      setIsResendVisible(true);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (value, index) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleResend = () => {
    // Trigger resend logic here (API call or other)
    setTimer(59);
    setIsResendVisible(false);
  };

  // Format timer (e.g., 00:59)
  const formattedTime = `00:${timer < 10 ? `0${timer}` : timer}`;

  return (
    <RootView>
      <View style={styles.container}>
        {/* Header */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
          <CustomBackButton />
          <Heading
            title="Verify OTP"
            customStyles={{
              marginLeft: 15,
              marginBottom: 0,
            }}
          />
        </View>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          We have sent an OTP to <Text style={styles.email}>johndoe@gmail.com</Text>
        </Text>

        {/* OTP boxes */}
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.otpBox}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={(value) => handleChange(value, index)}
            />
          ))}
        </View>

        {/* Resend */}
        <View style={styles.resendContainer}>
          {!isResendVisible ? (
            <View style={{ width: '100%', justifyContent: 'space-between',flexDirection:'row' }}>
              <Text style={styles.resendText}>Didn’t you receive the OTP?</Text>
              <Text style={styles.timer}> {formattedTime}</Text>
            </View>
          ) : (
            <View style={{ width: '100%', justifyContent: 'space-between',flexDirection:'row' }}>
              <Text style={styles.resendText}>Didn’t you receive the OTP? </Text>
              <Text style={styles.resendLink} onPress={handleResend}>Resend OTP</Text>
            </View>
          )}
        </View>

        {/* Submit button */}
        <PrimaryButton text={'Verify & submit'} btnFun={() => {

        }} customStyles={{
          width: '100%',
          // height: 32.0,
          // borderRadius: 4,
          // margin: 15,
          // alignSelf: 'flex-end',
        }}
          textStyles={{
            fontSize: 13,
          }}
        />
        {/* <TouchableOpacity style={styles.submitBtn}>
        <Text style={styles.submitText}>Verify & submit</Text>
      </TouchableOpacity> */}
      </View>
    </RootView>
  );
};

export default ForgotPasswordCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.whiteClr,
    paddingHorizontal: 15,
    // paddingTop: 70,
  },
  backBtn: {
    position: 'absolute',
    top: 50,
    left: 25,
  },
  title: {
    fontFamily: Fonts.poppinsSemiBold,
    fontSize: 22,
    color: AppColors.blackClr,
    marginBottom: 10,
    marginTop: 20,
  },
  subtitle: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: 14,
    color: AppColors.blackClr,
    marginBottom: 30,
  },
  email: {
    color: AppColors.primaryClr,
    fontFamily: Fonts.poppinsMedium,
    textDecorationLine: 'underline',

  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  otpBox: {
    width: 45,
    height: 55,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: Fonts.poppinsMedium,
    color: AppColors.blackClr,
  },
  resendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  resendText: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: 14,
    color: '#444',
  },
  resendLink: {
    color: AppColors.primaryClr,
    fontFamily: Fonts.poppinsMedium,
  },
  timer: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: 13,
    color: '#444',
  },
  // submitBtn: {
  //   backgroundColor: AppColors.primaryClr,
  //   borderRadius: 10,
  //   paddingVertical: 15,
  //   alignItems: 'center',
  // },
  // submitText: {
  //   color: AppColors.whiteClr,
  //   fontFamily: Fonts.poppinsBemiBold,
  //   fontSize: 16,
  // },
});
