import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Image,
} from "react-native";

import { Link } from "@react-navigation/native";

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
      style={{ alignItems: "stretch", justifyContent: "space-between" }}
    >
      <View flex={0.1}>
        <View
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderBottomRightRadius="2"
        >
          <View style={styles.container}></View>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
        }}
      >
        <View style={{ flex: 0.7, paddingTop: 2, margin: 5 }}>
          <Image
            source={require("../../assets/conditions.jpg")}
            style={{ height: "100%", width: "100%" }}
          />
        </View>
        <View style={{ flex: 0.6, paddingTop: 2 }}>
          <Image
            source={require("../../assets/bloodBank.jpg")}
            style={{ height: "100%", width: "100%", borderRadius: 40 }}
          />
        </View>
        <View style={{ flex: 0.6, paddingTop: 2, margin: 5 }}>
          <Image
            source={require("../../assets/donaaate.jpg")}
            style={{ height: "100%", width: "100%", borderRadius: 40 }}
          />
        </View>
      </ScrollView>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoContainer}
          source={require("../../assets/Life.png")}
        />
      </View>
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
  logoContainer: {
    position: "absolute",
    width: 60,
    height: 40,
    marginLeft: 10,
    marginTop: 5,
    // shadowColor: colors.white,
    // shadowOpacity: 50,
    // shadowOffset: 1,
  },
});

export default Home;
