import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

import { Theme, Responsive } from '../libs'

import FloatingIconButton from './buttons/FloatingIconButton'

const LocationCard = ({ item, onPressIcon }) => {
    return (
        <View style={styles.card}>
            <View style={styles.row}>
                <FloatingIconButton
                    onPress={onPressIcon}
                    size={Responsive.getHeight('4.5%')}
                    iconSize={Responsive.getHeight('2.5%')}
                    style={styles.iconButton}
                />
                <View style={{ flex: 1 }}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.detail}>Coordinates
                        <Text style={{
                            fontFamily: Theme.typography.medium.fontFamily, color: Theme.colors.secondryText,
                        }}>
                            {' ' + item.coords}
                        </Text>

                    </Text>

                    <Text style={styles.detail}>Contact: {item.contact}</Text>
                    <Text style={[styles.note, { color: Theme.colors.primary }]}>
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
        borderRadius: Theme.borders.mediumRadius,
        borderWidth: Theme.borders.width,
        borderColor: Theme.colors.borderClr,
        padding: Responsive.getWidth('3.5%'),
        paddingHorizontal: Responsive.getWidth('3%'),
        marginBottom: Responsive.getHeight('1.4%')
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    iconButton: {
        marginRight: Responsive.getWidth('4%'),
    },
    title: {
        fontFamily: Theme.typography.medium.fontFamily,
        fontSize: Responsive.AppFonts.h5,
        color: Theme.colors.text,
    },
    detail: {
        fontFamily: Theme.typography.medium.fontFamily,
        fontSize: Responsive.AppFonts.t2,
        color: Theme.colors.text,
        marginTop: Responsive.getHeight('0.5%'),
    },
    note: {
        fontFamily: Theme.typography.body.fontFamily,
        fontSize: Responsive.AppFonts.t1,
        marginTop: Responsive.getHeight('0.5%'),
    },
});
