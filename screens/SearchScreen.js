import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { XMarkIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import { sliceLongText, windowHeight, windowWidth } from '../utilities';

export default function SearchScreen() {
  const navigation = useNavigation();
  const [filteredMovies, setFilteredMovies] = useState([1, 2, 3, 4]);
  const movieName = 'InsideOut2';
  return (
    <SafeAreaView className="bg-gray-900 flex-1">
      <View className="mx-4 mb-3 flex-row justify-between items-center border border-gray-500 rounded-full">
        <TextInput
          placeholder="Search Movie"
          placeholderTextColor={'lightgray'}
          className="pb-1 pl-6 text-base font-semibold text-white tracking-wider "
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}
          className="rounded-full p-3 m-1 bg-gray-500"
        >
          <XMarkIcon size="25" color="white" />
        </TouchableOpacity>
      </View>
      {!!filteredMovies?.length ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          className="space-y-3"
        >
          <Text className="text-white font-semibold ml-1"> Results ({filteredMovies?.length})</Text>
          <View className="flex-row justify-between flex-wrap">
            {filteredMovies?.map((filteredMovie, index) => (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => navigation.push('Movie', filteredMovie)}
              >
                <View className="space-y-2 mb-4">
                  <Image
                    className="rounded-3xl"
                    source={require('../assets/movie1.jpg')}
                    style={{ width: windowWidth * 0.44, height: windowHeight * 0.3 }}
                  />
                  <Text className="text-gray-300 ml-1">{sliceLongText(movieName, 22)}</Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
        </ScrollView>
      ) : (
        <View className="flex-1 items-center justify-center">
          <Image className="h-40 w-40" source={require('../assets/empty.png')} />
        </View>
      )}
    </SafeAreaView>
  );
}
