import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ROUTES from "./routes";
import Home from "../screens/Home";

const Stack = createStackNavigator();

const HomeNavigation = ({ navigation }) => {
  return (
    <Stack.Navigator
      headStyle={{ backgroundColor: "red" }}
      screenOptions={{ headerTitle: "Test", headerShown: false }}
    >
      <Stack.Screen name={ROUTES.APPROUTES.HOME} component={Home} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;

const styles = StyleSheet.create({});
