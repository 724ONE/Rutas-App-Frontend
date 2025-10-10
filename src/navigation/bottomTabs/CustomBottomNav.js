import { Image, Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from '../routes';
import Fonts from '../../constants/fonts';
import AppColors from '../../constants/colors';
import { AppIcons } from '../../constants/icons';
import Home from '../../screens/home/Home'
import Location from '../../screens/location/Location'
import Notifications from '../../screens/notifications/Notifications'
import Profile from '../../screens/profile/Profile'

const CustomBottomTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName={Routes.home}
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
        popToTopOnBlur: true,
        tabBarStyle: {
          backgroundColor: AppColors.whiteClr,
          // ...shadowStyle(),
          // borderTopLeftRadius: 25,
          // borderTopRightRadius: 25,
          // borderBottomLeftRadius: 0,
          // borderBottomRightRadius: 0,
          position: 'absolute',
          borderTopWidth: 0,
          // paddingBottom: 25,
          height: 90,
        },
      }}>
      <>
        <Tab.Screen
          key={'Home'}
          name={Routes.home}
          component={Home}
          options={{
            tabBarButton: props => (
              <TouchableOpacity {...props} activeOpacity={1} />
            ),
            tabBarIcon: ({ focused }) =>
              bottomTabItem(
                focused,
                AppIcons.home,
                focused ? AppColors.whiteClr : AppColors.greyBtnTextClr,
                'Home',
                18,
              ),
          }}
        />

        <Tab.Screen
          key={'Location'}
          name={Routes.location}
          component={Location}
          options={{
            tabBarButton: props => (
              <TouchableOpacity {...props} activeOpacity={1} />
            ),
            tabBarIcon: ({ focused }) =>
              bottomTabItem(
                focused,
                AppIcons.location,
                focused ? AppColors.whiteClr : AppColors.greyBtnTextClr,
                'Location',
                22,
              ),
          }}
        />

        <Tab.Screen
          key={'Notifications'}
          name={Routes.notifications}
          component={Notifications}
          options={{
            tabBarButton: props => (
              <TouchableOpacity {...props} activeOpacity={1} />
            ),
            tabBarIcon: ({ focused }) =>
              bottomTabItem(
                focused,
                AppIcons.notifications,
                focused ? AppColors.whiteClr : AppColors.greyBtnTextClr,
                'Notifications',
                23,
              ),
          }}
        />

        <Tab.Screen
          key={'Profile'}
          name={Routes.profile}
          component={Profile}
          options={{
            tabBarButton: props => (
              <TouchableOpacity {...props} activeOpacity={1} />
            ),
            tabBarIcon: ({ focused }) => {
              return bottomTabItem(
                focused,
                AppIcons.user,
                focused
                  ? AppColors.whiteClr
                  : null,
                'Profile',
                22,
                AppIcons.user,
                true
              );
            },
          }}
        />
      </>
    </Tab.Navigator>
  );
};

export default CustomBottomTabs;

function bottomTabItem(
  focused,
  icon,
  tintColor,
  text,
  size,
  isNetworkImage = false,
  isIncomplete = false,
) {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 6,
        paddingHorizontal: 6,
        // marginTop: 10,
        minWidth: 60,
        // borderTopWidth: focused ? 2 : 0,
        // borderTopColor: focused ? AppColors.primaryClr : 'transparent',
        paddingTop: 17,
      }}>
      <Image
        source={icon}
        style={{
          resizeMode: 'contain',
          height: size,
          width: size,
          tintColor: focused ? AppColors.primaryClr : AppColors.inactiveIconClr,
          borderRadius: tintColor == null ? 999 : null,
          marginBottom: 1,
        }}
      />
      {
        focused && <Text
          style={{
            color: focused ? AppColors.primaryClr : '#505050',
            fontSize: 10,
            fontFamily: Fonts.semiBold,
            textAlign: 'center',
            lineHeight: 10,
            marginTop: 5
          }}
          numberOfLines={1}
          ellipsizeMode="tail">
          {text}
        </Text>
      }
    </View>
  );
}







