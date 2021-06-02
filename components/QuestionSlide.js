import React, {useState} from 'react';
import {useEffect} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
// const {device_width} = Dimensions.get('window');

const QuestionSlide = ({question, questionNo, count}) => {
  const [replaced, setReplaced] = useState();

  useEffect(() => {
    const newQuestion = question
      .replace('&quot;', '"')
      .replace('<[^>]+>', '')
      .replace('&#39;', "'")
      .replace('&#32;', ' ')
      .replace('&eacute;', 'é')
      .replace('&rsquo;', "'")
      .replace('&#039;', "'");
    setReplaced(newQuestion);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.topNumber}>
        {questionNo} / {count}
      </Text>
      <View style={styles.topContainer}>
        <Text style={styles.topText}>
          {questionNo}. {replaced}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: device_width,
    justifyContent: 'center',
    alignItems: 'center',
    height: '40%',
  },
  topNumber: {
    fontSize: 16,
    paddingBottom: 10,
    position: 'absolute',
    top: 20,
  },
  topContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  topText: {
    color: '#000',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default QuestionSlide;
