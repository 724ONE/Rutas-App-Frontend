import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Responsive, Theme } from '../../libs';
import { AppIcons } from '../../constants/icons';

const FloatingIconButton = ({
    icon,
    size = Responsive.getWidth('13%'),
    iconSize = Responsive.getWidth('6.5%'),
    backgroundColor = Theme.colors.white,
    iconColor = Theme.colors.primary,
    onPress,
    style,
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={[
                styles.fab,
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
                style={{
                    width: iconSize,
                    height: iconSize,
                    tintColor: iconColor,
                }}
                resizeMode="contain"
            />
        </TouchableOpacity>
    );
};

export default FloatingIconButton;

const styles = StyleSheet.create({
    fab: {
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: Theme.colors.shodowClr,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: Theme.elevation.medium,
    },
});
