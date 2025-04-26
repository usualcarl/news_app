// app/screens/HomeScreen.js
import React from 'react';
import { FlatList, ActivityIndicator, Text } from 'react-native';
import NewsItem from '../components/NewsItem';
import useFetch from '../hooks/useFetch';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const API_URL = 'https://newsapi.org/v2/top-headlines?country=us';
  const { data, loading, error } = useFetch(API_URL);

  if (loading) return <ActivityIndicator size="large" style={{ flex: 1, justifyContent: 'center' }} />;
  if (error) return <Text>Error loading news</Text>;

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.url}
      renderItem={({ item }) => (
        <NewsItem
          item={item}
        />
      )}
    />
  );
};

export default HomeScreen;