import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AudioState {
  selectedAudioId: number | null;
}

const initialState: AudioState = {
  selectedAudioId: null,
};

const audioSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    setSelectedAudioId(state, action: PayloadAction<number>) {
      state.selectedAudioId = action.payload;
    },
  },
});

export const {setSelectedAudioId} = audioSlice.actions;
export default audioSlice.reducer;
