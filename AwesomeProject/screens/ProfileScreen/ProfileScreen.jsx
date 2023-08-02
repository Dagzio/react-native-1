import { useNavigation } from "@react-navigation/native";

import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const ProfileScreen = () => {
    const navigation = useNavigation();

    return (
      <ScrollView>
    <View style={styles.container}>
    
      <ImageBackground
        source={require("../../assets/images/imageBG.jpg")}
        resizeMode="cover"
        style={styles.container}
      >
        <StatusBar
          style="auto"
          backgroundColor="#fff"
          barStyle="dark-content"
              />
              
            
        <View style={styles.postsContainer}>
          <Image
            source={require("../../assets/images/userPhotoM.jpg")}
            style={styles.avatar}
          />
          <Image
            source={require("../../assets/icons/deletePhotoIcon.jpg")}
            style={styles.removeAvatarIcon}
          />

          <Text style={styles.userName}>Natali Romanova</Text>
          <Pressable
            onPress={() => navigation.navigate("LoginScreen")}
            style={styles.logOutIcon}
          >
            <Image source={require("../../assets/icons/logOutIcon.jpg")} />
                  </Pressable>
          <View style={styles.iconWrapper}>
            <Image source={require("../../assets/images/postImage1.jpg")} />
          </View>
          <Text style={styles.imageText}>Ліс</Text>
          <View style={styles.detailsWrapper}>
            <View style={styles.countWrapper}>
              <TouchableOpacity onPress={() => navigation.navigate("CommentsScreen")}>
                <Image
                  style={styles.shapeIcon}
                  source={require("../../assets/icons/commentOrangeIcon.jpg")}
                />
              </TouchableOpacity>
              <Text style={styles.countComents}>8</Text>
            </View>
            <View style={styles.likeCountWrapper}>
              <Image
                style={styles.shapeIcon}
                source={require("../../assets/icons/likeOrangeIcon.jpg")}
              />
              <Text style={styles.countComents}>153</Text>
            </View>
            <View style={styles.locationWrapper}>
              <Image
                style={styles.mapPinIcon}
                source={require("../../assets/icons/locationIcon.jpg")}
              />
              <Text style={styles.country}>Ukraine</Text>
            </View>
          </View>
          <View style={styles.iconWrapper}>
            <Image source={require("../../assets/images/postImage2.jpg")} />
          </View>
          <Text style={styles.imageText}>Захід на чорному морі</Text>
          <View style={styles.detailsWrapper}>
            <View style={styles.countWrapper}>
              <TouchableOpacity onPress={() => navigation.navigate("CommentsScreen")}>
                <Image
                  style={styles.shapeIcon}
                  source={require("../../assets/icons/commentOrangeIcon.jpg")}
                />
              </TouchableOpacity>
              <Text style={styles.countComents}>3</Text>
            </View>
            <View style={styles.likeCountWrapper}>
              <Image
                style={styles.shapeIcon}
                source={require("../../assets/icons/likeOrangeIcon.jpg")}
              />
                  <Text style={styles.countComents}>200</Text>
                  </View>
                 <View style={styles.locationWrapper}>
              <Image
                style={styles.mapPinIcon}
                source={require("../../assets/icons/locationIcon.jpg")}
              />
              <Text style={styles.country}>Ukraine</Text>
            
            </View>
          
          </View>
          <View style={styles.iconWrapper}>
            <Image source={require("../../assets/images/postImage3.jpg")} />
          </View>
          <Text style={styles.imageText}>Старий будиночок у Венеції</Text>
          <View style={styles.detailsWrapper}>
            <View style={styles.countWrapper}>
              <TouchableOpacity onPress={() => navigation.navigate("CommentsScreen")}>
                <Image
                  style={styles.shapeIcon}
                  source={require("../../assets/icons/commentOrangeIcon.jpg")}
                />
              </TouchableOpacity>
              <Text style={styles.countComents}>50</Text>
            </View>
            <View style={styles.likeCountWrapper}>
              <Image
                style={styles.shapeIcon}
                source={require("../../assets/icons/likeOrangeIcon.jpg")}
              />
              <Text style={styles.countComents}>200</Text>
            </View>
            <View style={styles.locationWrapper}>
              <Image
                style={styles.mapPinIcon}
                source={require("../../assets/icons/locationIcon.jpg")}
              />
              <Text style={styles.country}>Italy</Text>
            </View>
         </View>      
       </View>   
        </ImageBackground>
            </View>
            </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    position: "absolute",
    left: 128,
    top: -60,
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  removeAvatarIcon: {
    position: "absolute",
    width: 35,
    height: 35,
    top: 15,
    left: 229,
  },
  userName: {
    textAlign: "center",
    fontSize: 30,
    lineHeight: 35,
    marginBottom: 33,
    fontFamily: "Roboto500",
    color: "#212121",
  },
  postsContainer: {
    paddingLeft: 16,
    paddingRight: 16,
    // marginLeft: "auto",
    // marginRight: "auto",
    paddingTop: 92,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",

  },
  iconWrapper: {
    marginBottom: 8,
    borderRadius: 8,
  },
  imageText: {
    marginBottom: 8,
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto400",
  },
  detailsWrapper: {
    marginBottom: 32,
    flexDirection: "row",
  },
  shapeIcon: {
    width: 18,
    height: 18,
    marginRight: 6,
  },
  mapPinIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
    },
  country: {
    textDecorationLine: "underline"
  },
  countComents: {
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    fontFamily: "Roboto400",
  },
  countWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  likeCountWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 24,
  },
  locationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    // marginLeft: "auto",
  },
    logOutIcon: {
    position: "absolute",
    width: 24,
    height: 24,
    top: 22,
    right: 16,
  },
});

export default ProfileScreen;