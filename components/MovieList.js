import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { windowHeight, windowWidth } from '../utilities';

export default function MovieList({ title, data }) {
  let movieName = 'InsideOut';
  const navigation = useNavigation();

  return (
    <View className="mb-8 space-y-4">
      <View className="mx-4 flex-row justify-between items-center">
        <Text className="text-white text-xl">{title}</Text>
        <TouchableOpacity>
          <Text className="text-accent-dark text-lg">See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data?.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigation.navigate('Movie', item)}
            >
              <View className="space-y-1 mr-4">
                <Image
                  source={require('../assets/movie2.jpg')}
                  className="rounded-3xl"
                  style={{ width: windowWidth * 0.33, height: windowHeight * 0.22 }}
                />
                <Text className="text-gray-400 ml-1">
                  {movieName.length > 14 ? movieName.slice(0, 14) + '....' : movieName}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
}
