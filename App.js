import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar, SafeAreaView, StyleSheet, Platform } from "react-native";
import { useEffect, useState } from "react";
import UserContext from "./src/context/UserContext";
import { getToken } from "./src/apis/auth/storage";
import AppNavigation from "./src/navigation/AppNavigation";
import DonorRequest from "./src/screens/DonorRequest";
import Profile from "./src/screens/Profile";

export default function App() {
  const [user, setUser] = useState(false);
  const checkToken = async () => {
    const token = await getToken();
    if (token) {
      setUser(true);
    }
  };
  useEffect(() => {
    checkToken();
  }, []);
  return (
    <QueryClientProvider client={new QueryClient()}>
      <UserContext.Provider value={{ user, setUser }}>
        <NavigationContainer>
          <SafeAreaView style={styles.container}>
            {/* <AppNavigation /> */}
            {/* <DonorRequest/> */}
            <Profile/>
          </SafeAreaView>
        </NavigationContainer>
      </UserContext.Provider>
    </QueryClientProvider>

  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
