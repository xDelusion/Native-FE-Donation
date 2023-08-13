// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import { Button } from "react-native-paper";
// import { removeToken } from "../apis/auth/storage";
// import UserContext from "../context/UserContext";
// import { useContext } from "react";
// import { colors } from "../utils/colors/colors";

// const ProfileNavigation = ({ navigation }) => {
//   const { setUser } = useContext(UserContext);
//   return (
//     <View>
//       <Text>ProfileNavigation</Text>
//       <Button
//         style={{
//           backgroundColor: colors.red,
//           height: 40,
//           width: 150,
//           marginTop: 20,
//           alignSelf: "center",
//         }}
//         onPress={() => {
//           removeToken();
//           setUser(false);
//         }}
//       >
//         Logout
//       </Button>
//     </View>
//   );
// };

// export default ProfileNavigation;

// const styles = StyleSheet.create({});


import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ROUTES from "./routes";
import Profile from "../screens/Profile";
import EditProfile from "../screens/EditProfile";
import { TouchableOpacity } from "react-native-gesture-handler";
import { removeToken } from "../apis/auth/storage";
import { AntDesign } from "@expo/vector-icons";
import UserContext from "../context/UserContext";
import { colors } from "../utils/colors/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();

const ProfileNavigation = () => {
  const navigation = useNavigation();
  const { setUser } = useContext(UserContext);
  return (
    <Stack.Navigator
    headStyle={{ backgroundColor: "red" }}
    screenOptions={{ headerTitle: "Test", headerShown: false ,

        headerRight: () => {
          return (
            <TouchableOpacity
              style={{ marginRight: 20 }}
              onPress={() => {
                removeToken();
                setUser(false);
              }}
            >
              <AntDesign name="logout" size={24} color={colors.red} />
            </TouchableOpacity>
          );
        },
      }}
    >
      <Stack.Screen
        name={ROUTES.APPROUTES.PROFILE}
        component={Profile}
        screenOptions={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.APPROUTES.EDITPROFILE}
        component={EditProfile}
        options={{
          headerLeft: (props) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(ROUTES.APPROUTES.PROFILE);
                }}
                style={{
                  flex: 1,
                  flexDirection: "row",
                }}
              >
                <MaterialIcons
                  name="keyboard-arrow-left"
                  size={24}
                  color={colors.black}
                />
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: colors.black,
                  }}
                >
                  Back to Profile
                </Text>
              </TouchableOpacity>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigation;

const styles = StyleSheet.create({});