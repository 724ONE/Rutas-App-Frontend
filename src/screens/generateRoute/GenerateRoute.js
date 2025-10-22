import React, { useContext, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Image,
} from 'react-native';
import { Theme, Responsive } from '../../libs';
import RootView from '../../components/RootView';
import AppHeader from '../../components/headers/AppHeader';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import { AppIcons } from '../../constants/icons';
import Context from '../../context';
import Routes from '../../navigation/routes';
import MyMap from '../../components/MyMap';

const GenerateRoute = ({ navigation }) => {
    const { languageString } = useContext(Context);
    const [selectedAlert, setSelectedAlert] = useState('');
    const [message, setMessage] = useState('');

    const alertButtons = [
        {
            id: 'onTheWay',
            title: languageString.routeNavigation.oneTheWay,
            color: '#175CD3',
            backgroundColor: '#EFF8FF',
        },
        {
            id: 'routeStarted',
            title: languageString.routeNavigation.routeStarted,
            color: '#B54708',
            backgroundColor: '#FFFAEB',
        },
        {
            id: 'completed',
            title: languageString.routeNavigation.completed,
            color: '#067647',
            backgroundColor: '#ECFDF3',
        },
    ];

    const handleAlertPress = (alertId) => {
        setSelectedAlert(alertId);
    };

    const handleZoomIn = () => {
        console.log('Zoom in pressed');
        // Implement zoom in functionality
    };

    const handleZoomOut = () => {
        console.log('Zoom out pressed');
        // Implement zoom out functionality
    };

    const sendAlert = () => {
        // if (selectedAlert) {
            navigation.navigate(Routes.alerts)
        // } /
    };

    const renderAlertButton = (alert) => (
        <TouchableOpacity
            key={alert.id}
            style={[
                styles.alertButton,
                { backgroundColor: alert.backgroundColor, borderColor: alert.color },
                selectedAlert === alert.id && styles.selectedAlertButton,

            ]}
            onPress={() => handleAlertPress(alert.id)}
        >
            <Text style={[styles.alertButtonText, { color: alert.color }]}>
                {alert.title}
            </Text>
        </TouchableOpacity>
    );

    return (
        <RootView statusColor={Theme.colors.primary} backgroundColor={Theme.colors.primary} addBottomPadding={false}>
            <AppHeader
                title={languageString.routeNavigation.headerTitle}
                rightIcon={AppIcons.sendRoute}
                showBack={true}
                onBackPress={() => navigation.goBack()}
            />
            <View style={styles.container}>

                {/* Bottom Sheet */}
                <ScrollView
                    // style={styles.bottomSheet}
                    contentContainerStyle={styles.bottomSheetContent}
                    showsVerticalScrollIndicator={false}
                >

                    {/* Map Section */}
                    <MyMap
                        showRoute={true}
                        showControls={true}
                        showStreetLabels={true}
                        onZoomIn={handleZoomIn}
                        onZoomOut={handleZoomOut}
                        style={styles.customMapStyle}
                    />

                    {/* Send Alerts Section */}
                    <View style={[styles.section, {}]}>
                        <Text style={styles.sectionTitle}>{languageString.routeNavigation.sendAlerts}</Text>
                        <View style={styles.alertButtonsContainer}>
                            {alertButtons.map(renderAlertButton)}
                        </View>
                    </View>

                    {/* Messages Section */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>{languageString.routeNavigation.messages}</Text>

                        <View style={styles.messageContainer}>
                            <TextInput
                                style={styles.messageInput}
                                placeholder={languageString.routeNavigation.enterMessage}
                                placeholderTextColor={Theme.colors.secondryText}
                                value={message}
                                onChangeText={setMessage}
                                multiline
                                numberOfLines={4}
                                textAlignVertical="top"
                            />
                        </View>

                        <PrimaryButton
                            text={languageString.routeNavigation.sendAlertsButton}
                            btnFun={sendAlert}
                            customStyles={styles.sendButton}
                        />
                    </View>
                </ScrollView>
            </View>
        </RootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.colors.screenBg,
    },
    customMapStyle: {
        height: Responsive.getHeight('40%'),
        marginBottom: Responsive.getHeight('2%'),
    },
    bottomSheet: {
        backgroundColor: Theme.colors.white,
        borderTopLeftRadius: Responsive.getWidth('6%'),
        borderTopRightRadius: Responsive.getWidth('6%'),
        maxHeight: Responsive.getHeight('45%'),
    },
    bottomSheetContent: {
        padding: Responsive.getHeight('2%'),
    },
    section: {
        marginBottom: Responsive.getHeight('2.5%'),
    },
    sectionTitle: {
        fontSize: Responsive.AppFonts.t1,
        fontFamily: Theme.typography.subheading.fontFamily,
        color: Theme.colors.text,
        marginBottom: Responsive.getHeight('1.5%'),
    },
    alertButtonsContainer: {
        gap: Responsive.getHeight('1%'),
    },
    alertButton: {
        paddingVertical: Responsive.getHeight('1.5%'),
        paddingHorizontal: Responsive.getWidth('4%'),
        borderRadius: Theme.borders.mediumRadius,
        borderWidth: Theme.borders.width,
        borderColor: 'transparent',
        alignItems: 'center',
    },
    selectedAlertButton: {
        borderColor: Theme.colors.primary,
        borderWidth: 2,
    },
    alertButtonText: {
        fontSize: Responsive.AppFonts.h6,
        fontFamily: Theme.typography.medium.fontFamily,
    },
    messageContainer: {
        marginBottom: Responsive.getHeight('2%'),
    },
    messageInput: {
        borderWidth: Theme.borders.width,
        borderColor: Theme.colors.borderClr,
        borderRadius: Theme.borders.mediumRadius,
        paddingHorizontal: Responsive.getWidth('4%'),
        paddingVertical: Responsive.getHeight('1%'),
        fontSize: Responsive.AppFonts.t1,
        fontFamily: Theme.typography.body.fontFamily,
        color: Theme.colors.text,
        backgroundColor: Theme.colors.white,
        minHeight: Responsive.getHeight('10%'),
    },
    sendButton: {
        width: '100%',
    },
});

export default GenerateRoute;