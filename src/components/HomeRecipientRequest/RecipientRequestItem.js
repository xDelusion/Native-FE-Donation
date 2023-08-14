import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../../utils/colors/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import moment from "moment/moment";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../apis/profile";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import UserContext from "../../context/UserContext";
import ROUTES from "../../navigation/routes";
const RecipientRequestItem = ({ request, onPressDonate }) => {
  const navigation = useNavigation();
  const { setUser } = useContext(UserContext);
  const [matching, setMatching] = useState(false);
  const {
    data: dataProfile,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["profile1"],
    queryFn: () => getProfile(),
    onSuccess: (data) => {
      console.log(data);
    },
  });
  console.log(dataProfile);

  const bloodMatch = dataProfile?.matchingTypes?.find((match) => {
    return match.toLowerCase() === request.bloodType.toLowerCase();
  });
  console.log(` blood match =${bloodMatch}`);

  const bloodBagIcons = Array.from(
    { length: request.noOfBloodBags },
    (_, index) => (
      <MaterialCommunityIcons
        key={index}
        name="blood-bag"
        size={24}
        color={colors.red}
      />
    )
  );

  const donateHandler = () => {
    if (!dataProfile.isDonor) {
      navigation.navigate(ROUTES.APPROUTES.DR);
    } else if (dataProfile.lastDonation) {
      const lastDonationDate = moment(dataProfile.lastDonation);
      const nextDonationDate = lastDonationDate.add(3, "months");
      const now = moment();
      if (nextDonationDate.isAfter(now)) {
        navigation.navigate(ROUTES.APPROUTES.DR);
      } else {
        navigation.navigate(ROUTES.APPROUTES.RECIPIENT);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text>{request.serial_no}</Text>
        <Text>{request.bloodType}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text>{moment(request.createdAt).format("L")}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text>{request.noOfBloodBags}</Text>
        <View style={styles.bloodBagsContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {bloodBagIcons}
          </ScrollView>
        </View>
        {bloodMatch ? (
          <TouchableOpacity style={styles.donateButton} onPress={donateHandler}>
            <Text>Donate</Text>
          </TouchableOpacity>
        ) : (
          <View>
            <Text>Not Matching</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.darkgray,
    borderRadius: 8,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  donateButton: {
    backgroundColor: colors.red,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  bloodBagsContainer: {
    flex: 0.5,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default RecipientRequestItem;
