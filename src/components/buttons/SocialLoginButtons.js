import { View, TouchableOpacity, Image, StyleSheet, Text, Platform } from 'react-native';
import { Theme, Responsive } from '../../libs';
import { AppIcons } from '../../constants/icons';

const SocialLoginButtons = () => {
    return (
        <View>
            {/* Divider */}
            <View style={styles.divider}>
                <View style={styles.line} />
                <Text style={styles.dividerText}>or continue with</Text>
                <View style={styles.line} />
            </View>

            {/* Social Buttons */}
            <View style={styles.row}>
                {Platform.OS === 'android' && <TouchableOpacity style={styles.socialBtn}>
                    <Image source={AppIcons.google} style={styles.socialIcon} />
                </TouchableOpacity>}

                {Platform.OS === 'ios' &&
                    <TouchableOpacity style={styles.socialBtn}>
                        <Image source={AppIcons.apple} style={styles.socialIcon} />
                    </TouchableOpacity>}
            </View>
        </View>
    );
};

export default SocialLoginButtons;

const styles = StyleSheet.create({
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: Responsive.getHeight('2.5%'),
    },
    dividerText: {
        marginHorizontal: Responsive.getWidth('2.5%'),
        color: Theme.colors.textLight,
        fontFamily: Theme.typography.body.fontFamily,
        fontSize: Responsive.AppFonts.body,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: Theme.colors.primary,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: Responsive.getWidth('5%'),
    },
    socialBtn: {
        backgroundColor: Theme.colors.white,
        borderRadius: Theme.borders.normalRadius,
        borderWidth: Theme.borders.width,
        borderColor: Theme.colors.lightBorder,
        paddingVertical: Responsive.getHeight('1%'),
        paddingHorizontal: Responsive.getWidth('7%'),
        alignItems: 'center',
    },
    socialIcon: {
        width: Responsive.getWidth('6.5%'),
        height: Responsive.getWidth('6.5%'),
        resizeMode: 'contain',
    },
});
