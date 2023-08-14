import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "../../utils/colors/colors";
import { View } from "react-native";
const BloodTypeButton = ({ bloodType, isFocused, onFocus, onPress }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onFocus(bloodType);
        onPress();
      }}
      style={styles.radioButtonContainer}
    >
      <Text
        style={[
          styles.radioButtonLabel,
          {
            color: isFocused ? colors.red : colors.black,
          },
        ]}
      >
        {bloodType}
      </Text>
      <View
        style={[
          styles.radioButton,
          {
            backgroundColor: isFocused ? colors.red : colors.white,
            borderColor: colors.darkgray,
          },
        ]}
      >
        {isFocused && <View style={styles.innerRadioButton} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    marginHorizontal: 5,
  },
  radioButtonLabel: {
    marginLeft: 10,
    fontSize: 14,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  innerRadioButton: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.red,
  },
});

export default BloodTypeButton;
