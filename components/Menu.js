import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from "react-native";
const home = require("../assets/home.png");
function Menu() {
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image1} source={home} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image1: {
    paddingHorizontal: 200,
  },
  text: {
    paddingHorizontal: 30,

    color: "#fff",
    fontFamily: "DM Sans",
    fontSize: 48,
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
});
export default Menu;
