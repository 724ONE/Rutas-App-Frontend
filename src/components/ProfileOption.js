import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Responsive, Theme } from '../libs';
import { AppIcons } from '../constants/icons';

const ProfileOption = ({ icon, title, value, color, onPress }) => {
    return (
        <TouchableOpacity style={[styles.row,{borderBottomWidth: title !== 'Logout' ? Theme.borders.width : 0}]} onPress={onPress}>
            <View style={styles.left}>
                <Image source={icon} style={styles.icon} resizeMode="contain" />
                <Text style={[styles.title, color ? { color } : null]}>{title}</Text>
            </View>
            <View style={styles.right}>
                {value && <Text style={styles.value}>{value}</Text>}
                {title != 'Logout' && <Image
                    source={AppIcons.next}
                    style={styles.arrow}
                    resizeMode="contain"
                />}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: Responsive.getHeight('2%'),
        borderBottomWidth: Theme.borders.width,
        borderColor: Theme.colors.borderClr,
        marginHorizontal: Responsive.getWidth('5%'),
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Responsive.getWidth('3%'),
    },
    right: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Responsive.getWidth('2%'),
    },
    icon: {
        width: Responsive.getWidth('5.5%'),
        height: Responsive.getWidth('5.5%'),
    },
    title: {
        fontSize: Responsive.AppFonts.t1,
        color: Theme.colors.text,
        fontFamily: Theme.typography.medium.fontFamily,
    },
    value: {
        fontSize: Responsive.AppFonts.t1,
        color: Theme.colors.black,
        fontFamily: Theme.typography.body.fontFamily,
    },
    arrow: {
        width: Responsive.getWidth('4%'),
        height: Responsive.getWidth('4%'),
        tintColor: Theme.colors.primary,
    },
});

export default ProfileOption;
