import { ImageBackground } from 'react-native'

import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'

import blurBg from '../src/assets/bg-blur.png'
import { SplashScreen, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function Layout() {
  const [hasLoadedFonts] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  })

  if (!hasLoadedFonts) {
    return <SplashScreen />
  }

  return (
    <ImageBackground
      source={blurBg}
      className="relative flex-1 bg-black"
      imageStyle={{ position: 'absolute' }}
    >
      <StatusBar style="light" translucent />

      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: 'transparent' },
          animation: 'fade',
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="base-info" />
        <Stack.Screen name="current-knowledge" />
        <Stack.Screen name="interests" />
        <Stack.Screen name="workstation" />
        <Stack.Screen name="user-links" />
        <Stack.Screen name="find-start-future" />
        <Stack.Screen name="follow-us" />
      </Stack>
    </ImageBackground>
  )
}
