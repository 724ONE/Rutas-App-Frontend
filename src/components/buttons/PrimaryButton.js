import {
    StyleSheet,
    TouchableOpacity,
    Text,
} from "react-native";
import Fonts from "../../constants/fonts"
import AppColors from "../../constants/colors"

export function PrimaryButton({ text, btnFun, customStyles, isDisabled,textStyles }) {
    return (
        <TouchableOpacity
            disabled={isDisabled}
            activeOpacity={1}
            style={[styles.buttonContainer, customStyles]}
            onPress={btnFun} >
            <Text style={[styles.textContainer,textStyles]} > {text} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        height: 45.0,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: AppColors.primaryClr,
        alignSelf: 'center',
    },
    textContainer: {
        includeFontPadding:false,
        fontSize: 16,
        color: AppColors.whiteClr,
        fontFamily: Fonts.poppinsSemiBold,
    },
})