import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Heading from '../../components/text/Heading';
import InstructionText from '../../components/text/InstructionText';
import InputText from '../../components/inputs/InputText';
import SocialLoginButtons from '../../components/buttons/SocialLoginButtons';
import { AppIcons } from '../../constants/icons';
import { registerStyles } from './Styles';
import AppColors from '../../constants/colors';
import Routes from '../../navigation/routes';
import Fonts from '../../constants/fonts';
import { CustomBackButton } from '../../components/buttons/BackButton';

const Register = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [invalid, setInvalid] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignup = () => {
    if (!fullName || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    Alert.alert('Success', 'Account created successfully!');
    navigation.replace(Routes.login);
  };

  const isFilled = fullName && email && password && confirmPassword;

  return (
    <View style={registerStyles.container}>
      {/* Title */}

      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
        <CustomBackButton />
        <Heading title="Sign Up" customStyles={{
          marginLeft: 15,
          marginBottom: 0,
        }} />
      </View>

      {/* Subtitle */}
      <InstructionText
        text="Fill the bellow details to get access in the app."
        customStyles={{
          fontFamily: Fonts.poppinsMedium,
          color: AppColors.blackClr,
          marginBottom: 20,
        }}
      />

      {/* Full Name */}
      <InputText
        heading="Name"
        placeholder="Enter your name"
        value={fullName}
        onChangeText={setFullName}
        icon={AppIcons.user}
        isInvalid={invalid}
      />

      {/* Email */}
      <InputText
        heading="Email"
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        icon={AppIcons.email}
        keyboardType="email-address"
        isInvalid={invalid}
      />

      {/* Password */}
      <InputText
        heading="Password"
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        icon={AppIcons.password}
        secureTextEntry
        showToggle
        isInvalid={invalid}
      />

      {/* Confirm Password */}
      <InputText
        heading="Confirm Password"
        placeholder="Confirm your password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        icon={AppIcons.password}
        secureTextEntry
        showToggle
        isInvalid={invalid}
      />

      {/* Signup Button */}
      <TouchableOpacity
        style={[
          registerStyles.loginButton,
          { backgroundColor: isFilled ? AppColors.primaryClr : '#bfbfbf' },
        ]}
        onPress={handleSignup}
        disabled={!isFilled || loading}
      >
        <Text style={registerStyles.loginText}>
          {loading ? 'Creating Account...' : 'Signup'}
        </Text>
      </TouchableOpacity>

      {/* Social Login Buttons */}
      <SocialLoginButtons />

      {/* Footer */}
      <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 20 }}>
        <Text style={registerStyles.signupText}>
          Already have an account?{' '}
          <Text
            style={registerStyles.signupLink}
            onPress={() => navigation.navigate(Routes.login)}
          >
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Register;
