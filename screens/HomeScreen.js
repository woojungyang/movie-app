import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import TrendingMovies from '../components/TrendingMovies';
import MovieList from '../components/MovieList';
import { isPlatformIos } from '../utilities';
import { useNavigation } from '@react-navigation/native';
import useApiQuery from '../hooks/useApiQuery';
import LoadingLayout from '../components/LoadingLayout';

export default function HomeScreen() {
  const navigation = useNavigation();

  const { isLoading: trendingMoviesLoading, data: trendingMovies } = useApiQuery(
    '/trending/movie/day',
    {}
  );
  const { isLoading: upComingMoviesLoading, data: upComingMovies } = useApiQuery(
    '/movie/upcoming',
    {}
  );
  const { isLoading: topRatedMoviesLoading, data: topRatedMovies } = useApiQuery(
    '/movie/top_rated',
    {}
  );

  return (
    <View className="flex-1 bg-gray-900">
      <SafeAreaView className={isPlatformIos ? 'mb-2' : 'mb-3'}>
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4">
          <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
          <Text className="text-white text-3xl font-bold">
            <Text className="text-accent">M</Text>ovies
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <MagnifyingGlassIcon size="30" strokeWidth="2" color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <LoadingLayout
        isLoading={trendingMoviesLoading || upComingMoviesLoading || topRatedMoviesLoading}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          <TrendingMovies data={trendingMovies?.results} />
          <MovieList title="UpComing" data={upComingMovies?.results} />
          <MovieList title="Top Rated" data={topRatedMovies?.results} />
        </ScrollView>
      </LoadingLayout>
    </View>
  );
}
