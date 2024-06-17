import { View, Text, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { convertImage, isPlatformIos, windowHeight, windowWidth } from '../utilities';
import DefaultHeader from '../components/DefaultHeader';
import MovieList from '../components/MovieList';
import ExpoImage from '../components/ExpoImage';
import useApiQuery from '../hooks/useApiQuery';
import { useRoute } from '@react-navigation/native';
import LoadingLayout from '../components/LoadingLayout';

export default function PersonScreen() {
  const [isFavorite, setIsFavorite] = useState(false);
  const verticalMargin = isPlatformIos ? '' : 'my-3';
  const { params: personId } = useRoute();

  const baseUrl = `/person/${personId}`;
  const { isLoading: personLoading, data: person } = useApiQuery(
    baseUrl,
    {},
    { enabled: !!personId }
  );

  const { isLoading: moviesLoading, data: movies } = useApiQuery(
    `${baseUrl}/movie_credits`,
    {},
    { enabled: !!personId }
  );

  const isFemale = person?.gender == 1 ? 'Female' : 'Male';

  return (
    <LoadingLayout isLoading={personLoading || moviesLoading}>
      <ScrollView className="flex-1 bg-gray-900" contentContainerStyle={{ paddingBottom: 20 }}>
        <DefaultHeader
          activeColor="red"
          isFavorite={isFavorite}
          setIsFavorite={setIsFavorite}
          intervalMargin={verticalMargin}
          isAbsolute={false}
        />
        <View>
          <View
            className="flex-row justify-center mt-5"
            style={{
              shadowColor: 'gray',
              shadowRadius: 40,
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 1,
            }}
          >
            <View className="items-center rounded-full overflow-hidden h-72 w-72 border border-gray-500">
              <ExpoImage
                uri={convertImage(person?.profile_path)}
                style={{ height: windowHeight * 0.43, width: windowWidth * 0.74 }}
              />
            </View>
          </View>
          <View className="mt-6">
            <Text className="text-3xl text-white font-bold text-center">{person?.name}</Text>
            <Text className="text-base text-gray-500 text-center">{person?.place_of_birth}</Text>
          </View>
          <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-gray-700 rounded-full overflow-hidden">
            <Summary title="Gender" content={isFemale} />
            <Summary title="Birthday" content={person?.birthday} />
            <Summary title="Known for" content={person?.known_for_department} />
            <Summary title="Popularity" content={(person?.popularity).toFixed(2)} isLast={true} />
          </View>
          <View className="my-6 mx-4 space-y-2">
            <Text className="text-white text-lg">Biography</Text>
            <Text className="text-gray-400 tracking-wide">{person?.biography || '-'}</Text>
          </View>
          <MovieList data={movies?.cast} title="Movies" hideSeeAll={true} />
        </View>
      </ScrollView>
    </LoadingLayout>
  );
}

const Summary = ({ title, content, isLast = false }) => {
  return (
    <View
      className={`${isLast ? '' : 'border-r-2 border-r-gray-400'} items-center`}
      style={{ marginRight: '1%', width: '100%', flexShrink: 1 }}
    >
      <Text className="text-white font-semibold">{title}</Text>
      <Text className="text-gray-300 text-sm">{content}</Text>
    </View>
  );
};
