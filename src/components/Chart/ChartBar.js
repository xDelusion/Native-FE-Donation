import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../utils/colors/colors";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <View style={styles.chart_bar}>
      <View style={styles.chart_bar__inner}>
        <View
          style={[styles.chart_bar__fill, { height: barFillHeight }]}
        ></View>
      </View>
      <View style={styles.chart_bar__label}></View>
    </View>
  );
};

export default ChartBar;

const styles = StyleSheet.create({
  chart_bar: {
    height: "100%",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  chart_bar__inner: {
    height: "100%",
    width: "100%",
    border: 1,
    borderColor: colors.black,
    backgroundColor: colors.red,
    overflow: "hidden",
    borderRadius: 12,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  chart_bar__fill: {
    backgroundColor: colors.grey,
    width: "100%",
    transition: "all 0.3s ease-out",
  },
  chart_bar__label: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
