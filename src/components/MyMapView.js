import React, { useContext } from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Heading from './text/Heading';
import Context from '../context';
import { Responsive, Theme } from '../libs';
import Routes from '../navigation/routes';
import { AppIcons } from '../constants/icons';

const MyMapView = ({ navigation, customStyles }) => {
  const { languageString } = useContext(Context)
  const markers = [
    {
      id: 1,
      title: 'Location 1',
      coordinate: { latitude: 24.861, longitude: 67.003 },
    },
    {
      id: 2,
      title: 'Location 2',
      coordinate: { latitude: 24.858, longitude: 67.000 },
    },
  ];
  return (
    <View style={styles.mapBox}>
      {/* Heading */}
      <Heading title={languageString?.home?.mapView} customStyles={styles.headingText} />

      <TouchableOpacity
        onPress={() => navigation.navigate(Routes.mapViewScreen)} // Navigate to full map screen
      >
        {/* Map */}
        <MapView
          showRoute={true}
          showControls={true}
          showStreetLabels={true}
          style={[styles.map, customStyles]}
          initialRegion={{
            latitude: 24.861,
            longitude: 67.003,
            latitudeDelta: 0.01, // Set zoom level
            longitudeDelta: 0.01, // Set zoom level
          }}
        >
          {/* Marker (optional) */}
          {markers.map(marker => (
            <Marker key={marker.id} coordinate={marker.coordinate} title={marker.title}>
              <View style={styles.markerWrapper}>
                <Image
                  source={AppIcons.mapLocation}
                  style={styles.markerIcon}
                  resizeMode="contain"
                />
              </View>
            </Marker>
          ))}
          {/* <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} /> */}
        </MapView>

      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mapBox: {
    flex: 1,
    // padding: 10,
  },
  headingText: {
    fontFamily: Theme.typography.medium.fontFamily,
    fontSize: Responsive.AppFonts.t1,
    color: Theme.colors.text,
    marginBottom: Responsive.getHeight('1.2%'),
  },
  map: {
    width: Responsive.getWidth('90%'),
    height: Responsive.getHeight('16%'),
    borderRadius: Theme.borders.miniRadius,
    overflow: 'hidden',
  },
  markerWrapper: {
    backgroundColor: Theme.colors.white,
    borderRadius: Responsive.getWidth('5%'),
    padding: Responsive.getWidth('1.5%'),
    ...Theme.shadows.small,
    elevation: Theme.elevation.small,
  },
  markerIcon: {
    width: Responsive.getWidth('4.5%'),
    height: Responsive.getWidth('4.5%'),
    tintColor: Theme.colors.primary,
  },

});

export default MyMapView;
