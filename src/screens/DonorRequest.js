import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useMutation } from "@tanstack/react-query";
import { sendRequest } from "../apis/donorRequest";
import { shadow } from "react-native-paper";
const DonorRequest = () => {
  const q1 = "Has it been 3 months since the last time you donate?";
  const q2 = "Do you have chronic disease? (ex. heart, kidney, liver, cancer)";
  const q3 = "Did you have a surgery in the last 6 months?";
  const q4 = "Did you have blood transfusion in the last year?";
  /////////////////////////////////////////////////////////
  const [q1Answer, setQ1Answer] = useState("");
  const [q2Answer, setQ2Answer] = useState("");
  const [q3Answer, setQ3Answer] = useState("");
  const [q4Answer, setQ4Answer] = useState("");
  /////////////////////////////////////////////////////////

  const { mutate: sendRequestFn, error } = useMutation({
    mutationFn: (d) => sendRequest(d),
    onSuccess: (data) => {
      navigation.navigate(ROUTES.APPROUTES.HOME);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleSubmit = () => {
    const userAnswers = [
      { question: q1, answer: q1Answer },
      { question: q2, answer: q2Answer },
      { question: q3, answer: q3Answer },
      { question: q4, answer: q4Answer },
    ];

    sendRequestFn(userAnswers);
  };
  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <Text style={styles.title}>Donor Request Form</Text>
        <Text style={styles.question}>{q1}</Text>
        <TextInput
          style={styles.answerInput}
          value={q1Answer}
          placeholder="Yes/No"
          onChangeText={(text) => setQ1Answer(text)}
        />

        <Text style={styles.question}>{q2}</Text>
        <TextInput
          style={styles.answerInput}
          value={q2Answer}
          placeholder="Yes/No"
          onChangeText={(text) => setQ2Answer(text)}
        />

        <Text style={styles.question}>{q3}</Text>
        <TextInput
          style={styles.answerInput}
          value={q3Answer}
          placeholder="Yes/No"
          onChangeText={(text) => setQ3Answer(text)}
        />

        <Text style={styles.question}>{q4}</Text>
        <TextInput
          style={styles.answerInput}
          value={q4Answer}
          placeholder="Yes/No"
          onChangeText={(text) => setQ4Answer(text)}
        />

        <Button
          title="Submit"
          onPress={handleSubmit}
          style={styles.submitButton}
        >
          Submit
        </Button>
      </View>
    </View>
  );
};

export default DonorRequest;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flex: 1,
  },
  title: {
    marginTop: 100,
    fontSize: 25,
    color: "#8b0000",
    fontWeight: "bold",
    paddingVertical: 10,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#8b0000",
  },
  answerInput: {
    borderWidth: 1,
    borderColor: "#8b0000",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: "#8b0000",
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
    color: "#fff",
    fontWeight: "bold",
  },

  rectangle: {
    width: 428,
    height: 242,
    left: 0,
    top: 0,
    background: "#8b0000",
    borderBottomRightRadius: 121,
  },
});
