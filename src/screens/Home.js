import { StyleSheet, Text, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getRecipientReqs } from "../apis/recipientRequest/recipient";
import React, { useEffect } from "react";
import Chart from "../components/Chart/Chart";

import { colors } from "../utils/colors/colors";


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

    <View flex={1} >
    <View flex={0.2} >
      <View
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      borderBottomRightRadius="2"
    >
  <View style={styles.container}>
      <View  style={ { flex:1,
 justifyContent:'right',
 alignItems:'flex-end',
paddingButtom:10}}>
  </View>


      <Text>Home</Text>
    </View>
    </View>
    </View>
</View>
  );
};

export default Home;



  
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor:colors.red,
    flex: 1,
    position:"absolute",
    top:0,
    left:0,
    right:0,
    bottom:0,
    borderBottomRightRadius:100,
    shadowColor:colors.darkgray,
    shadowOpacity:50,
    shadowOffset:10,
  },
});
