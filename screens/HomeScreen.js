// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Image } from 'react-native';
import Header from '../components/Header';

const categories = [
  { id: '1', title: 'Pizza', image: 'https://via.placeholder.com/60' },
  { id: '2', title: 'Burger', image: 'https://via.placeholder.com/60' },
  { id: '3', title: 'Sushi', image: 'https://via.placeholder.com/60' },
];

const popularItems = [
  { id: '1', name: 'Món ngon 1', price: 10, image: 'https://via.placeholder.com/100' },
  { id: '2', name: 'Món ngon 2', price: 15, image: 'https://via.placeholder.com/100' },
];

const saleOffItems = [
  { id: '1', name: 'Khuyến mãi 1', price: 8, discount: '10%', image: 'https://via.placeholder.com/100' },
  { id: '2', name: 'Khuyến mãi 2', price: 12, discount: '15%', image: 'https://via.placeholder.com/100' },
];

export default function HomeScreen() {
  const renderCategory = ({ item }) => (
    <View style={styles.categoryItem}>
      <Image source={{ uri: item.image }} style={styles.categoryImage} />
      <Text style={styles.categoryTitle}>{item.title}</Text>
    </View>
  );

  const renderPopularItem = ({ item }) => (
    <View style={styles.itemCard}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>${item.price}</Text>
    </View>
  );

  const renderSaleOffItem = ({ item }) => (
    <View style={styles.itemCard}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>${item.price}</Text>
      <Text style={styles.itemDiscount}>{item.discount} OFF</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header title="Explorer" />
      
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Tìm kiếm món ăn, khu vực..."
          style={styles.searchInput}
          placeholderTextColor="#999"
        />
      </View>

      {/* Top Categories */}
      <Text style={styles.sectionTitle}>Top Categories</Text>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.flatList}
      />

      {/* Popular Items */}
      <Text style={styles.sectionTitle}>Popular Items</Text>
      <FlatList
        data={popularItems}
        renderItem={renderPopularItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.flatList}
      />

      {/* Sale-off Items */}
      <Text style={styles.sectionTitle}>Sale-off Items</Text>
      <FlatList
        data={saleOffItems}
        renderItem={renderSaleOffItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.flatList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  searchContainer: {
    padding: 10,
    backgroundColor: '#fff',
  },
  searchInput: {
    backgroundColor: '#eaeaea',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginHorizontal: 10,
    marginVertical: 10,
    color: '#333',
  },
  flatList: {
    marginLeft: 10,
    marginBottom: 10,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 15,
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  categoryTitle: {
    marginTop: 5,
    fontSize: 14,
    color: '#333',
  },
  itemCard: {
    width: 140,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginRight: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  itemName: {
    marginTop: 8,
    fontSize: 16,
    color: '#333',
  },
  itemPrice: {
    marginTop: 4,
    fontSize: 16,
    color: '#FFA500',
  },
  itemDiscount: {
    marginTop: 4,
    fontSize: 14,
    color: 'red',
  },
});
