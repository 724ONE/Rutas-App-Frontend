import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Heading from '../../components/text/Heading';
import InstructionText from '../../components/text/InstructionText';
import InputText from '../../components/inputs/InputText';
import SocialLoginButtons from '../../components/buttons/SocialLoginButtons';
import { AppIcons } from '../../constants/icons';
import { loginStyles } from './Styles'
import AppColors from '../../constants/colors';
import Routes from '../../navigation/routes';
import TextButton from '../../components/buttons/TextButton';
import Fonts from '../../constants/fonts';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalid, setInvalid] = useState(false);

  const handleLogin = () => {
    if (email !== 'test@gmail.com' || password !== '123456') {
      setInvalid(true);
    } else {
      setInvalid(false);
      navigation.replace(Routes.customBottomNav);
    }
  };

  const isFilled = email && password;

  return (

    <View style={loginStyles.container}>

      <Heading title="Login" />

      <InstructionText text="Enter your details to get access." customStyles={{
        fontFamily: Fonts.poppinsMedium,
        color: AppColors.blackClr,
        marginBottom: 20
      }}
      />

      <InputText
        heading={'Emial'}
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
        icon={AppIcons.email}
        keyboardType="email-address"
        isInvalid={invalid}
      />

      <InputText
        heading={'Password'}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        icon={AppIcons.password}
        secureTextEntry
        showToggle
        isInvalid={invalid}
      />

      <TextButton onPress={() => {
        navigation.navigate(Routes.forgotPassword)
      }} isInvalid={invalid}
        text={'Forgot the password?'}
        customStyles={{
          marginBottom: 15,
        }}
        textStyles={{
          fontSize: 12,
          color: AppColors.primaryClr,
          fontFamily: Fonts.poppinsRegular,
        }}
      />

      <TouchableOpacity
        style={[
          loginStyles.loginButton,
          { backgroundColor: isFilled ? AppColors.primaryClr : '#bfbfbf' },
        ]}
        onPress={handleLogin}
        disabled={!isFilled}
      >
        <Text style={loginStyles.loginText}>Login</Text>

      </TouchableOpacity>

      <SocialLoginButtons />

      <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 20 }}>
        <Text style={loginStyles.signupText}>
          Don’t have an account?{' '}
          <Text
            style={loginStyles.signupLink}
            onPress={() => navigation.navigate(Routes.register)} >
            Signup
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;


