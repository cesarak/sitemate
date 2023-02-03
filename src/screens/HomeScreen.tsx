import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  Dimensions,
  FlatList,
  Image,
  Keyboard,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import NewsCardComponent from '../components/NewsCardComponent';
import * as news from '../services/news';

const HomeScreen: React.FC = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [query, setQuery] = useState('');
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState(false);
  const [emptyResult, setEmptyResult] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSearch = () => {
    if (query.length < 3) {
      Alert.alert(
        'Attention',
        'The search string must be more than 3 characters. Try again.',
      );
    } else {
      Keyboard.dismiss();
      setEmptyResult(false);
      setSearchResult([]);
      setError(false);
      setSearching(true);
      news
        .searchNews(query)
        .then(data => {
          if (data.length === 0) {
            setEmptyResult(true);
            setSearchResult([]);
          }
          setSearching(false);
          setSearchResult(data);
        })
        .catch(() => {
          setSearching(false);
          setError(true);
        })
        .then(() => {
          setSearching(false);
        });
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Image
          source={require('../assets/imgs/newsapi.png')}
          style={styles.img}
          resizeMode="contain"
        />
        {/* <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image
            source={require('../assets/imgs/history.png')}
            style={styles.history}
            resizeMode="contain"
          />
        </TouchableOpacity> */}
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>Search for any kind of news:</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          value={query}
          onSubmitEditing={handleSearch}
          onChangeText={text => {
            setQuery(text);
          }}
        />
        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={() => {
              handleSearch();
            }}>
            <View style={[styles.button, styles.btnSearch]}>
              <Text style={styles.btnText}>Search</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSearchResult([]);
            }}>
            <View style={[styles.button, styles.btnClear]}>
              <Text style={styles.btnText}>Clear Results</Text>
            </View>
          </TouchableOpacity>
        </View>
        {searching && (
          <View style={styles.loading}>
            <ActivityIndicator color={'white'} />
            <Text style={styles.text}>Searching...</Text>
          </View>
        )}
        {emptyResult && (
          <Text style={styles.text}>
            No news found. Please try to search again with another query.
          </Text>
        )}
        {error && (
          <Text style={styles.text}>
            An error occured trying to find news. Please try again.
          </Text>
        )}
        {!searching && !error && !emptyResult && (
          <FlatList
            style={styles.flatlist}
            data={searchResult}
            renderItem={({item}) => <NewsCardComponent props={item} />}
          />
        )}
      </View>
      <View style={styles.footer}></View>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={stylesModal.main}>
          <View style={stylesModal.header}>
            <Pressable
              style={[stylesModal.button, stylesModal.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Image
                source={require('../assets/imgs/close.png')}
                style={styles.img}
                resizeMode="contain"
              />
            </Pressable>
          </View>
          <View style={stylesModal.content}>
            <Text style={[stylesModal.text, stylesModal.title]}>
              Search History
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const stylesModal = StyleSheet.create({
  main: {},
  button: {},
  buttonClose: {},
  text: {},
  title: {},
  content: {},
});

const styles = StyleSheet.create({
  main: {
    height: Dimensions.get('window').height,
    backgroundColor: '#2c73e8',
  },
  header: {
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  img: {
    width: Dimensions.get('window').width * 0.5,
  },
  history: {
    tintColor: 'white',
    width: 30,
    height: 30,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
  },
  text: {
    color: 'white',
  },
  content: {
    flex: 1,
    color: 'white',
    paddingHorizontal: 15,
  },
  input: {
    backgroundColor: 'white',
    color: 'black',
    height: 60,
    borderRadius: 8,
    marginTop: 8,
    marginBottom: 12,
  },
  flatlist: {
    marginTop: 20,
  },
  loading: {
    marginTop: 20,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 150,
    borderRadius: 10,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSearch: {
    backgroundColor: '#5bc0de',
  },
  btnClear: {
    backgroundColor: '#d9534f',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footer: {},
});

export default HomeScreen;
