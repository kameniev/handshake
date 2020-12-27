import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Text, StatusBar} from 'react-native';
import Router from 'screens/Router';
import Onboard from 'screens/Onboard';
import {theme} from 'utils/themes';

export default function App() {
  const [showOnboard, setShowOnboard] = useState(true);

  const handleOnboardFinish = () => {
    setShowOnboard(false);
  };

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="default"></StatusBar>
        <>
          {showOnboard && <Onboard handleDone={handleOnboardFinish} />}
          {!showOnboard && <Router />}
        </>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
