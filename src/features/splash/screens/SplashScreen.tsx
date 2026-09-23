import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '../../../core/theme/colors';

type SplashScreenProps = {
  onReady: () => void;
};

export function SplashScreen({ onReady }: SplashScreenProps) {
  return (
    <SafeAreaView style={styles.container} testID="splash-screen">
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image
            accessibilityLabel="StepTune 로고"
            source={require('../../../../assets/steptune-logo.png')}
            style={styles.logo}
            onLoadEnd={onReady}
          />
        </View>

        <Text accessibilityRole="header" style={styles.title}>
          StepTune
        </Text>
        <Text style={styles.subtitle}>오늘의 걸음에 어울리는 음악</Text>
      </View>

      <View style={styles.loadingContainer}>
        <ActivityIndicator color={colors.primary} size="small" />
        <Text style={styles.loadingText}>앱을 준비하고 있어요</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  logoContainer: {
    width: 168,
    height: 168,
    borderRadius: 42,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.16,
    shadowRadius: 24,
    elevation: 8,
  },
  logo: {
    width: 144,
    height: 144,
    borderRadius: 32,
  },
  title: {
    marginTop: 28,
    color: colors.ink,
    fontSize: 36,
    fontWeight: '800',
    letterSpacing: -1,
  },
  subtitle: {
    marginTop: 8,
    color: colors.muted,
    fontSize: 16,
    fontWeight: '500',
  },
  loadingContainer: {
    alignItems: 'center',
    gap: 12,
    paddingBottom: 48,
  },
  loadingText: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: '500',
  },
});
