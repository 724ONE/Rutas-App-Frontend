import React, { useState, useContext } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
} from 'react-native';
import { Theme, Responsive } from '../../libs';
import RootView from '../../components/RootView';
import AppHeader from '../../components/headers/AppHeader';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import Context from '../../context';
import { AppIcons } from '../../constants/icons';

const Language = ({ navigation }) => {
    const context = useContext(Context);
    const languageString = context?.languageString || {};

    const [selectedLanguage, setSelectedLanguage] = useState('English (US)');

    const languages = [
        {
            id: 'en-us',
            name: languageString.language?.englishUS || 'English (US)',
            isSelected: true,
            isSuggested: false,
        },
        {
            id: 'en-uk',
            name: languageString.language?.englishUK || 'English (UK)',
            isSelected: false,
            isSuggested: false,
        },
        {
            id: 'mandarin',
            name: languageString.language?.mandarin || 'Mandarin',
            isSelected: false,
            isSuggested: true,
        },
        {
            id: 'spanish',
            name: languageString.language?.spanish || 'Spanish',
            isSelected: false,
            isSuggested: false,
        },
        {
            id: 'french',
            name: languageString.language?.french || 'French',
            isSelected: false,
            isSuggested: false,
        },
        {
            id: 'arabic',
            name: languageString.language?.arabic || 'Arabic',
            isSelected: false,
            isSuggested: false,
        },
        {
            id: 'bengali',
            name: languageString.language?.bengali || 'Bengali',
            isSelected: false,
            isSuggested: false,
        },
        {
            id: 'russian',
            name: languageString.language?.russian || 'Russian',
            isSelected: false,
            isSuggested: false,
        },
        {
            id: 'indonesia',
            name: languageString.language?.indonesia || 'Indonesia',
            isSelected: false,
            isSuggested: false,
        },
    ];

    const [languageList, setLanguageList] = useState(languages);

    const handleLanguageSelect = (selectedId) => {
        const updatedList = languageList.map(lang => ({
            ...lang,
            isSelected: lang.id === selectedId,
        }));
        setLanguageList(updatedList);

        const selected = languageList.find(lang => lang.id === selectedId);
        setSelectedLanguage(selected?.name || '');
    };

    const handleContinue = () => {
        const selectedLang = languageList.find(lang => lang.isSelected);
        console.log('Selected language:', selectedLang)
        navigation.goBack();
    };

    const renderLanguageItem = (language) => (
        <TouchableOpacity
            key={language.id}
            style={styles.languageItem}
            onPress={() => handleLanguageSelect(language.id)}
            activeOpacity={0.7}
        >
            <Text style={styles.languageName}>{language.name}</Text>

            <View style={[
                styles.radioButton,
                language.isSelected && styles.radioButtonSelected
            ]}>
                {language.isSelected && (
                    <Image source={AppIcons.circleTick} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
                )}
            </View>
        </TouchableOpacity>
    );

    const suggestedLanguages = languageList.filter(lang => lang.isSuggested);
    const otherLanguages = languageList.filter(lang => !lang.isSuggested);

    return (
        <RootView
            statusColor={Theme.colors.primary}
            backgroundColor={Theme.colors.primary}
            addBottomPadding={false}
        >
            <AppHeader
                title={languageString.language?.headerTitle}
                rightIcon={false}
                showBack={true}
                onBackPress={() => navigation.goBack()}
            />

            <View style={styles.container}>
                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}>
                    {/* Main Languages */}
                    <View style={styles.languagesSection}>
                        {otherLanguages.slice(0, 2).map(renderLanguageItem)}
                    </View>

                    {/* Suggested Section */}
                    {suggestedLanguages.length > 0 && (
                        <>
                            <Text style={styles.sectionTitle}>
                                {languageString.language?.suggested || 'Suggested'}
                            </Text>
                            <View style={styles.languagesSection}>
                                {suggestedLanguages.map(renderLanguageItem)}
                            </View>
                        </>
                    )}

                    {/* Other Languages */}
                    <View style={styles.languagesSection}>
                        {otherLanguages.slice(2).map(renderLanguageItem)}
                    </View>
                </ScrollView>

                {/* Continue Button */}
                <PrimaryButton
                    text={languageString.language?.continue}
                    btnFun={handleContinue}
                    customStyles={styles.continueButton}
                />
            </View>
        </RootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.colors.white,
        paddingBottom: Responsive.getHeight('3%'),
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: Responsive.getWidth('5%'),
        paddingTop: Responsive.getHeight('2%'),
        paddingBottom: Responsive.getHeight('2%'),
    },
    languagesSection: {
        marginBottom: Responsive.getHeight('1%'),
    },
    sectionTitle: {
        fontSize: Responsive.AppFonts.t1,
        fontFamily: Theme.typography.subheading.fontFamily,
        color: Theme.colors.text,
        marginBottom: Responsive.getHeight('1%'),
        marginTop: Responsive.getHeight('1%'),
    },
    languageItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: Responsive.getHeight('1.1%'),
        borderBottomWidth: Theme.borders.width,
        borderBottomColor: Theme.colors.borderClr,
        backgroundColor: Theme.colors.white,
    },
    languageName: {
        fontSize: Responsive.AppFonts.t1,
        fontFamily: Theme.typography.medium.fontFamily,
        color: Theme.colors.text,
        flex: 1,
    },
    radioButton: {
        width: Responsive.getWidth('5%'),
        height: Responsive.getWidth('5%'),
        borderRadius: Responsive.getWidth('2.5%'),
        borderWidth:2,
        borderColor: Theme.colors.primaryBtnDisableClr,
        backgroundColor: Theme.colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioButtonSelected: {
        borderColor: Theme.colors.white,
        borderWidth: 0,
        backgroundColor: Theme.colors.primary,
    },
    continueButton: {
        marginVertical: Responsive.getHeight('2%'),
    },
});

export default Language;