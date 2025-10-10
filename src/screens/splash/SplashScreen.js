import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import { AppIcons } from '../../constants/icons'
import AppColors from '../../constants/colors'
const { width } = Dimensions.get('window');

const SplashScreen = ({ navigation }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('OnBordingScreen')
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      {/* Logo */}
      <Image
        source={AppIcons.applogo}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Loader */}
      <ActivityIndicator size="large" color={AppColors.primaryClr} style={styles.loader} />

      {/* Progress Bar */}
      {/* <View style={styles.progressBarContainer}>
        <View style={styles.progressBar} />
      </View> */}
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.whiteClr,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width * 0.55,
    height: width * 0.55,
  },
  loader: {
    position: 'absolute',
    bottom: 90,
  },
  progressBarContainer: {
    position: 'absolute',
    bottom: 50,
    width: width * 0.9,
    height: 5,
    backgroundColor: AppColors.whiteClr,
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressBar: {
    width: '40%',
    height: '100%',
    backgroundColor: AppColors.primaryClr,
    borderRadius: 10,
  },
});
