
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getRecipientReqs } from "../apis/recipientRequest/recipient";
import RecipientRequestItem from "../components/HomeRecipientRequest/RecipientRequestItem";
import BloodTypeButton from "../components/HomeRecipientRequest/BloodTypeButton";
import { colors } from "../utils/colors/colors";
import ROUTES from "../navigation/routes";
// import Chart from "../components/HomeRecipientRequest/Chart";

const Home = ({ navigation }) => {
  const [bloodType, setBloodType] = useState("ALL");
  const [focusedBloodType, setFocusedBloodType] = useState("ALL");
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

      setFocusedBloodType(selectedBloodType);
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
      <View
        style={[
          styles.headerContainer,
          { flexDirection: "row", justifyContent: "space-between" },
        ]}
      >
        <Text>Home</Text>
        <Button
          title="Statistics"
          onPress={() => {
            navigation.navigate(ROUTES.APPROUTES.STATISTICS);
          }}
        />
      </View>
      <View style={styles.section}>
        <Text>Blood Bags Required</Text>
        {/* <View>
            <Chart bloodTypes={bloodTypeData} />
          </View> */}
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.section}>
          <Text>Recipient Requests</Text>
        </View>
        <View style={styles.section}>{filterData}</View>
        <View style={styles.section}>
          <Text>Blood Groups</Text>
          <ScrollView
            contentContainerStyle={styles.bloodGroupContainer}
            horizontal={false} // Allow horizontal scrolling
          >
            {bloodArray.map((bloodType) => (
              <BloodTypeButton
                key={bloodType}
                bloodType={bloodType}
                focused={focusedBloodType === bloodType}
                onFocus={(selectedBloodType) =>
                  setFocusedBloodType(selectedBloodType)
                }
                onPress={() => handleBloodTypePress(bloodType)}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightgray,
    height: "100%",
  },
  headerContainer: {
    padding: 20,
    backgroundColor: colors.red,
    borderBottomRightRadius: 100,
    shadowColor: colors.darkgray,
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 10 },
  },
  contentContainer: {
    flex: 1,
    flexDirection: "column",
  },
  section: {
    flex: 1,
    padding: 20,
  },
  bloodGroupContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
});

export default Home;
