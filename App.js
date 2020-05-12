import React from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import Routes from './src/routes';

export default function App() {
   let [fontsLoaded] = useFonts({
      'FredokaOne-Regular': require('./src/assets/fonts/FredokaOne-Regular.ttf'),
   });
   if (!fontsLoaded) {
      return <AppLoading />;
   } else {
      return (
         <Routes />
      );
   }
}


