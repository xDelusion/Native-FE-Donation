import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../utils/colors/colors";
import { TextInput } from "react-native-paper";
import { login } from "../apis/auth/auth";
import ROUTES from "../navigation/routes";
import { useMutation } from "@tanstack/react-query";
import UserContext from "../context/UserContext";
import { saveToken } from "../apis/auth/storage";
import Logo from "../components/Login/Logo";
import InputField from "../components/Login/InputField";
import Link from "../components/Login/Link";

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
        <Logo />
        <View style={styles.entry}>
          <InputField
            label="Civil ID"
            placeholder="Civil ID"
            onChangeText={(value) =>
              setUserInfo({ ...userInfo, civilid: value })
            }
          />
          <InputField
            label="Password"
            placeholder="Password"
            secureTextEntry
            onChangeText={(value) =>
              setUserInfo({ ...userInfo, password: value })
            }
          />
          <View style={styles.linkPosition}>
            <Link
              text="Forgot password?"
              onPress={() => navigation.navigate(ROUTES.AUTHROUTES.FORGOT)}
            />
            <Link
              text="Register"
              onPress={() => navigation.navigate(ROUTES.AUTHROUTES.REGISTER)}
            />
          </View>
          <View style={styles.center}>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => loginFn()}
            >
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        {isLoading && (
          <View style={styles.loadingOverlay}>
            <Text>Loading..</Text>
          </View>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  entry: {
    flex: 0.8,
  },
  loginButton: {
    backgroundColor: colors.red,
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginTop: 20,
    borderRadius: 8,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  loginButtonText: {
    color: colors.white,
    fontWeight: "bold",
  },
  loadingOverlay: {
    flex: 1,
    height: "100%",
    width: "100%",
    position: "absolute",
    backgroundColor: colors.red,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  linkPosition: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
});

export default Login;
