import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../navigation/routes";

const Recipient = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Recipient</Text>
    </View>
  );
};

export default Recipient;

const styles = StyleSheet.create({});
