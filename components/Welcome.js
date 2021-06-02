import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import BtnDefault from './BtnDefault';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.topContainer}>
        <Text style={styles.topText}>Check your skills</Text>
      </SafeAreaView>
      <View style={styles.bottomContainer}>
        <BtnDefault
          title="Start quiz"
          onPress={() => navigation.navigate('Quiz')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  topContainer: {
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText: {
    color: '#000',
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bottomContainer: {
    backgroundColor: 'yellow',
    width: '100%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomText: {
    color: '#fff',
    fontSize: 30,
  },
});

export default Welcome;
