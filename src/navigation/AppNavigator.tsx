import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AudioPlaylist from '../screen/AudioPlaylistScreen';
import AudioPlayerScreen from '../screen/AudioPlayerScreen';

const Stack = createStackNavigator();

export const RouteNavigation = {
  AudioPlayList: 'AudioPlayList',
  AudioPlayerScreen: 'AudioPlayerScreen',
} as const;

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={RouteNavigation.AudioPlayList}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={RouteNavigation.AudioPlayList}
          component={AudioPlaylist}
        />
        <Stack.Screen
          name={RouteNavigation.AudioPlayerScreen}
          component={AudioPlayerScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
