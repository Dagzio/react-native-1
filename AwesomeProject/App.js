import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {Image, StyleSheet} from "react-native";
import RegistrationScreen from "./screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import MapScreen from "./screens/MapScreen/MapScreen";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import CommentsScreen from "./screens/CommentsScreen/CommentsScreen";
import { useFonts } from "expo-font";

const MainStack = createStackNavigator();


export default App = () => {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Roboto400: require("./assets/fonts/Roboto-Regular.ttf"),
    Roboto500: require("./assets/fonts/Roboto-Medium.ttf"),
    Roboto700: require("./assets/fonts/Roboto-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="HomeScreen">
        <MainStack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="CommentsScreen"
          component={CommentsScreen}
          options={{
            headerTitle: "Коментарі",
            headerTitleAlign: "center",
            headerStyle: {
              borderBottomWidth: 1,
              borderBottomColor: "#bdbdbd",
            },
            headerTitleStyle: {
              fontFamily: "Roboto500",
              fontSize: 17,
              lineHeight: 22,
              color: "#212121",
            },
            headerLeft: () => (
              <Pressable onPress={() => navigation.navigate("ProfileScreen")}>
                <Image
                source={require("./assets/icons/arrowIcon.jpg")}
                style={styles.arrowIcon}
              />
              </Pressable>
              
            ),
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  arrowIcon: {
    width: 24,
    height: 24,
    position: "absolute",
    left: 16,
    top: -10,
  },
});
