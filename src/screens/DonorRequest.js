import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useMutation } from "@tanstack/react-query";
import { sendRequest } from "../apis/donorRequest";
import { shadow } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../utils/colors/colors";
import ROUTES from "../navigation/routes";
const DonorRequest = ({ navigation }) => {
  const q1 = "Has it been 3 months since the last time you donate?";
  const q2 = "Do you have chronic disease? (ex. heart, kidney, liver, cancer)";
  const q3 = "Did you have a surgery in the last 6 months?";
  const q4 = "Did you have blood transfusion in the last year?";

  const [q1Answer, setQ1Answer] = useState("");
  const [q2Answer, setQ2Answer] = useState("");
  const [q3Answer, setQ3Answer] = useState("");
  const [q4Answer, setQ4Answer] = useState("");

  const { mutate: sendRequestFn, error } = useMutation({
    mutationFn: (d) => sendRequest(d),
    onSuccess: (data) => {
      Alert.alert("Thank you", "Your request has been submitted successfully!");
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
    <View flex={1}>
      <View flex={0.2}>
        <View
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderBottomRightRadius="2"
        >
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
              {/* 
        <Button
          title="Submit"
          onPress={handleSubmit}
          style={styles.submitButton}
        >
          Submit
        </Button> */}
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: colors.red,
                    width: 200,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 20,
                    borderRadius: 8,
                  }}
                  onPress={handleSubmit}
                >
                  <Text
                    style={{
                      color: colors.white,
                      fontWeight: "bold",
                      fontSize: 20,
                    }}
                  >
                    Submit
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DonorRequest;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.red,
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderBottomRightRadius: 100,
    shadowColor: colors.darkgray,
    shadowOpacity: 50,
    shadowOffset: 10,
  },
  title: {
    marginTop: 20,
    marginBottom: 100,
    fontSize: 40,
    color: colors.white,
    fontWeight: "bold",
  },
  question: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.red,
  },
  answerInput: {
    borderWidth: 1,
    borderColor: colors.red,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: colors.red,
    borderRadius: 8,
    padding: 20,
    paddingTop: 10,
    alignItems: "center",
    color: "#fff",
    fontWeight: "bold",
  },

  rectangle: {
    width: 400,
    height: 250,
    left: 0,
    top: 0,
    background: colors.red,
    borderBottomRightRadius: 121,
  },
});
