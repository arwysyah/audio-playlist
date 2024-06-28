import React from 'react';
import {
  View,
  ActivityIndicator,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import Slider from '@react-native-community/slider';
import ControlButtons from './ControlButtons';
import useAudioPlayer from '../hooks/useAudioPlayer';
import {useNavigation} from '@react-navigation/native';
import {s} from 'react-native-wind';

const Back = require('../assets/icons/back.png');
interface AudioPlayerProps {
  audioUri: string;
  audioTitle: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({audioUri, audioTitle}) => {
  const {
    isPlaying,
    isLoading,
    duration,
    currentPosition,
    playSound,
    pauseSound,
    seekSound,
    forwardSound,
    rewindSound,
  } = useAudioPlayer(audioUri, () => {});

  const navigation = useNavigation();

  return (
    <View style={[s`p-5`, {position: 'relative', flex: 1}]}>
      {isLoading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={Back} style={s`h-10 w-10`} />
          </TouchableOpacity>
          <Image
            source={require('../assets/main/bg.jpg')}
            style={[
              s`h-100 w-full`,
              {height: 400, width: '100%', opacity: 0.2, borderRadius: 100},
            ]}
          />
          <View style={s`mt-10`} />
          <Text
            style={s`text-md text-gray-200 text-center`}
            numberOfLines={1}
            ellipsizeMode="tail">
            {audioTitle}
          </Text>
          <Slider
            value={currentPosition}
            maximumValue={duration}
            minimumValue={0}
            step={1}
            onValueChange={seekSound}
            thumbTintColor="green"
            style={s`mt-5`}
          />
          <ControlButtons
            isPlaying={isPlaying}
            playSound={playSound}
            pauseSound={pauseSound}
            forwardSound={forwardSound}
            rewindSound={rewindSound}
          />
        </>
      )}
    </View>
  );
};

export default AudioPlayer;
