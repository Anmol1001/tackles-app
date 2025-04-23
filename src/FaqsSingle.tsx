import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import HeaderComponent from './components/HeaderComponent';

type Props = {};

const FaqsSingle = ({route}: {route: any}) => {
  const {id, category, questions, question, answer} = route.params;

  return (
    <ScrollView style={{backgroundColor: '#fff', flex: 1}}>
      <HeaderComponent
        style={{
          paddingHorizontal: '5%',
          borderBottomWidth: 1,
          borderColor: '#CAD2DF',
        }}
      />
      <View
        style={{
          marginHorizontal: '5%',
          paddingTop: '6%',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 24,
            fontWeight: '700',
            color: '#0E61CD',
            marginBottom: '5%',
          }}>
          {category}
        </Text>

        {questions.map((q: any, index: number) => (
          <View key={index} style={styles.questionContainer}>
            <View style={{flexDirection: 'row', gap: 8}}>
              <Text style={styles.question}>{q.num}.</Text>
              <View style={{width: '93.5%'}}>
                <Text style={styles.question}>{q.question}</Text>
                <Text style={styles.answer}>{q.answer}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  questionContainer: {
    marginBottom: 15,
  },
  question: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: '3%',
  },
  answer: {
    fontSize: 18,
    fontWeight: '400',

    flexWrap: 'wrap',
  },
});

export default FaqsSingle;
