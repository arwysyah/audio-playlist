import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {s} from 'react-native-wind';

interface ControlButtonsProps {
  isPlaying: boolean;
  playSound: () => void;
  pauseSound: () => void;
  rewindSound: () => void;
  forwardSound: () => void;
}

const Play = require('../assets/icons/play-button-2.png');
const Next = require('../assets/icons/fast-forward-button.png');
const Prev = require('../assets/icons/fast-backward.png');
const Pause = require('../assets/icons/pause-button.png');

const ControlButtons: React.FC<ControlButtonsProps> = ({
  isPlaying,
  playSound,
  pauseSound,
  rewindSound,
  forwardSound,
}) => {
  const playPauseIcon = isPlaying ? Pause : Play;
  return (
    <View style={s`flex-row justify-evenly items-center mx-5 mb-5`}>
      <TouchableOpacity onPress={rewindSound} style={s`p-2`}>
        <Image source={Prev} style={s`h-10 w-10`} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={isPlaying ? pauseSound : playSound}
        style={s`p-2`}>
        <Image source={playPauseIcon} style={s`h-10 w-10`} />
      </TouchableOpacity>

      <TouchableOpacity onPress={forwardSound} style={s`p-2`}>
        <Image source={Next} style={s`h-10 w-10`} />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(ControlButtons);
