import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
} from "react-native";
// import { ScrollView } from "react-native-gesture-handler";

import { Picker } from "@react-native-picker/picker";
import React, { useState, useContext } from "react";

import { useMutation } from "@tanstack/react-query";
import { register } from "../apis/auth/auth";
import { colors } from "../utils/colors/colors";
import { saveToken } from "../apis/auth/storage";
import UserContext from "../context/UserContext";
import ROUTES from "../navigation/routes";

const Register = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState({});
  const [selectedValue, setSelectedValue] = useState("A+");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { setUser } = useContext(UserContext);

  const { mutate: registerFn, error } = useMutation({
    mutationFn: () => register({ userInfo }),
    onSuccess: (data) => {
      saveToken(data.token);
      console.log(` register = ${data}`);
      setUser(true);
      navigation.navigate(ROUTES.APPROUTES.HOME);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const validatePassword = (password) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (!regex.test(password)) {
      return "must be at least 8 characters long and contain one uppercase, one lowercase letter, and one number.";
    }
    return "";
  };
  const passwordChangeHandler = (value) => {
    const err = validatePassword(value);

    setPasswordError(err);
    if (err === "") {
      setPassword(value);
      return setUserInfo({ ...userInfo, password: value });
    }
  };

  console.log(userInfo);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Civil ID</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => {
          setUserInfo({ ...userInfo, civilid: value });
        }}
        placeholder="Civil ID"
      />

      <Text style={styles.text}>Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => {
          setUserInfo({ ...userInfo, name: value });
        }}
        placeholder="Name"
      />
      <Text style={styles.text}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => {
          setUserInfo({ ...userInfo, email: value });
        }}
        placeholder="Email"
      />
      <Text style={styles.text}>phone</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => {
          setUserInfo({ ...userInfo, phone: value });
        }}
        placeholder="Phone"
      />
      <Text style={styles.text}>blood type</Text>
      <View>
        <Picker
          style={styles.input}
          selectedValue={userInfo.bloodType}
          onValueChange={(value) => {
            setSelectedValue(value);
            setUserInfo({ ...userInfo, bloodType: value });
          }}
        >
          <Picker.Item label="A+" value="A+" />
          <Picker.Item label="A-" value="A-" />
          <Picker.Item label="B+" value="B+" />
          <Picker.Item label="B-" value="B-" />
          <Picker.Item label="AB+" value="AB+" />
          <Picker.Item label="AB-" value="AB-" />
          <Picker.Item label="O+" value="O+" />
          <Picker.Item label="O-" value="O-" />
        </Picker>
      </View>
      <Text style={styles.text}>DOB</Text>
      <TextInput
        style={styles.input}
        value="1999-12-12"
        onChangeText={(value) => {
          setUserInfo({ ...userInfo, dob: value });
        }}
        placeholder="Date of birth"
      />

      <Text style={styles.text}>Password</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        autoCapitalize="none"
        onChangeText={(value) => {
          passwordChangeHandler(value);
        }}
        placeholder="password"
      />
      <View>
        <Text style={(styles.text, (backgroundColor = colors.baby_blue))}>
          {passwordError !== "" && (
            <Text style={{ color: "grey" }}>{passwordError}</Text>
          )}
        </Text>
      </View>

      <Button
        title="Register"
        onPress={() => {
          if (passwordError === "") registerFn();
          console.log(passwordError);
        }}
      />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  scrollContainer: {
    // flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    backgroundColor: colors.lightgray,
    paddingVertical: 20,
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
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  link_text: {
    color: "blue",
  },
});
