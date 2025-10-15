import { StyleSheet } from 'react-native'
import { Theme, Responsive } from '../../libs'

export const styleOnBoarding = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.colors.screenBg,
    },
    screen: {
        width: Responsive.width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        height: Responsive.getHeight('50%'),
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: Responsive.getWidth('5%'),
        paddingTop: Responsive.getHeight('6%'),
        paddingBottom: Responsive.getHeight('2%'),
    },

    textContainer: {
        alignItems: 'center',
        paddingHorizontal: Responsive.getWidth('5%'),
        paddingTop: Responsive.getHeight('2%'),
    },

    title: {
        fontSize: Responsive.font(2.8),
        fontFamily: Theme.typography.heading.fontFamily,
        color: Theme.colors.textPrimary,
        textAlign: 'center',
        marginBottom: Responsive.getHeight('1%'),
        lineHeight: Responsive.font(4),
    },

    description: {
        fontSize: Responsive.font(1.8),
        fontFamily: Theme.typography.body.fontFamily,
        color: Theme.colors.textSecondary,
        textAlign: 'center',
        lineHeight: Responsive.font(2.5),
    },

    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: Responsive.getHeight('2%'),
        marginBottom: Responsive.getHeight('2%'),
    },

    paginationDot: {
        height: Responsive.getWidth('2%'),
        borderRadius: Responsive.getWidth('1%'),
        marginHorizontal: Responsive.getWidth('1%'),
    },

    activeDot: {
        width: Responsive.getWidth('6%'),
        backgroundColor: Theme.colors.primary,
    },

    inactiveDot: {
        width: Responsive.getWidth('2.5%'),
        backgroundColor: Theme.colors.grayLight,
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: Responsive.getWidth('5%'),
        paddingBottom: Responsive.getHeight('4%'),
    },

    skipButton: {
        paddingVertical: Responsive.getHeight('1.2%'),
        paddingHorizontal: Responsive.getWidth('5%'),
        borderRadius: Theme.borders.mediumRadius,
        backgroundColor: Theme.colors.grayLightest,
    },

    skipButtonText: {
        fontSize: Responsive.font(1.8),
        fontFamily: Theme.typography.medium.fontFamily,
        color: Theme.colors.textPrimary,
    },

    nextButton: {
        width: Responsive.getWidth('15%'),
        height: Responsive.getWidth('15%'),
        borderRadius: Responsive.getWidth('7.5%'),
        backgroundColor: Theme.colors.secondaryLight,
        justifyContent: 'center',
        alignItems: 'center',
        padding: Responsive.getWidth('1.5%'),
    },

    nextButtonInner: {
        width: Responsive.getWidth('12.5%'),
        height: Responsive.getWidth('12.5%'),
        borderRadius: Responsive.getWidth('6.25%'),
        backgroundColor: Theme.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },

    circleContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },

    slide: {
        width: Responsive.getWidth('65%'),
        height: Responsive.getWidth('65%'),
        resizeMode: 'contain',
        marginVertical: Responsive.getHeight('2%'),
    },

    dotContainer: {
        width: Responsive.getWidth('2.5%'),
        height: Responsive.getWidth('2.5%'),
        borderRadius: Responsive.getWidth('1.25%'),
        backgroundColor: Theme.colors.grayMedium,
        marginHorizontal: Responsive.getWidth('1%'),
    },

    activeDotContainer: {
        width: Responsive.getWidth('3%'),
        height: Responsive.getWidth('3%'),
        borderRadius: Responsive.getWidth('1.5%'),
        backgroundColor: Theme.colors.primary,
        marginHorizontal: Responsive.getWidth('1%'),
    },

    customButtonWrapper: {
        position: 'absolute',
        bottom: Responsive.getHeight('3%'),
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: Responsive.getWidth('5%'),
    },
})
