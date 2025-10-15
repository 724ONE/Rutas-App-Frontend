import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
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
import Context from '../../context';
import MyMapView from '../../components/MyMapView';

const HomeScreen = ({ navigation }) => {
    const { languageString } = React.useContext(Context);
    const dashboardData = [
        {
            title: 'Saved',
            value: '3',
            bg: '#F5A6231A',
            iconBg: '#F5A62333',
            textClr: '#F5A623',
            iconColor: Theme.colors.primary,
            icon: AppIcons.mapLocation,
            onPress: () => navigation.navigate(Routes.savedLocation),
        },
        {
            title: 'Routes',
            value: '5',
            bg: '#007AFF1A',
            iconBg: '#007AFF33',
            textClr: '#007AFF',
            iconColor: Theme.colors.lightSky,
            icon: AppIcons.list,
            onPress: () => navigation.navigate(Routes.savedLocation),
        },
        {
            title: 'Completed Routes',
            value: '12',
            bg: '#34C7591A',
            iconBg: '#34C75933',
            textClr: '#34C759',
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
            backgroundColor={Theme.colors.primary}
            isInBottomTab={true}
        >
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
                    containerStyle={{ marginBottom: Responsive.getHeight('0%') }}
                />

                {/* Map View */}
                {/* <View style={styles.mapBox}>
                    <Heading title={languageString?.home?.mapView} customStyles={styles.headingText} />
                    <TouchableOpacity
                        style={styles.mapPlaceholder}
                        onPress={() => navigation.navigate(Routes.mapViewScreen)}
                    />
                </View> */}

<View style={{marginTop:Responsive.getHeight('1%')}}>
                    <MyMapView navigation={navigation} />

</View>
                {/* Dashboard */}
                <Heading
                    title={languageString?.home?.dashboard}
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
                    <Heading title={languageString?.home?.savedLocations} customStyles={styles.headingText} />
                    <TextButton
                        text={languageString?.home?.viewAll}
                        onPress={() => navigation.navigate(Routes.savedLocation)}
                        customStyles={{
                            //    alignSelf: 'flex-end',
                        }}
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
                     {/* Floating Action Button */}
            <FloatingActionButton
                icon={AppIcons.circleAdd}
                onPress={() => navigation.navigate(Routes.addLocation)}
            />
                </View>

 
            </ScrollView>

          
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
        fontFamily: Theme.typography.medium.fontFamily,
        fontSize: Responsive.AppFonts.t1,
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
        marginTop: Responsive.getHeight('1%'),
    },
    dashboardItem: {
        width: '49%',
        marginBottom: Responsive.getHeight('1.5%'),
    },
    savedHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
        marginTop: Responsive.getHeight('1%'),
    },
    viewAllText: {
        fontFamily: Theme.typography.body.fontFamily,
        includeFontPadding: false,
        alignSelf: 'flex-end',
        fontSize: Responsive.AppFonts.t1,
        color: Theme.colors.primary,
    },
});
