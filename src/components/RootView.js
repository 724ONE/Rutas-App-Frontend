import { View, StatusBar } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Colors from '../constants/colors';

const RootView = ({
  children,
  noSafeArea = false,
  noStatusBarHeight = false,
  statusColor = Colors.whiteClr,
  backgroundColor = Colors.whiteClr,
  innerViewColor = Colors.screenBg,
  barStyle = 'dark-content',
  isInBottomTab = false,
  style,
  paddingHorizontal = 0,
}) => {
  const { top, left, right, bottom } = useSafeAreaInsets();

  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        flex: 1,
        paddingTop:
          !noStatusBarHeight && noSafeArea
            ? StatusBar.currentHeight
            : undefined,
        ...style,
      }}>
      <StatusBar
        translucent
        backgroundColor={statusColor}
        barStyle={barStyle}
      />
      {noSafeArea ? (
        children
      ) : (
        <View
          style={{
            flex: 1,
            paddingTop: top,
            paddingLeft: left,
            paddingRight: right,
            marginBottom: bottom,
            backgroundColor: backgroundColor,
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: innerViewColor,
              paddingHorizontal: paddingHorizontal,
            }}>
            {children}
          </View>
        </View>
      )}
    </View>
  );
};

export default RootView;
