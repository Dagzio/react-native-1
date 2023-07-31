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
  Alert,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const [isSecureText, setIsSecureText] = useState(true);
  const secureTextToggle = () => {
    setIsSecureText((prev) => !prev);
  };

  /**
   * SIMULATED FORM SUBMISSION ======================================
   */
  const onLogin = () => {
    Alert.alert(`Welcome! ${inputEmail} : ${inputPassword}`);
    setInputEmail("");
    setInputPassword("");
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
              <Text style={styles.title}>Увійти</Text>
              <TextInput
                placeholder="Адрес електронної пошти"
                style={isEmailFocused ? styles.inputFocused : styles.input}
                inputMode="email"
                value={inputEmail}
                onChangeText={setInputEmail}
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(false)}
              />
              <TextInput
                placeholder="Пароль"
                style={isPasswordFocused ? styles.inputFocused : styles.input}
                secureTextEntry={isSecureText}
                value={inputPassword}
                onChangeText={setInputPassword}
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
                <TouchableOpacity style={styles.button} onPress={onLogin}>
                  <Text style={styles.loginButtonText}>Увійти</Text>
                </TouchableOpacity>
                <Pressable>
                  <Text style={styles.authText}>
                    Немає акаунту?{" "}
                    <Text style={styles.registerAuthText} onPress={() => navigation.navigate("RegistrationScreen")}>Зареєструватися</Text>
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
  form: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    paddingBottom: 111,
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
  button: {
    alignItems: "center",
    marginTop: 27,
    marginBottom: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 100,
    backgroundColor: "#ff6c00",
  },
  loginButtonText: {
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
    fontFamily: "Roboto400",
  },
  authText: {
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
    color: "#1b4371",
    fontFamily: "Roboto400",
  },
  registerAuthText: {
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

export default LoginScreen;
