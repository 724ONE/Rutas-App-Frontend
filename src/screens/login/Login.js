import React from 'react';
import { View, Text } from 'react-native';
import { useFormik } from 'formik'; // Use Formik
import Heading from '../../components/text/Heading';
import InstructionText from '../../components/text/InstructionText';
import InputText from '../../components/inputs/InputText';
import SocialLoginButtons from '../../components/buttons/SocialLoginButtons';
import { AppIcons } from '../../constants/icons';
import { Theme, Responsive } from '../../libs';
import Context from '../../context';
import Routes from '../../navigation/routes';
import { loginStyles } from './Styles';
import RootView from '../../components/RootView';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import loginValidationSchema from '../../utils/validationSchemas'; // Use validation schema
import ErrorMessage from '../../components//text/ErrorMessage';  // Import ErrorMessage component
import TextButton from '../../components/buttons/TextButton';
const Login = ({ navigation }) => {
  const { languageString } = React.useContext(Context);

  // Formik hook
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidationSchema, // Apply the validation schema
    onSubmit: () => {
      navigation.replace(Routes.customBottomNav);
    },
  });

  // Check if all fields are filled (to enable button)
  const isFilled = formik.values.email && formik.values.password;

  // Enable the button only if form is filled and valid
  const isButtonEnabled = isFilled && formik.isValid && !formik.isSubmitting;

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
          value={formik.values.email}
          onChangeText={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          leftIcon={AppIcons.email}
          keyboardType="email-address"
          isInvalid={formik.touched.email && formik.errors.email}
        />
        {/* Error Message for Email */}
        <ErrorMessage errorMessage={formik.touched.email && formik.errors.email} />

        {/* Password Input */}
        <InputText
          heading="Password"
          placeholder={languageString?.auth?.passwordPlaceholder}
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
          leftIcon={AppIcons.password}
          secureTextEntry
          showToggle
          isInvalid={formik.touched.password && formik.errors.password}
        />
        {/* Error Message for Password */}
        <ErrorMessage errorMessage={formik.touched.password && formik.errors.password} />

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
          btnFun={formik.handleSubmit}
          isDisabled={!isButtonEnabled} // Disable the button if fields are empty or form is invalid
          customStyles={[
            loginStyles.loginButton,
            { backgroundColor: isButtonEnabled ? Theme.colors.primary : Theme.colors.primaryBtnDisableClr },
          ]}
          textStyles={loginStyles.loginText}
        />

        {/* Social Login Buttons */}
        <SocialLoginButtons />

        {/* Signup Text */}
        <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: Responsive.getHeight('3%') }}>
          <Text style={loginStyles.signupText}>
            Don’t have an account?{' '}
            <Text
              style={loginStyles.signupLink}
              onPress={() => navigation.navigate(Routes.register)}
            >
              Signup
            </Text>
          </Text>
        </View>
      </View>
    </RootView>
  );
};

export default Login;
