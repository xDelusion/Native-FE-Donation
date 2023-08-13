import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "../../utils/colors/colors";

const BloodTypeButton = ({ bloodType, isFocused, onFocus, onPress }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onFocus(bloodType);
        onPress();
      }}
      style={[
        styles.mobileButton,
        {
          backgroundColor: isFocused ? colors.red : colors.white,
          borderColor: isFocused ? colors.white : colors.red,
        },
      ]}
    >
      <Text
        style={[
          styles.buttonText,
          {
            color: isFocused ? colors.white : colors.red,
          },
        ]}
      >
        {" "}
        {bloodType}
      </Text>
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
    marginHorizontal: 5,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 18,
    color: colors.white,
  },
});

export default BloodTypeButton;
