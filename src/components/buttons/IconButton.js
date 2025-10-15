import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Responsive, Theme } from '../../libs';

const IconButton = ({
  icon,
  size = Responsive.getWidth('12%'), // Dynamically ~45px
  iconSize = Responsive.getWidth('5.5%'), // Dynamically ~22px
  backgroundColor = Theme.colors.white,
  iconColor = Theme.colors.primary,
  borderRadius = Responsive.getWidth('3%'), // Dynamically ~12px
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor,
          borderRadius,
          height: size,
          width: size,
        },
        style,
      ]}
    >
      <Image
        source={icon}
        style={{
          height: iconSize,
          width: iconSize,
          tintColor: iconColor,
        }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
