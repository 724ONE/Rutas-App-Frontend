import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import { AppIcons } from '../../constants/icons';
import Fonts from '../../constants/fonts';
import AppColors from '../../constants/colors';

const SocialLoginButtons = () => {
    return (
        <View>
            <View style={styles.divider}>
                <View style={styles.line} />
                <Text style={styles.dividerText}>or continue with</Text>
                <View style={styles.line} />
            </View>

            <View style={styles.row}>
                <TouchableOpacity style={styles.socialBtn}>
                    <Image
                        source={AppIcons.google}
                        style={styles.socialIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialBtn}>
                    <Image
                        source={AppIcons.apple}
                        style={styles.socialIcon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SocialLoginButtons;

const styles = StyleSheet.create({
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    dividerText: {
        marginHorizontal: 10,
        color: '#888888',
        fontFamily:Fonts.poppinsRegular
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: AppColors.primaryClr,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
    },
    socialBtn: {
        backgroundColor: AppColors.whiteClr,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: AppColors.borderClr,
        padding: 12,
        width: 110,
        alignItems: 'center',
    },
    socialIcon: {
        width: 28,
        height: 28,
        resizeMode:'contain'
    },
});
