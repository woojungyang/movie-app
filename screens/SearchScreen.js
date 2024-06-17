import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import React, { useMemo, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { XMarkIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import { convertImage, sliceLongText, windowHeight, windowWidth } from '../utilities';
import ExpoImage from '../components/ExpoImage';
import useApiQuery from '../hooks/useApiQuery';
import Loading from '../components/Loading';

export default function SearchScreen() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  const {
    isLoading,
    data: movies,
    refetch,
  } = useApiQuery('/search/movie', {
    params: { query: searchQuery },
  });

  const searching = useMemo(() => refetch(), [searchQuery]);

  return (
    <SafeAreaView className="bg-gray-900 flex-1">
      {isLoading && <Loading />}
      <View className="mx-4 mb-3 flex-row justify-between items-center border border-gray-500 rounded-full">
        <TextInput
          placeholder="Search Movie"
          placeholderTextColor={'lightgray'}
          className="pb-1 pl-6 text-base font-semibold text-white tracking-wider "
          value={searchQuery}
          onChangeText={setSearchQuery}
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
      {!!movies?.total_results ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          className="space-y-3"
        >
          <Text className="text-white font-semibold ml-1">Results ({movies?.total_results})</Text>
          <View className="flex-row justify-between flex-wrap">
            {movies?.results?.map((movie, index) => (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => navigation.push('Movie', movie.id)}
              >
                <View className="space-y-2 mb-4">
                  <ExpoImage
                    className="rounded-3xl"
                    uri={convertImage(movie.poster_path)}
                    style={{ width: windowWidth * 0.44, height: windowHeight * 0.3 }}
                  />
                  <Text className="text-gray-300 ml-1">{sliceLongText(movie?.title, 22)}</Text>
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
