import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { sliceLongText } from '../utilities';

export default function Cast({ cast, navigation }) {
  let personName = 'Amy Poehler';
  let characterName = 'Joy';
  return (
    <View className="my-6">
      <Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {cast?.map((person, index) => (
          <TouchableOpacity
            key={index}
            className="mr-4 items-center"
            onPress={() => navigation.navigate('Person', person)}
          >
            <View className="overflow-hidden rounded-full h-20 w-20 items-center border border-gray-500">
              <Image
                source={require('../assets/castImage1.jpg')}
                className="rounded-2xl h-24 w-20"
              />
            </View>
            <Text className="text-white text-xs mt-1">{sliceLongText(characterName, 10)}</Text>
            <Text className="text-gray-400 text-xs mt-1">{sliceLongText(personName, 10)}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
