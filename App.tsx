import { useEffect, useState } from 'react';
import * as NativeSplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, View } from 'react-native';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import { colors } from './src/core/theme/colors';
import { LoginScreen } from './src/features/login/screens/LoginScreen';
import { SplashScreen } from './src/features/splash/screens/SplashScreen';

void NativeSplashScreen.preventAutoHideAsync().catch(() => {
  // A native splash is not always available during development reloads.
});

const SPLASH_DISPLAY_DURATION_MS = 1400;

function showLoginNotice() {
  Alert.alert('Google 로그인 준비 중', '아직 Google 로그인을 사용할 수 없어요.', [
    { text: '확인' },
  ]);
}

export default function App() {
  const [isLayoutReady, setIsLayoutReady] = useState(false);
  const [isLogoReady, setIsLogoReady] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (!isLayoutReady || !isLogoReady) return;

    NativeSplashScreen.hide();

    // This is a brand introduction, not a simulated authentication check.
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, SPLASH_DISPLAY_DURATION_MS);

    return () => clearTimeout(timeout);
  }, [isLayoutReady, isLogoReady]);

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StatusBar style="dark" />
      <View style={styles.container} onLayout={() => setIsLayoutReady(true)}>
        {showSplash ? (
          <SplashScreen onReady={() => setIsLogoReady(true)} />
        ) : (
          <LoginScreen onGoogleLoginPress={showLoginNotice} />
        )}
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
