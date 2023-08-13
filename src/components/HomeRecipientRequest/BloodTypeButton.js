import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "../../utils/colors/colors";

const BloodTypeButton = ({ bloodType, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.mobileButton}>
      <Text style={styles.buttonText}>{bloodType}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mobileButton: {
    width: "30%",
    height: 50,
    backgroundColor: colors.red,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 18,
    color: colors.white,
  },
});

export default BloodTypeButton;
