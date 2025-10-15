import { Text, StyleSheet } from 'react-native';
import { Theme, Responsive } from '../../libs';

const Heading = ({ title, customStyles }) => {
  return <Text style={[styles.heading, customStyles]}>{title}</Text>;
};

export default Heading;

const styles = StyleSheet.create({
  heading: {
    fontSize: Responsive.AppFonts.h4, 
    fontFamily: Theme.typography.heading.fontFamily, 
    color: Theme.colors.textDark,
    includeFontPadding: false,
    marginBottom: Responsive.getHeight('1%'),
  },
});
