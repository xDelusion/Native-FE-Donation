import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BloodTypeChart = (props) => {
  const chartConfig = [
    {
      label: "A+",
      value: 0,
    },
    {
      label: "A-",
      value: 0,
    },
    {
      label: "B+",
      value: 0,
    },
    {
      label: "B-",
      value: 0,
    },
    {
      label: "AB+",
      value: 0,
    },
    {
      label: "AB-",
      value: 0,
    },
    {
      label: "O+",
      value: 0,
    },
    {
      label: "O-",
      value: 0,
    },
  ];
  for (const bloodType of props.RecipientRequest) {
    const choosen_type = props.bloodTypes[bloodType];
    chartConfig;
    return (
      <View>
        <Text>BloodTypeChart</Text>
      </View>
    );
  }
};
export default BloodTypeChart;

const styles = StyleSheet.create({});
