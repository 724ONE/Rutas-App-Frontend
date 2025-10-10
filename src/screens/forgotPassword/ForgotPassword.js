import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Heading from '../../components/text/Heading';
import InstructionText from '../../components/text/InstructionText';
import InputText from '../../components/inputs/InputText';
import { AppIcons } from '../../constants/icons';
import { forgotPasswordStyles } from './Styles';
import AppColors from '../../constants/colors';
import Routes from '../../navigation/routes';
import Fonts from '../../constants/fonts';
import { CustomBackButton } from '../../components/buttons/BackButton';

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [invalid, setInvalid] = useState(false);

  const handlePress = () => {
          console.log("here is forgot pasword code screen")

    // Just for UI — no actual functionality
    if (!email) {
      setInvalid(true);
    }
     else {
      setInvalid(false);
      // you can later add your API call or alert here
      console.log("here is forgot pasword code screen")
      navigation.navigate(Routes.forgotPasswordCode)
    }
  };

  const isFilled = !!email;

  return (
    <View style={forgotPasswordStyles.container}>

      {/* Screen Title */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
        <CustomBackButton />
        <Heading title="Forgot Password" customStyles={{
          marginLeft: 15,
          fontFamily: Fonts.poppinsSemiBold,
          fontSize: 20,
          marginBottom: 0,
        }} />
      </View>


      {/* Description */}
      <InstructionText
        text="We’ll send a one-time password to your email or phone for verification."
        customStyles={{
          fontFamily: Fonts.poppinsMedium,
          color: AppColors.blackClr,
          marginBottom: 20,
          fontSize: 14,

        }}
      />

      {/* Email Input */}
      <InputText
        heading={'Email'}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        icon={AppIcons.email}
        keyboardType="email-address"
        isInvalid={invalid}
      />

      <View style={{ flex: 1, marginVertical: 20 }}>
        {/* Submit Button */}
        <TouchableOpacity
          style={[
            forgotPasswordStyles.loginButton,
            { backgroundColor: isFilled ? AppColors.primaryClr : AppColors.primaryBtnDisableClr },
          ]}
          onPress={handlePress}
          disabled={!isFilled}
        >
          <Text style={forgotPasswordStyles.loginText}>Send OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPassword;
