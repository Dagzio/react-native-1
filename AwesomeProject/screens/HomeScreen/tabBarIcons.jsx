import { Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


export const createPostIcon = () => {
    return <TouchableOpacity style={styles.iconWrapper}>
    <Image
      source={require("../../assets/icons/addIcon.jpg")}
      style={styles.addIcon}
    />
    </TouchableOpacity>
};

export const gridIcon = () => {
    return <Image source={require("../../assets/icons/gridIcon.jpg")} style={styles.imgTabBar} />

};


export const userIcon = () => {
    return <Image source={require("../../assets/icons/userIcon.jpg")} style={styles.imgTabBar} />
};

const styles = StyleSheet.create({
    imgTabBar: {
      width: 24,
      height: 24,
    },
    addIcon: {
      width: 13,
      height: 13,
    },
    iconWrapper: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#FF6C00",
      borderRadius: 100,
      width: 70,
      height: 40,
    },
  });

