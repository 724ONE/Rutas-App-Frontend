import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AppColors from '../constants/colors';
import Fonts from '../constants/fonts';
import { AppIcons } from '../constants/icons';

const SearchBar = ({
    placeholder = 'Search',
    onPress,
    containerStyle,
    textStyle,
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={[styles.container, containerStyle]}
        >
            <Image style={styles.icon} source={AppIcons.search} />
            <Text style={[styles.text, textStyle]}>{placeholder}</Text>
        </TouchableOpacity>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: AppColors.whiteClr,
        borderWidth: 1,
        borderColor: AppColors.borderClr,
        borderRadius: 10,
        paddingHorizontal: 10,
        height: 45,
        marginVertical: 10,
    },
    icon: {
        marginRight: 8,
        height: 22,
        width: 22,
        resizeMode: 'contain',
        tintColor: AppColors.primaryClr,
    },
    text: {
        flex: 1,
        fontSize: 14,
        fontFamily: Fonts.poppinsRegular,
        color: AppColors.hintText,
    },
});
