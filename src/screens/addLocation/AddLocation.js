import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { Theme, Responsive } from '../../libs';
import RootView from '../../components/RootView';
import AppHeader from '../../components/headers/AppHeader';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import { AppIcons } from '../../constants/icons';
import Context from '../../context';
import Heading from '../../components/text/Heading';
import InputText from '../../components/inputs/InputText';
import AddNoteComponent from '../../components/AddNoteComponent';
import MyMapView from '../../components/MyMapView';

const AddLocation = ({ navigation }) => {
  const { languageString } = React.useContext(Context);
  const [location, setLocation] = useState('');
  const [contact, setContact] = useState('');
  const [notes, setNotes] = useState('');
  const noteFocused = useRef();

  return (
    <RootView statusColor={Theme.colors.primary} backgroundColor={Theme.colors.primary} addBottomPadding={false} innerViewColor={Theme.colors.screenBg}>
      {/* ✅ Header - full width */}
      <AppHeader title={languageString?.addLocation?.locationTitle} onBackPress={() => navigation.goBack()} />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        {/* Map Section */}

        <MyMapView navigation={navigation} customStyles={{
          // width: Responsive.getWidth('88%'),
          // height: Responsive.getHeight('16%'),
          // borderRadius: Theme.borders.miniRadius,
          // overflow: 'hidden',
        }} />

        {/* <Heading title={languageString?.addLocation?.map} customStyles={styles.sectionTitle} /> */}
        {/* <Image
          source={AppIcons.mapPlaceholder}
          style={styles.mapImage}
          resizeMode="cover"
        /> */}

        {/* Coordinates */}
        <View style={styles.coordBox}>
          <Text style={styles.coordTitle}>{languageString?.addLocation?.coordinates}</Text>
          <Text style={styles.coordValue}>{languageString?.addLocation?.sampleCoords}</Text>
        </View>

        {/* Location */}

        <InputText
          heading={languageString?.addLocation?.location}
          placeholder={languageString?.addLocation?.location}
          value={location}
          onChangeText={setLocation}
          keyboardType="default"
        />

        <InputText
          heading={languageString?.addLocation?.contact}
          placeholder={languageString?.addLocation?.contact}
          value={contact}
          onChangeText={setContact}
          keyboardType="default"
        />

        <AddNoteComponent
          requiredField={false}
          hint={languageString?.addLocation?.notes}
          placeholder={languageString?.addLocation?.noteHint}
          lableCustomStyles={{
            // marginBottom: 8,
            // fontFamily: Fonts.medium,
            // fontSize: 14,
          }}
          fieldustomStyles={{
            // marginTop: Responsive.getHeight('1%'),
            // paddingBottom: 10,
            // paddingHorizontal: 6,
            // borderRadius: 8,
            // height: 150,
            // borderWidth: 1,
            // borderColor: Colors.fieldBorderClr,
          }}
          weightNote={notes}
          weightNoteFocused={noteFocused}
          onChange={text => setNotes(text)}
          btnFun={() => noteFocused.current.focus()}
        />

        {/* Save Button */}
        <PrimaryButton
          text={languageString?.common?.save}
          btnFun={() => { }}
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
    paddingBottom: Responsive.getHeight('5%'),
    marginBottom: Responsive.getHeight('2%'),
    backgroundColor: Theme.colors.white,
  },
  sectionTitle: {
    fontFamily: Theme.typography.medium.fontFamily,
    fontSize: Responsive.AppFonts.t1,
    color: Theme.colors.text,
    marginBottom: Responsive.getHeight('1%'),
    marginTop: Responsive.getHeight('2%'),
  },
  mapImage: {
    width: '100%',
    height: Responsive.getHeight('20%'),
    borderRadius: Responsive.sizeMatter.scale(8),
    backgroundColor: Theme.colors.border,
  },
  coordBox: {
    borderWidth: Theme.borders.width,
    borderColor: Theme.colors.border,
    borderRadius: Responsive.sizeMatter.scale(8),
    padding: Responsive.getWidth('2%'),
    paddingVertical: Responsive.getWidth('3%'),
    marginTop: Responsive.getHeight('2%'),
    marginBottom: Responsive.getHeight('2%'),
  },
  coordTitle: {
    fontFamily: Theme.typography.medium.fontFamily,
    fontSize: Responsive.AppFonts.t1,
    color: Theme.colors.textPrimary,
  },
  coordValue: {
    fontFamily: Theme.typography.body.fontFamily,
    fontSize: Responsive.AppFonts.t2,
    color: Theme.colors.greyText,
    marginTop: Responsive.getHeight('0.2%'),
  },
  label: {
    fontFamily: Theme.typography.subheading.fontFamily,
    fontSize: Responsive.AppFonts.t1,
    color: Theme.colors.black,
    marginTop: Responsive.getHeight('2.5%'),
    marginBottom: Responsive.getHeight('1%'),
  },
  textArea: {
    height: Responsive.getHeight('10%'),
    textAlignVertical: 'top',
    paddingTop: Responsive.getHeight('1%'),
  },

  saveBtn: {
    // width: '100%',
    // height: Responsive.getHeight('6.5%'),
    // borderRadius: Responsive.sizeMatter.scale(8),
    marginVertical: Responsive.getHeight('3%'),
    // backgroundColor: Theme.colors.primary,
  },
});
