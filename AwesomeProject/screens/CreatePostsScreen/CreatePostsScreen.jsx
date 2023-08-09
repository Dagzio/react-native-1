import { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";

import { useNavigation } from "@react-navigation/native";


export function CreatePostsScreen() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          
            
              
                <View style={styles.addPhotoContainer}>
                <TouchableOpacity style={styles.addPhotoButton}>
                  <Image
                    source={require("../../assets/icons/cameraIcon.jpg")}
                    style={styles.addPhotoIcon}
                  />
                  </TouchableOpacity>
                </View>
              
          
          
          <Text style={styles.addPhotoText}>Завантажте фото</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            style={styles.inputName}
            placeholder="Назва..."
            placeholderStyle={{ fontFamily: "Roboto400" }}
          />
          <View>
            <TextInput
              value={location}
              onChangeText={setLocation}
              style={styles.inputLocation}
              placeholder="Місцевість..."
              placeholderStyle={{ fontFamily: "Roboto400" }}
            />
            <Image
              style={styles.locationIcon}
              source={require("../../assets/icons/locationIcon.jpg")}
            />
          </View>

          
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Опублікувати</Text>
            </TouchableOpacity>
          <View style={styles.trashIconWrapper}>
            <TouchableOpacity
              style={styles.trashIconButton}
            >
              <Image
                style={styles.trashIcon}
                source={require("../../assets/icons/trashIcon.jpg")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    backgroundColor: "#fff",
  },
  addPhotoContainer: {
    height: 240,
    marginBottom: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e8e8e8",
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#bdbdbd"
  },
  addPhotoButton: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center'
  },
  addPhotoText: {
    marginBottom: 32,
    fontSize: 16,
    lineHeight: 19,
    color: "#bdbdbd",
    fontFamily: "Roboto400",
  },
  addPhotoIcon: {
    width: 24,
    height: 24,
  },
  inputName: {
    height: 50,
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: 16,
    fontSize: 16,
    lineHeight: 19,
    borderBottomWidth: 1,
    borderStyle: "solid",
    fontFamily: "Roboto400",
    borderBottomColor: "#e8e8e8",
  },
  inputLocation: {
    height: 50,
    marginBottom: 32,
    paddingLeft: 28,
    fontSize: 16,
    lineHeight: 19,
    borderBottomWidth: 1,
    borderStyle: "solid",
    fontFamily: "Roboto400",
    borderBottomColor: "#e8e8e8",
  },
  locationIcon: {
    height: 24,
    width: 24,
    position: "absolute",
    top: 16,
  },
  button: {
    width: "100%",
    alignItems: "center",
    marginBottom: 70,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 100,
    backgroundColor: "#f6f6f6",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto400",
    color: "#bdbdbd",
  },
  trashIconWrapper: {
    alignItems: "center",
    alignSelf: "center",
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f6f6f6",
  },
  trashIconButton: {
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 40,
  },
  trashIcon: {
    width: 24,
    height: 24,
  },
});
export default CreatePostsScreen;