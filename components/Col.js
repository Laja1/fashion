import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";

const Group29 = require("../assets/Group29.png");
const Devider = require("../assets/Devider.png");

function Collection({ navigation, colData }) {
  console.log("colData:", colData);

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Image style={styles.image1} source={{ uri: colData.imageUrl }} />
          <Text style={styles.textBehind2}>10</Text>

          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              alignSelf: "center",
              gap: 12,
              paddingBottom: 20,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 14,
              }}
            >
              {colData.number}
            </Text>
            <Text
              style={{
                marginTop: -5,
                color: "#88888850",
              }}
            >
              ____________________
            </Text>

            <Text
              style={{
                color: "white",

                fontSize: 14,
              }}
            >
              {colData.name}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",

    color: "white",
  },
  textBehind: {
    position: "absolute",
    alignSelf: "center",
    color: "#ffffff50",
    paddingTop: 5,
    fontSize: 150,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  textBehind2: {
    position: "absolute",
    color: "#00000070",
    paddingTop: 300,
    marginLeft: 220,
    fontSize: 150,
    fontWeight: "bold",
    fontStyle: "italic",
  },

  image1: {
    width: 343,
    height: 456.62,
    alignSelf: "center",
  },
  text: {
    paddingHorizontal: 30,

    color: "#fff",

    fontSize: 48,
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
});
export default Collection;
