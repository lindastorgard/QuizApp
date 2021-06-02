import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const BtnNext = ({onPress, title}) => {
  return (
    <TouchableOpacity style={styles.appButtonContainer} onPress={onPress}>
      <Text style={styles.appButtonText}>{title}</Text>
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
    width: '40%',
    alignSelf: 'center',
  },
  appButtonText: {
    fontSize: 22,
    color: '#000',
    alignSelf: 'center',
  },
});

export default BtnNext;
