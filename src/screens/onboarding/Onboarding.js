import React, { useState, useRef, useContext } from 'react';
import { PrimaryButton } from '../../components/buttons/PrimaryButton'
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { AppImages } from '../../constants/images';
import Routes from '../../navigation/routes';
import Context from '../../context';
import RootView from '../../components/RootView'
import AppColors from '../../constants/colors';
import Fonts from '../../constants/fonts';
const { width, height } = Dimensions.get('window')

const OnBordingScreen = ({ navigation }) => {
  const { languageString } = useContext(Context);

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null)

  const introData = [
    {
      id: '1',
      title: languageString?.onboarding?.title_1,
      description: languageString?.onboarding?.text_1,
      image: AppImages.onboarding1,
    },
    {
      id: '2',
      title: languageString?.onboarding?.title_2,
      description: languageString?.onboarding?.text_2,
      image: AppImages.onboarding2,
    },
    {
      id: '3',
      title: languageString?.onboarding?.title_3,
      description: languageString?.onboarding?.text_3,
      image: AppImages.onboarding3,
    },
  ];

  const handleNext = () => {
    if (currentIndex < introData.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      navigation.replace(Routes.login);
    }
  };

  const handleSkip = () => {
    // navigation.replace(Routes.login);
        navigation.replace(Routes.customBottomNav);

  };

  const onMomentumEnd = (e) => {
    const x = e.nativeEvent.contentOffset.x;
    const index = Math.round(x / width);
    if (index !== currentIndex) setCurrentIndex(index);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.screen}>
        {/* Illustration */}
        <Image source={item.image} style={styles.image} resizeMode="contain" />

        {/* Title & Description */}
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    );
  };

  return (
    <RootView>

      <View style={styles.container}>

        {/* Skip Button */}
        <PrimaryButton text={languageString?.onboarding?.skip} btnFun={handleSkip} customStyles={{
          width: 72,
          height: 32.0,
          borderRadius: 4,
          margin: 15,
          alignSelf: 'flex-end',
        }}
          textStyles={{
            fontSize: 13,
          }}
        />

        {/* FlatList Screens */}
        <View style={{flex:3}}>
          <FlatList
            ref={flatListRef}
            data={introData}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={onMomentumEnd}
          />
        </View>

        {/* Pagination Dots */}
        <View style={styles.pagination}>
          {introData.map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                currentIndex === i ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>

        {/* Next Button */}
        <PrimaryButton text={currentIndex === introData.length - 1 ? 'Get Started' : 'Next'} btnFun={handleNext} customStyles={{
          width: '95%',
          height: 50.0,
          borderRadius: 10,
          margin: 15,
        }}
          textStyles={{
            // fontSize: 12,
          }}/>
      </View>
    </RootView>
  );
};

export default OnBordingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.whiteClr,
  },
  screen: {
    width,
    alignItems: 'center',
    // paddingHorizontal: 15,
  },
  image: {
    width: width * 0.95,
    height: height * 0.5,
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.poppinsSemiBold,
    includeFontPadding: false,
    textAlign: 'center',
    color: AppColors.primaryClr,
    marginBottom: 15,
  },
  description: {
    color: AppColors.secondryText,
    textAlign: 'center',
    fontFamily: Fonts.poppinsMedium,
    includeFontPadding: false,
    paddingHorizontal: 30,
  },
  pagination: {
    flex: 0.5,
    flexDirection: 'row',
    alignSelf: 'center',
    // marginTop: 20,
  },
  dot: {
    width: 25,
    height: 5,
    borderRadius: 3,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: AppColors.primaryClr,
  },
  inactiveDot: {
    backgroundColor: '#61616180',
  },

});
