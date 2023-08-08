import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Pressable, StyleSheet, Image } from "react-native";

import  CreatePostsScreen  from "../CreatePostsScreen/CreatePostsScreen";
import  PostsScreen  from "../PostsScreen/PostsScreen";
import { useNavigation } from "@react-navigation/native";
import  ProfileScreen  from "../ProfileScreen/ProfileScreen";
import { createPostIcon, gridIcon, userIcon, addPostIcon } from "./tabBarIcons";

const Tabs = createBottomTabNavigator();

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          let iconSrc;

              switch (route.name) {
                case "CreatePostScreen":
                      iconSrc = createPostIcon(addPostIcon());
                      return iconSrc;
                  case "PostsScreen":
                      iconSrc = gridIcon();
                      return iconSrc;
                  case "ProfileScreen":
                      iconSrc = userIcon();
                      return iconSrc;

                default:
                    break;
              }
        },
        tabBarStyle: {
          paddingLeft: 50,
          paddingRight: 50,
          paddingTop: 9,
          paddingBottom: 9,
        },
        tabBarShowLabel: false,
      })}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          headerTitle: "Публікації1",
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
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("LoginScreen")}
              style={styles.logOutIcon}
            >
              <Image source={require("../../assets/icons/logOutIcon.jpg")} />
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="CreatePostScreen"
        component={CreatePostsScreen}
        options={{
          headerTitle: "Створити публікацію",
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
            <Pressable onPress={() => navigation.navigate("PostsScreen")}>
              <Image
                source={require("../../assets/icons/arrowIcon.jpg")}
                style={styles.arrowIcon}
              />
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  logOutIcon: {
    width: 24,
    height: 24,
    position: "absolute",
    right: 16,
  },
  arrowIcon: {
    width: 24,
    height: 24,
    position: "absolute",
    left: 16,
    top: -10,
  },
});

export default HomeScreen;