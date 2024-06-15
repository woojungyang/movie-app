import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { convertImage, sliceLongText } from '../utilities';

export default function Cast({ casts, navigation }) {
  return (
    <View className="my-6">
      <Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {casts?.map((cast, index) => (
          <TouchableOpacity
            key={index}
            className="mr-4 items-center"
            onPress={() => navigation.navigate('Person', cast)}
          >
            <View className="overflow-hidden rounded-full h-20 w-20 items-center border border-gray-500">
              <Image
                source={{ uri: convertImage(cast?.profile_path) }}
                className="rounded-2xl h-24 w-20"
              />
            </View>
            <Text className="text-white text-xs mt-1">{sliceLongText(cast?.character, 10)}</Text>
            <Text className="text-gray-400 text-xs mt-1">{sliceLongText(cast?.name, 10)}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
