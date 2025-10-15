import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Modal,
    Alert,
    Image,
} from 'react-native';
import RootView from '../../components/RootView';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import Routes from '../../navigation/routes';
import { AppIcons } from '../../constants/icons';
import { Theme, Responsive } from '../../libs';
import Context from '../../context';
import InputText from '../../components/inputs/InputText';
import InstructionText from '../../components/text/InstructionText';
import { CustomBackButton } from '../../components/buttons/BackButton';
import Heading from '../../components/text/Heading';

const ResetPassword = ({ navigation }) => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    // visibility toggles handled inside InputText component; remove local unused state
    const [showModal, setShowModal] = useState(false);

    const { languageString } = React.useContext(Context);

    const handleSave = () => {
        if (!newPassword || !confirmPassword) {
            Alert.alert(
                languageString?.errors?.errorTitle || 'Error',
                languageString?.errors?.pleaseFillFields || 'Please fill in all fields.'
            );
            return;
        }

        if (newPassword !== confirmPassword) {
            Alert.alert(
                languageString?.errors?.errorTitle || 'Error',
                languageString?.errors?.passwordMismatch || 'Passwords do not match.'
            );
            return;
        }

        setShowModal(true);
    };

    return (
        <RootView backgroundColor={Theme.colors.screenBg} statusColor={Theme.colors.primary}>

            {/* Content */}
            <View style={styles.content}>
                {/* Header */}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: Responsive.getHeight('2%') }}>
                    <CustomBackButton />
                    <Heading
                        title={"Reset Password"}
                        customStyles={{
                            marginLeft: Responsive.getWidth('3%'),
                            fontSize: Responsive.AppFonts.h3,
                            fontFamily: Theme.typography.subheading.fontFamily,
                            marginBottom: 0,
                        }}
                    />
                </View>

                {/* Subtitle */}
                <InstructionText
                    text={languageString?.auth?.resetPasswordInfo}
                    customStyles={{
                        fontFamily: Theme.typography.medium.fontFamily,
                        color: Theme.colors.text,
                        marginBottom: Responsive.getHeight('2%'),
                        fontSize: Responsive.AppFonts.t1,
                    }}
                />



                {/* New Password */}
                <InputText
                    heading={languageString?.auth?.newPasswordLabel}
                    placeholder={languageString?.auth?.passwordPlaceholder}
                    value={newPassword}
                    onChangeText={setNewPassword}
                    leftIcon={AppIcons.lock}
                    showToggle
                    isInvalid={false}
                />

                {/* Confirm Password */}
                <InputText
                    heading={languageString?.auth?.confirmPasswordLabel}
                    placeholder={languageString?.auth?.passwordPlaceholder}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    leftIcon={AppIcons.lock}
                    showToggle
                    isInvalid={false}
                />

                {/* Save Button */}
                <PrimaryButton
                    isDisabled={!(newPassword && confirmPassword)}
                    text={languageString?.common?.save}
                    btnFun={handleSave}
                    customStyles={{ marginTop: Responsive.getHeight('4%'), width: '100%' }}
                />
            </View>

            {/* ✅ Success Modal */}
            <Modal visible={showModal} transparent animationType="fade">
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <View style={styles.iconCircle}>
                            <Image
                                source={AppIcons.circleTick}
                                style={{ width: Responsive.getWidth('6%'), height: Responsive.getWidth('6%'), tintColor: Theme.colors.white }}
                                resizeMode="contain"
                            />
                        </View>
                        <Text style={styles.modalTitle}>{languageString?.auth?.passwordUpdatedTitle}</Text>
                        <Text style={styles.modalMessage}>{languageString?.auth?.passwordUpdatedMessage}</Text>
                        <PrimaryButton
                            text={languageString?.common?.login}
                            btnFun={() => {
                                setShowModal(false);
                                navigation.navigate(Routes.login);
                            }}
                            customStyles={{ width: Responsive.getWidth('78%'), marginTop: Responsive.getHeight('3%') }}
                        />
                    </View>
                </View>
            </Modal>
        </RootView>
    );
};

export default ResetPassword;

const styles = StyleSheet.create({
    header: {
        backgroundColor: Theme.colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Responsive.getWidth('5%'),
        paddingVertical: Responsive.getHeight('2%'),
        borderBottomLeftRadius: Theme.borders.largeRadius,
        borderBottomRightRadius: Theme.borders.largeRadius,
    },
    headerTitle: {
        flex: 1,
        textAlign: 'center',
        fontFamily: Theme.typography.subheading.fontFamily,
        fontSize: Responsive.AppFonts.h5,
        color: Theme.colors.white,
        marginRight: Responsive.getWidth('10%'),
    },
    content: {
        flex: 1,
        paddingHorizontal: Responsive.getWidth('5%'),
        paddingTop: Responsive.getHeight('3%'),
    },
    infoText: {
        fontFamily: Theme.typography.body.fontFamily,
        fontSize: Responsive.AppFonts.t2,
        color: Theme.colors.secondryText,
        marginBottom: Responsive.getHeight('2%'),
    },
    label: {
        fontFamily: Theme.typography.subheading.fontFamily,
        fontSize: Responsive.AppFonts.t2,
        color: Theme.colors.text,
        marginBottom: Responsive.getHeight('0.5%'),
    },
    // inputContainer and input styles removed in favor of reusable InputText component

    // Modal Styles
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        backgroundColor: Theme.colors.white,
        width: '85%',
        borderRadius: Theme.borders.mediumRadius,
        alignItems: 'center',
        padding: Responsive.getWidth('6%'),
    },
    iconCircle: {
        backgroundColor: Theme.colors.primary,
        borderRadius: 50,
        width: Responsive.getWidth('12%'),
        height: Responsive.getWidth('12%'),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: Responsive.getHeight('2%'),
    },
    modalTitle: {
        fontFamily: Theme.typography.subheading.fontFamily,
        fontSize: Responsive.AppFonts.t1,
        color: Theme.colors.text,
        marginBottom: Responsive.getHeight('1%'),
    },
    modalMessage: {
        fontFamily: Theme.typography.body.fontFamily,
        fontSize: Responsive.AppFonts.t2,
        color: Theme.colors.black,
        textAlign: 'center',
    },
});
