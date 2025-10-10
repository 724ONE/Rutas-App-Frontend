import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';
import HeaderCard from '../../components/HeaderCard';
import SearchBar from '../../components/SearchBar';
import DashboardCard from '../../components/DashboardCard';
import Fonts from '../../constants/fonts';
import { AppIcons } from '../../constants/icons';
import Heading from '../../components/text/Heading';
import Routes from '../../navigation/routes';
import LocationCard from '../../components/LocationCard';
import TextButton from '../../components/buttons/TextButton';
import AppColors from '../../constants/colors';

const HomeScreen = ({ navigation }) => {
    const dashboardData = [
        { title: 'Saved', value: '3', bg: '#FFF4D4', iconColor: Colors.primaryClr, icon: AppIcons.mapLocation, onPress: () => navigation.navigate(Routes.savedLocation) },
        { title: 'Routes', value: '5', bg: '#E6EEFF', iconColor: '#3B82F6' },
        { title: 'Completed Routes', value: '12', bg: '#E9F8ED', iconColor: '#22C55E' },
        // { title: 'Pending Tasks', value: '4', bg: '#FFE4E6', iconColor: '#EF4444' },
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
            isLast: true,
        },
    ];

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {/* Header */}
            <HeaderCard
                name="Lorem"
                image={{ uri: 'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=2048x2048&w=is&k=20&c=8QovDK9XochFpaIC-N3pn5EEaRSVuE1SKpQDVUxLSUk=' }}
            />







            {/* Search Bar */}
            <SearchBar
                placeholder="Search"
                onPress={() => navigation.navigate(Routes.search)}
            />

            {/* Map View Placeholder */}
            <View style={styles.mapBox}>
                <Heading title={'Map View'} customStyles={styles.headingText} />
                <View style={styles.mapPlaceholder} />
            </View>

            {/* Dashboard */}x
            <Heading title={'Dashboard'} customStyles={[styles.headingText, { marginTop: 10 }]} />



            <View style={styles.dashboardGrid}>
                {dashboardData.map((item, index) => (
                    <View key={index} style={styles.dashboardItem}>
                        <DashboardCard
                            title={item.title}
                            value={item.value}
                            bg={item.bg}
                            iconColor={item.iconColor}
                            icon={item.icon}
                            onPress={item.onPress}
                        />
                    </View>
                ))}
            </View>

            {/* <View style={styles.dashboardRow}>
                <DashboardCard title="Saved" value="3" bg="#FFF4D4" iconColor={Colors.primaryClr} icon={AppIcons.mapLocation} onPress={() => {
                    navigation.navigate(Routes.savedLocation)
                }} />
                <DashboardCard title="Routes" value="5" bg="#E6EEFF" iconColor="#3B82F6" />
            </View>
            <View style={styles.dashboardRow}>
                <DashboardCard title="Completed Routes" value="12" bg="#E9F8ED" iconColor="#22C55E" />
            </View> */}

            {/* Saved Locations */}
            <View style={styles.savedHeader}>

                <Heading title={'Saved Locations'} customStyles={[styles.headingText, {}]} />

                <TextButton onPress={() => {
                    navigation.navigate(Routes.savedLocation)
                }}
                    text={'View All'}
                    customStyles={{
                        marginBottom: 0,
                    }}
                    textStyles={{
                        fontSize: 12,
                        color: AppColors.primaryClr,
                        fontFamily: Fonts.poppinsRegular,
                    }}
                />
            </View>

            {savedLocations.map((item, index) => (
                <LocationCard
                    key={index}
                    item={{
                        title: item.name,
                        coords: item.coordinates,
                        contact: item.contact,
                        note: item.note,
                        noteColor: Colors.primaryClr,
                    }}
                    onPressIcon={() => console.log(`Center map on: ${item.name}`)}
                />
            ))}
        </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.whiteClr,
        paddingHorizontal: 15,
    },
    mapBox: { marginTop: 10 },
    headingText: {
        fontFamily: Fonts.poppinsSemiBold,
        color: Colors.blackClr,
        fontSize: 14,
        marginBottom: 6,
    },
    mapPlaceholder: {
        height: 140,
        borderRadius: 12,
        backgroundColor: '#F5F5F5',
    },
    dashboardRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    savedHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
        marginTop: 15
    },
    /** Dashboard grid layout */
    dashboardGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    dashboardItem: {
        width: '48%', // ensures 2 cards per row with spacing
        marginBottom: 12,
    },
});
