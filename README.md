
# Audio Player App

This is a simple React Native app for playing audio tracks with the following features:
- Display a list of audio tracks.
- Search for audio tracks.
- Play, pause, rewind, and fast-forward audio tracks.
- Navigate between the list and the audio player screen.

## Features
1. **List of Audios Screen**:
    - Displays a list of audio tracks fetched from a server.
    - Allows users to search for audio tracks.
    - Each list item includes the name of the audio track and an image.
    - Users can select an audio track to navigate to the audio player screen.

2. **Audio Player Screen**:
    - Displays the selected audio track.
    - Allows users to play, pause, rewind, and fast-forward the audio.
    - Displays the current playback position and duration.
    - Provides a slider to seek through the audio.
    - Includes a button to close the player and go back to the list.

## Stack
- **React Native**: Framework for building mobile applications using React.
- **Redux Toolkit**: For state management.
- **RTK Query**: For managing data fetching.
- **react-native-sound**: For playing audio files.
- **TailwindCSS**: For styling components using `react-native-wind`.
- **react-native-community/slider**: For implementing the seek slider in the audio player.

## Installation


1. Install dependencies:
   ```sh
   npm install
   ```

2. Run the app:
   ```sh
   npx react-native run-android  # for Android
   npx react-native run-ios      # for iOS
   ```
