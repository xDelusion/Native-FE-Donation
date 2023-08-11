import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar, SafeAreaView, StyleSheet, Platform } from "react-native";
import { useEffect, useState } from "react";
import UserContext from "./src/context/UserContext";
import { getToken } from "./src/apis/auth/storage";
import AppNavigation from "./src/navigation/AppNavigation";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";


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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={new QueryClient()}>
        <UserContext.Provider value={{ user, setUser }}>
          <NavigationContainer>
            <SafeAreaView
              style={{
                flex: 1,
                paddingTop:
                  Platform.OS === "android" ? StatusBar.currentHeight : 0,
              }}
            >
              <AppNavigation />
            </SafeAreaView>
          </NavigationContainer>
        </UserContext.Provider>
      </QueryClientProvider>
    </GestureHandlerRootView>

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
