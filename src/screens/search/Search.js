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
} from 'react-native';
import { Theme, Responsive } from '../../libs';
import IconButton from '../../components/buttons/IconButton';
import { AppIcons } from '../../constants/icons';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import RootView from '../../components/RootView';

const Search = ({ navigation }) => {
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
      statusColor={Theme.colors.primary}
      backgroundColor={Theme.colors.white}
      innerViewColor={Theme.colors.screenBg}
      paddingHorizontal={Responsive.getWidth('5%')}
    >
      {/* Header */}
      <View style={styles.header}>
        <IconButton
          icon={AppIcons.backArrow}
          onPress={() => navigation.goBack()}
          style={styles.backButton}
          size={Responsive.sizeMatter.scale(32)}
          iconSize={Responsive.sizeMatter.scale(14)}
        />
        <Text style={styles.headerTitle}>Search</Text>
      </View>

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
            placeholder="Search"
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
          contentContainerStyle={{ paddingVertical: Responsive.sizeMatter.verticalScale(10) }}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* Bottom Button */}
      <PrimaryButton
        text={'Search'}
        btnFun={() => { }}
        customStyles={styles.bottomButton}
      />
    </RootView>
  );
};

export default Search;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Theme.colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Responsive.getHeight('2%'),
    borderBottomLeftRadius: Theme.borders.fullRadius,
    borderBottomRightRadius: Theme.borders.fullRadius,
  },
  backButton: {
    backgroundColor: Theme.colors.white,
    borderRadius: 999,
    padding: Responsive.sizeMatter.scale(6),
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontFamily: Theme.typography.subheading.fontFamily,
    fontSize: Responsive.AppFonts.h5,
    color: Theme.colors.white,
    marginRight: Responsive.getWidth('10%'),
  },
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
    marginBottom: Responsive.sizeMatter.verticalScale(5),
  },
  recentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    width: '95%',
    alignSelf: 'center',
    height: Responsive.getHeight('6.5%'),
    borderRadius: Theme.borders.normalRadius,
    marginBottom: Responsive.getHeight('2%'),
  },
});
