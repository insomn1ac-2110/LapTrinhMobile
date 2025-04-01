// src/screens/ProfileScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import { removeUserToken } from '../services/authStorage';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation = useNavigation();
  // Giả lập thông tin người dùng
  const [user, setUser] = useState({
    name: 'Nguyễn Văn A',
    job: 'Mobile Developer',
    description: 'Tôi có trên 5 năm kinh nghiệm phát triển ứng dụng di động. Hiện tại đang học React Native để mở rộng kỹ năng.',
    avatar: 'https://i.pravatar.cc/300',
  });

  const onSignOut = async () => {
    await removeUserToken();
    navigation.replace('SignIn'); // Quay lại màn hình đăng nhập
  };

  return (
    <View style={styles.container}>
      <Header title="Account" />

      {/* Header chứa Avatar */}
      <View style={styles.avatarContainer}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.job}>{user.job}</Text>
      </View>

      {/* Thông tin */}
      <View style={styles.infoContainer}>
        <Text style={styles.description}>{user.description}</Text>
      </View>

      {/* Nút Sign Out */}
      <TouchableOpacity style={styles.signOutButton} onPress={onSignOut}>
        <Text style={styles.signOutText}>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  avatarContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  job: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  infoContainer: {
    padding: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#333',
  },
  signOutButton: {
    backgroundColor: 'red',
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  signOutText: {
    color: '#fff',
    fontSize: 18,
  },
});
