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
import Routes from '../../navigation/routes';
import { Theme, Responsive } from '../../libs';
import { CustomBackButton } from '../../components/buttons/BackButton';
import Context from '../../context';
import RootView from '../../components/RootView';

const Register = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [invalid, setInvalid] = useState(false);
  const [loading, setLoading] = useState(false);

  const { languageString } = React.useContext(Context);

  const handleSignup = () => {
    if (!fullName || !email || !password || !confirmPassword) {
      Alert.alert(languageString?.errors?.errorTitle || 'Error', languageString?.errors?.pleaseFillFields || 'Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert(languageString?.errors?.errorTitle || 'Error', languageString?.errors?.passwordMismatch || 'Passwords do not match.');
      return;
    }

    navigation.replace(Routes.login);
  };

  const isFilled = fullName && email && password && confirmPassword;

  return (
    <RootView>
      <View style={registerStyles.container}>
        {/* Header */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: Responsive.getHeight('2%') }}>
          <CustomBackButton />
          <Heading
            title={languageString?.auth?.signupTitle}
            customStyles={{
              marginLeft: Responsive.getWidth('3%'),
              marginBottom: 0,
            }}
          />
        </View>

        {/* Subtitle */}
        <InstructionText
          text={languageString?.auth?.signupDescription}
          customStyles={{
            fontFamily: Theme.typography.medium.fontFamily,
            color: Theme.colors.text,
            marginBottom: Responsive.getHeight('2%'),
            fontSize: Responsive.AppFonts.t1,
          }}
        />

        {/* Full Name */}
        <InputText
          heading="Name"
          placeholder={languageString?.auth?.namePlaceholder}
          value={fullName}
          onChangeText={setFullName}
          leftIcon={AppIcons.user}
          isInvalid={invalid}
        />

        {/* Email */}
        <InputText
          heading="Email"
          placeholder={languageString?.auth?.emailPlaceholder}
          value={email}
          onChangeText={setEmail}
          leftIcon={AppIcons.email}
          keyboardType="email-address"
          isInvalid={invalid}
        />

        {/* Password */}
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

        {/* Confirm Password */}
        <InputText
          heading="Confirm Password"
          placeholder={languageString?.auth?.confirmPasswordPlaceholder}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          leftIcon={AppIcons.password}
          secureTextEntry
          showToggle
          isInvalid={invalid}
        />

        {/* Signup Button */}
        <TouchableOpacity
          style={[
            registerStyles.loginButton,
            { backgroundColor: isFilled ? Theme.colors.primary : Theme.colors.primaryBtnDisableClr },
          ]}
          onPress={handleSignup}
          disabled={!isFilled || loading}
        >
          <Text style={registerStyles.loginText}>
            {loading ? (languageString?.common?.save) : (languageString?.auth?.signupButton)}
          </Text>
        </TouchableOpacity>

        {/* Social Login Buttons */}
        <SocialLoginButtons />

        {/* Footer */}
        <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: Responsive.getHeight('3%') }}>
          <Text style={registerStyles.signupText}>
            {languageString?.labels?.alreadyHaveAccount}{' '}
            <Text
              style={registerStyles.signupLink}
              onPress={() => navigation.navigate(Routes.login)}
            >
              {languageString?.labels?.login}
            </Text>
          </Text>
        </View>
      </View>
    </RootView>
  );
};

export default Register;
