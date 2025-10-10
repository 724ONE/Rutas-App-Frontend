import { ActivityIndicator, StyleSheet, View } from 'react-native';
import AppColors from '../../constants/colors';

export function NativeLoaing() {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        style={styles.spinner}
        size="large"
        color={AppColors.primaryClr}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  spinner: {
    borderRadius: 8,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
});
