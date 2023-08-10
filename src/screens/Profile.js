import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { removeToken } from "../apis/auth/storage";
import UserContext from "../context/UserContext";
import { useContext } from "react";

const Profile = () => {
  const { setUser } = useContext(UserContext);
  return (
    <View>
      <Button
        onPress={() => {
          removeToken();
          setUser(false);
        }}
      ></Button>

      <Text>Profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
