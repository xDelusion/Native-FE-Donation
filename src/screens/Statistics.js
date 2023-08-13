import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getRecipientReqs } from "../apis/recipientRequest/recipient";
import RecipientRequestItem from "../components/HomeRecipientRequest/RecipientRequestItem";
import BloodTypeButton from "../components/HomeRecipientRequest/BloodTypeButton";
import { colors } from "../utils/colors/colors";
import Chart from "../components/Chart/Chart";
import { BarChart } from "react-native-chart-kit";
// import Chart from "../components/HomeRecipientRequest/Chart";

const Statistics = ({ navigation }) => {
  const chartConfig = {
    backgroundGradientFrom: colors.light_red,
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: colors.red,
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(203,22, 22, 1)`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
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

  const getDataForBarChat = () => {
    let res = {};
    recipientRequestData?.forEach((request) => {
      if (res[request.bloodType]) {
        res[request.bloodType] += request.noOfBloodBags;
      } else {
        res[request.bloodType] = request.noOfBloodBags;
      }
    });
    return {
      labels: Object.keys(res),
      datasets: [
        {
          data: Object.values(res),
        },
      ],
    };
  };

  const handleBloodTypePress = (selectedBloodType) => {
    if (selectedBloodType !== "ALL") {
      setBloodType(selectedBloodType);

      setFocusedBloodType(selectedBloodType);
    }
  };

  const filterData = recipientRequestData
    ?.filter((request) => {
      if (focusedBloodType === "ALL") {
        return true;
      }
      return request.bloodType == focusedBloodType;
    })
    ?.map((recipientRequest) => {
      return (
        <RecipientRequestItem
          key={recipientRequest.serial_no}
          request={recipientRequest}
        />
      );
    });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text>Home</Text>
      </View>
      <View style={styles.section}>
        <Text>Blood Bags Required</Text>
        {/* <View>
          <Chart bloodTypes={bloodTypeData} />
        </View> */}
        <BarChart
          chartConfig={chartConfig}
          data={getDataForBarChat()}
          height={220}
          width={400}
          verticalLabelRotation={30}
        />
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
                isFocused={
                  focusedBloodType.toLowerCase() === bloodType.toLowerCase()
                }
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

export default Statistics;
