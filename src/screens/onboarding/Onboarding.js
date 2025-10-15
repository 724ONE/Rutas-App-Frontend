import React, { useState, useRef, useContext } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native';
import { Theme, Responsive } from '../../libs';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import { AppImages } from '../../constants/images';
import Routes from '../../navigation/routes';
import Context from '../../context';
import RootView from '../../components/RootView';

const { width } = Dimensions.get('window');

const OnBordingScreen = ({ navigation }) => {
  const { languageString } = useContext(Context);
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

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
    navigation.replace(Routes.login);
  };

  const onMomentumEnd = (e) => {
    const x = e.nativeEvent.contentOffset.x;
    const index = Math.round(x / width);
    if (index !== currentIndex) setCurrentIndex(index);
  };

  const renderItem = ({ item }) => (
    <View style={styles.screen}>
      {/* Illustration */}
      <Image source={item.image} style={styles.image} resizeMode="contain" />

      {/* Title */}
      <Text style={styles.title}>{item.title}</Text>

      {/* Description */}
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <RootView>
      <View style={styles.container}>
        {/* Skip Button */}
        {currentIndex !== 2 &&
          <PrimaryButton
            text={languageString?.onboarding?.skip}
            btnFun={handleSkip}
            customStyles={styles.skipBtn}
            textStyles={styles.skipText}
          />
        }

        {/* FlatList (Screens) */}
        <View style={styles.sliderContainer}>
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

        {/* Next / Get Started Button */}
        <View style={styles.nextBtnWrapper}>
          <PrimaryButton
            text={currentIndex === introData.length - 1 ? 'Get Started' : 'Next'}
            btnFun={handleNext}
            customStyles={styles.nextBtn}
          />
        </View>
      </View>
    </RootView>
  );
};

export default OnBordingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.screenBg,
  },
  skipBtn: {
    width: Responsive.getWidth('20%'),
    height: Responsive.getHeight('4%'),
    borderRadius: Theme.borders.miniRadius,
    margin: Responsive.sizeMatter.scale(12),
    alignSelf: 'flex-end',
    backgroundColor: Theme.colors.primary,
  },
  skipText: {
    fontSize: Responsive.AppFonts.t2,
    color: Theme.colors.white,
  },
  sliderContainer: {
    flex: 3,
  },
  screen: {
    width,
    alignItems: 'center',
  },
  image: {
    width: Responsive.getWidth('95%'),
    height: Responsive.getHeight('45%'),
    marginBottom: Responsive.sizeMatter.verticalScale(20),
  },
  title: {
    fontSize: Responsive.AppFonts.h3,
    fontFamily: Theme.typography.subheading.fontFamily,
    includeFontPadding: false,
    textAlign: 'center',
    color: Theme.colors.primary,
    marginBottom: Responsive.sizeMatter.verticalScale(12),
  },
  description: {
    color: Theme.colors.secondryText,
    textAlign: 'center',
    fontFamily: Theme.typography.medium.fontFamily,
    includeFontPadding: false,
    paddingHorizontal: Responsive.sizeMatter.scale(30),
    fontSize: Responsive.AppFonts.t1,
  },
  pagination: {
    flex: 0.5,
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: Responsive.sizeMatter.verticalScale(10),
  },
  dot: {
    width: Responsive.sizeMatter.scale(25),
    height: Responsive.sizeMatter.verticalScale(5),
    borderRadius: Theme.borders.regularRadius,
    marginHorizontal: Responsive.sizeMatter.scale(4),
  },
  activeDot: {
    backgroundColor: Theme.colors.primary,
  },
  inactiveDot: {
    backgroundColor: Theme.colors.inactiveIconClr,
  },
  nextBtn: {
    width: Responsive.getWidth('92%'),
    height: Responsive.getHeight('6%'),
    borderRadius: Theme.borders.normalRadius,
    alignSelf: 'center',
    marginBottom: Responsive.sizeMatter.verticalScale(20),
  },
  nextBtnWrapper: {
    width: '100%',
    alignItems: 'center',
    marginBottom: Responsive.sizeMatter.verticalScale(20),
  },
});
