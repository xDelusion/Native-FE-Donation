import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getRecipientReqs } from "../apis/recipientRequest/recipient";
import RecipientRequestItem from "../components/HomeRecipientRequest/RecipientRequestItem";
import BloodTypeButton from "../components/HomeRecipientRequest/BloodTypeButton";
import { colors } from "../utils/colors/colors";
import { BarChart } from "react-native-chart-kit";

const Statistics = ({ navigation }) => {
  const chartConfig = {
    backgroundGradientFrom: colors.white,
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: colors.light_red,
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

  const handleDonate = (requestData) => {
    console.log(requestData);
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
          onPress={() => handleDonate(recipientRequest)}
        />
      );
    });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}></View>
      <View style={styles.section}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          Blood Units Required
        </Text>
        <BarChart
          chartConfig={chartConfig}
          data={getDataForBarChat()}
          height={220}
          width={400}
          verticalLabelRotation={30}
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.bloodGroupSection}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            Find Blood Groups
          </Text>
          <ScrollView
            contentContainerStyle={styles.bloodGroupContainer}
            horizontal={false}
          >
            {bloodArray.map((bloodType) => (
              <BloodTypeButton
                key={bloodType}
                bloodType={bloodType}
                isFocused={
                  focusedBloodType?.toLowerCase() === bloodType?.toLowerCase()
                }
                onFocus={(selectedBloodType) =>
                  setFocusedBloodType(selectedBloodType)
                }
                onPress={() => handleBloodTypePress(bloodType)}
              />
            ))}
          </ScrollView>
        </View>
        <ScrollView style={styles.recipientRequestsSection}>
          <View style={styles.section}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Recipient Requests
            </Text>
          </View>
          <View style={styles.section}>{filterData}</View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
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
    padding: 20,
  },
  section: {
    flex: 1,
    // padding: 20,
  },
  recipientRequestsSection: {
    flex: 1,
    marginTop: 20,
    flexGrow: 1, // This allows the Recipient Requests section to take remaining space
  },
  bloodGroupContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
});

export default Statistics;
