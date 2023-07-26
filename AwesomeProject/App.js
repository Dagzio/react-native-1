import RegistrationScreen from "./screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import PostsScreen from "./screens/PostsScreen/PostsScreen";
import { useFonts } from "expo-font";

export default App = () => {
  const [fontsLoaded] = useFonts({
    Roboto400: require("./assets/fonts/Roboto-Regular.ttf"),
    Roboto500: require("./assets/fonts/Roboto-Medium.ttf"),
    Roboto700: require("./assets/fonts/Roboto-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return <RegistrationScreen />;
  // <LoginScreen />;

  //<PostsScreen />;
};
