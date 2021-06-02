import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const BtnDefault = ({onPress, title}) => {
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
    backgroundColor: 'black',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 36,
    // padding: 9,
    // margin: 5,
  },
  appButtonText: {
    fontSize: 22,
    color: '#fff',
    // fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default BtnDefault;
