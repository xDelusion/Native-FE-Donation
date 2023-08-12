import { StyleSheet, Text, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getRecipientReqs } from "../apis/recipientRequest/recipient";
import React, { useEffect } from "react";
import Chart from "../components/Chart/Chart";

const Home = ({ navigation }) => {
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
  let bloodTypeCounts = {};
  if (recipientRequestData) {
    recipientRequestData.forEach((recipientRequest) => {
      if (bloodTypeCounts[recipientRequest.bloodType]) {
        bloodTypeCounts[recipientRequest.bloodType] += 1;
      } else {
        bloodTypeCounts[recipientRequest.bloodType] = 1;
      }
    });
  } else {
    console.log("no data");
  }
  const bloodTypeData = Object.keys(bloodTypeCounts).map((bloodType) => ({
    label: bloodType,
    value: bloodTypeCounts[bloodType],
  }));

  return (
    <View>
      <View>
        <Chart bloodTypes={bloodTypeData} />
      </View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
