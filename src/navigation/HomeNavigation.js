import { createStackNavigator } from "@react-navigation/stack";
import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import ROUTES from "./routes";
import Home from "../screens/Home";
import Statistics from "../screens/Statistics";
import About from "../screens/About";

const Stack = createStackNavigator();

const HomeNavigation = ({ navigation }) => {
  return (
    <Stack.Navigator
      headStyle={{ backgroundColor: "red" }}
      screenOptions={{
        headerTitle: "Test",
        headerShown: false,
      }}
    >
      <Stack.Screen name={ROUTES.APPROUTES.HOME} component={Home} />
      <Stack.Screen name={ROUTES.APPROUTES.ABOUT} component={About} />
      <Stack.Screen name={ROUTES.APPROUTES.STATISTICS} component={Statistics} />
      {/* <Stack.Screen name={ROUTES.APPROUTES.RECIPIENT} component={Recipient} /> */}
      {/* <Stack.Screen
        name={ROUTES.APPROUTES.RECIPIENT}
        component={Recipient}
        options={{
          headerLeft: (props) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(ROUTES.APPROUTES.STATISTICS);
                }}
                style={{
                  flex: 1,
                  flexDirection: "row",
                }}
              >
                <MaterialIcons
                  name="keyboard-arrow-left"
                  size={24}
                  color={colors.black}
                />
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: colors.black,
                  }}
                >
                  Back to STATISTICS
                </Text>
              </TouchableOpacity>
            );
          },
        }}
      /> */}
    </Stack.Navigator>
  );
};

export default HomeNavigation;

const styles = StyleSheet.create({});
