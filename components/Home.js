import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Button,
} from "react-native";
const home = require("../assets/home.png");
const e = require("../assets/e.png");
const b = require("../assets/b.png");
const Group = require("../assets/Group.png");
const c = require("../assets/c.png");
const Group57 = require("../assets/Group57.png");
const Instagram = require("../assets/Instagram.png");
const Group58 = require("../assets/Group58.png");
const Group29 = require("../assets/Group29.png");
const Group59 = require("../assets/Group59.png");
const Group60 = require("../assets/Group60.png");
const Trending = require("../assets/Trending.png");
const Just = require("../assets/Just.jpg");
const Video = require("../assets/Video.png");
const g = require("../assets/g.png");
const d = require("../assets/d.png");
const minus = require("../assets/minus.png");
const f = require("../assets/f.png");
const Brand = require("../assets/Brand.png");
const Sti1 = require("../assets/Sti1.png");
const Sti2 = require("../assets/Sti2.png");
const Sti3 = require("../assets/Sti3.png");
const Sti4 = require("../assets/Sti4.png");
const Devider = require("../assets/Devider.png");
function Home({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image1} source={home} />

      <TouchableOpacity>
        <View style={styles.button}>
          <Button
            color="white"
            title="EXPLORE CATEGORY"
            onPress={() => navigation.jumpTo("Category")}
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.hometext}>
        LUXURY {"\n"}FASHION {"\n"}& ACCESSORIES
      </Text>
      <Text style={styles.text}>New Arrival</Text>
      <Image style={{ alignSelf: "center" }} source={Devider} />
      <View
        style={{
          paddingHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={styles.card}>
          <Image style={styles.image2} source={e} />
          <View style={{ alignSelf: "center" }}>
            <Text style={styles.tenor}>21WN reversible angora</Text>
            <View style={{ alignSelf: "center" }}>
              <Text>cardigan</Text>
            </View>
            <View style={{ alignSelf: "center" }}>
              <Text>$120</Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <Image style={styles.image2} source={b} />
          <View>
            <View style={{ alignSelf: "center" }}>
              <Text>21WN reversible angora</Text>
              <View style={{ alignSelf: "center" }}>
                <Text>cardigan</Text>
                <View style={{ alignSelf: "center" }}>
                  <Text>$120</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={styles.card2}>
          <Image style={styles.image2} source={c} />
          <View>
            <Text>21WN reversible angora</Text>
            <View style={{ alignSelf: "center" }}>
              <Text>cardigan</Text>
            </View>
            <View style={{ alignSelf: "center" }}>
              <Text>$120</Text>
            </View>
          </View>
        </View>
        <View style={styles.card2}>
          <Image style={styles.image2} source={d} />
          <View>
            <View style={{ alignSelf: "center" }}>
              <Text>Oblong bag</Text>
            </View>
            <View style={{ alignSelf: "center" }}>
              <Text>cardigan</Text>
            </View>
            <View style={{ alignSelf: "center" }}>
              <Text>$120</Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.jumpTo("Menu")}>
        <Text style={styles.text3}>Explore More</Text>
      </TouchableOpacity>

      <Image style={{ alignSelf: "center" }} source={Brand} />
      <Text style={styles.text4}>COLLECTIONS</Text>
      <Image
        style={{ alignSelf: "center", width: 394, height: 240 }}
        source={g}
      />
      <Text style={styles.textBehind2}>10</Text>
      <Text style={styles.textBehind}>October</Text>
      <Text style={styles.textBehind3}>COLLECTION</Text>
      <Image style={styles.image3} source={f} />
      <Text style={styles.textBehind4}>Autum</Text>
      <Text style={styles.textBehind5}>COLLECTION</Text>
      <Image style={styles.image4} source={Video} />
      <Image style={{ alignSelf: "center", marginTop: 40 }} source={Just} />
      <Image style={{ alignSelf: "center", marginTop: 10 }} source={Devider} />
      <Image style={{ alignSelf: "center" }} source={Trending} />
      <View style={{ backgroundColor: "#F2F2F2" }}>
        <Image style={{ alignSelf: "center", marginTop: 10 }} source={Group} />
        <Text style={{ textAlign: "center", marginTop: 10 }}>
          Making a luxurious lifestyle accessible{"\n"} for a generous group of
          women is our{"\n"} daily drive.
        </Text>
        <Image
          style={{ alignSelf: "center", marginTop: 10 }}
          source={Devider}
        />
        <View
          style={{
            paddingHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.card2}>
            <Image style={styles.image3} source={Sti1} />
            <View>
              <View style={{ alignSelf: "center" }}>
                <Text style={{ textAlign: "center" }}>
                  Fast shipping. Free on {"\n"}orders over $25.
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.card2}>
            <Image style={styles.image3} source={Sti2} />
            <View>
              <View style={{ alignSelf: "center" }}>
                <Text style={{ textAlign: "center" }}>
                  Sustainable process from {"\n"}start to finish. over $25.
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.card2}>
            <Image style={styles.image3} source={Sti3} />
            <View>
              <View style={{ alignSelf: "center" }}>
                <Text style={{ textAlign: "center" }}>
                  Fast shipping. Free on {"\n"}orders over $25.
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.card2}>
            <Image style={styles.image3} source={Sti4} />
            <View>
              <View style={{ alignSelf: "center" }}>
                <Text style={{ textAlign: "center" }}>
                  Sustainable process from {"\n"}start to finish. over $25.
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Image
          style={{ alignSelf: "center", marginTop: 20, marginBottom: 20 }}
          source={minus}
        />
      </View>
      <Text style={styles.text3}>FOLLOW US</Text>
      <Image style={{ alignSelf: "center", marginTop: 5 }} source={Instagram} />
      <View
        style={{
          paddingHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={styles.card3}>
          <Image style={styles.image3} source={Group57} />
        </View>
        <View style={styles.card3}>
          <Image style={styles.image3} source={Group58} />
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={styles.card3}>
          <Image style={styles.image3} source={Group59} />
        </View>
        <View style={styles.card3}>
          <Image style={styles.image3} source={Group60} />
        </View>
      </View>
      <Image style={{ alignSelf: "center", marginTop: 30 }} source={Group29} />
      <Image style={{ alignSelf: "center", marginTop: 10 }} source={Devider} />
      <View style={{ alignSelf: "center", marginTop: 20 }}>
        <Text style={{ textAlign: "center" }}>
          support@openui.design {"\n"}+60 825 876 {"\n"}08:00 - 22:00 - Everyday
        </Text>
      </View>
      <Image style={{ alignSelf: "center", marginTop: 30 }} source={Devider} />
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
        <TouchableOpacity>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text3: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: 20,
  },
  image3: {
    alignSelf: "center",
    marginTop: 40,
  },

  image4: {
    marginTop: 40,
    width: 394,
    height: 240,
  },
  image1: {
    paddingHorizontal: 200,
    marginTop: 30,
  },
  textBehind2: {
    position: "absolute",

    color: "#00000070",
    paddingTop: 1570,
    marginLeft: 200,
    fontSize: 157,
    fontWeight: "bold",
    fontStyle: "italic",
  },

  textBehind4: {
    position: "absolute",

    color: "#00000090",
    paddingTop: 1820,
    marginLeft: 150,
    fontSize: 40,

    fontStyle: "italic",
  },
  textBehind5: {
    position: "absolute",

    color: "#00000090",
    paddingTop: 1860,
    marginLeft: 170,
    fontSize: 13,
  },

  textBehind: {
    position: "absolute",

    color: "white",
    paddingTop: 1635,
    marginLeft: 210,
    fontSize: 40,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  textBehind3: {
    position: "absolute",

    color: "white",
    paddingTop: 1675,
    marginLeft: 230,
    fontSize: 20,
  },
  card: {
    marginTop: 30,
  },
  card2: {
    marginTop: 20,
  },
  card3: {},
  hometext: {
    color: "#00000080",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: -350,
    fontStyle: "italic",
    paddingHorizontal: 20,
  },
  text: {
    paddingHorizontal: 30,
    marginTop: 260,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    fontStyle: "normal",
  },
  text4: {
    paddingHorizontal: 30,
    marginTop: 20,
    textAlign: "center",
    fontSize: 48,
    fontStyle: "normal",
    fontWeight: 700,
  },
  image2: {
    width: 165,
    height: 200,
  },
  button: {
    marginTop: -60,
    alignSelf: "center",
    borderRadius: 28,
    padding: 5,
    width: 280,
    backgroundColor: "#00000065",
  },
});
export default Home;
