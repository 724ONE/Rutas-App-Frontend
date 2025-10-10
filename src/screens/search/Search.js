import React, { useEffect, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    FlatList,
    TouchableOpacity,
    Keyboard,
    StatusBar,
    Image,
} from 'react-native';
import Fonts from '../../constants/fonts';
import IconButton from '../../components/buttons/IconButton';
import { AppIcons } from '../../constants/icons';
import AppColors from '../../constants/colors';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import RootView from '../../components/RootView';

const Search = ({ navigation }) => {
    const inputRef = useRef(null)
    // Automatically focus input when screen opens
    useEffect(() => {
        const timer = setTimeout(() => {
            inputRef.current?.focus()
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
        <RootView statusColor={AppColors.primaryClr}>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <IconButton
                        icon={AppIcons.backArrow}
                        onPress={() => navigation.goBack()}
                        style={styles.backButton}
                        size={38}
                        iconSize={16}
                    />
                    <Text style={styles.headerTitle}>Search</Text>
                </View>

                {/* Search Input */}
                <View style={styles.searchContainer}>
                    <View style={styles.searchBar}>
                        <IconButton
                            icon={AppIcons.search}
                            size={18}
                            style={styles.searchIcon}
                            iconColor={AppColors.primaryClr}
                        />
                        <TextInput
                            ref={inputRef}
                            style={styles.searchInput}
                            placeholder="Search"
                            placeholderTextColor={AppColors.hintText}
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
                                <IconButton
                                    icon={AppIcons.arrowRight}
                                    size={14}
                                    iconColor={AppColors.primaryClr}
                                    style={styles.arrowIcon}
                                />
                                <Image source={AppIcons.rightArrow} style={styles.rightArrow}/>
                            </TouchableOpacity>
                        )}
                        contentContainerStyle={{ paddingVertical: 10 }}
                        showsVerticalScrollIndicator={false}
                    />
                </View>

                {/* Bottom Button */}
                <PrimaryButton text={'Search'} btnFun={() => { }} customStyles={{
                    width: '95%',
                    height: 50.0,
                    borderRadius: 10,
                    margin: 15,
                    marginBottom: 20
                }}
                ></PrimaryButton>
            </View>
        </RootView>
    );
};

export default Search;

const styles = StyleSheet.create({
    rightArrow:{
        height:18,
        width:18,
        resizeMode:'contain'
    },
    container: {
        flex: 1,
        backgroundColor: AppColors.whiteClr,
    },
    header: {
        backgroundColor: AppColors.primaryClr,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        paddingTop: 40,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    headerTitle: {
        flex: 1,
        textAlign: 'center',
        fontFamily: Fonts.poppinsSemiBold,
        fontSize: 16,
        color: AppColors.whiteClr,
        marginRight: 30,
    },
    backButton: {
        backgroundColor: AppColors.whiteClr,
        borderRadius: 100,
        padding: 8,
    },
    searchContainer: {
        paddingHorizontal: 20,
        marginTop: 15,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: AppColors.whiteClr,
        borderWidth: 1,
        borderColor: AppColors.borderClr,
        borderRadius: 10,
        paddingHorizontal: 10,
        height: 45,
    },
    searchIcon: {
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        fontSize: 14,
        fontFamily: Fonts.poppinsRegular,
        color: AppColors.blackClr,
    },
    recentContainer: {
        paddingHorizontal: 20,
        marginTop: 15,
        flex: 1,
    },
    recentTitle: {
        fontFamily: Fonts.poppinsSemiBold,
        fontSize: 13,
        color: AppColors.blackClr,
        marginBottom: 5,
    },
    recentItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        // borderBottomWidth: 1,
        // borderBottomColor: AppColors.borderClr,
    },
    recentText: {
        fontFamily: Fonts.poppinsRegular,
        color: AppColors.blackClr,
        fontSize: 13,
    },
    arrowIcon: {
        padding: 6,
    },
    bottomButton: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
});
