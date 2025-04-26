// src/components/NewsItem.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const NewsItem = ({ item, onPress }) => {
  const hasImage = item.urlToImage && item.urlToImage.trim() !== '';

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {hasImage ? (
        <Image source={{ uri: item.urlToImage }} style={styles.image} />
      ) : (
        <View style={[styles.image, styles.placeholder]}>
          <Text style={styles.placeholderText}>No image available</Text>
        </View>
      )}
      <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
      <Text style={styles.description} numberOfLines={3}>{item.description || 'No description available'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10, borderBottomWidth: 1, borderColor: '#ccc' },
  image: { width: '100%', height: 200 },
  placeholder: {
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center'
  },
  placeholderText: {
    color: '#aaa',
    fontStyle: 'italic'
  },
  title: { fontSize: 16, fontWeight: 'bold', marginTop: 5 },
  description: { fontSize: 14, color: '#555', marginTop: 5 }
});

export default NewsItem;