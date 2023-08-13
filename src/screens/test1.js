import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Image,
  Touchable,
} from "react-native";
import { TextInput } from "react-native-paper";
import React, { useContext, useState } from "react";
import { colors } from "../utils/colors/colors";
import { login } from "../apis/auth/auth";
import ROUTES from "../navigation/routes";
import { useMutation } from "@tanstack/react-query";
import UserContext from "../context/UserContext";
import { saveToken } from "../apis/auth/storage";

const Login = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState({});
  const { setUser } = useContext(UserContext);
  const {
    mutate: loginFn,
    error,
    isLoading,
  } = useMutation({
    mutationFn: () => {
      return login(userInfo);
    },
    onSuccess: (data) => {
      saveToken(data.token);
      setUser(true);
      navigation.navigate(ROUTES.APPROUTES.HOME);
      console.log("successful login");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("../media/project_logo.png")}
          style={styles.image}
        />
        <View style={[styles.entery, { flex: 0.8 }]}>
          <Text style={styles.text}>Civil ID</Text>
          <TextInput
            style={styles.input}
            placeholder="Civil ID"
            autoCapitalize="none"
            onChangeText={(value) => {
              setUserInfo({ ...userInfo, civilid: value });
            }}
          />
          <Text style={styles.text}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="password"
            autoCapitalize="none"
            secureTextEntry
            onChangeText={(value) => {
              setUserInfo({ ...userInfo, password: value });
            }}
          />

          <View
            style={{
              flex: 0.5,
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate(ROUTES.AUTHROUTES.FORGOT)}
            >
              <Text style={styles.link_text}>Forgot password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate(ROUTES.AUTHROUTES.REGISTER)}
            >
              <Text style={styles.link_text}>Register</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: colors.red,
              width: 200,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              console.log("calling sign in");
              loginFn();
            }}
          >
            <Text style={{ color: colors.white, fontWeight: "bold" }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {isLoading && (
        <View
          style={{
            flex: 1,
            height: "100%",
            width: "100%",
            position: "absolute",
            backgroundColor: colors.red,
            zIndex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Loading..</Text>
        </View>
      )}
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  input: {
    height: 40,
    borderColor: colors.red,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: colors.white,
    width: 300,
  },
  text: {
    color: colors.red,
    fontSize: 16,
    fontWeight: "bold",
  },
  link_text: {
    color: "#1F7194",
  },
  link_position: {
    flex: 0.18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    width: 350,
    height: 350,
    flex: 0.5,
  },
  entery: {
    flex: 0.18,
  },
});
