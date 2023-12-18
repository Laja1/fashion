import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
  SafeAreaView,
} from "react-native";

const Devider = require("../assets/Devider.png");
const Group29 = require("../assets/Group29.png");
const Re43 = require("../assets/Re43.png");
const Re44 = require("../assets/Re44.png");
const Re45 = require("../assets/Re45.png");
const Re46 = require("../assets/Re46.png");
const Re444 = require("../assets/Re444.png");

function Blog({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ alignSelf: "center", padding: 30 }}>
          <Text style={{ alignSelf: "center" }}>BLOG</Text>
          <Image source={Devider} />
        </View>
        <View style={{ gap: 30 }}>
          <View>
            <Image style={style.image} source={Re43} />
            <Image style={style.image2} source={Re444} />
            <Text style={style.texts}>
              2021 Style Guide: The Biggest Fall Trends
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "baseline",
              gap: 140,
            }}
          >
            <View style={{ flexDirection: "row", paddingHorizontal: 24 }}>
              <View style={style.back}>
                <TouchableOpacity>
                  <Text style={style.te}>#Fashion</Text>
                </TouchableOpacity>
              </View>
              <View style={style.back}>
                <Text style={style.te}>#Tips</Text>
              </View>
            </View>
            <Text style={style.te}>4 days ago</Text>
          </View>
          <View>
            <Image style={style.image} source={Re44} />
            <Image style={style.image2} source={Re444} />
            <Text style={style.texts}>
              2021 Style Guide: The Biggest Fall Trends
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "baseline",
              gap: 140,
            }}
          >
            <View style={{ flexDirection: "row", paddingHorizontal: 24 }}>
              <View style={style.back}>
                <TouchableOpacity>
                  <Text style={style.te}>#Fashion</Text>
                </TouchableOpacity>
              </View>
              <View style={style.back}>
                <Text style={style.te}>#Tips</Text>
              </View>
            </View>
            <Text style={style.te}>4 days ago</Text>
          </View>
          <View>
            <Image style={style.image} source={Re45} />
            <Image style={style.image2} source={Re444} />
            <Text style={style.texts}>
              2021 Style Guide: The Biggest Fall Trends
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "baseline",
              gap: 140,
            }}
          >
            <View style={{ flexDirection: "row", paddingHorizontal: 24 }}>
              <View style={style.back}>
                <TouchableOpacity>
                  <Text style={style.te}>#Fashion</Text>
                </TouchableOpacity>
              </View>
              <View style={style.back}>
                <Text style={style.te}>#Tips</Text>
              </View>
            </View>
            <Text style={style.te}>4 days ago</Text>
          </View>
          <View>
            <Image style={style.image} source={Re46} />
            <Image style={style.image2} source={Re444} />
            <Text style={style.texts}>
              2021 Style Guide: The Biggest Fall Trends
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "baseline",
              gap: 140,
            }}
          >
            <View style={{ flexDirection: "row", paddingHorizontal: 24 }}>
              <View style={style.back}>
                <TouchableOpacity>
                  <Text style={style.te}>#Fashion</Text>
                </TouchableOpacity>
              </View>
              <View style={style.back}>
                <Text style={style.te}>#Tips</Text>
              </View>
            </View>
            <Text style={style.te}>4 days ago</Text>
          </View>

          <View style={style.load}>
            <Text>LOAD MORE +</Text>
          </View>
        </View>

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
            padding: 10,
          }}
        >
          <Text style={{ color: "grey" }}>
            Copyright© OpenUI All Rights Reserved.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  image: {
    alignSelf: "center",
  },
  load: {
    width: 200,
    height: 50,
    alignSelf: "center",
    borderWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
  },
  back: {
    borderRadius: 10,

    borderColor: "#F5F5F5",
    borderWidth: 2,
  },
  image2: {
    alignSelf: "center",
    marginTop: -70,
  },
  te: {
    color: "#888888",
  },
  texts: {
    color: "#FCFCFC",
    marginTop: -63,

    paddingHorizontal: 40,
    fontSize: 17,
  },
});

export default Blog;
