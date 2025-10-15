import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Theme, Responsive } from '../../libs';

const TextButton = ({
  onPress,
  isInvalid,
  text,
  textStyles,
  customStyles,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.container, customStyles]}
    >
      <Text
        style={[
          styles.text,
          isInvalid && styles.errorText,
          textStyles,
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    marginBottom: Responsive.getHeight('3%'),
  },
  text: {
    fontSize: Responsive.AppFonts.body,
    color: Theme.colors.primary,
    fontFamily: Theme.typography.body.fontFamily,
  },
  errorText: {
    color: Theme.colors.error,
  },
});
