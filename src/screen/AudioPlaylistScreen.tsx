import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import {useGetAudiosQuery} from '../api/audioApi';
import PlayListItem from '../components/PlaylistItem';
import {s} from 'react-native-wind';

interface Audio {
  id: number;
  title: string;
}

const AudioPlaylist: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [data, setData] = useState<Audio[]>([]);
  const {
    data: audios,
    error,
    isLoading,
    isFetching,
  } = useGetAudiosQuery({page, limit: 10});

  useEffect(() => {
    if (audios) {
      setData(prevData => [...prevData, ...audios]);
    }
  }, [audios]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  const filteredAudio = data.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <View style={s`flex-1 bg-gray-600 py-2`}>
      <View style={s`flex-row items-center justify-center mb-2 pt-5`}>
        <TextInput
          placeholder="Search audio..."
          value={searchTerm}
          onChangeText={setSearchTerm}
          style={s`px-10 w-4/5 border border-gray-300 rounded-xl text-gray-100 h-10`}
        />
        {searchTerm.length > 0 && (
          <TouchableOpacity onPress={clearSearch} style={s`px-2`}>
            <Text style={s`text-gray-300`}>Clear</Text>
          </TouchableOpacity>
        )}
      </View>
      {isLoading && page === 1 && (
        <Text style={s`text-blue-800 text-center`}>Loading...</Text>
      )}
      {!error && !isLoading && filteredAudio.length === 0 && (
        <Text style={s`text-blue-800 text-center`}>data not found</Text>
      )}
      {error && (
        <Text style={s`text-blue-800 text-center`}>
          It seems there is an error appeared
        </Text>
      )}
      <FlatList
        data={filteredAudio}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <PlayListItem audio={item} />}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isFetching ? <ActivityIndicator size="large" color="#0000ff" /> : null
        }
      />
    </View>
  );
};


export default AudioPlaylist;
