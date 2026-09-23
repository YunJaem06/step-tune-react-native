import { LinearGradient } from 'expo-linear-gradient';
import { PixelRatio, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '../../../core/theme/colors';
import { GoogleLoginButton } from '../components/GoogleLoginButton';
import { MusicNoteIcon } from '../components/LoginIcons';

type LoginScreenProps = {
  onGoogleLoginPress: () => void;
  isLoading?: boolean;
};

export function LoginScreen({
  onGoogleLoginPress,
  isLoading = false,
}: LoginScreenProps) {
  return (
    <View style={styles.container} testID="login-screen">
      <LinearGradient
        colors={[colors.loginGradientStart, colors.background]}
        pointerEvents="none"
        style={styles.gradient}
      />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <View style={styles.content}>
            <View style={styles.hero}>
              <View style={styles.brand}>
                <View style={styles.brandIcon}>
                  <MusicNoteIcon />
                </View>
                <Text style={styles.brandName}>StepTune</Text>
              </View>

              <Text accessibilityRole="header" style={styles.title}>
                {'걸음마다,\n당신다운 음악으로'}
              </Text>
              <Text style={styles.description}>
                오늘의 활동과 기분을 바탕으로 산책에 어울리는 음악을 추천해드려요.
              </Text>
              <View style={styles.featureCard}>
                <Text style={styles.featureText}>
                  걸음 기록 · 기분 분석 · 맞춤 플레이리스트를 한곳에서 만나보세요.
                </Text>
              </View>
            </View>

            <View style={styles.footer}>
              <GoogleLoginButton
                onPress={onGoogleLoginPress}
                isLoading={isLoading}
              />
              <Text style={styles.terms}>
                계속하면 StepTune의 이용약관 및 개인정보 처리방침에 동의하는 것으로 간주됩니다.
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    // The original Compose gradient ends at 900 physical pixels.
    height: 900 / PixelRatio.get(),
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    width: '100%',
    maxWidth: 560,
    alignSelf: 'center',
    justifyContent: 'space-between',
    gap: 48,
    paddingHorizontal: 24,
    paddingVertical: 28,
  },
  hero: {
    gap: 18,
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 30,
  },
  brandIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primaryDark,
  },
  brandName: {
    flexShrink: 1,
    color: colors.primaryDark,
    fontSize: 22,
    lineHeight: 29,
    fontWeight: '700',
  },
  title: {
    color: colors.ink,
    fontSize: 40,
    lineHeight: 46,
    fontWeight: '700',
    letterSpacing: -0.8,
  },
  description: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 24,
  },
  featureCard: {
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderRadius: 20,
    backgroundColor: colors.mintContainer,
  },
  featureText: {
    color: colors.onMint,
    fontSize: 14,
    lineHeight: 21,
  },
  footer: {
    gap: 20,
  },
  terms: {
    color: colors.muted,
    fontSize: 12,
    lineHeight: 17,
    fontWeight: '500',
    textAlign: 'center',
  },
});
