import React, { useContext, useState } from 'react';
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
import InputText from '../../components/inputs/InputText';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import { AppIcons } from '../../constants/icons';
import Context from '../../context';
import Routes from '../../navigation/routes';
import LocationCard from '../../components/LocationCard';

const CreateRoute = ({ navigation }) => {
  const { languageString } = useContext(Context);
  const [startPoint, setStartPoint] = useState('');
  const [endPoint, setEndPoint] = useState('');
  const [stops, setStops] = useState([
    { id: 1, value: 'Stop 1 Client Office' },
    { id: 2, value: 'Stop 1 Warehouse B' },
    { id: 3, value: 'Stop 3 Retail Store' },
    { id: 4, value: 'Stop 3 Retail Store' },
  ]);

  const savedLocations = [
    {
      id: 1,
      name: 'Warehouse A',
      coordinates: '40.7128, -74.0060',
      contact: 'Manager John',
      note: 'Main storage facility',
      selected: false,
    },
    {
      id: 2,
      name: 'Box 44',
      coordinates: '40.7589, -73.9851',
      contact: 'Reception Desk',
      note: 'Deliver after 5 PM',
      selected: false,
    },
  ];

  const [selectedLocations, setSelectedLocations] = useState(savedLocations);

  const toggleLocationSelection = (id) => {
    setSelectedLocations(prev =>
      prev.map(location =>
        location.id === id
          ? { ...location, selected: !location.selected }
          : location
      )
    );
  };

  const addStop = () => {
    // Navigate to add stop screen or show modal
    console.log('Add stop pressed');
  };

  const generateRoutes = () => {
    navigation.navigate(Routes.generateRoute)
  };


  const renderStop = (stop, index) => (
    <View key={index} style={styles.stopItem}>
      <InputText
        placeholder={stop}
        value={stop?.value}
        onChangeText={() => {
          setStops(prevStops => {
            const updatedStops = [...prevStops];
            updatedStops[index].value = stop.value; // Update the specific stop value
            return updatedStops;
          });
        }}
        leftIcon={AppIcons.simpleLocation}
        leftIconTintColor={Theme.colors.primary}
        // editable={false}
        style={styles.stopInput}
      />
    </View>
  );

  return (
    <RootView statusColor={Theme.colors.primary} backgroundColor={Theme.colors.primary}>
      <AppHeader
        title={languageString.createRoute.headerTitle}
        rightIcon={false}
        showBack={false}
      />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Start Point */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{languageString.createRoute.startPoint}</Text>
          <InputText
            placeholder={languageString.createRoute.startPoint}
            value={startPoint}
            onChangeText={setStartPoint}
            leftIcon={AppIcons.simpleLocation}
            leftIconTintColor={Theme.colors.primary}
          />
        </View>

        {/* End Point */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{languageString.createRoute.endPoint}</Text>
          <InputText
            placeholder={languageString.createRoute.endPoint}
            value={endPoint}
            onChangeText={setEndPoint}
            leftIcon={AppIcons.simpleLocation}
            leftIconTintColor={Theme.colors.primary}
          />
        </View>

        {/* Saved Locations */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{languageString.createRoute.savedLocations}</Text>
          <View style={{ marginBottom: Responsive.getHeight('0.5%') }}>
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

        </View>

        {/* Stops */}
        <View style={styles.section}>
          <View style={styles.stopsHeader}>
            <Text style={styles.sectionTitle}>{languageString.createRoute.stops}</Text>
            <TouchableOpacity onPress={addStop} style={styles.addStopButton}>
              <Text style={styles.addStopText}>{languageString.createRoute.addStop}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.stopsContainer}>
            {stops.map(renderStop)}
          </View>
        </View>

        {/* Generate Routes Button */}
        <PrimaryButton
          text={languageString.createRoute.generateRoutes}
          btnFun={generateRoutes}
          customStyles={styles.generateButton}
        />
      </ScrollView>
    </RootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.screenBg,

  },
  scrollContent: {
    paddingHorizontal: Responsive.getWidth('5%'),
    paddingTop: Responsive.getHeight('2%'),
    paddingBottom: Responsive.getHeight('6%'),
  },
  section: {
    marginBottom: Responsive.getHeight('0.5%'),
  },
  sectionTitle: {
    fontSize: Responsive.AppFonts.t1,
    fontFamily: Theme.typography.subheading.fontFamily,
    color: Theme.colors.text,
    marginBottom: Responsive.getHeight('1%'),
  },
  locationsContainer: {
    gap: Responsive.getHeight('1.5%'),
  },
  locationCard: {
    backgroundColor: Theme.colors.white,
    borderRadius: Theme.borders.mediumRadius,
    borderWidth: Theme.borders.width,
    borderColor: Theme.colors.borderClr,
    padding: Responsive.getWidth('4%'),
    flexDirection: 'row',
    alignItems: 'center',
    ...Theme.shadows.small,
    elevation: Theme.elevation.small,
  },
  locationContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  locationIcon: {
    width: Responsive.getWidth('8%'),
    height: Responsive.getWidth('8%'),
    borderRadius: Responsive.getWidth('4%'),
    backgroundColor: Theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Responsive.getWidth('3%'),
  },
  locationIconImage: {
    width: Responsive.getWidth('4%'),
    height: Responsive.getWidth('4%'),
    tintColor: Theme.colors.white,
  },
  locationInfo: {
    flex: 1,
  },
  locationName: {
    fontSize: Responsive.AppFonts.h5,
    fontFamily: Theme.typography.medium.fontFamily,
    color: Theme.colors.text,
    marginBottom: Responsive.getHeight('0.5%'),
  },
  locationCoordinates: {
    fontSize: Responsive.AppFonts.t2,
    fontFamily: Theme.typography.body.fontFamily,
    color: Theme.colors.secondryText,
    marginBottom: Responsive.getHeight('0.3%'),
  },
  locationContact: {
    fontSize: Responsive.AppFonts.t2,
    fontFamily: Theme.typography.body.fontFamily,
    color: Theme.colors.secondryText,
    marginBottom: Responsive.getHeight('0.3%'),
  },
  locationNote: {
    fontSize: Responsive.AppFonts.t2,
    fontFamily: Theme.typography.body.fontFamily,
    color: Theme.colors.primary,
  },
  checkbox: {
    width: Responsive.getWidth('6%'),
    height: Responsive.getWidth('6%'),
    borderRadius: Responsive.getWidth('1%'),
    borderWidth: Theme.borders.width,
    borderColor: Theme.colors.borderClr,
    backgroundColor: Theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxSelected: {
    backgroundColor: Theme.colors.primary,
    borderColor: Theme.colors.primary,
  },
  checkIcon: {
    width: Responsive.getWidth('3%'),
    height: Responsive.getWidth('3%'),
    tintColor: Theme.colors.white,
  },
  stopsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Responsive.getHeight('1.5%'),
  },
  addStopButton: {
    paddingHorizontal: Responsive.getWidth('3%'),
    paddingVertical: Responsive.getHeight('0.5%'),
  },
  addStopText: {
    fontFamily: Theme.typography.body.fontFamily,
    includeFontPadding: false,
    color: Theme.colors.black,
  },
  stopsContainer: {
  },
  stopItem: {
    marginBottom: Responsive.getHeight('0.5%'),
  },
  stopInput: {
    backgroundColor: Theme.colors.screenBg,
    includeFontPadding: false
  },
  generateButton: {
    width: '100%',
  },
});

export default CreateRoute;