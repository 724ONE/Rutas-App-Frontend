import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Modal,
} from 'react-native';
import RootView from '../../components/RootView';
import IconButton from '../../components/buttons/IconButton';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import { AppIcons } from '../../constants/icons';
import { Theme, Responsive } from '../../libs';
import Fonts from '../../constants/fonts';

const ResetPassword = ({ navigation }) => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showNewPass, setShowNewPass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleSave = () => {
        if (newPassword && confirmPassword && newPassword === confirmPassword) {
            setShowModal(true);
        }
    };

    return (
        <RootView backgroundColor={Theme.colors.screenBg} statusColor={Theme.colors.primary}>
            {/* Header */}
            <View style={styles.header}>
                <IconButton
                    icon={AppIcons.backArrow}
                    onPress={() => navigation.goBack()}
                    backgroundColor={Theme.colors.white}
                    size={Responsive.getWidth('10%')}
                    iconSize={Responsive.getWidth('4%')}
                    borderRadius={Theme.borders.fullRadius}
                />
                <Text style={styles.headerTitle}>Reset Password</Text>
            </View>

            {/* Content */}
            <View style={styles.content}>
                <Text style={styles.infoText}>You can now reset your password.</Text>

                {/* New Password */}
                <Text style={styles.label}>New password</Text>
                <View style={styles.inputContainer}>
                    <AppIcons.lock width={20} height={20} color={Theme.colors.secondryText} />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your password"
                        secureTextEntry={!showNewPass}
                        placeholderTextColor={Theme.colors.hintText}
                        value={newPassword}
                        onChangeText={setNewPassword}
                    />
                    <TouchableOpacity onPress={() => setShowNewPass(!showNewPass)}>
                        <AppIcons.eye width={20} height={20} color={Theme.colors.secondryText} />
                    </TouchableOpacity>
                </View>

                {/* Confirm Password */}
                <Text style={[styles.label, { marginTop: Responsive.getHeight('2%') }]}>Confirm password</Text>
                <View style={styles.inputContainer}>
                    <AppIcons.lock width={20} height={20} color={Theme.colors.secondryText} />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your password"
                        secureTextEntry={!showConfirmPass}
                        placeholderTextColor={Theme.colors.hintText}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />
                    <TouchableOpacity onPress={() => setShowConfirmPass(!showConfirmPass)}>
                        <AppIcons.eye width={20} height={20} color={Theme.colors.secondryText} />
                    </TouchableOpacity>
                </View>

                {/* Save Button */}
                <PrimaryButton
                    text="Save"
                    btnFun={handleSave}
                    customStyles={{ marginTop: Responsive.getHeight('4%'), width: '100%' }}
                />
            </View>

            {/* ✅ Success Modal */}
            <Modal visible={showModal} transparent animationType="fade">
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <View style={styles.iconCircle}>
                            <AppIcons.check width={24} height={24} color={Theme.colors.white} />
                        </View>
                        <Text style={styles.modalTitle}>Password Updated</Text>
                        <Text style={styles.modalMessage}>Your password has been updated successfully.</Text>
                        <PrimaryButton
                            text="Login"
                            btnFun={() => {
                                setShowModal(false);
                                navigation.navigate('Login');
                            }}
                            customStyles={{ width: '80%', marginTop: Responsive.getHeight('3%') }}
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
        fontFamily: Fonts.poppinsSemiBold,
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
        fontFamily: Fonts.poppinsRegular,
        fontSize: Responsive.AppFonts.t2,
        color: Theme.colors.secondryText,
        marginBottom: Responsive.getHeight('2%'),
    },
    label: {
        fontFamily: Fonts.poppinsSemiBold,
        fontSize: Responsive.AppFonts.t2,
        color: Theme.colors.text,
        marginBottom: Responsive.getHeight('0.5%'),
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: Theme.borders.width,
        borderColor: Theme.colors.borderClr,
        borderRadius: Theme.borders.mediumRadius,
        paddingHorizontal: Responsive.getWidth('3%'),
        height: Responsive.getHeight('6%'),
        backgroundColor: Theme.colors.white,
    },
    input: {
        flex: 1,
        fontFamily: Fonts.poppinsRegular,
        fontSize: Responsive.AppFonts.t2,
        color: Theme.colors.text,
        marginLeft: Responsive.getWidth('2%'),
    },

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
        borderRadius: Theme.borders.largeRadius,
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
        fontFamily: Fonts.poppinsSemiBold,
        fontSize: Responsive.AppFonts.h5,
        color: Theme.colors.text,
        marginBottom: Responsive.getHeight('1%'),
    },
    modalMessage: {
        fontFamily: Fonts.poppinsRegular,
        fontSize: Responsive.AppFonts.t2,
        color: Theme.colors.secondryText,
        textAlign: 'center',
    },
});
