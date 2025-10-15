import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Keyboard,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Theme, Responsive } from '../../libs';
import Context from '../../context';
import IconButton from '../../components/buttons/IconButton';
import { AppIcons } from '../../constants/icons';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import RootView from '../../components/RootView';  // Import RootView
import AppHeader from '../../components/headers/AppHeader';

const Search = ({ navigation }) => {
  const { languageString } = React.useContext(Context);
  const inputRef = useRef(null);

  // Auto-focus input when screen opens
  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const recentSearches = [
    'Lorem Ipsum is simply dummy text',
    'Lorem Ipsum is simply dummy text',
    'Lorem Ipsum is simply dummy text',
    'Lorem Ipsum is simply dummy text',
  ];

  return (
    <RootView
      addBottomPadding={false}
      statusColor={Theme.colors.primary}
      backgroundColor={Theme.colors.primary}
      innerViewColor={Theme.colors.screenBg}
      barStyle="light-content"
    >
      {/* Header */}
      <AppHeader
        backgroundColor={Theme.colors.primary}
        title={languageString?.common?.search}
        rightIcon={false}
        showBack={true}
      />

      <View
        style={{
          flex: 1,
          paddingHorizontal: Responsive.getWidth('4%'),
          paddingBottom: Responsive.getHeight('2%'),
          backgroundColor: Theme.colors.screenBg,
        }}
      >
        {/* Search Input */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <IconButton
              icon={AppIcons.search}
              size={Responsive.sizeMatter.scale(18)}
              style={styles.searchIcon}
              iconColor={Theme.colors.primary}
            />
            <TextInput
              ref={inputRef}
              style={styles.searchInput}
              placeholder={languageString?.common?.search}
              placeholderTextColor={Theme.colors.hintText}
              returnKeyType="search"
              onSubmitEditing={Keyboard.dismiss}
            />
          </View>
        </View>

        {/* Recent Searches */}
        <View style={styles.recentContainer}>
          <Text style={styles.recentTitle}>Recent Searches</Text>
          <FlatList
            data={recentSearches}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.recentItem}>
                <Text style={styles.recentText}>{item}</Text>
                <Image
                  source={AppIcons.rightArrow}
                  style={styles.rightArrow}
                />
              </TouchableOpacity>
            )}
            contentContainerStyle={{ paddingVertical: Responsive.sizeMatter.verticalScale(5) }}
            showsVerticalScrollIndicator={false}
          />
        </View>

        {/* Bottom Button */}
        <PrimaryButton
          text={'Search'}
          btnFun={() => { }}
          customStyles={styles.bottomButton}
        />
      </View>
    </RootView>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: Responsive.getHeight('2%'),
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Theme.colors.white,
    borderWidth: Theme.borders.width,
    borderColor: Theme.colors.border,
    borderRadius: Theme.borders.normalRadius,
    paddingHorizontal: Responsive.sizeMatter.scale(10),
    height: Responsive.getHeight('6%'),
  },
  searchIcon: {
    marginRight: Responsive.sizeMatter.scale(6),
  },
  searchInput: {
    flex: 1,
    fontSize: Responsive.AppFonts.t1,
    fontFamily: Theme.typography.body.fontFamily,
    includeFontPadding:false,
    color: Theme.colors.text,
  },
  recentContainer: {
    flex: 1,
    marginTop: Responsive.getHeight('2%'),
  },
  recentTitle: {
    fontFamily: Theme.typography.subheading.fontFamily,
    fontSize: Responsive.AppFonts.t1,
    color: Theme.colors.text,
  },
  recentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Responsive.sizeMatter.scale(2),
    paddingVertical: Responsive.sizeMatter.verticalScale(10),
  },
  recentText: {
    fontFamily: Theme.typography.body.fontFamily,
    color: Theme.colors.text,
    fontSize: Responsive.AppFonts.t1,
    flex: 1,
  },
  rightArrow: {
    height: Responsive.sizeMatter.scale(16),
    width: Responsive.sizeMatter.scale(16),
    resizeMode: 'contain',
    tintColor: Theme.colors.primary,
    marginLeft: Responsive.sizeMatter.scale(8),
  },
  bottomButton: {
    marginBottom: Responsive.getHeight('4%'),
    width: Responsive.getWidth('90%'),
  },
});
