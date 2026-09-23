import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '../../../core/theme/colors';
import { GoogleIcon } from './LoginIcons';

type GoogleLoginButtonProps = {
  onPress: () => void;
  isLoading?: boolean;
};

export function GoogleLoginButton({
  onPress,
  isLoading = false,
}: GoogleLoginButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={isLoading ? 'Google 로그인 중' : 'Google로 계속하기'}
      accessibilityState={{ busy: isLoading, disabled: isLoading }}
      disabled={isLoading}
      onPress={onPress}
      testID="google-login-button"
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
        isLoading && styles.loading,
      ]}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={colors.primaryDark} />
      ) : (
        <>
          <GoogleIcon />
          <Text style={styles.label}>Google로 계속하기</Text>
          <View style={styles.balanceSpace} />
        </>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    minHeight: 56,
    paddingHorizontal: 18,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: colors.outline,
    borderRadius: 16,
    backgroundColor: colors.surface,
    shadowColor: colors.ink,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 1,
  },
  label: {
    flex: 1,
    color: colors.googleText,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    textAlign: 'center',
  },
  balanceSpace: {
    width: 24,
  },
  pressed: {
    backgroundColor: colors.background,
    opacity: 0.8,
  },
  loading: {
    opacity: 0.7,
  },
});
