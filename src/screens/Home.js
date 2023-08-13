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
import { Link } from "@react-navigation/native";
import ROUTES from "../navigation/routes";

const Home = ({ navigation }) => {
  return (
    <View
      flex={1}
      style={{ alignItems: "stretch", justifyContent: "space-between" }}
    >
      <View flex={0.2}>
        <View
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderBottomRightRadius="2"
        >
          <View style={styles.container}>
            {/* <Link
              text="About"
              onPress={() => navigation.navigate(ROUTES.APPROUTES.ABOUT)}
            /> */}
            <Button
              title="heloo"
              onPress={() => navigation.navigate(ROUTES.APPROUTES.ABOUT)}
            />
          </View>
        </View>
      </View>
      <ScrollView contentContainerStyle={{ flex: 0.7, gap: 50 }}>
        <View style={{ flex: 1 }}>
          <Image
            source={require("../../assets/bloodBank.jpg")}
            style={{ height: "100%", width: "100%" }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Image
            source={require("../../assets/bloodBank.jpg")}
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
});

export default Home;
