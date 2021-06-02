import React, {Fragment, useState, useEffect} from 'react';
import {ScrollView, StyleSheet, View, Dimensions, Text} from 'react-native';
import QuestionSlide from './QuestionSlide';
import QuizContainer from './QuizContainer';
import Answers from './Answers';
import BtnNext from './BtnNext';
import Result from './Result';

const device_width = Dimensions.get('window').width;

const Quiz = () => {
  const [isLoading, setIsLoading] = useState();
  const [allQuestions, setAllQuestions] = useState([]);
  const [userSelectedAnswer, setUserSelectedAnswer] = useState([]);
  const [score, setScore] = useState(0);
  const [currentNo, setCurrentNo] = useState(0);
  const [quizOver, setQuizOver] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [count, setCount] = useState(0);

  const goForward = () => {
    setCount(count + 1);
    this.scrollSlide.scrollTo({
      x: (count + 1) * device_width,
      y: 0,
      animated: true,
    });
  };

  const getQuizQuestions = async () => {
    try {
      const url =
        'https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple';
      const data = await (await fetch(url)).json();
      console.log(data.results, 'DATAAAA');
      return data.results.map(quiz => ({
        ...quiz,
        answers: [quiz.correct_answer, ...quiz.incorrect_answers],
      }));
    } catch (error) {
      throw new Error(error);
    }
  };

  const startQuiz = async () => {
    setIsLoading(true);
    setQuizOver(false);
    try {
      const newQuestions = await getQuizQuestions();
      setAllQuestions(newQuestions);
      setScore(0);
      setUserSelectedAnswer([]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const answerSelected = (answer, index) => {
    if (!quizOver) {
      //check if selected answer is correct
      const answerIsCorrect = allQuestions[currentNo].correct_answer === answer;
      console.log('answerIsCorrect', answerIsCorrect);

      //increment score if correct answer
      if (answerIsCorrect) {
        setScore(currScore => currScore + 1);
      }

      //save current score to userSelected answer
      const currentAnswerObject = {
        question: allQuestions[currentNo].question,
        answer,
        answerIsCorrect,
        correctAnswer: allQuestions[currentNo].correct_answer,
      };
      setUserSelectedAnswer(currentanswers => [
        ...currentanswers,
        currentAnswerObject,
      ]);
      goForward();
    }
  };

  const nextQuestion = () => {
    if (!quizOver && currentNo < allQuestions.length - 1) {
      setCurrentNo(number => number + 1);
    } else {
      setQuizOver(true);
    }
  };

  useEffect(() => {
    if (userSelectedAnswer.length > 0) {
      nextQuestion();
    }
  }, [userSelectedAnswer]);

  useEffect(() => {
    startQuiz();
  }, []);

  return (
    <QuizContainer>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>loading ...</Text>
        </View>
      ) : (
        <ScrollView
          ref={ref => {
            this.scrollSlide = ref;
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          pagingEnabled
          decelerationRate="fast">
          {allQuestions
            ? allQuestions.map(({question, answers}, index) => {
                const last = index === allQuestions.length - 1;
                return (
                  <View key={index} style={styles.container}>
                    <QuestionSlide
                      questionNo={index + 1}
                      question={question}
                      count={allQuestions.length}
                    />
                    <Fragment>
                      <Answers
                        answers={answers}
                        answerSelected={answerSelected}
                      />
                    </Fragment>
                    <View style={styles.buttonContainer}>
                      {!last ? (
                        <BtnNext
                          title="Skip"
                          onPress={() => {
                            goForward();
                            answerSelected('incorrect answer');
                          }}
                        />
                      ) : (
                        <BtnNext
                          title="Submit"
                          onPress={() => {
                            setShowResult(true);
                          }}
                        />
                      )}
                    </View>
                    {showResult && <Result userAnswers={userSelectedAnswer} />}
                  </View>
                );
              })
            : null}
        </ScrollView>
      )}
    </QuizContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: device_width,
  },
  loadingContainer: {
    ...StyleSheet.absoluteFill,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  loadingText: {
    color: 'black',
    fontSize: 18,
  },
  buttonContainer: {
    backgroundColor: 'black',
    paddingBottom: 30,
  },
});
export default Quiz;
