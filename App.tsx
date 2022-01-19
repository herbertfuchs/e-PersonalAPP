import React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Dongle_700Bold, Dongle_400Regular } from '@expo-google-fonts/dongle'

import { SignIn } from './src/Screens/SignIn';

export default function App() {
  let [fontsLoaded] = useFonts({
    Dongle_700Bold,
    Dongle_400Regular
  });

  if(!fontsLoaded){
    return(
      <AppLoading />
    )
  } else { // Deixei a statusBar azul pq combinou e pq quando deixa transparente ou branco, ela meio que "some" por causa das cores tá ligado?
    return (
      <>
        <StatusBar 
          barStyle="light-content"
          backgroundColor="blue"
          translucent    
        />
    
        <SignIn />
      </>
      );
    }
  }


 
