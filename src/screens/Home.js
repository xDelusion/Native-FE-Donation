import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../utils/colors/colors";

const Home = ({ navigation }) => {
  return (
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
