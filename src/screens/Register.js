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
import React, { useState, useContext } from "react";

import { useMutation, useQuery } from "@tanstack/react-query";
import { register } from "../apis/auth/auth";
import { colors } from "../utils/colors/colors";
import { saveToken } from "../apis/auth/storage";
import UserContext from "../context/UserContext";
import ROUTES from "../navigation/routes";
import { getAllPaci } from "../apis/paci/paci";
import moment from "moment/moment";
import { TouchableOpacity } from "react-native-gesture-handler";

const Register = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState({
    civilid: "",
    name: "",
    email: "",
    phone: "",
    bloodType: "",
    dob: "",
    password: "",
  });
  const [selectedValue, setSelectedValue] = useState();
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { setUser } = useContext(UserContext);

  const {
    data: paciuser,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["paciusers"],
    queryFn: () => getAllPaci(),
    onSuccess: (data) => {
      // setUserInfo(data);
      console.log(`data = ${data}`);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  console.log(paciuser);
  const civilIDChangeHandler = (value) => {
    const foundUser = paciuser?.find((user) => user.civilid === value);

    if (foundUser) {
      setPasswordError("");

      return setUserInfo({
        ...userInfo,
        civilid: value,
        name: foundUser.name,
        dob: foundUser.dob,
        bloodType: foundUser.bloodType,
      });
    } else {
      setPasswordError("Not valid civil id");
    }
  };

  const { mutate: registerFn, error } = useMutation({
    mutationFn: () => register(userInfo),
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
  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  console.log(passwordError);
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.edit}>
          <Text
            style={{
              fontSize: 50,
              color: colors.red,
              fontWeight: "bold",
            }}
          >
            Register
          </Text>
        </View>
        <Text style={styles.text}>Civil ID</Text>
        <TextInput
          style={styles.input}
          // value={userInfo.civilid}
          onChangeText={(value) => {
            setUserInfo({ ...userInfo, civilid: value });
          }}
          onBlur={() => civilIDChangeHandler(userInfo.civilid)}
          placeholder="Civil ID"
        />

        <Text style={styles.text}>Name</Text>
        <TextInput
          style={styles.input}
          value={userInfo.name}
          // onChangeText={(value) => {
          //   setUserInfo({ ...userInfo, name: value });
          // }}
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
      </View>

      <View>
        <Text style={styles.text}>Blood type</Text>
        <TextInput
          style={styles.input}
          value={userInfo.bloodType}
          placeholder="Blood Type"
        />
        <Text style={styles.text}>DOB</Text>
        <TextInput
          style={styles.input}
          value={moment(userInfo.dob).format("L")}
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
      </View>
      <View>
        <Text style={(styles.text, (backgroundColor = colors.grey))}>
          {passwordError !== "" && (
            <Text style={{ color: "grey" }}>{passwordError}</Text>
          )}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.register}
        onPress={() => {
          registerFn();
          // console.log(passwordError);
        }}
      >
        <Button color={colors.white} title="Register" />
      </TouchableOpacity>
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
  edit: {
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  register: {
    backgroundColor: colors.red,
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginTop: 20,
    borderRadius: 8,
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
    color: "black",
    fontSize: 16,
    fontWeight: "normal",
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
