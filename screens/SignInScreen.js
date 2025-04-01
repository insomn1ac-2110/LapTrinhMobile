// src/screens/SignInScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import IconButton from '../components/IconButton';
import { storeUserToken } from '../services/authStorage';

export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignIn = () => {
    navigation.replace('BottomTab'); // Chuyển sang BottomTabNavigator
  };
  

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Đăng nhập</Text>

      <CustomTextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email của bạn"
      />
      <CustomTextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Mật khẩu của bạn"
        secureTextEntry
      />

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotText}>Quên mật khẩu?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton} onPress={onSignIn}>
        <Text style={styles.signInText}>Đăng nhập</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Hoặc đăng nhập với</Text>
      <View style={styles.socialContainer}>
        <IconButton
          title="Google"
          iconName="google"
          onPress={() => console.log('Google sign in')}
          style={{ backgroundColor: '#DB4437' }}
        />
        <IconButton
          title="Facebook"
          iconName="facebook"
          onPress={() => console.log('Facebook sign in')}
          style={{ backgroundColor: '#4267B2' }}
        />
      </View>

      <TouchableOpacity style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Chưa có tài khoản? Đăng ký ngay</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fefefe',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
    color: '#333',
  },
  forgotText: {
    color: '#007AFF',
    textAlign: 'right',
    marginVertical: 5,
  },
  signInButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  signInText: {
    color: '#fff',
    fontSize: 18,
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 16,
    color: '#666',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  signUpContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  signUpText: {
    color: '#007AFF',
  },
});
