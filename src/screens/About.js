import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { colors } from "../utils/colors/colors";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import ROUTES from "../navigation/routes";

const About = ({ navigation }) => {
  return (
    <View flex={1}>
      <View flex={0.1}>
        <View
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderBottomRightRadius="2"
        >
          <View style={styles.container}>
            <Text style={styles.text}>About</Text>
            {/* <ScrollView
              contentContainerStyle={{
                flex: 1,
                height: 200,
                width: "100%",
                fontWeight: "bold",
                marginTop: 30,
              }}
            > */}
            <View
              style={{
                height: 300,
                width: "100%",
                fontWeight: "bold",
                marginTop: 30,
                gap: 5,
              }}
            >
              <Text
                style={{ fontSize: 30, fontWeight: "bold", color: colors.red }}
              >
                Who we are
              </Text>
              <Text style={{ fontSize: 20, fontWeight: "normal" }}>
                We’re Blood Bank, and we’re here to help donors give life and
                recipients get it. We work together, with donors, communities
                and health providers.{" "}
              </Text>
              <Text
                style={{ fontSize: 30, fontWeight: "bold", color: colors.red }}
              >
                Our purpose?
              </Text>
              <Text Text style={{ fontSize: 20, fontWeight: "normal" }}>
                Life-giving donations forlife-changing outcomes.
              </Text>

              <View style={{ paddingTop: 2, marginTop: 20 }}>
                <Image
                  source={require("../../assets/blood-donor.jpg")}
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: 6,
                  }}
                />
              </View>
              <View
                style={{
                  height: 300,
                  width: "100%",
                  fontWeight: "bold",
                  marginTop: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    color: colors.red,
                  }}
                >
                  Contact Us:
                </Text>
                <View
                  style={{
                    marginTop: 30,
                    justifyContent: "center",
                    alignContent: "center",
                    flexDirection: "row",
                    gap: 50,
                  }}
                >
                  <AntDesign name="phone" size={30} color={colors.red} />
                  <AntDesign name="instagram" size={30} color={colors.red} />
                  <AntDesign name="twitter" size={30} color={colors.red} />
                </View>
                <View
                  style={{
                    marginTop: 25,
                    justifyContent: "center",
                    alignContent: "center",
                    flexDirection: "row",
                  }}
                >
                  <Text>© 2023 CODED Academy KUWAIT, All rights reserved</Text>
                </View>
              </View>
            </View>
            {/* </ScrollView> */}
          </View>
        </View>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.red,
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderBottomRightRadius: 100,
    shadowColor: colors.darkgray,
    shadowOpacity: 50,
    shadowOffset: 10,
  },
  text: {
    fontSize: 35,
    color: colors.white,
    fontWeight: "bold",
  },
});
