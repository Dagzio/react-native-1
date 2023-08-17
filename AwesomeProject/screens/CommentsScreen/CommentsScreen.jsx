import { TouchableOpacity, KeyboardAvoidingView, Text,  } from "react-native";
import { View, Image, StyleSheet} from "react-native";
import { TextInput, ScrollView } from "react-native-gesture-handler";

const CommentsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          style={{ width: 343 }}
          source={require("../../assets/images/postImage2.jpg")}
        />
      </View>
      <ScrollView>
        
          <View style={styles.userCommentWrapper}>
            <View>
              <Image
                style={styles.userAvatar}
                source={require("../../assets/icons/userAvatar1.jpg")}
              />
            </View>
            <View style={styles.commentContainer}>
              <Text style={styles.userCommentText}>
                Really love your most recent photo. I’ve been trying to capture
                the same thing for a few months and would love some tips!
              </Text>
              <Text style={styles.commentDate}>09 червня, 2020 | 08:40</Text>
            </View>
          </View>
          <View style={styles.userCommentWrapper}>
            <View style={styles.userCommentContainer}>
              <Text style={styles.userCommentText}>
                A fast 50mm like f1.8 would help with the bokeh. I’ve been using
                primes as they tend to get a bit sharper images.
              </Text>
              <Text style={styles.commentDateReversedStyle}>
                09 червня, 2020 | 09:14
              </Text>
            </View>
            <View>
              <Image
                style={styles.userAvatar}
                source={require("../../assets/icons/userAvatar2.jpg")}
              />
            </View>
          </View>
          <View style={styles.userCommentWrapper}>
            <View>
              <Image
                style={styles.userAvatar}
                source={require("../../assets/icons/userAvatar1.jpg")}
              />
            </View>
            <View style={styles.commentContainer}>
              <Text style={styles.userCommentText}>
                Thank you! That was very helpful!
              </Text>
              <Text style={styles.commentDate}>09 червня, 2020 | 08:40</Text>
            </View>
          </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View>
            <TextInput
              style={styles.input}
              placeholder="Коментувати..."
              inputMode="text"
            />
            <TouchableOpacity style={styles.sendCommentBtn}>
              <Image
                style={styles.commentBtnIcon}
                source={require("../../assets/icons/sendCommentBtn.jpg")}
              />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingTop: 32,
  },
  imageWrapper: {
    borderRadius: 8,
    marginBottom: 32,
  },
  userCommentWrapper: {
    flexDirection: "row",
    marginBottom: 24,
    columnGap: 16,
  },
  userAvatar: {
    borderRadius: 14,
    width: 28,
    height: 28,
  },
  commentContainer: {
    padding: 16,
    width: 299,
    backgroundColor: "#e8e8e8",
    borderRadius: 6,
    borderTopLeftRadius: 0,
  },
  userCommentContainer: {
    padding: 16,
    width: 299,
    backgroundColor: "#e8e8e8",
    borderRadius: 6,
    borderTopRightRadius: 0,
  },
  userCommentText: {
    marginBottom: 8,
    fontFamily: "Roboto400",
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
  },
  commentDate: {
    fontFamily: "Roboto400",
    fontSize: 10,
    lineHeight: 12,
    textAlign: "right",
    color: "#bdbdbd",
  },
  commentDateReversedStyle: {
    fontFamily: "Roboto400",
    fontSize: 10,
    lineHeight: 12,
    color: "#bdbdbd",
  },
  input: {
    height: 50,
    padding: 16,
    fontSize: 16,
    lineHeight: 19,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderRadius: 100,
    fontFamily: "Roboto500",
    color: "#bdbdbd",
    backgroundColor: "#f6f6f6",
  },
  sendCommentBtn: {
    position: "absolute",
    top: 8,
    right: 8,
    alignItems: "center",
    justifyContent: "center",
    width: 34,
    height: 34,
    borderRadius: 100,
    backgroundColor: "#ff6c00",
  },
  commentBtnIcon: {
    width: 10,
    height: 14,
  },
});
export default CommentsScreen;
