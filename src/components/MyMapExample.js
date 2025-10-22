import React from 'react';
import { View, StyleSheet } from 'react-native';
import MyMap from './MyMap';

const MyMapExample = () => {
  // Example usage with real coordinates
  const exampleMarkers = [
    {
      id: 1,
      coordinate: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
      title: 'San Francisco',
      description: 'Starting point in SF',
      color: '#FF6B6B', // Custom marker color
    },
    {
      id: 2,
      coordinate: {
        latitude: 37.75825,
        longitude: -122.4124,
      },
      title: 'Destination',
      description: 'End point',
      color: '#4ECDC4', // Custom marker color
    },
  ];

  const exampleRoute = [
    {
      latitude: 37.78825,
      longitude: -122.4324,
    },
    {
      latitude: 37.78025,
      longitude: -122.4264,
    },
    {
      latitude: 37.77525,
      longitude: -122.4184,
    },
    {
      latitude: 37.75825,
      longitude: -122.4124,
    },
  ];

  const initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const handleMarkerPress = (marker) => {
    console.log('Marker pressed:', marker);
  };

  const handleZoomIn = () => {
    console.log('Zoom in pressed');
    // You can implement zoom functionality here
  };

  const handleZoomOut = () => {
    console.log('Zoom out pressed');
    // You can implement zoom functionality here
  };

  return (
    <View style={styles.container}>
      <MyMap
        initialRegion={initialRegion}
        markers={exampleMarkers}
        routeCoordinates={exampleRoute}
        showRoute={true}
        showControls={true}
        onMarkerPress={handleMarkerPress}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        style={styles.map}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: 400,
    margin: 20,
  },
});

export default MyMapExample;