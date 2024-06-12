import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width, height } = Dimensions.get('window');

export default function TrendingMovies({ data }) {
  const navigation = useNavigation();
  function handleClick(item) {
    navigation.navigate('Movie', item);
  }
  return (
    <View className="mb-8">
      <Text className="text-white text-xl mx-4 mb-5">trendingMovies</Text>

      <Carousel
        data={data}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{ display: 'flex', alignItems: 'center' }}
        renderItem={({ item }) => <MovieCard item={item} handleClick={handleClick} />}
      />
    </View>
  );
}

const MovieCard = ({ item, handleClick }) => {
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <Image
        source={require('../assets/movie1.jpg')}
        style={{ width: width * 0.6, height: height * 0.4 }}
        className="rounded-3xl"
      />
    </TouchableWithoutFeedback>
  );
};
