import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const BtnAnswer = ({onPress, answer}) => {
  const [replaced, setReplaced] = useState();

  useEffect(() => {
    const hej = answer
      .replace('&quot;', '"')
      .replace('<[^>]+>', '')
      .replace('&#39;', "'")
      .replace('&#32;', ' ')
      .replace('&eacute;', 'é')
      .replace('&rsquo;', "'")
      .replace('&#039;', "'");
    setReplaced(hej);
  }, []);
  return (
    <TouchableOpacity style={styles.appButtonContainer} onPress={onPress}>
      <Text style={styles.appButtonText}>{replaced}</Text>
    </TouchableOpacity>
  );
};

TouchableOpacity.defaultProps = {activeOpacity: 0.8};

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: 'yellow',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 36,
    margin: 4,
  },
  appButtonText: {
    fontSize: 20,
    color: '#000',
    // fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default BtnAnswer;
