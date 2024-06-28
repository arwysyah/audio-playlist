import React from 'react';
import {View} from 'react-native';
import Slider from '@react-native-community/slider';
import {s} from 'react-native-wind';

interface UserSliderProps {
  currentPosition: number;
  duration: number;
  seekSound: (value: number) => void;
}

const UserSlider: React.FC<UserSliderProps> = ({
  currentPosition,
  duration,
  seekSound,
}) => {
  return (
    <View>
      <Slider
        value={currentPosition}
        maximumValue={duration}
        minimumValue={0}
        step={1}
        onValueChange={seekSound}
        style={s`mt-5 bg-gray-500 h-1 rounded`}
      />
    </View>
  );
};

export default React.memo(UserSlider);
