// components/List.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

export default function List({ title, data }) {
  return (
    <View style={styles.container}>
      <Header title={title} />
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => (
          <View style={styles.item}>
            {item.image && <Image source={{ uri: item.image }} style={styles.image} />}
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 10 },
  item: { padding: 10, backgroundColor: '#f5f5f5', margin: 5, borderRadius: 5 },
  image: { width: 60, height: 60, borderRadius: 5, marginBottom: 5 },
});
