import React from "react";
import { ScrollView, TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "../../utils/colors/colors";

const BloodTypeButton = ({ bloodType, isFocused, onFocus, onPress }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <TouchableOpacity
        onPress={() => {
          onFocus(bloodType);
          onPress();
        }}
        style={[
          styles.mobileButton,
          {
            backgroundColor: isFocused ? colors.red : colors.white,
            borderColor: colors.darkgray,
            borderWidth: 2,
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
          {bloodType}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mobileButton: {
    minWidth: 35, // Set a minimum width for buttons
    height: 35,
    backgroundColor: colors.red,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 14,
    color: colors.white,
  },
});

export default BloodTypeButton;
