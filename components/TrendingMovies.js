import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { convertImage, windowHeight, windowWidth } from '../utilities';
import ExpoImage from './ExpoImage';

export default function TrendingMovies({ data }) {
  const navigation = useNavigation();
  function handleClick(movieId) {
    navigation.navigate('Movie', movieId);
  }
  return (
    <View className="mb-8">
      <Text className="text-white text-xl mx-4 mb-5"></Text>

      <Carousel
        data={data}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={windowWidth}
        itemWidth={windowWidth * 0.62}
        slideStyle={{ display: 'flex', alignItems: 'center' }}
        renderItem={({ item }) => <MovieCard item={item} handleClick={handleClick} />}
      />
    </View>
  );
}

const MovieCard = ({ item, handleClick }) => {
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item.id)}>
      <View>
        <ExpoImage
          uri={convertImage(item.poster_path)}
          style={{ width: windowWidth * 0.6, height: windowHeight * 0.4, backgroundColor: 'red' }}
          className="rounded-3xl"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
