import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import PostsScreen from "./screens/PostsScreen/PostsScreen";
import HomeScreen from './screens/HomeScreen/HomeScreen'
import MapScreen from './screens/MapScreen/MapScreen';
import CommentsScreen from './screens/CommentsScreen/CommentsScreen'
import { useFonts } from "expo-font";

const MainStack = createStackNavigator();

export default App = () => {
  const [fontsLoaded] = useFonts({
    Roboto400: require("./assets/fonts/Roboto-Regular.ttf"),
    Roboto500: require("./assets/fonts/Roboto-Medium.ttf"),
    Roboto700: require("./assets/fonts/Roboto-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return <NavigationContainer>
      <MainStack.Navigator initialRouteName="HomeScreen">
        <MainStack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{ headerShown: false }}/>
        <MainStack.Screen name="LoginScreen" component={LoginScreen } options={{ headerShown: false }}/>
      <MainStack.Screen name="HomeScreen" component={HomeScreen } options={{ headerShown: false }}/>
      <MainStack.Screen name="PostsScreen" component={PostsScreen } options={{ headerShown: false }}/>
      <MainStack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false }}/>
      <MainStack.Screen name="CommentsScreen" component={CommentsScreen}/>      
      </MainStack.Navigator>
    </NavigationContainer>
};
