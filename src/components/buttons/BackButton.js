import {
    StyleSheet,
    TouchableOpacity,
    Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Theme, Responsive } from '../../libs';
import { AppIcons } from "../../constants/icons";

export function CustomBackButton({ customStyles, changesAlert, changesAlertfun }) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={1}
            hitSlop={{ top: 20, bottom: 20, left: 5, right: 5 }}
            onPress={() => {
                if (changesAlert == true) {
                    changesAlertfun()
                }
                else {
                    navigation.goBack()
                }

            }}
            style={[styles.btnContainer, customStyles,]} >
            <Image
                source={AppIcons.backArrow}
                style={styles.imageContainer}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        // backgroundColor: '#fcf2cf', // Light gold background
        // borderRadius: 8, // Square shape with slight rounding
        // padding: 8,
        // width: 34,
        // height: 34,
        // justifyContent: 'center',
        // alignItems: 'center',
        // marginTop:5
    },
    imageContainer: {
        height: Responsive.getWidth('4%'),
        width: Responsive.getWidth('4%'),
        resizeMode: 'contain',
        tintColor: Theme.colors.primary,
    },
})