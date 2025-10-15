import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Theme, Responsive } from '../../libs';
import { CustomBackButton } from '../../components/buttons/BackButton';
import Heading from '../../components/text/Heading';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import RootView from '../../components/RootView';
import Context from '../../context';
import Routes from '../../navigation/routes';

const ForgotPasswordCode = ({ navigation }) => {
  const { languageString } = React.useContext(Context);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);
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
    // Allow pasted values (multiple chars) and single-digit entries
    const digits = value.replace(/[^0-9]/g, '');
    if (!digits) return;

    const newOtp = [...otp];

    if (digits.length === 1) {
      newOtp[index] = digits;
      setOtp(newOtp);
      // focus next
      const nextIndex = index + 1;
      if (nextIndex < inputRefs.current.length) {
        inputRefs.current[nextIndex]?.focus();
      }
    } else {
      // If multiple digits pasted, distribute them starting at index
      let i = index;
      for (const ch of digits) {
        if (i >= newOtp.length) break;
        newOtp[i] = ch;
        i += 1;
      }
      setOtp(newOtp);
      // focus the next empty or last filled
      const focusIndex = Math.min(i, inputRefs.current.length - 1);
      inputRefs.current[focusIndex]?.focus();
    }
  };

  const handleKeyPress = ({ nativeEvent }, index) => {
    if (nativeEvent.key === 'Backspace') {
      if (otp[index] === '') {
        const prevIndex = index - 1;
        if (prevIndex >= 0) {
          inputRefs.current[prevIndex]?.focus();
        }
      } else {
        // clear current
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
      }
    }
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
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: Responsive.getHeight('2%') }}>
          <CustomBackButton />
          <Heading
            title={languageString?.auth?.verifyOtpTitle || 'Verify OTP'}
            customStyles={{
              marginLeft: Responsive.getWidth('3%'),
              marginBottom: 0,
            }}
          />
        </View>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          {languageString?.auth?.otpSentPart1 || 'We have sent an OTP to'} <Text style={styles.email}>{email || 'johndoe@gmail.com'}</Text>
        </Text>

        {/* OTP boxes */}
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              style={styles.otpBox}
              keyboardType="numeric"
              maxLength={6}
              value={digit}
              onChangeText={(value) => handleChange(value, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
            />
          ))}
        </View>

        {/* Resend */}
        <View style={styles.resendContainer}>
          {!isResendVisible ? (
            <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row' }}>
              <Text style={styles.resendText}>{languageString?.auth?.didntReceiveOtp || "Didn't you receive the OTP?"}</Text>
              <Text style={styles.timer}> {formattedTime}</Text>
            </View>
          ) : (
            <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row' }}>
              <Text style={styles.resendText}>{languageString?.auth?.didntReceiveOtp || "Didn't you receive the OTP?"} </Text>
              <Text style={styles.resendLink} onPress={handleResend}>{languageString?.auth?.resendOtp || 'Resend OTP'}</Text>
            </View>
          )}
        </View>

        {/* Submit button */}
        <PrimaryButton text={languageString?.auth?.verifySubmit || 'Verify & submit'} btnFun={() => { navigation.navigate(Routes.resetPassword) }} />
      </View>
    </RootView>
  );
};

export default ForgotPasswordCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.screenBg,
    paddingHorizontal: Responsive.getWidth('5%'),
    paddingTop: Responsive.getHeight('4%'),
  },
  backBtn: {
    position: 'absolute',
    top: 50,
    left: 25,
  },
  title: {
    fontFamily: Theme.typography.subheading.fontFamily,
    fontSize: Responsive.AppFonts.h4,
    color: Theme.colors.text,
    marginBottom: Responsive.getHeight('1%'),
    marginTop: Responsive.getHeight('2%'),
  },
  subtitle: {
    fontFamily: Theme.typography.body.fontFamily,
    fontSize: Responsive.AppFonts.t1,
    color: Theme.colors.text,
    marginBottom: Responsive.getHeight('3%'),
  },
  email: {
    color: Theme.colors.primary,
    fontFamily: Theme.typography.medium.fontFamily,
    textDecorationLine: 'underline',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  otpBox: {
    width: Responsive.getWidth('12%'),
    height: Responsive.getHeight('7%'),
    borderWidth: Theme.borders.width,
    borderColor: Theme.colors.borderClr,
    borderRadius: Theme.borders.regularRadius,
    textAlign: 'center',
    fontSize: Responsive.AppFonts.h5,
    fontFamily: Theme.typography.medium.fontFamily,
    color: Theme.colors.text,
    textAlignVertical: 'center',
  },
  resendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  resendText: {
    fontFamily: Theme.typography.body.fontFamily,
    fontSize: Responsive.AppFonts.t1,
    color: Theme.colors.black,
  },
  resendLink: {
    color: Theme.colors.primary,
    fontFamily: Theme.typography.medium.fontFamily,
  },
  timer: {
    fontFamily: Theme.typography.body.fontFamily,
    fontSize: Responsive.AppFonts.t2,
    color: Theme.colors.textLight,
  },
});
