import {useEffect, useState} from 'react';
import Sound from 'react-native-sound';
import {Platform} from 'react-native';

const useAudioPlayer = (audioUri: string, onEnd: () => void) => {
  const isIOS = Platform.OS === 'ios';
  const mainBundleSound = isIOS ? '' : Sound.MAIN_BUNDLE;
  const [sound, setSound] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [duration, setDuration] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1.0);

  useEffect(() => {
    const newSound = new Sound(audioUri, mainBundleSound, error => {
      if (error) {
        console.log(error);
        setIsLoading(false);
        return;
      }
      setSound(newSound);
      setDuration(newSound.getDuration());
      setIsLoading(false);
    });

    return () => {
      if (newSound) {
        newSound.release();
      }
    };
  }, [audioUri]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isPlaying) {
      interval = setInterval(() => {
        if (sound) {
          sound.getCurrentTime(seconds => setCurrentPosition(seconds));
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isPlaying, sound]);

  const playSound = () => {
    if (sound) {
      sound.setSpeed(playbackRate);
      sound.play(success => {
        if (success) {
          resetSound();
          onEnd();
        }
      });
      setIsPlaying(true);
    }
  };

  const pauseSound = () => {
    if (sound) {
      sound.pause();
      setIsPlaying(false);
    }
  };

  const seekSound = (value: number) => {
    if (sound) {
      sound.setCurrentTime(value);
      setCurrentPosition(value);
    }
  };

  const rewindSound = () => {
    if (sound) {
      const newPosition = Math.max(0, currentPosition - 10);
      sound.setCurrentTime(newPosition);
      setCurrentPosition(newPosition);
    }
  };

  const forwardSound = () => {
    if (sound) {
      const newPosition = Math.min(duration, currentPosition + 10);
      sound.setCurrentTime(newPosition);
      setCurrentPosition(newPosition);
    }
  };

  const changePlaybackRate = (rate: number) => {
    setPlaybackRate(rate);
    if (sound && isPlaying) {
      sound.setSpeed(rate);
    }
  };

  const resetSound = () => {
    setIsPlaying(false);
    setCurrentPosition(0);
    if (sound) {
      sound.setCurrentTime(0);
    }
  };

  return {
    isPlaying,
    isLoading,
    duration,
    currentPosition,
    playbackRate,
    playSound,
    pauseSound,
    seekSound,
    rewindSound,
    forwardSound,
    changePlaybackRate,
    resetSound,
  };
};

export default useAudioPlayer;
