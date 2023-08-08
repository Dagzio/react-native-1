import { StyleSheet, Image, ScrollView, Text, Pressable,TouchableOpacity, View, } from "react-native";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Image
          source={require("../../assets/images/userPhotoS.jpg")}
          style={styles.userPhoto}
        />
        <View>
          <Text style={styles.userName}>Natalia Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  userPhoto: {
    width: 60,
    height: 60,
    marginRight: 8,
    borderRadius: 8,
  },
  userName: {
    fontSize: 13,
    lineHeight: 15,
    fontFamily: "Roboto700",
    color: "#212121",
  },
  userEmail: {
    fontSize: 11,
    lineHeight: 13,
    fontFamily: "Roboto400",
    color: "rgba(33, 33, 33, 0.8)",
  },
});

export default PostsScreen;
