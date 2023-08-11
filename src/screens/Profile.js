// import { StyleSheet, Text, View } from "react-native";
// import React from "react";

// const Profile = () => {
//   return (
//     <View>
//       <Text>Profile</Text>
//     </View>
//   );
// };

// export default Profile;

// const styles = StyleSheet.create({});

import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import ROUTES from "../navigation/routes";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../apis/profile";
import { BASE_URL } from "../apis";
import { colors } from "../utils/colors/colors";


const Profile = () => {
  
  const { user, setUser } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState({});
  const navigation = useNavigation();
  const {
    data: dataProfile,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getProfile(),
    onSuccess: (data) => {
    setUserInfo(data);},});

  console.log(`${BASE_URL}/${dataProfile?.image}`);
  return (
    <SafeAreaView>
        <View >
        <Image style={{
          height: 130,
          width: 130,
          borderRadius: 999,
          borderColor:colors.black,
          borderWidth: 2,
          marginTop: -68,
        }}>
        source={require("../../assets/Profile-PNG-File.png")}/>
        <Image style={{
          height: 130,
          width: 130,
          borderRadius: 999,
          borderColor:colors.black,
          borderWidth: 2,
          marginTop: -68,
        }}>
        source={{ uri: `${BASE_URL}/${userInfo?.image}` }}/>
       </View>
        <View >
        <Text>CivilID:</Text>
        <Text>{`${userInfo?.civilid}`}</Text>
        <Text>Name:</Text>
        <Text>{`${userInfo?.name}`}</Text>
        <Text> Date of birth:</Text>
        <Text>{`${userInfo?.dob}`}</Text>
        <Text>Phone:</Text>
        <Text>{`${userInfo?.phone}`}</Text>
        <Text>Blood Group:</Text>
        <Text>{`${userInfo?.bloodType}`}</Text>
        <Text>Number of donations:</Text>
        <Text>{`${userInfo?.noOfDonations}`}</Text>
        </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({

});
