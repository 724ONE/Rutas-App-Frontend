import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Heading from '../../components/text/Heading';
import InstructionText from '../../components/text/InstructionText';
import InputText from '../../components/inputs/InputText';
import { AppIcons } from '../../constants/icons';
import { forgotPasswordStyles } from './Styles';
import { Theme, Responsive } from '../../libs';
import Routes from '../../navigation/routes';
import { CustomBackButton } from '../../components/buttons/BackButton';
import Context from '../../context';
import RootView from '../../components/RootView';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';

const ForgotPassword = ({ navigation }) => {
  const { languageString } = React.useContext(Context);

  const [email, setEmail] = useState('');
  const [invalid, setInvalid] = useState(false);


  const handlePress = () => {
    // Just for UI — no actual functionality
    if (!email) {
      setInvalid(true);
    }
    else {
      setInvalid(false);
      // you can later add your API call or alert here
      navigation.navigate(Routes.forgotPasswordCode)
    }
  };

  const isFilled = !!email;

  return (
    <RootView>
      <View style={forgotPasswordStyles.container}>
        {/* Screen Title */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: Responsive.getHeight('2%') }}>
          <CustomBackButton />
          <Heading
            title={languageString?.auth?.forgotPasswordTitle}
            customStyles={{
              fontFamily: Theme.typography.subheading.fontFamily,
              fontSize: Responsive.AppFonts.h3,
              marginLeft: Responsive.getWidth('3%'),
              marginBottom: 0,
            }}
          />
        </View>


        {/* Description */}
        <InstructionText
          text={languageString?.auth?.otpSent}
          customStyles={{
            fontFamily: Theme.typography.medium.fontFamily,
            color: Theme.colors.text,
            marginBottom: Responsive.getHeight('2%'),
            fontSize: Responsive.AppFonts.t1,
          }}
        />

        {/* Email Input */}
        <InputText
          heading={languageString?.labels?.email}
          placeholder={languageString?.auth?.emailPlaceholder}
          value={email}
          onChangeText={setEmail}
          leftIcon={AppIcons.email}
          keyboardType="email-address"
          isInvalid={invalid}
        />

        <View style={{ flex: 1, marginVertical: 20, justifyContent: 'flex-end' }}>
          {/* Submit Button */}
          <PrimaryButton
            text={languageString?.auth?.sendOtp}
            btnFun={handlePress}
            isDisabled={!isFilled}
            customStyles={[
              forgotPasswordStyles.loginButton,
              { backgroundColor: isFilled ? Theme.colors.primary : Theme.colors.primaryBtnDisableClr },
            ]}
            textStyles={forgotPasswordStyles.loginText}
          />
        </View>
      </View>
    </RootView>
  );
};

export default ForgotPassword;
