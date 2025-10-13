import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import { Theme, Responsive } from '../../libs';
import RootView from '../../components/RootView';
import AppHeader from '../../components/headers/AppHeader';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import { AppIcons } from '../../constants/icons';
import Fonts from '../../constants/fonts';

const AddLocation = ({ navigation }) => {
  const [location, setLocation] = useState('');
  const [contact, setContact] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <RootView statusColor={Theme.colors.primary}>
      {/* ✅ Header - full width */}
      <AppHeader title="Add Location" onBackPress={() => navigation.goBack()} />

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        {/* Map Section */}
        <Text style={styles.sectionTitle}>Map</Text>
        <Image
          source={AppIcons.mapPlaceholder}
          style={styles.mapImage}
          resizeMode="cover"
        />

        {/* Coordinates */}
        <View style={styles.coordBox}>
          <Text style={styles.coordTitle}>Coordinates</Text>
          <Text style={styles.coordValue}>40.7128, -74.0060</Text>
        </View>

        {/* Location */}
        <Text style={styles.label}>Location</Text>
        <TextInput
          placeholder="Enter Location"
          placeholderTextColor={Theme.colors.hint}
          value={location}
          onChangeText={setLocation}
          style={styles.input}
        />

        {/* Contact */}
        <Text style={styles.label}>Contact</Text>
        <TextInput
          placeholder="Enter Name"
          placeholderTextColor={Theme.colors.hint}
          value={contact}
          onChangeText={setContact}
          style={styles.input}
        />

        {/* Notes */}
        <Text style={styles.label}>Notes</Text>
        <TextInput
          placeholder="Add any extra notes or context here..."
          placeholderTextColor={Theme.colors.hint}
          value={notes}
          onChangeText={setNotes}
          multiline
          style={[styles.input, styles.textArea]}
        />

        {/* Save Button */}
        <PrimaryButton
          text="Save"
          btnFun={() => {}}
          customStyles={styles.saveBtn}
        />
      </ScrollView>
    </RootView>
  );
};

export default AddLocation;

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: Responsive.getWidth('5%'),
    paddingBottom: Responsive.getHeight('4%'),
    backgroundColor: Theme.colors.white,
  },

  sectionTitle: {
    fontFamily: Fonts.poppinsSemiBold,
    fontSize: Responsive.AppFonts.h4,
    color: Theme.colors.textPrimary,
    marginTop: Responsive.getHeight('2%'),
    marginBottom: Responsive.getHeight('1%'),
  },

  mapImage: {
    width: '100%',
    height: Responsive.getHeight('20%'),
    borderRadius: Responsive.sizeMatter.scale(8),
    backgroundColor: Theme.colors.border,
  },

  coordBox: {
    borderWidth: 1,
    borderColor: Theme.colors.border,
    borderRadius: Responsive.sizeMatter.scale(8),
    padding: Responsive.getWidth('4%'),
    marginTop: Responsive.getHeight('1.5%'),
  },

  coordTitle: {
    fontFamily: Fonts.poppinsMedium,
    fontSize: Responsive.AppFonts.t2,
    color: Theme.colors.textPrimary,
  },

  coordValue: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Responsive.AppFonts.t3,
    color: Theme.colors.greyText,
    marginTop: Responsive.getHeight('0.5%'),
  },

  label: {
    fontFamily: Fonts.poppinsMedium,
    fontSize: Responsive.AppFonts.t2,
    color: Theme.colors.textPrimary,
    marginTop: Responsive.getHeight('2.5%'),
    marginBottom: Responsive.getHeight('0.8%'),
  },

  input: {
    borderWidth: 1,
    borderColor: Theme.colors.border,
    borderRadius: Responsive.sizeMatter.scale(8),
    height: Responsive.getHeight('5.5%'),
    paddingHorizontal: Responsive.getWidth('4%'),
    fontFamily: Fonts.poppinsRegular,
    fontSize: Responsive.AppFonts.t3,
    color: Theme.colors.textPrimary,
  },

  textArea: {
    height: Responsive.getHeight('10%'),
    textAlignVertical: 'top',
    paddingTop: Responsive.getHeight('1%'),
  },

  saveBtn: {
    width: '100%',
    height: Responsive.getHeight('6.5%'),
    borderRadius: Responsive.sizeMatter.scale(8),
    marginTop: Responsive.getHeight('3%'),
    backgroundColor: Theme.colors.primary,
  },
});
