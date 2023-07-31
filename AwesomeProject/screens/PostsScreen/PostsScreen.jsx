import { StyleSheet, Image, ScrollView, Text, Pressable,TouchableOpacity, View, } from "react-native";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.postsHeader}>
        <Text style={styles.postsHeaderText}>Публікації</Text>
        <Pressable style={styles.logOutButton}>
          <Image
            source={require("../../assets/icons/logOutIcon.jpg")}
            style={styles.logOutIcon}
          />
        </Pressable>
      </View>
      <View style={styles.userInfo}>
        <Image
          source={require("../../assets/images/UserPhotoS.jpg")}
          style={styles.userPhoto}
        />
        <View>
          <Text style={styles.userName}>Natalia Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>
      <ScrollView></ScrollView>
      <View style={styles.navigationMenu}>
        <Pressable>
          <Image
            source={require("../../assets/icons/gridIcon.jpg")}
            style={styles.gridIcon}
          />
        </Pressable>
        <TouchableOpacity style={styles.iconWrapper}>
          <Image
            source={require("../../assets/icons/addIcon.jpg")}
            style={styles.addIcon}
          />
        </TouchableOpacity>
        <Pressable>
          <Image
            source={require("../../assets/icons/userIcon.jpg")}
            style={styles.userIcon}
          />
        </Pressable>
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
  postsHeader: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 11,
    paddingBottom: 11,
    marginBottom: 32,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: "#e8e8e8",
  },
  postsHeaderText: {
    fontSize: 17,
    lineHeight: 22,
    fontFamily: "Roboto500",
  },
  logOutButton: {
    position: "absolute",
    right: 16,
    bottom: 10,
  },
  logOutIcon: {
    width: 24,
    height: 24,
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
  navigationMenu: {
    flexDirection: "row",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 1,
    borderStyle: "solid",
    borderColor: "#e8e8e8",
  },
  gridIcon: {
    width: 24,
    height: 24,
    marginRight: 39,
  },
  iconWrapper: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ff6c00",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 39,
  },
  addIcon: {
    width: 13,
    height: 13,
  },
  userIcon: {
    width: 24,
    height: 24,
  },
});

export default PostsScreen;
