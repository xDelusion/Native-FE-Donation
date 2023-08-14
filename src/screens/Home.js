import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Image,
} from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getRecipientReqs } from "../apis/recipientRequest/recipient";
import RecipientRequestItem from "../components/HomeRecipientRequest/RecipientRequestItem";
import BloodTypeButton from "../components/HomeRecipientRequest/BloodTypeButton";
import { colors } from "../utils/colors/colors";
import ROUTES from "../navigation/routes";

import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
const Home = ({ navigation }) => {
  return (
    <View
      flex={1}
      style={{
        alignItems: "stretch",
        justifyContent: "space-between",
      }}
    >
      <View flex={0.25}>
        <View
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderBottomRightRadius="2"
        >
          <View style={styles.container}>
            <Image
              source={require("../../assets/Life1-removebg-preview.png")}
              style={{ width: 200, height: 150 }}
            />
          </View>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{
          flex: 0.7,
        }}
      >
        <View style={{ flex: 0.45, paddingTop: 10 }}>
          <Image
            source={require("../../assets/bloodBank.jpg")}
            style={{ height: "100%", width: "100%", borderRadius: 40 }}
          />
        </View>
        <View style={{ flex: 0.6, paddingTop: 10, margin: 10 }}>
          <Image
            source={require("../../assets/conditions.jpg")}
            style={{ height: "100%", width: "100%" }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

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
