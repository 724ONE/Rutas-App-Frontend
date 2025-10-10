import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import Fonts from '../../constants/fonts';
import AppColors from '../../constants/colors';
import { AppIcons } from '../../constants/icons';
import FloatingIconButton from '../../components/buttons/FloatingIconButton';
import SearchBar from '../../components/SearchBar';
import AppHeader from '../../components/headers/AppHeader';
import LocationCard from '../../components/LocationCard';




const SavedLocation = ({ navigation }) => {
    const locations = [
        {
            id: '1',
            title: 'Warehouse A',
            coords: '40.7128, -74.0060',
            contact: 'Manager John',
            note: 'Main storage facility',
            noteColor: AppColors.primaryClr,
        },
        {
            id: '2',
            title: 'Box 44',
            coords: '40.7589, -73.9851',
            contact: 'Reception Desk',
            note: 'Deliver after 5 PM',
            noteColor: AppColors.primaryClr,
        },
        {
            id: '3',
            title: 'Client Office',
            coords: '40.7128, -74.0060',
            contact: 'Sarah Wilson',
            note: 'Meeting room on 3rd floor',
            noteColor: AppColors.primaryClr,
        },
        {
            id: '4',
            title: 'Distribution Center',
            coords: '40.7128, -74.0060',
            contact: 'Loading Dock',
            note: 'Open 6 AM – 8 PM',
            noteColor: AppColors.primaryClr,
        },
        {
            id: '5',
            title: 'Customer Site B',
            coords: '40.7128, -74.0060',
            contact: 'Security Gate',
            note: 'Requires ID verification',
            noteColor: AppColors.primaryClr,
        },
    ];

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <View style={styles.row}>
                <FloatingIconButton
                    onPress={() => console.log('Center map')}
                    size={30}
                    style={{
                        marginRight: 10
                    }}
                />
                <View style={{ flex: 1 }}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.detail}>Coordinates {item.coords}</Text>
                    <Text style={styles.detail}>Contact: {item.contact}</Text>
                    <Text style={[styles.note, { color: item.noteColor }]}>
                        Note: {item.note}
                    </Text>
                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Header */}
            <AppHeader
                title="Saved Location"
                onBackPress={() => navigation.goBack()}
                rightIcon={false}
                onRightPress={() => console.log('Notification icon pressed')}
            />

            {/* Search bar */}
            <View style={styles.searchContainer}>
                {/* Search Bar */}
                <SearchBar
                    placeholder="Search"
                    onPress={() => navigation.navigate(Routes.search)}
                />
            </View>

            {/* List */}
            <FlatList
                data={locations}
 renderItem={({ item }) => (
                    <LocationCard
                        item={item}
                        onPressIcon={() => console.log(`Center map: ${item.title}`)}
                    />
                )}                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
};

export default SavedLocation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.whiteClr,
    },
    searchContainer: {
        paddingHorizontal: 20,
        paddingTop: 15,
    },
    listContent: {
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 30,
    },
    card: {
        backgroundColor: AppColors.whiteClr,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: AppColors.borderClr,
        padding: 12,
        marginBottom: 12,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    icon: {
        height: 24,
        width: 24,
        resizeMode: 'contain',
        marginRight: 10,
        tintColor: AppColors.primaryClr,
    },
    title: {
        fontFamily: Fonts.poppinsSemiBold,
        fontSize: 14,
        color: AppColors.blackClr,
    },
    detail: {
        fontFamily: Fonts.poppinsRegular,
        fontSize: 12,
        color: AppColors.grayText,
        marginTop: 2,
    },
    note: {
        fontFamily: Fonts.poppinsMedium,
        fontSize: 12,
        marginTop: 3,
    },
});
