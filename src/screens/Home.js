import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getRecipientReqs } from "../apis/recipientRequest/recipient";
import RecipientRequestItem from "../components/HomeRecipientRequest/RecipientRequestItem";
import BloodTypeButton from "../components/HomeRecipientRequest/BloodTypeButton";
import { colors } from "../utils/colors/colors";
// import Chart from "../components/HomeRecipientRequest/Chart";

const Home = ({ navigation }) => {
  const [bloodType, setBloodType] = useState("ALL");
  const bloodArray = ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-", "ALL"];

  const {
    data: recipientRequestData,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["recipientRequest"],
    queryFn: () => getRecipientReqs(),
    onSuccess: (data) => {
      console.log(`data = ${data}`);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleBloodTypePress = (selectedBloodType) => {
    if (selectedBloodType !== "ALL") {
      setBloodType(selectedBloodType);
    }
  };

  const filterData = recipientRequestData?.map((recipientRequest) => {
    if (bloodType === "ALL" || bloodType === recipientRequest.bloodType) {
      return (
        <RecipientRequestItem
          key={recipientRequest.serial_no}
          request={recipientRequest}
        />
      );
    }
    return null;
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text>Home</Text>
      </View>
      <View>
        <Text>Blood Bags Required</Text>
        {/* <View>
            <Chart bloodTypes={bloodTypeData} />
          </View> */}
      </View>
      <View>{filterData}</View>
      <View>
        <Text>Blood Groups</Text>
        <ScrollView
          contentContainerStyle={styles.bloodGroupContainer}
          horizontal={false} // Allow horizontal scrolling
        >
          {bloodArray.map((bloodType) => (
            <BloodTypeButton
              key={bloodType}
              bloodType={bloodType}
              onPress={() => handleBloodTypePress(bloodType)}
            />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightgray,
  },
  headerContainer: {
    padding: 20,
    backgroundColor: colors.red,
    borderBottomRightRadius: 100,
    shadowColor: colors.darkgray,
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 10 },
  },
  bloodGroupContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
});
