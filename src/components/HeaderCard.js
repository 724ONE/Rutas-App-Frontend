import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Colors from '../constants/colors';
import { AppIcons } from '../constants/icons';
import Fonts from '../constants/fonts';
import IconButton from '../components/buttons/IconButton'
import Routes from '../navigation/routes';
import { useNavigation } from '@react-navigation/native';

const HeaderCard = ({ name, image }) => {
  const navigation =useNavigation()
  return (
    <View style={styles.header}>
      <View style={styles.left}>
        <Image source={image} style={styles.profileImg} />
        <View>
          <Text style={styles.welcome}>Welcome Back!</Text>
          <Text style={styles.username}>Hello! {name}</Text>
        </View>
      </View>
      <IconButton
        icon={AppIcons.bell}
        size={40}
        iconSize={20}
        borderRadius={8}
        backgroundColor="#fff"
        iconColor={Colors.primaryClr}
        onPress={() => navigation.navigate(Routes.notifications)}
      />
    </View>
  );
};

export default HeaderCard;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.primaryClr,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    paddingTop: 30,
    marginHorizontal: -15,
  },
  left: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  profileImg: { height: 40, width: 40, borderRadius: 8, },
  welcome: { color: Colors.whiteClr, fontSize: 14, fontFamily: Fonts.poppinsRegular },
  username: { color: Colors.whiteClr, fontSize: 16, fontFamily: Fonts.poppinsSemiBold },
});
