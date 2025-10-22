import React from 'react';
import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/home/Home';
import CreateRoute from '../../screens/createRoute/CreateRoute';
import Profile from '../../screens/profile/Profile';
import { AppIcons } from '../../constants/icons';
import { Responsive, Theme } from '../../libs';
import Routes from '../routes';
import History from '../../screens/history/History';

const Tab = createBottomTabNavigator();

const CustomBottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={Routes.home}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: Theme.colors.white,
          height: Responsive.getHeight('9%'),
          borderTopWidth: 0,
          elevation: 5,
        },
      }}>
      <Tab.Screen
        name={Routes.home}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) =>
            bottomTabItem(focused, AppIcons.home, 'Home', 22),
        }}
      />
      <Tab.Screen
        name={Routes.createRoute}
        component={CreateRoute}
        options={{
          tabBarIcon: ({ focused }) =>
            bottomTabItem(focused, AppIcons.location, 'Routes', 22),
        }}
      />
      <Tab.Screen
        name={Routes.history}
        component={History}
        options={{
          tabBarIcon: ({ focused }) =>
            bottomTabItem(focused, AppIcons.notifications, 'History', 22),
        }}
      />
      <Tab.Screen
        name={Routes.profile}
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) =>
            bottomTabItem(focused, AppIcons.user, 'Profile', 22),
        }}
      />
    </Tab.Navigator>
  );
};

export default CustomBottomTabs;

const bottomTabItem = (focused, icon, label, size) => (
  <View
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: Responsive.getHeight('1.5%'),
      minWidth: Responsive.getWidth('18%'), // keeps text from wrapping
      maxWidth: Responsive.getWidth('20%'),
    }}>
    <Image
      source={icon}
      style={{
        height: Responsive.sizeMatter.scale(20),
        width: Responsive.sizeMatter.scale(20),
        resizeMode: 'contain',
        tintColor: focused
          ? Theme.colors.primary
          : Theme.colors.inactiveIconClr,
      }}
    />
    {focused && (
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={{
          fontFamily: Theme.typography.medium.fontFamily,
          fontSize: Responsive.AppFonts.t3,
          color: focused
            ? Theme.colors.primary
            : Theme.colors.greyText,
          marginTop: Responsive.getHeight('0.3%'),
          textAlign: 'center',
        }}>
        {label}
      </Text>
    )}
  </View>
);
