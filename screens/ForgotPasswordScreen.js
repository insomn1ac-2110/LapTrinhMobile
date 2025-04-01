// screens/ForgotPasswordScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ForgotPasswordScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password Screen</Text>
      {/* Sẽ triển khai logic quên mật khẩu sau */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
  },
});
