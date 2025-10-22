import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/login/Login'
import Register from '../screens/register/Register'
import ForgotPassword from '../screens/forgotPassword/ForgotPassword'
import OnBordingScreen from '../screens/onboarding/Onboarding'
import SplashSreen from '../screens/splash/SplashScreen'
import ForgotPasswordCode from '../screens/forgotPasswordCode/ForgotPasswordCode'
import Search from '../screens/search/Search'
import CustomBottomNav from './bottomTabs/CustomBottomNav'
import SavedLocation from '../screens/savedLocation/SavedLocation'
import EditProfile from '../screens/editProfile/EditProfile'
import MapViewScreen from '../screens/mapView/MapView'
import AddLocation from '../screens/addLocation/AddLocation'
import ResetPassword from '../screens/resetPassword/ResetPassword'
import GenerateRoute from '../screens/generateRoute/GenerateRoute'
import Alerts from '../screens/alerts/Alerts'
import Language from '../screens/language/Language'
import PrivacyPolicy from '../screens/privacyPolicy/PrivacyPolicy'
import HelpCenter from '../screens/helpCenter/HelpCenter'
import Routes from './routes'
import Home from '../screens/home/Home'
import Notifications from '../screens/notifications/Notifications'

function AuthStack() {
  const Stack = createNativeStackNavigator()
  const screens = {
    SplashSreen,
    OnBordingScreen,
    Login,
    Register,
    ForgotPassword,
    ForgotPasswordCode,
    CustomBottomNav,
    Home,
    Search,
    Notifications,
    SavedLocation,
    EditProfile,
    MapViewScreen,
    AddLocation,
    ResetPassword,
    GenerateRoute,
    Alerts,
    Language,
    PrivacyPolicy,
    HelpCenter,
  }

  return (
    <Stack.Navigator
      initialRouteName={Routes.splash}
      screenOptions={{
        headerShown: false,
        // statusBarAnimation: 'fade',
        // animation: 'slide_from_bottom',
        // orientation: 'default',
        freezeOnBlur: true,
      }}
    >
      {Object.entries(screens).map(([name, component]) => (
        <Stack.Screen key={name} name={name} component={component} />
      ))}

    </Stack.Navigator>
  )
}

export default AuthStack
