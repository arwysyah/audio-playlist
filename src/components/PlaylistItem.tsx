import React from 'react';
import {Text, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setSelectedAudioId} from '../store/slices/audioSlices';
import {RouteNavigation} from '../navigation/AppNavigator';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {s} from 'react-native-wind';

interface AudioListItemProps {
  audio: {
    id: number;
    title: string;
  };
}

const PlayListItem: React.FC<AudioListItemProps> = ({audio}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(setSelectedAudioId(audio.id));
    navigation.navigate(RouteNavigation.AudioPlayerScreen, {
      audioId: audio.id,
      audioTitle: audio.title,
    });
  };

  return (
    <TouchableWithoutFeedback
      onPress={handlePress}
      style={s`flex-row items-center p-2 mx-5 border-b border-gray-300`}>
      <Image
        source={require('../assets/main/music.jpg')}
        style={s`h-20 w-20 mr-2 rounded-md`}
      />
      <View style={s`flex-1`}>
        <Text
          style={s`text-gray-100 text-lg `}
          ellipsizeMode="tail"
          numberOfLines={2}>
          {audio.title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PlayListItem;
