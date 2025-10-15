import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Theme, Responsive } from '../../libs';

export function NativeLoading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        style={styles.spinner}
        size="large"
        color={Theme.colors.primary}
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
    borderRadius: Responsive.getWidth('2%'),
    padding: Responsive.getWidth('3%'),
    backgroundColor: Theme.colors.loadingBg || 'rgba(0,0,0,0.1)',
  },
});
