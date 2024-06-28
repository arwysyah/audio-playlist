const audioFiles: any = {
  0: 'https://www2.cs.uic.edu/~i101/SoundFiles/gettysburg10.wav',
  1: 'https://www2.cs.uic.edu/~i101/SoundFiles/PinkPanther60.wav',
  2: 'https://www2.cs.uic.edu/~i101/SoundFiles/preamble.wav',
};

export const getAudioFileById = (id: number): string => {
  return audioFiles[id % 3];
};
