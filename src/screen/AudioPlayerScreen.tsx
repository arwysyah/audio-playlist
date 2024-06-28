import React from 'react';
import {View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import AudioPlayer from '../components/AudioPlayer';
import {getAudioFileById} from '../data/audioFiles';
import {s} from 'react-native-wind';

const AudioPlayerScreen: React.FC = () => {
  const route = useRoute();
  const {audioId, audioTitle} = route.params;

  const audioUri = getAudioFileById(audioId);

  return (
    <View style={s`flex-1 bg-gray-600`}>
      <AudioPlayer audioUri={audioUri} audioTitle={audioTitle} />
    </View>
  );
};

export default AudioPlayerScreen;
