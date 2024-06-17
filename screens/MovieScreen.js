import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { convertImage, isPlatformIos, windowHeight, windowWidth } from '../utilities';
import { LinearGradient } from 'expo-linear-gradient';
import Cast from '../components/Cast';
import MovieList from '../components/MovieList';
import DefaultHeader from '../components/DefaultHeader';
import useApiQuery from '../hooks/useApiQuery';
import LoadingLayout from '../components/LoadingLayout';
import ExpoImage from '../components/ExpoImage';

export default function MovieScreen() {
  const navigation = useNavigation();
  const { params: movieId } = useRoute();

  const [isFavorite, setIsFavorite] = useState(false);
  const topMargin = isPlatformIos ? '' : 'mt-3';

  const getMovieBaseUrl = `/movie/${movieId}`;
  const { isLoading: movieLoading, data: movie } = useApiQuery(
    getMovieBaseUrl,
    {},
    { enabled: !!movieId }
  );

  const { isLoading: castsLoading, data: casts } = useApiQuery(
    `${getMovieBaseUrl}/credits`,
    {},
    { enabled: !!movieId }
  );

  const { isLoading: similarLoading, data: similarMovies } = useApiQuery(
    `${getMovieBaseUrl}/similar`,
    {},
    { enabled: !!movieId }
  );

  return (
    <LoadingLayout isLoading={movieLoading || castsLoading || similarLoading}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }} className="flex-1 bg-gray-900">
        <View className="w-full">
          <DefaultHeader
            isFavorite={isFavorite}
            setIsFavorite={setIsFavorite}
            intervalMargin={topMargin}
            isAbsolute={true}
          />
          <View>
            <ExpoImage
              uri={convertImage(movie?.poster_path)}
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
            {movie?.original_title}
          </Text>
          <Text className="text-gray-400 font-semibold text-base text-center">
            {movie?.status} • {movie?.release_date?.split('-')[0]} • {movie?.runtime}min
          </Text>
          <View className="flex-row justify-center mx-4 space-x-2 flex-wrap">
            {movie?.genres.map((genre, index) => (
              <Text className="text-gray-400 font-semibold text-base text-center" key={index}>
                {genre?.name} {index + 1 == movie?.genres.length ? '' : ' • '}
              </Text>
            ))}
          </View>
          <Text className="text-gray-400 mx-4 tracking-wide">{movie?.overview}</Text>
        </View>
        {!!casts?.cast && <Cast casts={casts?.cast} navigation={navigation} />}
        {!!similarMovies?.results?.length && (
          <MovieList title="Similar Movies" hideSeeAll={true} data={similarMovies?.results} />
        )}
      </ScrollView>
    </LoadingLayout>
  );
}
