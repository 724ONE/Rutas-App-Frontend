import {
    StyleSheet,
    Dimensions,
} from 'react-native'

import Fonts from '../../constants/Fonts'
import Colors from '../../constants/colors'

const { width, height } = Dimensions.get('window');

export const styleOnBording = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    screen: {
        width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        height: height * 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 20,
    },
    textContainer: {
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    title: {
        fontSize: 24,
        fontFamily: Fonts.bold,
        color: '#333333',
        textAlign: 'center',
        marginBottom: 5,
        lineHeight: 40,
    },
    description: {
        fontSize: 16,
        fontFamily: Fonts.regular,
        color: '#666666',
        textAlign: 'center',
        lineHeight: 24,
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        marginBottom: 20,
    },
    paginationDot: {
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
    },
    activeDot: {
        width: 24,
        backgroundColor: Colors.primaryClr,
    },
    inactiveDot: {
        width: 8,
        backgroundColor: '#E0E0E0',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
    skipButton: {
        paddingVertical: 9,
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: '#F5F5F5',
    },
    skipButtonText: {
        fontSize: 16,
        fontFamily: Fonts.semiBold,
        color: '#333333',
    },
    nextButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#e0e4ff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    nextButtonInner: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: Colors.primaryClr,
        justifyContent: 'center',
        alignItems: 'center',
    },
    // Circular image layout styles
    circleContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    // Legacy styles for backward compatibility
    slide: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
        marginVertical: 20
    },
    titleContainer: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 10,
    },
    textContainer: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        paddingHorizontal: 10,
    },
    dotContainer: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#ccc',
        marginHorizontal: 5,
    },
    activeDotContainer: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: Colors.primaryClr,
        marginHorizontal: 5,
    },
    customButtonWrapper: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
});
