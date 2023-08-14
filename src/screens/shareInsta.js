import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../utils/colors/colors";

const ShareDonationScreen = ({ donationInfo }) => {
  const handleShareInstagram = () => {
    // Implement logic to open Instagram with the donation information as a caption.
    // This might involve using third-party libraries or APIs.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Share Donation Info on Instagram</Text>
      <View style={styles.donationInfoContainer}>
        <Text style={styles.label}>Donor Name:</Text>
        <Text style={styles.info}>{donationInfo.donorName}</Text>
        <Text style={styles.label}>Blood Type:</Text>
        <Text style={styles.info}>{donationInfo.bloodType}</Text>
        <Text style={styles.label}>Date of Donation:</Text>
        <Text style={styles.info}>{donationInfo.date}</Text>
      </View>
      <TouchableOpacity
        onPress={handleShareInstagram}
        style={styles.shareButton}
      >
        <Text style={styles.shareButtonText}>Share on Instagram</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.light,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  donationInfoContainer: {
    borderWidth: 1,
    borderColor: colors.darkgray,
    padding: 20,
    marginBottom: 20,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  info: {
    marginBottom: 15,
  },
  shareButton: {
    backgroundColor: colors.red,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  shareButtonText: {
    color: colors.white,
    fontWeight: "bold",
  },
});

export default ShareDonationScreen;
