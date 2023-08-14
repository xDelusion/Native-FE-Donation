import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ROUTES from "./routes";
import DonorRequest from "../screens/DonorRequest";

const Stack = createStackNavigator();

const DonorRequestNavigation = () => {
  return (
    <Stack.Navigator


    headStyle={{ backgroundColor: "red" }}
    screenOptions={{ headerTitle: "Test", headerShown: false }}


    >
      <Stack.Screen name={ROUTES.APPROUTES.DR} component={DonorRequest} />
    </Stack.Navigator>
  );
};

export default DonorRequestNavigation;

const styles = StyleSheet.create({});
