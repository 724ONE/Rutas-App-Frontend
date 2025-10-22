import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { Theme, Responsive } from '../libs';
import { AppIcons } from '../constants/icons';

const { getWidth, getHeight } = Responsive;

const MyMap = ({
  initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  },
  markers = [],
  routeCoordinates = [],
  showRoute = true,
  showControls = true,
  style,
  onZoomIn,
  onZoomOut,
  onMarkerPress,
}) => {
  // Default markers for demo if none provided
  const defaultMarkers = [
    {
      id: 1,
      coordinate: {
        latitude: initialRegion.latitude + 0.01,
        longitude: initialRegion.longitude - 0.01,
      },
      title: 'Start Location',
      description: 'Starting point',
    },
    {
      id: 2,
      coordinate: {
        latitude: initialRegion.latitude - 0.01,
        longitude: initialRegion.longitude + 0.01,
      },
      title: 'End Location',
      description: 'Destination',
    },
  ];

  const displayMarkers = markers.length > 0 ? markers : defaultMarkers;

  // Default route coordinates if none provided
  const defaultRouteCoordinates = [
    {
      latitude: initialRegion.latitude + 0.01,
      longitude: initialRegion.longitude - 0.01,
    },
    {
      latitude: initialRegion.latitude,
      longitude: initialRegion.longitude,
    },
    {
      latitude: initialRegion.latitude - 0.01,
      longitude: initialRegion.longitude + 0.01,
    },
  ];

  const displayRouteCoordinates = routeCoordinates.length > 0 ? routeCoordinates : defaultRouteCoordinates;

  return (
    <View style={[styles.mapContainer, style]}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        showsUserLocation={true}
        showsMyLocationButton={false}
        showsCompass={false}
        showsScale={false}
        showsBuildings={true}
        showsTraffic={false}
        showsIndoors={true}
        loadingEnabled={true}
        mapType="standard"
      >
        {/* Route polyline */}
        {showRoute && displayRouteCoordinates.length > 1 && (
          <Polyline
            coordinates={displayRouteCoordinates}
            strokeColor={Theme.colors.primary}
            strokeWidth={4}
            lineCap="round"
            lineJoin="round"
          />
        )}

        {/* Map markers */}
        {/* Marker (optional) */}
        {displayMarkers.map(marker => (
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

      {/* Navigation controls */}
      {showControls && (
        <View style={styles.mapControls}>
          <TouchableOpacity
            style={styles.controlButton}
            onPress={onZoomIn}
          >
            <Image
              source={AppIcons.direction}
              style={styles.markerIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.controlButton}
            onPress={onZoomOut}
          >

            <Image
              source={AppIcons.info}
              style={styles.markerIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
  mapContainer: {
    margin: -20,
    flex: 1,
    backgroundColor: '#E8E8E8',
    position: 'relative',
    borderRadius: Theme.borders.largRadius,
    // overflow: 'hidden',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    // elevation: 3,
  },
  map: {
    flex: 1,
  },
  customMarker: {
    width: getWidth(7),
    height: getWidth(7),
    borderRadius: getWidth(3.5),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  mapPlaceholder: {
    flex: 1,
    backgroundColor: '#F5F5DC', // Beige/cream color like real maps
    position: 'relative',
  },
  mapBlocks: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
  buildingBlock: {
    position: 'absolute',
    backgroundColor: '#D3D3D3',
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 2,
  },
  parkArea: {
    position: 'absolute',
    backgroundColor: '#90EE90',
    borderRadius: 8,
    opacity: 0.7,
  },
  streetGrid: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  street: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    borderColor: '#D3D3D3',
    borderWidth: 0.3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  horizontalStreet: {
    width: '100%',
    height: getHeight(1.2),
  },
  verticalStreet: {
    height: '100%',
    width: getWidth(1.2),
  },
  intersection: {
    position: 'absolute',
    width: getWidth(2.5),
    height: getHeight(2.5),
    backgroundColor: '#F0F0F0',
    borderRadius: getWidth(1.25),
    borderWidth: 0.5,
    borderColor: '#C0C0C0',
    zIndex: 2,
  },
  routePath: {
    position: 'absolute',
    top: '25%',
    left: '15%',
    right: '15%',
    height: getHeight(0.6),
    backgroundColor: '#4285F4', // Google Maps blue
    borderRadius: getHeight(0.3),
    transform: [{ rotate: '25deg' }],
    zIndex: 2,
    shadowColor: '#4285F4',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  mapMarker: {
    position: 'absolute',
    width: getWidth(7),
    height: getWidth(7),
    borderRadius: getWidth(3.5),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  streetLabel: {
    position: 'absolute',
    fontSize: Responsive.AppFonts.t3,
    fontFamily: Theme.typography.medium.fontFamily,
    color: '#2C2C2C',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: getWidth(2),
    paddingVertical: getHeight(0.3),
    borderRadius: Theme.borders.smallRadius,
    zIndex: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
  },
  mapControls: {
    flexDirection: 'row',
    position: 'absolute',
    gap: 8,
    top: getHeight(2),
    right: getWidth(4),
    // zIndex: 5,
  },
  controlButton: {
    width: getWidth(8),
    height: getWidth(8),
    backgroundColor: '#FFFFFF',
    borderRadius: getWidth(999),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#E0E0E0',
  },
  controlText: {
    fontSize: Responsive.AppFonts.h4,
    fontFamily: Theme.typography.medium.fontFamily,
    color: Theme.colors.text,
  },
});

// Default props
MyMap.defaultProps = {
  initialRegion: {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  },
  markers: [],
  routeCoordinates: [],
  showRoute: true,
  showControls: true,
};

export default MyMap;