import { View, Text } from 'react-native';
import React from 'react';
import Loading from './Loading';

export default function LoadingLayout({ isLoading = true, children }) {
  return <>{isLoading ? <Loading /> : children}</>;
}
