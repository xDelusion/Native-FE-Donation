import { StyleSheet, Text, View } from "react-native";
import React from "react";

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarHideOnKeyboard: true,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    backgroundColor: colors.white,
  },
};
const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  const { setUser, user } = useContext(UserContext);
  return (
   
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
