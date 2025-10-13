import React from 'react';
import { View, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Responsive, Theme } from '../libs'

const RootView = ({
  children,
  noSafeArea = false,
  noStatusBarHeight = false,
  statusColor = Theme.colors.white,
  backgroundColor = Theme.colors.white,
  innerViewColor = Theme.colors.screenBg,
  barStyle = 'dark-content',
  isInBottomTab = false,
  style,
  paddingHorizontal = 0,
}) => {
  const { top, left, right, bottom } = useSafeAreaInsets();

  const bottomPadding = isInBottomTab
    ? bottom + Responsive.getHeight('5%')
    : bottom;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor,
        paddingTop:
          !noStatusBarHeight && noSafeArea
            ? StatusBar.currentHeight
            : undefined,
        ...style,
      }}>
      <StatusBar translucent backgroundColor={statusColor} barStyle={barStyle} />

      {noSafeArea ? (
        children
      ) : (
        <View
          style={{
            flex: 1,
            paddingTop: top,
            paddingLeft: left,
            paddingRight: right,
            paddingBottom: bottomPadding, // ✅ updated
            backgroundColor,
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: innerViewColor,
              paddingHorizontal,
            }}>
            {children}
          </View>
        </View>
      )}
    </View>
  );
};

export default RootView;
