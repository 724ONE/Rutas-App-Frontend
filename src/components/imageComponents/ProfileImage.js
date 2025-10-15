import {
    Image,
    StyleSheet,
} from "react-native";
import { useContext } from "react";
import Context from "../context";
import { fileURL } from "../constants/Domains";
import { AppIcons } from "../constants/icons";
// import CustomImage from "./CustomImage";
import { Theme } from '../../libs';

export function ProfileImage({ customStyles }) {
    const { customerData } = useContext(Context);
    return (
        <Image
            source={!!customerData?.profile_image?.thumbnail_1 ? { uri: fileURL + customerData?.profile_image?.thumbnail_1 } : AppIcons.profile}
            indicatorProps={{
                color: Theme.colors.primary,
            }}
            style={[styles.imageContainer, customStyles]}
            imageStyle={[styles.imageContainer, customStyles]}
        />
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        resizeMode: 'contain',
        borderRadius: Theme.borders.regularRadius,
        borderWidth: Theme.borders.width,
        borderColor: Theme.colors.border,
    },
});
