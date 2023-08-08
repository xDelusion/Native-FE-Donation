import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UserContext from "../context/UserContext";
import { colors } from "../utils/colors/colors";
import ROUTES from "./routes";
import { removeToken } from "../apis/auth/storage";
import AuthNavigation from "./AuthNavigation";
import { useContext } from "react";
import HomeNavigation from "./HomeNavigation";
import { TouchableOpacity } from "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <Tab.Screen name={ROUTES.APPROUTES.HOME_NAV} component={HomeNavigation} />
    </Tab.Navigator>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
