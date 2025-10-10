import React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import AppColors from '../../constants/colors';
import { AppIcons } from '../../constants/icons';

const FloatingIconButton = ({
    icon = AppIcons.location, // default icon
    size = 50,
    backgroundColor = AppColors.whiteClr,
    iconColor = AppColors.primaryClr,
    style,
    onPress,
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={[
                styles.container,
                {
                    backgroundColor,
                    width: size,
                    height: size,
                    borderRadius: size / 2,
                },
                style,
            ]}
        >
            <Image
                source={AppIcons.mapLocation}
                style={[
                    styles.icon,
                    {
                        tintColor: iconColor,
                        width: size * 0.5,
                        height: size * 0.5,
                    },
                ]}
                resizeMode="contain"
            />
        </TouchableOpacity>
    );
};

export default FloatingIconButton;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        shadowColor: AppColors.shadowColor,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
    },
    icon: {
        tintColor: AppColors.primaryClr,
    },
});
