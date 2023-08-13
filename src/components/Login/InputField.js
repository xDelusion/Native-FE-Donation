import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { colors } from "../../utils/colors/colors";

const InputField = ({ label, placeholder, secureTextEntry, onChangeText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        autoCapitalize="none"
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: colors.red,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: colors.white,
    width: 300,
  },
  text: {
    color: colors.red,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default InputField;
