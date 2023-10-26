import { StatusBar } from 'react-native';
import { Home } from './src/screens/Home';
import { useEffect } from 'react';
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

export default function App() {

  const [fontsLoaded] = useFonts({
    'YoungSerif-Regular': require('./src/assets/fonts/YoungSerif-Regular.ttf')
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  },[])

  if(!fontsLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <>
      <StatusBar
        barStyle        = {'dark-content'}
        backgroundColor = {'transparent'}
        translucent
      />
      <Home />
    </>
  );
}