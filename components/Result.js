import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Result = ({userAnswers}) => {
  const [percent, setPercent] = useState();
  const [correctCount, setCorrectCount] = useState(0);

  const calculaterScore = () => {
    let correct = 0;
    for (const el of userAnswers) {
      if (el.answerIsCorrect) {
        correct++;
      }
    }
    setCorrectCount(correct);
    const got = (correct / 100) * 10;
    const percentage = got * 100;
    setPercent(percentage);
  };

  useEffect(() => {
    calculaterScore();
  }, [userAnswers]);

  return (
    <>
      {correctCount > 50 ? (
        <View style={styles.container}>
          <View style={styles.outerbox}>
            <Text style={styles.textResult}>Wohoo!</Text>
            <Text style={styles.textScore}>
              Hello genious! You got {correctCount} questions right. That is:
            </Text>
            <Text style={styles.text}>{percent}%</Text>
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.outerbox}>
            <Text style={styles.textResult}>Oh no!</Text>
            <Text style={styles.textScore}>
              Take out your study books. You only got {correctCount} question
              right. That is a lousy:
            </Text>
            <Text style={styles.percent}>{percent}%</Text>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#00000090',
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerbox: {
    width: '80%',
    backgroundColor: 'yellow',
    padding: 50,
    alignItems: 'center',
  },
  innerbox: {
    width: '80%',
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
  },
  textScore: {
    color: 'black',
    fontSize: 20,
    // fontWeight: 'bold',
    paddingBottom: 30,
    textAlign: 'center',
  },
  textResult: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
    paddingBottom: 30,
  },
  percent: {
    color: 'black',
    fontSize: 70,
    fontWeight: 'bold',
    paddingBottom: 30,
  },
});

export default Result;
