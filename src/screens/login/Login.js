import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Heading from '../../components/text/Heading';
import InstructionText from '../../components/text/InstructionText';
import InputText from '../../components/inputs/InputText';
import SocialLoginButtons from '../../components/buttons/SocialLoginButtons';
import TextButton from '../../components/buttons/TextButton';
import { AppIcons } from '../../constants/icons';
import { Theme, Responsive } from '../../libs';
import Context from '../../context';
import Routes from '../../navigation/routes';
import { loginStyles } from './Styles';
import RootView from '../../components/RootView';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';

const Login = ({ navigation }) => {
  const { languageString } = React.useContext(Context);

  const [email, setEmail] = useState(__DEV__ ? 'test@gmail.com':"");
  const [password, setPassword] = useState(__DEV__ ? '123456':"");
  const [invalid, setInvalid] = useState(false);

  const handleLogin = () => {
    if (email !== 'test@gmail.com' || password !== '123456') {
      setInvalid(true);
    } else {
      setInvalid(false);
      navigation.replace(Routes.customBottomNav);
    }
  }

  const isFilled = !!(email && password);

  return (
    <RootView>
      <View style={loginStyles.container}>
        {/* Header */}
        <Heading
          title={languageString?.auth?.loginTitle}
          customStyles={{
            fontFamily: Theme.typography.heading.fontFamily,
            fontSize: Responsive.AppFonts.h2,
            marginBottom: 0,
          }}
        />

        {/* Description */}
        <InstructionText
          text={languageString?.auth?.loginDescription}
          customStyles={{
            fontFamily: Theme.typography.medium.fontFamily,
            color: Theme.colors.text,
            marginBottom: Responsive.getHeight('2%'),
            marginTop: Responsive.getHeight('1.5%'),
            fontSize: Responsive.AppFonts.t1,
          }}
        />

        {/* Email Input */}
        <InputText
          heading="Email"
          placeholder={languageString?.auth?.emailPlaceholder}
          value={email}
          onChangeText={setEmail}
          leftIcon={AppIcons.email}
          keyboardType="email-address"
          isInvalid={invalid}
        />

        {/* Password Input */}
        <InputText
          heading="Password"
          placeholder={languageString?.auth?.passwordPlaceholder}
          value={password}
          onChangeText={setPassword}
          leftIcon={AppIcons.password}
          secureTextEntry
          showToggle
          isInvalid={invalid}
        />

        {/* Forgot Password */}
        <TextButton
          onPress={() => navigation.navigate(Routes.forgotPassword)}
          text={languageString?.auth?.forgotPassword}
          customStyles={{ marginBottom: 15 }}
          textStyles={{
            fontSize: Responsive.AppFonts.t2,
            color: Theme.colors.primary,
            fontFamily: Theme.typography.body.fontFamily,
          }}
        />

        {/* Login Button */}
        <PrimaryButton
          text={languageString?.auth?.loginButton}
          btnFun={handleLogin}
          isDisabled={!isFilled}
          customStyles={[
            loginStyles.loginButton,
            { backgroundColor: isFilled ? Theme.colors.primary : Theme.colors.primaryBtnDisableClr },
          ]}
          textStyles={loginStyles.loginText}
        />

        {/* Social Login */}
        <SocialLoginButtons />

        {/* Signup Text */}
        <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: Responsive.getHeight('3%') }}>
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
    </RootView>
  );
};

export default Login;
