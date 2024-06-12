import { View, Text, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { isPlatformIos, windowHeight, windowWidth } from '../utilities';
import DefaultHeader from '../components/DefaultHeader';

export default function PersonScreen() {
  const [isFavorite, setIsFavorite] = useState(false);
  const verticalMargin = isPlatformIos ? '' : 'my-3';
  return (
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
            <Image
              source={require('../assets/castImage2.jpg')}
              style={{ height: windowHeight * 0.43, width: windowWidth * 0.74 }}
            />
          </View>
        </View>
        <View className="mt-6">
          <Text className="text-3xl text-white font-bold text-center">Phyllis Smith</Text>
          <Text className="text-base text-gray-500 text-center">St. Louis, Missouri, USA</Text>
        </View>
        <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-gray-700 rounded-full overflow-hidden">
          <Summary title="Gender" content="Female" />
          <Summary title="Birthday" content="1951-07-10" />
          <Summary title="Known for" content="Acting" />
          <Summary title="Popularity" content={(64.23).toFixed(2)} isLast={true} />
        </View>
        <View className="my-6 mx-4 space-y-2">
          <Text className="text-white text-lg">Biography</Text>
          <Text className="text-gray-400 tracking-wide">
            Phyllis Smith was born on July 10, 1951, in St. Louis, Missouri, USA. She is an American
            actress best known for her role as Phyllis Vance in the popular television series "The
            Office." Before her acting career, she worked as a casting associate and performed as a
            dancer and cheerleader. Her breakthrough came with "The Office," where her performance
            was widely appreciated. She has also voiced characters in animated films such as "Inside
            Out." Smith continues to be a beloved figure in the entertainment industry.
          </Text>
        </View>
      </View>
    </ScrollView>
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
