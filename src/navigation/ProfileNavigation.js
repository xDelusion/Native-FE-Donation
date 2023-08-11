import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { removeToken } from "../apis/auth/storage";
import UserContext from "../context/UserContext";
import { useContext } from "react";
import { colors } from "../utils/colors/colors";

const ProfileNavigation = ({ navigation }) => {
  const { setUser } = useContext(UserContext);
  return (
    <View>
      <Text>ProfileNavigation</Text>
      <Button
        style={{
          backgroundColor: colors.red,
          height: 40,
          width: 150,
          marginTop: 20,
          alignSelf: "center",
        }}
        onPress={() => {
          removeToken();
          setUser(false);
        }}
      >
        Logout
      </Button>
    </View>
  );
};

export default ProfileNavigation;

const styles = StyleSheet.create({});
