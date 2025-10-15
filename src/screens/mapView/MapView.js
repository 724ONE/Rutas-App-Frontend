import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Responsive, Theme } from '../../libs';
import Context from '../../context';
import RootView from '../../components/RootView';
import AppHeader from '../../components/headers/AppHeader';
import { AppIcons } from '../../constants/icons';

const MapViewScreen = ({ navigation }) => {
  const { languageString } = React.useContext(Context);
  const region = {
    latitude: 24.8607,
    longitude: 67.0011,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

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
    <RootView
      statusColor={Theme.colors.primary}
      backgroundColor={Theme.colors.primary}
      barStyle="dark-content"
      addBottomPadding={false}
      innerViewColor={Theme.colors.screenBg}
    >
      {/* Header */}
      <AppHeader
  title={languageString?.home?.mapView}
        backgroundColor={Theme.colors.primary}
        onBackPress={() => navigation.goBack()}
      />

      {/* Map */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          region={region}
          initialRegion={region}
          showsUserLocation={false}
          showsMyLocationButton={false}
          customMapStyle={mapStyle}
        >
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
        </MapView>
      </View>
    </RootView>
  );
};

export default MapViewScreen;

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    backgroundColor: Theme.colors.screenBg,
    borderTopLeftRadius: Theme.borders.largeRadius,
    borderTopRightRadius: Theme.borders.largeRadius,
    overflow: 'hidden',
  },
  map: {
    width: '100%',
    height: '100%',
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

const mapStyle = [
  {
    featureType: 'all',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#7c93a3' }, { lightness: '-10' }],
  },
  {
    featureType: 'administrative.country',
    elementType: 'geometry',
    stylers: [{ visibility: 'on' }],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry.fill',
    stylers: [{ color: '#f8f8f8' }],
  },
  {
    featureType: 'poi',
    elementType: 'geometry.fill',
    stylers: [{ color: '#eeeeee' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [{ color: '#ffffff' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#e6e6e6' }],
  },
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [{ color: '#eaf6f8' }],
  },
];
