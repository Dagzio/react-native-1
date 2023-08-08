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
// import { Camera } from "expo-camera";

import { useNavigation } from "@react-navigation/native";
// import * as Location from "expo-location";

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
          {takenPhoto ? (
            <View style={styles.addPhotoContainer}>
              <Image
                source={{ uri: takenPhoto }}
                style={styles.publicationPhoto}
              />
              <View style={styles.publicationAddPhotoIconWrapper}>
                <Image
                  source={require("../CreatePostsScreen/camera-white.png")}
                  style={styles.publicationAddPhotoIcon}
                />
              </View>
            </View>
          ) : (
            
              <TouchableOpacity>
                <View style={styles.addPhotoContainer}>
                  <Image
                    source={require("../CreatePostsScreen/camera.png")}
                    style={styles.addPhotoIcon}
                  />
                </View>
              </TouchableOpacity>
          
          )}
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
              style={styles.mapPinIcon}
              source={require("../CreatePostsScreen/map-pin.png")}
            />
          </View>

          {name && location !== "" ? (
            <TouchableOpacity style={styles.button} onPress={handleSumbit}>
              <Text style={styles.buttonText}>Опублікувати</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.publishTextWrapper}>
              <Text style={styles.publishText}>Опублікувати</Text>
            </View>
          )}
          <View style={styles.trashIconWrapper}>
            <TouchableOpacity
              style={styles.trashIconTouchable}
             
            >
              <Image
                style={styles.trashIcon}
                source={require("../CreatePostsScreen/trash.png")}
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
    backgroundColor: "#fff",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
  },
  addPhotoContainer: {
    height: 240,
    alignItems: "center",
    justifyContent: "center",
  },
  addPhotoText: {
    fontFamily: "Roboto400",
    marginTop: 8,
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  addPhotoIcon: {
    width: 24,
    height: 24,
  },
  publicationAddPhotoIconWrapper: {
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  publicationAddPhotoIcon: {
    width: 24,
    height: 24,
  },
  inputName: {
    height: 50,
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor: "#E8E8E8",
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: 32,
  },
  inputLocation: {
    height: 50,
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor: "#E8E8E8",
    marginTop: 32,
    paddingLeft: 28,
  },
  mapPinIcon: {
    height: 24,
    width: 24,
    position: "absolute",
    top: 46,
  },
  button: {
    width: "100%",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    marginTop: 48,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto400",
  },
  publishTextWrapper: {
    alignItems: "center",
  },
  publishText: {

    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  publicationPhoto: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    borderRadius: 8,
  },
  trashIconWrapper: {
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    width: 70,
    height: 40,
    borderRadius: 20,
    alignSelf: "center",
  },
  trashIconTouchable: {
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