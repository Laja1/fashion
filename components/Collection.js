import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";
const im21 = require("../assets/im21.png");

const im22 = require("../assets/im22.png");
const im20 = require("../assets/im20.png");
const Group29 = require("../assets/Group29.png");
const Devider = require("../assets/Devider.png");

function Collection({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.textBehind}>10</Text>
        <Text
          style={{
            color: "white",
            alignSelf: "center",
            fontSize: 45,
            paddingTop: 50,
            fontStyle: "italic",
          }}
        >
          October
        </Text>
        <Text
          style={{
            color: "white",
            alignSelf: "center",
            fontSize: 20,
            marginTop: -10,
            paddingBottom: 10,
          }}
        >
          Collection
        </Text>
        <View>
          <Image style={styles.image1} source={im20} />
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
              01
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
              OCTOBER COLLECTION
            </Text>
          </View>
        </View>
        <Image style={styles.image1} source={im21} />

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
              fontSize: "14",
            }}
          >
            02
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

              fontSize: "14",
            }}
          >
            BLACK COLLECTION
          </Text>
        </View>
        <Image style={styles.image1} source={im22} />
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            alignSelf: "center",
            gap: 12,
            paddingBottom: 40,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "14",
            }}
          >
            03
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

              fontSize: "14",
            }}
          >
            HAE BY HAEKIM
          </Text>
        </View>
        <View style={{ backgroundColor: "#FFFFFF" }}>
          <Image
            style={{ alignSelf: "center", marginTop: 30 }}
            source={Group29}
          />
          <Image
            style={{ alignSelf: "center", marginTop: 10 }}
            source={Devider}
          />
          <View style={{ alignSelf: "center", marginTop: 20 }}>
            <Text style={{ textAlign: "center" }}>
              support@openui.design {"\n"}+60 825 876 {"\n"}08:00 - 22:00 -
              Everyday
            </Text>
          </View>
          <Image
            style={{ alignSelf: "center", marginTop: 30 }}
            source={Devider}
          />
          <View
            style={{
              paddingHorizontal: 20,
              flexDirection: "row",
              justifyContent: "center",
              padding: 20,
              gap: 50,
            }}
          >
            <TouchableOpacity>
              <Text>About</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.jumpTo("Blog")}>
              <Text>Blog</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: "#F2F2F2",

              alignItems: "center",
              padding: 20,
            }}
          >
            <Text style={{ color: "grey" }}>
              Copyright© OpenUI All Rights Reserved.
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
