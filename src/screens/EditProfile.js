// import { StyleSheet, Text, View } from "react-native";
// import React from "react";

// const EditProfile = ({ navigation }) => {
//   return (
//     <View>
//       <Text>EditProfile</Text>
//     </View>
//   );
// };

// export default EditProfile;

// const styles = StyleSheet.create({});

import {
    ImageBackground,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    View,
  } from "react-native";
  import { useState } from "react";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { colors } from "../utils/colors/colors";
  import { MaterialIcons } from "@expo/vector-icons";
  import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
  import { TextInput } from "react-native-paper";
  import { useMutation, useQueryClient } from "@tanstack/react-query";
  import { BASE_URL } from "../apis";
  import { updateProfile } from "../apis/profile/index";
  import * as ImagePicker from "expo-image-picker";
  import { useNavigation } from "@react-navigation/native";
  import ROUTES from "../navigation/routes";
  import { Pressable, Image } from "react-native";
//   import coverImage from "../components/image/cover.jpg";
  const EditProfile = ({ route }) => {
    const navigation = useNavigation({ navigation });
    const queryClient = useQueryClient()
    const { userInfo } = route.params;
    const [updateUserInfo, setUpdateUserInfo] = useState({ ...userInfo });
    const [image, setImage] = useState(null);
  
    const { mutate: updateFn, error } = useMutation({
      mutationFn: () =>
        updateProfile({
          ...updateUserInfo,
          image,
        }),
      onSuccess: (data) => {
        queryClient.invalidateQueries(['profile'])
        navigation.navigate(ROUTES.APPROUTES.PROFILE);
      },
      onError: (error) => {
        console.log(error);
      },
    });
  
    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };
  console.log(`
  
  
  
  
  
  
  
  
  
  
  ${updateUserInfo}
  
  
  
  `, updateUserInfo, `
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  `)
    return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "height" : "height"}
      >
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: colors.white,
            paddingHorizontal: 22,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          
            <View
              style={{
                flex: 1,
                position: "absolute",
                backgroundColor: "rgba(255,255,255,0.75)",
                paddingHorizontal: 22,
                height: "100%",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
            <ScrollView>
              <View
                style={{
                  marginHorizontal: 12,
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  marginBottom: 20,
                  marginVertical:30,
                  flex: 1,
                }}
              >
                {/* <TouchableOpacity
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
                </TouchableOpacity> */}
              </View>
  
              <Pressable
                onPress={pickImage}
                style={{
                  backgroundColor: colors.white,
                  marginTop: 30,
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 150,
                  height: 150,
                  borderRadius: 100,
                  borderWidth: 4,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <View style={styles.avatar_image}>
                  {(image || updateUserInfo.image) && (
                    <Image
                      source={{
                        uri: image || `${BASE_URL}/${updateUserInfo.image}`,
                      }}
                      style={{
                        width: 150,
                        height: 150,
                        borderRadius: 100,
                        borderWidth: 4,
                        borderColor: colors.red,
                      }}
                    />
                  )}
                </View>
              </Pressable>
              <Text  style={styles.label}>Email:</Text>
              <TextInput
                style={{
                  backgroundColor: colors.white,
                  width: "100%",
                  height: 50,
                  borderRadius: 4,
                  borderColor: colors.red,
                  borderWidth: 1,
                  marginBottom: 6,
                  paddingLeft: 8,
                }}
                onChangeText={(value) => {
                  setUpdateUserInfo({ ...updateUserInfo, email: value });
                }}
                value={updateUserInfo?.email}
              />
              <Text  style={styles.label}>Phone:</Text>
              <TextInput
                style={{
                  backgroundColor: colors.white,
                  width: "100%",
                  height: 50,
                  borderRadius: 4,
                  borderColor: colors.red,
                  borderWidth: 1,
                  marginBottom: 6,
                  paddingLeft: 8,
                }}
                onChangeText={(value) => {
                  setUpdateUserInfo({ ...updateUserInfo, phone: value });
                }}
                value={`${updateUserInfo?.phone}`}
              />
              
  
              <View>
                <View
                  style={{
                    flexDirection: "column",
                    marginBottom: 6,
                  }}
                >
                  <View style={ {justifyContent:"center",
              alignItems: "center",}}>
        <TouchableOpacity
            style={{
              backgroundColor: colors.red,
              width: 200,
              height: 50,
              justifyContent:"center",
              alignItems: "center",
              marginTop:20,
              borderRadius:8,
            }}
            onPress={() => {
             updateFn()
            }}
          >
            <Text style={{ color: colors.white, fontWeight: "bold", fontSize:20 }}>
              Save
            </Text>
          </TouchableOpacity>
          </View>
        </View>
                
              </View>
            </ScrollView>
         
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  };
  
  export default EditProfile;
  
  const styles = StyleSheet.create({
    avatar_image: {
      width: 150,
      height: 150,
      backgroundColor: "grey",
      borderRadius: 100,
      overflow: "hidden",
      alignSelf: "center",
    },
  
    imageBackground: {
      flex: 1,
      justifyContent: "center",
      height: "100%",
      width: "100%",
    },
    input: {
      color: colors.black,
      fontSize: 18,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color:colors.red,
      },
  });