import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import ROUTES from "../navigation/routes";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../apis/profile";
import { BASE_URL } from "../apis";
import { colors } from "../utils/colors/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign } from "@expo/vector-icons";
import { removeToken } from "../apis/auth/storage";
const Profile = () => {
  const Stack = createStackNavigator();
  const { user, setUser } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState({});
  const navigation = useNavigation({ navigation });
  const {
    data: dataProfile,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getProfile(),
    onSuccess: (data) => {
      setUserInfo(data);
    },
  });
  console.log(dataProfile);
  return (
    <View flex={1}>
      <View flex={0.2}>
        <View
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderBottomRightRadius="2"
        >
          <View style={styles.container}>
            <View
              style={{
                flex: 1,
                justifyContent: "right",
                alignItems: "flex-end",
                paddingButtom: 10,
              }}
            >
              {!dataProfile?.image ? (
                <Image
                  source={require("../../assets/Profile-PNG-File.png")}
                  style={styles.profileImage}
                />
              ) : (
                <Image
                  source={{ uri: `${BASE_URL}/${dataProfile?.image}` }}
                  style={styles.profileImage}
                />
              )}
            </View>
            <View>
              <Text style={styles.userName}>Name:</Text>
              <Text style={styles.userName}>{`${dataProfile?.name}`}</Text>

              <View style={styles.detailsContainer}>
                <Text style={styles.label}>CivilID:</Text>
                <Text style={styles.value}>{`${dataProfile?.civilid}`}</Text>

                <Text style={styles.label}>Date of birth:</Text>
                <Text style={styles.value}>{`${dataProfile?.dob}`}</Text>
                <Text style={styles.label}>Phone:</Text>
                <Text style={styles.value}>{`${dataProfile?.phone}`}</Text>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.value}>{`${dataProfile?.email}`}</Text>
                <Text style={styles.label}>Blood Group:</Text>
                <Text style={styles.value}>{`${dataProfile?.bloodType}`}</Text>
                <Text style={styles.label}>Number of donations:</Text>
                <Text
                  style={styles.value}
                >{`${dataProfile?.noOfDonations}`}</Text>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: colors.red,
                      width: 150,
                      height: 50,
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 20,
                      borderRadius: 8,
                    }}
                    onPress={() => {
                      navigation.navigate(ROUTES.APPROUTES.EDITPROFILE, {
                        userInfo: userInfo,
                        setUserInfo: setUserInfo,
                      });
                    }}
                  >
                    <Text
                      style={{
                        color: colors.white,
                        fontWeight: "bold",
                        fontSize: 20,
                      }}
                    >
                      Edit Ptofile
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      backgroundColor: colors.red,
                      width: 150,
                      height: 50,
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 20,
                      borderRadius: 8,
                    }}
                    onPress={() => {
                      removeToken();
                      setUser(false);
                    }}
                  >
                    <Text
                      style={{
                        color: colors.white,
                        fontWeight: "bold",
                        fontSize: 20,
                      }}
                    >
                      Logout
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          {/* <View style={ {justifyContent:"center",
              alignItems: "center",}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(ROUTES.APPROUTES.EDITPROFILE, {
                userInfo: userInfo,
                setUserInfo: setUserInfo,
              });
            }}
            style={{
              backgroundColor: colors.red,
              width: 200,
              height: 50,
              justifyContent:"center",
              alignItems: "center",
              marginTop:20,
              borderRadius:8,
            }}
          >
            <Text  style={{ color: colors.white, fontWeight: "bold", fontSize:20 }}>
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View> */}
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   padding: 20,
  // },
  container: {
    padding: 5,
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
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 75,
    marginBottom: 15,
    paddingTop: 5,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
    color: colors.white,
  },

  detailsContainer: {
    paddingTop: 100,
    width: "100%",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: colors.red,
  },
  value: {
    fontSize: 16,
    marginBottom: 15,
  },
});
