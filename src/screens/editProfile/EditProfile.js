import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Responsive, Theme } from '../../libs';
import { AppIcons } from '../../constants/icons';
import InputText from '../../components/inputs/InputText';
import RootView from '../../components/RootView';
import AppHeader from '../../components/headers/AppHeader';
import Context from '../../context';

const EditProfile = ({ navigation }) => {
    const { languageString } = React.useContext(Context);
    const [name, setName] = useState('Lorem Steve');
    const [email, setEmail] = useState('xyz@gmail.com');
    const [password, setPassword] = useState('**********');
    return (
        <RootView>
            {/* App Header */}
            <AppHeader
                title={languageString?.labels?.editProfile}
                backgroundColor={Theme.colors.white}
                onBackPress={() => navigation.goBack()}
            />

            <ScrollView
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            >
                {/* 👤 Profile Image Section */}
                <View style={styles.profileWrapper}>
                    <Image
                        source={{
                            uri: 'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=2048x2048&w=is&k=20&c=8QovDK9XochFpaIC-N3pn5EEaRSVuE1SKpQDVUxLSUk=',
                        }}
                        style={styles.profileImage}
                    />
                    <TouchableOpacity style={styles.editIconContainer}>
                        <Image
                            source={AppIcons.edit}
                            style={styles.editIcon}
                        />
                    </TouchableOpacity>
                </View>

                {/* ✏️ Input Fields */}
                <InputText
                    heading="Full Name"
                    value={name}
                    onChangeText={setName}
                    rightIcon={AppIcons.edit}
                />

                <InputText
                    heading="Email"
                    value={email}
                    onChangeText={setEmail}
                    rightIcon={AppIcons.edit}
                    keyboardType="email-address"
                />

                <InputText
                    heading="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    rightIcon={AppIcons.edit}
                />
            </ScrollView>
        </RootView>
    );
};

export default EditProfile;

const styles = StyleSheet.create({
    header: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    contentContainer: {
        flexGrow: 1,
        paddingHorizontal: Responsive.getWidth('6%'),
        paddingTop: Responsive.getHeight('3%'),
    },
    profileWrapper: {
        alignItems: 'center',
        marginBottom: Responsive.getHeight('3%'),
    },
    profileImage: {
        width: Responsive.getWidth('28%'),
        height: Responsive.getWidth('28%'),
        borderRadius: Responsive.getWidth('14%'),
    },
    editIconContainer: {
        position: 'absolute',
        bottom: Responsive.getHeight('1%'),
        right: Responsive.getWidth('30%'),
        // backgroundColor: Theme.colors.white,
        // borderRadius: Theme.borders.fullRadius,
        // borderWidth: Theme.borders.width,
        borderColor: Theme.colors.borderClr,
        shadowColor: Theme.colors.shodowClr,
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.2,
        // shadowRadius: 2,
        // elevation: Theme.elevation.small,
    },
    editIcon: {
        width: Responsive.getWidth('5%'),
        height: Responsive.getWidth('5%'),
        tintColor: Theme.colors.primary,
        resizeMode: 'contain',
    },
});
