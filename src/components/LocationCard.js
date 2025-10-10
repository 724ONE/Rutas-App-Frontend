import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Fonts from '../constants/fonts';
import AppColors from '../constants/colors';
import FloatingIconButton from './buttons/FloatingIconButton';

const LocationCard = ({ item, onPressIcon }) => {
    return (
        <View style={styles.card}>
            <View style={styles.row}>
                <FloatingIconButton
                    onPress={onPressIcon}
                    size={30}
                    style={styles.iconButton}
                />
                <View style={{ flex: 1 }}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.detail}>Coordinates {item.coords}</Text>
                    <Text style={styles.detail}>Contact: {item.contact}</Text>
                    <Text style={[styles.note, { color: item.noteColor }]}>
                        Note: {item.note}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default LocationCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: AppColors.whiteClr,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: AppColors.borderClr,
        padding: 12,
        marginBottom: 12,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    iconButton: {
        marginRight: 10,
    },
    title: {
        fontFamily: Fonts.poppinsSemiBold,
        fontSize: 14,
        color: AppColors.blackClr,
    },
    detail: {
        fontFamily: Fonts.poppinsRegular,
        fontSize: 12,
        color: AppColors.grayText,
        marginTop: 2,
    },
    note: {
        fontFamily: Fonts.poppinsMedium,
        fontSize: 12,
        marginTop: 3,
    },
});
