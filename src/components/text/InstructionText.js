import { Text, StyleSheet } from 'react-native';
import { Theme, Responsive } from '../../libs';

const InstructionText = ({ text, customStyles }) => {
  return <Text style={[styles.instruction, customStyles]}>{text}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instruction: {
    fontFamily: Theme.typography.body.fontFamily, // dynamic typography
    includeFontPadding: false,
    fontSize: Responsive.AppFonts.body, 
    color: Theme.colors.textLight, 
    marginBottom: Responsive.getHeight('3%'), 
  },
});
