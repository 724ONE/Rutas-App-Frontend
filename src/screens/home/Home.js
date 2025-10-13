import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { Responsive, Theme } from '../../libs';
import RootView from '../../components/RootView';
import HeaderCard from '../../components/HeaderCard';
import SearchBar from '../../components/SearchBar';
import DashboardCard from '../../components/DashboardCard';
import LocationCard from '../../components/LocationCard';
import Heading from '../../components/text/Heading';
import TextButton from '../../components/buttons/TextButton';
import FloatingActionButton from '../../components/buttons/FloatingActionButton';
import { AppIcons } from '../../constants/icons';
import Routes from '../../navigation/routes';

const HomeScreen = ({ navigation }) => {
    const dashboardData = [
        {
            title: 'Saved',
            value: '3',
            bg: '#FFF4D4',
            iconColor: Theme.colors.primary,
            icon: AppIcons.mapLocation,
            onPress: () => navigation.navigate(Routes.savedLocation),
        },
        {
            title: 'Routes',
            value: '5',
            bg: '#E6EEFF',
            iconColor: Theme.colors.lightSky,
            icon: AppIcons.list,
            onPress: () => navigation.navigate(Routes.savedLocation),
        },
        {
            title: 'Completed Routes',
            value: '12',
            bg: '#E9F8ED',
            iconColor: Theme.colors.success,
            icon: AppIcons.greenTick,
            onPress: () => navigation.navigate(Routes.savedLocation),
        },
    ];

    const savedLocations = [
        {
            name: 'Warehouse A',
            coordinates: '40.7128, -74.0060',
            contact: 'Manager John',
            note: 'Main storage facility',
        },
        {
            name: 'Box 44',
            coordinates: '40.7589, -73.9851',
            contact: 'Reception Desk',
            note: 'Deliver after 5 PM',
        },
        {
            name: 'Client Office',
            coordinates: '40.7128, -74.0060',
            contact: 'Sarah Wilson',
            note: 'Meeting room on 3rd floor',
        },
        {
            name: 'Distribution Center',
            coordinates: '40.7128, -74.0060',
            contact: 'Loading Dock',
            note: 'Open 6 AM - 8 PM',
        },
        {
            name: 'Customer Site B',
            coordinates: '40.7128, -74.0060',
            contact: 'Security Gate',
            note: 'Requires ID verification',
        },
    ];

    return (
        <RootView
            statusColor={Theme.colors.primary}
            backgroundColor={Theme.colors.screenBg}
            isInBottomTab={true}>
                 {/* ✅ Manually control status bar */}
    
            {/* Fixed Header (outside ScrollView) */}
            <HeaderCard
                name="Lorem"
                image={{
                    uri: 'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=2048x2048&w=is&k=20&c=8QovDK9XochFpaIC-N3pn5EEaRSVuE1SKpQDVUxLSUk=',
                }}
            />

            {/* Scrollable content */}
            <ScrollView
                style={styles.container}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: Responsive.getHeight('3%'),
                }}
            >
                {/* Search Bar */}
                <SearchBar
                    placeholder="Search"
                    onPress={() => navigation.navigate(Routes.search)}
                />

                {/* Map View */}
                <View style={styles.mapBox}>
                    <Heading title="Map View" customStyles={styles.headingText} />
                    <TouchableOpacity
                        style={styles.mapPlaceholder}
                        onPress={() => navigation.navigate(Routes.mapViewScreen)}
                    />
                </View>

                {/* Dashboard */}
                <Heading
                    title="Dashboard"
                    customStyles={[styles.headingText, { marginTop: Responsive.getHeight('1.5%') }]}
                />

                <View style={styles.dashboardGrid}>
                    {dashboardData.map((item, index) => (
                        <View key={index} style={styles.dashboardItem}>
                            <DashboardCard {...item} />
                        </View>
                    ))}
                </View>

                {/* Saved Locations */}
                <View style={styles.savedHeader}>
                    <Heading title="Saved Locations" customStyles={styles.headingText} />
                    <TextButton
                        text="View All"
                        onPress={() => navigation.navigate(Routes.savedLocation)}
                        customStyles={{ marginBottom: 0 }}
                        textStyles={styles.viewAllText}
                    />
                </View>

                <View style={{ marginBottom: Responsive.getHeight('2%') }}>
                    {savedLocations.map((item, index) => (
                        <LocationCard
                            key={index}
                            item={{
                                title: item.name,
                                coords: item.coordinates,
                                contact: item.contact,
                                note: item.note,
                                noteColor: Theme.colors.primary,
                            }}
                            onPressIcon={() => console.log(`Center map on: ${item.name}`)}
                        />
                    ))}
                </View>

            </ScrollView>

            {/* Floating Action Button */}
            <FloatingActionButton
                icon={AppIcons.circleAdd}
                onPress={() => navigation.navigate(Routes.addLocation)}
            />
        </RootView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.colors.screenBg,
        paddingHorizontal: Responsive.getWidth('5%'),
    },
    mapBox: {
        marginTop: Responsive.getHeight('2%'),
    },
    headingText: {
        fontFamily: Theme.typography.subheading.fontFamily,
        fontSize: Responsive.AppFonts.h5,
        color: Theme.colors.text,
        marginBottom: Responsive.getHeight('0.8%'),
    },
    mapPlaceholder: {
        height: Responsive.getHeight('18%'),
        borderRadius: Theme.borders.largeRadius,
        backgroundColor: Theme.colors.grey,
    },
    dashboardGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: Responsive.getHeight('1.5%'),
    },
    dashboardItem: {
        width: '48%',
        marginBottom: Responsive.getHeight('1.5%'),
    },
    savedHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Responsive.getHeight('2%'),
        marginBottom: Responsive.getHeight('1%'),
    },
    viewAllText: {
        fontFamily: Theme.typography.body.fontFamily,
        fontSize: Responsive.AppFonts.t1,
        color: Theme.colors.primary,
    },
});
