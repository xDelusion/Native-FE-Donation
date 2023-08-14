import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ROUTES from "./routes";
import Statistics from "../screens/Statistics";

const Stack = createStackNavigator();

const StatisticNavigation = ({ navigation }) => {
  return (
    <Stack.Navigator
      headStyle={{ backgroundColor: "red" }}
      screenOptions={{ headerTitle: "Test", headerShown: false }}
    >
      <Stack.Screen name={ROUTES.APPROUTES.STATISTICS} component={Statistics} />
      <Stack.Screen name={ROUTES.APPROUTES.RECIPIENT} component={Recipient} />
    </Stack.Navigator>
  );
};

export default StatisticNavigation;

const styles = StyleSheet.create({});
