import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';

export default function DefaultHeader({
  isFavorite,
  setIsFavorite,
  intervalMargin,
  isAbsolute = false,
  activeColor = '#ffcc4d',
}) {
  const navigation = useNavigation();

  const defaultStyle = `${
    isAbsolute ? 'absolute' : ''
  } z-20 w-full flex-row justify-between items-center px-1 ${intervalMargin}`;

  return (
    <SafeAreaView className={defaultStyle}>
      <TouchableOpacity
        className="rounded-xl p-1 bg-accent mx-4"
        onPress={() => navigation.goBack()}
      >
        <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)} className={'mx-4'}>
        <HeartIcon size="35" color={isFavorite ? activeColor : 'white'} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
