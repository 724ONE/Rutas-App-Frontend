import {
    Image,
    StyleSheet,
} from "react-native";
import { useContext } from "react";
import Context from "../context";
import { fileURL } from "../constants/Domains";
import { AppIcons } from "../constants/icons";
// import CustomImage from "./CustomImage";
import AppColors from "../../constants/colors";

export function ProfileImage({ customStyles }) {
    const { customerData } = useContext(Context);
    return (
        <Image
            source={!!customerData?.profile_image?.thumbnail_1 ? { uri: fileURL + customerData?.profile_image?.thumbnail_1 } : AppIcons.profile}
            indicatorProps={{
                color: AppColors.primaryClr,
            }}
            style={[styles.imageContainer, customStyles]}
            imageStyle={[styles.imageContainer, customStyles]}
        />
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        resizeMode: 'contain',
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: AppColors.grey80Clr
    },
});
