//import liraries
import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  View,
  Text,
} from 'react-native';

import {NavigationProp, useNavigation} from '@react-navigation/native';

const NewsCardComponent = function ({props}) {
  // const navigation = useNavigation<NavigationProp<any>>();

  return (
    // <TouchableOpacity
    //   key={`touch-each-news-${props.id}`}
    //   style={{alignItems: 'center'}}
    //   onPress={() => {
    //     // navigation.navigate('Details', {id: props.id});
    //   }}>
    <View style={styles.main}>
      <Image source={{uri: props.imageUrl}} style={styles.image} />
      <View style={styles.txtCnt}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={[styles.source]}>Source: {props.source}</Text>
        <Text style={styles.data}>{props.description}</Text>
      </View>
    </View>
    // </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 0,
    borderBottomWidth: 0,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    marginBottom: 10,
  },
  txtCnt: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    resizeMode: 'cover',
    justifyContent: 'center',
    borderRadius: 20,
    borderTopLeftRadius: 20,
  },
  source: {
    fontSize: 12,
    textAlign: 'right',
    marginRight: 15,
  },
  categoryDot: {
    width: 10,
    height: 10,
    borderRadius: 8,
    bottom: 0,
    position: 'absolute',
    marginBottom: 3,
  },
  title: {
    alignSelf: 'flex-start',
    fontSize: 16,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  description: {
    marginVertical: 10,
    fontSize: 14,
    textAlign: 'right',
    marginRight: 10,
  },
});

export default NewsCardComponent;
