import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Responsive, Theme } from '../../libs';

const ProfileHeader = ({ name, image }) => {
    return (
        <View style={styles.headerContainer}>
            {/* <Text style={styles.title}>Profile</Text> */}
            <Image source={image} style={styles.profileImage} />
            <Text style={styles.name}>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        backgroundColor: Theme.colors.white,
        paddingTop: Responsive.getHeight('3%'),
        paddingBottom: Responsive.getHeight('3%'),
        // borderBottomLeftRadius: Theme.borders.largeRadius,
        // borderBottomRightRadius: Theme.borders.largeRadius,
        // ...Theme.shadows.medium,
        // elevation: Theme.elevation.medium,
    },
    title: {
        color: Theme.colors.white,
        fontSize: Responsive.AppFonts.h3,
        fontFamily: Theme.typography.heading.fontFamily,
    },
    profileImage: {
        width: Responsive.getWidth('25%'),
        height: Responsive.getWidth('25%'),
        borderRadius: Responsive.getWidth('12.5%'),
        marginTop: Responsive.getHeight('2%'),
        borderWidth: Theme.borders.width,
        borderColor: Theme.colors.white,
    },
    name: {
        marginTop: Responsive.getHeight('1.5%'),
        fontSize: Responsive.AppFonts.h5,
        color: Theme.colors.text,
        fontFamily: Theme.typography.subheading.fontFamily,
    },
});

export default ProfileHeader;
