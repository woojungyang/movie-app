import React from 'react';
import { View, Text } from 'react-native';

export default function TrendingMovies({ data }) {
  return (
    <View className="mb-8">
      <Text className="text-white text-xl mx-4 mb-5">trendingMovies</Text>
      {/* <Carousel data={data} /> */}
    </View>
  );
}
