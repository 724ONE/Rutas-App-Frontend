import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Theme, Responsive } from '../../libs';
import Routes from '../../navigation/routes';
import FloatingIconButton from '../../components/buttons/FloatingIconButton';
import SearchBar from '../../components/SearchBar';
import AppHeader from '../../components/headers/AppHeader';
import LocationCard from '../../components/LocationCard';
import Context from '../../context';
import RootView from '../../components/RootView';

const SavedLocation = ({ navigation }) => {
    const { languageString } = React.useContext(Context);
    const locations = [
        {
            id: '1',
            title: 'Warehouse A',
            coords: '40.7128, -74.0060',
            contact: 'Manager John',
            note: 'Main storage facility',
            noteColor: Theme.colors.primary,
        },
        {
            id: '2',
            title: 'Box 44',
            coords: '40.7589, -73.9851',
            contact: 'Reception Desk',
            note: 'Deliver after 5 PM',
            noteColor: Theme.colors.primary,
        },
        {
            id: '3',
            title: 'Client Office',
            coords: '40.7128, -74.0060',
            contact: 'Sarah Wilson',
            note: 'Meeting room on 3rd floor',
            noteColor: Theme.colors.primary,
        },
        {
            id: '4',
            title: 'Distribution Center',
            coords: '40.7128, -74.0060',
            contact: 'Loading Dock',
            note: 'Open 6 AM – 8 PM',
            noteColor: Theme.colors.primary,
        },
        {
            id: '5',
            title: 'Customer Site B',
            coords: '40.7128, -74.0060',
            contact: 'Security Gate',
            note: 'Requires ID verification',
            noteColor: Theme.colors.primary,
        },
    ];

    return (
        <RootView statusColor={Theme.colors.primary} backgroundColor={Theme.colors.primary} barStyle="dark-content" addBottomPadding={false}>
            <View style={styles.container}>
                {/* Header */}
                <AppHeader
                    title={languageString?.labels?.savedLocations}
                    onBackPress={() => navigation.goBack()}
                    rightIcon={false}
                    onRightPress={() => console.log('Notification icon pressed')}
                />

                {/* Search bar */}
                <View style={styles.searchContainer}>
                    {/* Search Bar */}
                    <SearchBar
                        placeholder={languageString?.common?.search}
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
                    )} keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listContent}
                />
            </View>
        </RootView>
    );
};

export default SavedLocation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.colors.white,
    },
    searchContainer: {
        paddingHorizontal: Responsive.getWidth('5%'),
        paddingTop: Responsive.getHeight('2%'),
    },
    listContent: {
        paddingHorizontal: Responsive.getWidth('5%'),
        paddingTop: Responsive.getHeight('1%'),
        paddingBottom: Responsive.getHeight('4%'),
    },
});
