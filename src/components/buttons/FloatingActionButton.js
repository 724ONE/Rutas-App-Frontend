import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Responsive, Theme,  } from '../../libs';

const FloatingActionButton = ({
  icon,
  size = Responsive.getWidth('13%'),
  iconSize = Responsive.getWidth('7%'),
  backgroundColor = Theme.colors.primary,
  iconColor = Theme.colors.white,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.fab,
        {
          backgroundColor,
          width: size,
          height: size,
          borderRadius: size / 2,
        },
        style,
      ]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Image
        source={icon}
        style={{
          width: iconSize,
          height: iconSize,
          tintColor: iconColor,
        }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default FloatingActionButton;

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: Responsive.getWidth('6%'),
    bottom: Responsive.getHeight('4%'),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Theme.colors.shodowClr,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: Theme.elevation.medium,
  },
});
