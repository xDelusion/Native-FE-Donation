import { StyleSheet, Text, View } from "react-native";
import React from "react";

import ChartBar from "./ChartBar";
const Chart = (props) => {
  return (
    <View style={styles.chart}>
      {props.bloodTypes.map((bloodType) => (
        <ChartBar
          key={bloodType.label}
          value={bloodType.value}
          maxValue={null}
          label={bloodType.label}
        />
      ))}
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({
  chart: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "black",
    textAlign: "center",
    flex: 1,
    justifyContent: "center",
    height: 300,
  },
});
