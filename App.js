import { View } from 'react-native';
import React, {  useRef,  } from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import ContextWrapper from './src/context/ContextWraper';

const App = () => {
  const routeNameRef = useRef()
  const navigationRef = useNavigationContainerRef()
  return (
          <ContextWrapper>
            <NavigationContainer
              ref={navigationRef}
              onReady={() => {
                routeNameRef.current = navigationRef.getCurrentRoute().name;
              }}
              onStateChange={async () => {
                const currentRouteName = navigationRef.getCurrentRoute().name;
                console.log(
                  currentRouteName,
                  '<------------ currentRouteName ------------>',
                );
              }}>
              <AuthStack/>
            </NavigationContainer>
          </ContextWrapper>
  );
};

export default App;

