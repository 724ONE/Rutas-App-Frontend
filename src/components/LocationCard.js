import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Theme, Responsive } from '../libs';
import FloatingIconButton from './buttons/FloatingIconButton';

const LocationCard = ({ item, onPressIcon }) => {
    return (
        <View style={styles.card}>
            <View style={styles.row}>
                <FloatingIconButton
                    onPress={onPressIcon}
                    size={Responsive.getHeight('4%')}
                    style={styles.iconButton}
                />
                <View style={{ flex: 1 }}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.detail}>Coordinates: {item.coords}</Text>
                    <Text style={styles.detail}>Contact: {item.contact}</Text>
                    <Text style={[styles.note, { color: item.noteColor || Theme.colors.primary }]}>
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
        backgroundColor: Theme.colors.white,
        borderRadius: Theme.borders.normalRadius,
        borderWidth: Theme.borders.width,
        borderColor: Theme.colors.borderClr,
        padding: Responsive.getWidth('4%'),
        marginBottom: Responsive.getHeight('1.5%'),
        ...Theme.shadows.small,
        elevation: Theme.elevation.small,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    iconButton: {
        marginRight: Responsive.getWidth('3%'),
    },
    title: {
        fontFamily: Theme.typography.subheading.fontFamily,
        fontSize: Responsive.AppFonts.t2,
        color: Theme.colors.text,
    },
    detail: {
        fontFamily: Theme.typography.body.fontFamily,
        fontSize: Responsive.AppFonts.t3,
        color: Theme.colors.secondryText,
        marginTop: Responsive.getHeight('0.5%'),
    },
    note: {
        fontFamily: Theme.typography.medium.fontFamily,
        fontSize: Responsive.AppFonts.t3,
        marginTop: Responsive.getHeight('0.5%'),
    },
});
