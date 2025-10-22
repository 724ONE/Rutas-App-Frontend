import React, { useState, useContext } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Linking,
    Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RootView from '../../components/RootView';
import AppHeader from '../../components/headers/AppHeader';
import { Theme, Responsive } from '../../libs';
import Context from '../../context';
import { AppIcons } from '../../constants/icons';

const { getWidth, getHeight } = Responsive;

const HelpCenter = () => {
    const navigation = useNavigation();
    const context = useContext(Context);
    const languageString = context?.languageString || {};

    const [activeTab, setActiveTab] = useState('FAQ');

    const faqContent = [
        {
            id: 1,
            text: languageString.helpCenter?.faqSection1 || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
            id: 2,
            text: languageString.helpCenter?.faqSection2 || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
            id: 3,
            text: languageString.helpCenter?.faqSection3 || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
    ];

    const contactOptions = [
        {
            id: 1,
            title: languageString.helpCenter?.customerService || 'Customer Service',
            icon: AppIcons.help, // Using help icon as placeholder for customer service
            action: () => handleEmailPress(),
        },
        {
            id: 2,
            title: languageString.helpCenter?.whatsapp || 'WhatsApp',
            icon: AppIcons.help,
            action: () => handleWhatsAppPress(),
        },
        {
            id: 3,
            title: languageString.helpCenter?.website || 'Website',
            icon: AppIcons.help, // Using help icon as placeholder for website
            action: () => handleWebsitePress(),
        },
    ];

    const contactInfo = {
        email: languageString.helpCenter?.contactEmail || 'support@rutasapp.com',
        phone: languageString.helpCenter?.contactPhone || '+1 (555) 123-4567',
        website: languageString.helpCenter?.contactWebsite || 'https://www.rutasapp.com',
        whatsapp: languageString.helpCenter?.contactWhatsApp || '+1555123456',
    }; const handleEmailPress = () => {
        Linking.openURL(`mailto:${contactInfo.email}`);
    };

    const handlePhonePress = () => {
        Linking.openURL(`tel:${contactInfo.phone}`);
    };

    const handleWhatsAppPress = () => {
        Linking.openURL(`whatsapp://send?phone=${contactInfo.whatsapp}`);
    };

    const handleWebsitePress = () => {
        Linking.openURL(contactInfo.website);
    };

    const renderTabButton = (tabName) => (
        <TouchableOpacity
            key={tabName}
            style={[
                styles.tabButton,
                activeTab === tabName && styles.activeTabButton
            ]}
            onPress={() => setActiveTab(tabName)}
        >
            <Text style={[
                styles.tabText,
                activeTab === tabName && styles.activeTabText
            ]}>
                {tabName}
            </Text>
            {<View style={[activeTab === tabName ? styles.activeTabIndicator : styles.inactiveTabIndicator]} />}
        </TouchableOpacity>
    );

    const renderFAQContent = () => (
        <ScrollView
            style={styles.contentScrollView}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
        >
            {faqContent.map((section) => (
                <View key={section.id} style={styles.faqSection}>
                    <Text style={styles.faqText}>{section.text}</Text>
                </View>
            ))}
        </ScrollView>
    );

    const renderContactContent = () => (
        <ScrollView
            style={styles.contentScrollView}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.contactSection}>
                {contactOptions.map((option) => (
                    <TouchableOpacity
                        key={option.id}
                        style={styles.contactOptionCard}
                        onPress={option.action}
                    >
                        <View style={styles.contactOptionContent}>
                            <View style={styles.iconContainer}>
                                <Image source={option.icon} style={styles.contactIcon} />
                            </View>
                            <Text style={styles.contactOptionTitle}>{option.title}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );

    return (
        <RootView statusColor={Theme.colors.primary} backgroundColor={Theme.colors.primary}
            addBottomPadding={false}>
            <AppHeader
                title={languageString.helpCenter?.headerTitle || 'Help Center'}
                rightIcon={false}
                showBack={true}
                onBackPress={() => navigation.goBack()}
            />

            <View style={styles.container}>
                {/* Tab Navigation */}
                <View style={styles.tabContainer}>
                    {renderTabButton('FAQ')}
                    {renderTabButton('Contact Us')}
                </View>

                {/* Content Area */}
                <View style={styles.contentContainer}>
                    {activeTab === 'FAQ' ? renderFAQContent() : renderContactContent()}
                </View>
            </View>
        </RootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.colors.screenBg,
    },
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: Theme.colors.screenBg,
        paddingHorizontal: getWidth(5),
        paddingTop: getHeight(2),
        borderBottomWidth: 1,
        borderBottomColor: Theme.colors.borderClr || '#E5E5E5',
    },
    tabButton: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: getHeight(1.5),
        position: 'relative',
        marginBottom: -1,
    },
    activeTabButton: {
        // Active tab styling handled by indicator
    },
    tabText: {
        fontSize: Responsive.AppFonts.t1,
        fontFamily: Theme.typography.medium.fontFamily,
        color: Theme.colors.textSecondary,
    },
    activeTabText: {
        color: Theme.colors.primary,
        fontFamily: Theme.typography.medium.fontFamily,
    },
    inactiveTabIndicator: {
        position: 'absolute',
        bottom: -1,
        left: '20%',
        right: '20%',
        height: getHeight(0.3),
        backgroundColor: 'transparent',
    },
    activeTabIndicator: {
        position: 'absolute',
        bottom: -1,
        left: '20%',
        right: '20%',
        height: getHeight(0.3),
        backgroundColor: Theme.colors.primary,
        borderRadius: getHeight(0.15),
    },
    contentContainer: {
        flex: 1,
        marginTop: getHeight(1),
    },
    contentScrollView: {
        flex: 1,
        paddingHorizontal: getWidth(5),
    },
    scrollContent: {
        paddingBottom: getHeight(3),
    },
    faqSection: {
        marginBottom: getHeight(3),
    },
    faqText: {
        fontSize: Responsive.AppFonts.t1,
        fontFamily: Theme.typography.body.fontFamily,
        color: Theme.colors.textPrimary,
        lineHeight: getHeight(2.5),
        textAlign: 'left',
    },
    contactSection: {
        paddingTop: getHeight(2),
    },
    contactOptionCard: {
        backgroundColor: Theme.colors.white,
        borderRadius: getHeight(1.5),
        marginBottom: getHeight(2),
        paddingHorizontal: getWidth(4),
        paddingVertical: getHeight(2),
        borderWidth: 1,
        borderColor: Theme.colors.borderClr,
        shadowColor: Theme.colors.black,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    contactOptionContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        width: getWidth(12),
        height: getWidth(12),
        borderRadius: getWidth(6),
        backgroundColor: Theme.colors.primary + '20',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: getWidth(4),
    },
    contactIcon: {
        width: getWidth(6),
        height: getWidth(6),
        tintColor: Theme.colors.primary,
    },
    contactOptionTitle: {
        fontSize: Responsive.AppFonts.t1,
        fontFamily: Theme.typography.medium.fontFamily,
        color: Theme.colors.textPrimary,
        flex: 1,
    },
});

export default HelpCenter;