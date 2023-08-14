import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import ROUTES from "./routes";

import React from "react";
import { colors } from "../utils/colors/colors";

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
    color: colors.red,
  },
};
const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      headStyle={{ backgroundColor: "red" }}
      screenOptions={{
        // headerTitle: "Test",
        headerShown: true,
      }}
    >
      <Stack.Screen name={ROUTES.AUTHROUTES.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.AUTHROUTES.REGISTER} component={Register} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
