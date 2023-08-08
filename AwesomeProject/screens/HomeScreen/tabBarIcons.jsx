import { Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


export const createPostIcon = (children) => {
    return <TouchableOpacity style={styles.iconWrapper}>
     {children}
    </TouchableOpacity>
};

export const addPostIcon = () => {
 return <Image source={require("../../assets/icons/addIcon.jpg")} style={styles.addIcon} />
}

export const gridIcon = () => {
    return <Image source={require("../../assets/icons/gridIcon.jpg")} style={styles.gridAndUserIcons} />

};


export const userIcon = () => {
    return <Image source={require("../../assets/icons/userIcon.jpg")} style={styles.gridAndUserIcons} />

};

const styles = StyleSheet.create({
    iconWrapper: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#FF6C00",
      borderRadius: 100,
      width: 70,
      height: 40,
    },
    addIcon: {
      width: 13,
      height: 13,
    },
    gridAndUserIcons: {
      width: 24,
      height: 24,
    },
  });

