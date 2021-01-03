import React from 'react';
import { View, Image, TouchableHighlight, StyleSheet } from 'react-native';
import Text from './Text'
import Constants from 'expo-constants';
import theme from '../theme';
import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
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
    flexShrink: 1,
    padding: 8,
  },
  flexItemC: {
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  submit: {
    margin: 10,
    padding: 10,
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
  },
  submitText: {
    color:'#fff',
    textAlign:'center',
  }
});

const RepositoryItem = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <View style={styles.flexItemA}>
        <Image
          style={styles.logo}
          source={{uri: props.image}}
        />
        </View>
        <View style={styles.flexItemB}>
          <Text testID='name' fontWeight='bold' fontSize='subheading'>{props.fullName}</Text>
          <Text testID='description'>{props.description}</Text>
          <Text testID='language' style={styles.language}>{props.language}</Text>
        </View>
      </View>
      <View style={styles.flexContainer2}>
        <View style={styles.flexItemC}>
          {props.stars >= 1000 ?
          <Text testID='stars' fontWeight='bold'>{(props.stars/1000).toFixed(1)}k</Text> :
          <Text testID='stars'>{props.stars}</Text>}
          <Text>Stars</Text>
        </View>
        <View style={styles.flexItemC}>
          {props.forks >= 1000 ?
          <Text testID='forks' fontWeight='bold'>{(props.forks/1000).toFixed(1)}k</Text> :
          <Text testID='forks' fontWeight='bold'>{props.forks}</Text>}
          <Text>Forks</Text>
        </View>
        <View style={styles.flexItemC}>
          <Text testID='reviews' fontWeight='bold'>{props.reviews}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.flexItemC}>
          <Text testID='rating' fontWeight='bold'>{props.rating}</Text>
          <Text>Rating</Text>
        </View>
      </View>
      {props.openButton &&
      <TouchableHighlight
         style={styles.submit}
         onPress={() => {Linking.openURL(props.url);}}
      >
        <Text style={styles.submitText}>Open in GitHub</Text>
      </TouchableHighlight>}
    </View>
  );
};
  
export default RepositoryItem;