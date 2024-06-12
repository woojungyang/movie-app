import { View, Text, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { isPlatformIos, windowHeight, windowWidth } from '../utilities';
import { LinearGradient } from 'expo-linear-gradient';
import Cast from '../components/Cast';

export default function MovieScreen() {
  let movieName = 'InsideOut';
  const navigation = useNavigation();
  const { params: item } = useRoute();

  const [isFavorite, setIsFavorite] = useState(false);
  const topMargin = isPlatformIos ? '' : 'mt-3';

  const [cast, setCast] = useState([1, 2, 3, 4, 5]);

  useEffect(() => {}, [item]);

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 20 }} className="flex-1 bg-gray-900">
      <View className="w-full">
        <SafeAreaView
          className={'absolute z-20 w-full flex-row justify-between items-center px-4' + topMargin}
        >
          <TouchableOpacity
            className="rounded-xl p-1 bg-accent"
            onPress={() => navigation.goBack()}
          >
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
            <HeartIcon size="35" color={isFavorite ? '#ffcc4d' : 'white'} />
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          <Image
            source={require('../assets/movie2.jpg')}
            style={{ width: windowWidth, height: windowHeight * 0.55 }}
          />
          <LinearGradient
            colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
            style={{ width: windowWidth, height: windowHeight * 0.4 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className="absolute bottom-0"
          />
        </View>
      </View>

      <View style={{ marginTop: -(windowHeight * 0.09) }} className="space-y-3">
        <Text className="text-white text-center text-3xl font-bold tracking-wider">
          {movieName}
        </Text>
        <Text className="text-gray-400 font-semibold text-base text-center">
          Released • 2015 • 94min
        </Text>
        <View className="flex-row justify-center mx-4 space-x-2">
          <Text className="text-gray-400 font-semibold text-base text-center">Animation •</Text>
          <Text className="text-gray-400 font-semibold text-base text-center">Comedy •</Text>
          <Text className="text-gray-400 font-semibold text-base text-center">Drama </Text>
        </View>
        <Text className="text-gray-400 mx-4 tracking-wide">
          The story centers on an 11-year-old girl named Riley and the five core emotions living in
          her mind: Joy, Sadness, Anger, Fear, and Disgust. As Riley navigates a major move from the
          Midwest to San Francisco, her emotions struggle to guide her through this life-changing
          experience. With a unique concept and heartfelt storytelling, "Inside Out" explores the
          complexity of human emotions and the importance of balancing them.
        </Text>
      </View>
      <Cast cast={cast} navigation={navigation} />
    </ScrollView>
  );
}
