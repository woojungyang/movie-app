import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { convertImage, sliceLongText, windowHeight, windowWidth } from '../utilities';
import ExpoImage from './ExpoImage';

export default function MovieList({ title, data, hideSeeAll = false }) {
  const navigation = useNavigation();

  return (
    <View className="mb-8 space-y-4">
      <View className="mx-4 flex-row justify-between items-center">
        <Text className="text-white text-xl">{title}</Text>
        {!hideSeeAll && (
          <TouchableOpacity>
            <Text className="text-accent-dark text-lg">See All</Text>
          </TouchableOpacity>
        )}
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data?.map((item, index) => {
          return (
            <TouchableWithoutFeedback key={index} onPress={() => navigation.push('Movie', item.id)}>
              <View className="space-y-1 mr-4">
                <ExpoImage
                  uri={convertImage(item.poster_path)}
                  className="rounded-3xl"
                  style={{
                    width: windowWidth * 0.33,
                    height: windowHeight * 0.22,
                  }}
                />

                <Text className="text-gray-400 ml-1">{sliceLongText(item.original_title, 14)}</Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
}
