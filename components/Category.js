import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
  StyleSheet,
} from "react-native";
const ca1 = require("../assets/catgory/ca1.png");
const ca2 = require("../assets/catgory/ca2.png");
const ca3 = require("../assets/catgory/ca3.png");
const ca4 = require("../assets/catgory/ca4.png");
const ca5 = require("../assets/catgory/ca5.png");
const Devider = require("../assets/Devider.png");
const Filter = require("../assets/Filter.png");
const Gallery = require("../assets/Gallery.png");
const Group29 = require("../assets/Group29.png");

function Category({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView style={{ padding: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 20,
            justifyContent: "space-between",
          }}
        >
          <Text>4500 APPAREL</Text>
          <View
            style={{
              flexDirection: "row",
              gap: 20,
              alignItems: "baseline",
              alignSelf: "center",
              textAlign: "center",
            }}
          >
            <TouchableOpacity>
              <View>
                <Button color="grey" title="new" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <Image source={Gallery} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <Image source={Filter} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <TouchableOpacity onPress={() => navigation.navigate("Product")}>
            <Image source={ca1} />
          </TouchableOpacity>
        </View>
        <Text style={{ paddingHorizontal: 27 }}>MOHAN</Text>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 27,
            justifyContent: "space-between",
          }}
        >
          <Text>Recycle Boucle Knit Cardigan Pink</Text>
          <Text style={styles.price}>$120</Text>
        </View>

        <View style={styles.card}>
          <Image source={ca2} />
        </View>
        <Text style={{ paddingHorizontal: 27 }}>MOHAN</Text>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 27,
            justifyContent: "space-between",
          }}
        >
          <Text>Recycle Boucle Knit Cardigan Pink</Text>
          <Text style={styles.price}>$120</Text>
        </View>

        <View style={styles.card}>
          <Image source={ca3} />
        </View>
        <Text style={{ paddingHorizontal: 27 }}>MOHAN</Text>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 27,
            justifyContent: "space-between",
          }}
        >
          <Text>Recycle Boucle Knit Cardigan Pink</Text>
          <Text style={styles.price}>$120</Text>
        </View>

        <View style={styles.card}>
          <Image source={ca4} />
        </View>
        <Text style={{ paddingHorizontal: 27 }}>MOHAN</Text>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 27,
            justifyContent: "space-between",
          }}
        >
          <Text>Recycle Boucle Knit Cardigan Pink</Text>
          <Text style={styles.price}>$120</Text>
        </View>
        <View style={styles.card}>
          <Image source={ca5} />
        </View>
        <Text style={{ paddingHorizontal: 27 }}>MOHAN</Text>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 27,
            justifyContent: "space-between",
          }}
        >
          <Text>Recycle Boucle Knit Cardigan Pink</Text>
          <Text style={styles.price}>$120</Text>
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

export default Category;

const styles = StyleSheet.create({
  card: {
    alignSelf: "center",
    padding: 10,
  },
  price: {
    color: "#DD8560",
  },
  cat: {
    backgroundColor: "white",
    borderRadius: 20,
    width: 60,
    height: 40,
  },
});
