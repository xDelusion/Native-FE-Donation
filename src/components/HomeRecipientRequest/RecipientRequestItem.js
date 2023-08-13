import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../../utils/colors/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const RecipientRequestItem = ({ request, onPressDonate }) => {
  const bloodBagIcons = Array.from(
    { length: request.noOfBloodBags },
    (_, index) => (
      <MaterialCommunityIcons
        key={index}
        name="blood-bag"
        size={24}
        color={colors.red}
      />
    )
  );

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text>{request.serial_no}</Text>
        <Text>{request.bloodType}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text>{request.createdAt}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text>{request.noOfBloodBags}</Text>
        <View style={styles.bloodBagsContainer}>{bloodBagIcons}</View>
        <TouchableOpacity style={styles.donateButton} onPress={onPressDonate}>
          <Text>Donate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: colors.lightgray,
    borderWidth: 1,
    borderColor: colors.darkgray,
    borderRadius: 8,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  donateButton: {
    backgroundColor: colors.red,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  bloodBagsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default RecipientRequestItem;
