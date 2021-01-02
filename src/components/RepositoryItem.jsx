import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from './Text'
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  flexContainer: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 8,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
  },
  flexContainer2: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 8,
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  language: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    padding: 10,
    alignSelf: 'flex-start',
    borderRadius: 5
  },
  flexItemA: {
    flexGrow: 0,
    margin: 5,
  },
  flexItemB: {
    flexGrow: 1,
    padding: 8,
  },
  flexItemC: {
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

const RepositoryItem = (props) => {
  return (
    <View>
      <View style={styles.flexContainer}>
        <View style={styles.flexItemA}>
        <Image
          style={styles.logo}
          source={{uri: props.image}}
        />
        </View>
        <View style={styles.flexItemB}>
          <Text fontWeight='bold' fontSize='subheading'>{props.fullName}</Text>
          <Text>{props.description}</Text>
          <Text style={styles.language}>{props.language}</Text>
        </View>
      </View>
      <View style={styles.flexContainer2}>
        <View style={styles.flexItemC}>
          {props.stars >= 1000 ?
          <Text fontWeight='bold'>{(props.stars/1000).toFixed(1)}k</Text> :
          <Text>{props.stars}</Text>}
          <Text>Stars</Text>
        </View>
        <View style={styles.flexItemC}>
          {props.forks >= 1000 ?
          <Text fontWeight='bold'>{(props.forks/1000).toFixed(1)}k</Text> :
          <Text fontWeight='bold'>{props.forks}</Text>}
          <Text>Forks</Text>
        </View>
        <View style={styles.flexItemC}>
          <Text fontWeight='bold'>{props.reviews}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.flexItemC}>
          <Text fontWeight='bold'>{props.rating}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );
};
  
export default RepositoryItem;