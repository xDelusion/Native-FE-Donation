import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { colors } from "../../utils/colors/colors";

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../media/project_logo.png")}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 350,
    height: 350,
  },
});

export default Logo;
