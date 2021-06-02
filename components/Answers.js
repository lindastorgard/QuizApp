import React from 'react';
import {StyleSheet, View} from 'react-native';
import BtnAnswer from './BtnAnswer';

const Answers = ({answers, answerSelected}) => {
  return (
    <View style={styles.container}>
      {answers.map((answer, index) => (
        <BtnAnswer
          key={index}
          answer={answer}
          onPress={() => {
            answerSelected(answers[index], index);
          }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '40%',
    backgroundColor: 'black',
  },
});

export default Answers;
