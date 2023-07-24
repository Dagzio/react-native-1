import { useState } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const RegistrationScreen = () => {
  const [isLoginFocused, setIsLoginFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const [isSecureText, setIsSecureText] = useState(true);
  const secureTextToggle = () => {
    setIsSecureText((prev) => !prev);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <ImageBackground
            source={require("../../assets/images/ImageBG.jpg")}
            resizeMode="cover"
            style={styles.container}
          >
            <StatusBar
              style="auto"
              backgroundColor="#fff"
              barStyle="dark-content"
            />

            <View style={styles.form}>
              <View style={styles.avatar}>
                <AntDesign
                  name="pluscircleo"
                  size={24}
                  style={{
                    ...styles.addIcon,
                  }}
                />
              </View>
              <Text style={styles.title}>Реєстрація</Text>
              <TextInput
                placeholder="Логін"
                style={isLoginFocused ? styles.inputFocused : styles.input}
                inputMode="text"
                onFocus={() => setIsLoginFocused(true)}
                onBlur={() => setIsLoginFocused(false)}
              />
              <TextInput
                placeholder="Адрес електронної пошти"
                style={isEmailFocused ? styles.inputFocused : styles.input}
                inputMode="email"
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(false)}
              />
              <TextInput
                placeholder="Пароль"
                style={isPasswordFocused ? styles.inputFocused : styles.input}
                secureTextEntry={isSecureText}
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(false)}
              />
              <View>
                <Pressable
                  style={styles.openPassBtn}
                  onPress={secureTextToggle}
                >
                  <Text style={styles.openPassBtnText}>Показати</Text>
                </Pressable>
              </View>

              <View>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.registerButtonText}>Зареєструватися</Text>
                </TouchableOpacity>
                <Pressable>
                  <Text style={styles.authText}>
                    Вже є акаунт?{" "}
                    <Text style={styles.loginAuthText}>Увійти</Text>
                  </Text>
                </Pressable>
              </View>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  avatar: {
    position: "absolute",
    left: 128,
    top: -60,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#f6f6f6",
  },
  addIcon: {
    position: "absolute",
    right: -(25 / 2),
    bottom: 16,

    borderRadius: 50,
    color: "#ff6c00",
    backgroundColor: "#fff",
  },
  form: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 92,
    paddingBottom: 45,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    lineHeight: 35,
    marginBottom: 33,
    color: "#212121",
    fontFamily: "Roboto500",
  },

  input: {
    height: 50,
    marginBottom: 16,
    padding: 16,
    fontSize: 16,
    lineHeight: 19,
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    backgroundColor: "#f6f6f6",
    fontFamily: "Roboto400",
  },

  inputFocused: {
    height: 50,
    marginBottom: 16,
    padding: 16,
    fontSize: 16,
    lineHeight: 19,
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: "#ff6c00",
    backgroundColor: "#f6f6f6",
    fontFamily: "Roboto400",
  },
  button: {
    alignItems: "center",
    marginTop: 27,
    marginBottom: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 100,
    backgroundColor: "#ff6c00",
  },
  registerButtonText: {
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto400",
    color: "#fff",
  },
  authText: {
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
    color: "#1b4371",
    fontFamily: "Roboto400",
  },
  loginAuthText: {
    textDecorationLine: "underline",
  },
  openPassBtn: {
    position: "absolute",
    top: -52,
    right: 16,
  },
  openPassBtnText: {
    fontSize: 16,
    lineHeight: 19,
    color: "#1b4371",
    fontFamily: "Roboto400",
  },
});
export default RegistrationScreen;
