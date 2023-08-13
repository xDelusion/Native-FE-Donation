
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getRecipientReqs } from "../apis/recipientRequest/recipient";
import RecipientRequestItem from "../components/HomeRecipientRequest/RecipientRequestItem";
import BloodTypeButton from "../components/HomeRecipientRequest/BloodTypeButton";
import { colors } from "../utils/colors/colors";
import ROUTES from "../navigation/routes";
// import Chart from "../components/HomeRecipientRequest/Chart";

const Home = ({ navigation }) => {


  return (
    <View
      style={[
        styles.headerContainer,
        { flexDirection: "row", justifyContent: "space-between" },
      ]}
    >
      <Text>Home</Text>
      <Button
        title="Statistics"
        onPress={() => {
          navigation.navigate(ROUTES.APPROUTES.STATISTICS);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightgray,
    height: "100%",
  },
  headerContainer: {
    padding: 20,
    backgroundColor: colors.red,
    borderBottomRightRadius: 100,
    shadowColor: colors.darkgray,
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 10 },
  },
  contentContainer: {
    flex: 1,
    flexDirection: "column",
  },
  section: {
    flex: 1,
    padding: 20,
  },
  bloodGroupContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
});

export default Home;
