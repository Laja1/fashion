import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
const heart = require("../assets/catgory/Heart.png");
const ir = require("../assets/catgory/ir.png");
const Do = require("../assets/catgory/Do.png");
const Group29 = require("../assets/Group29.png");
const Do1 = require("../assets/catgory/Do1.png");
const Do2 = require("../assets/catgory/Do2.png");
const Shipping = require("../assets/catgory/Shipping.png");
const Tag = require("../assets/catgory/Tag.png");
const Devider = require("../assets/Devider.png");
const e = require("../assets/e.png");
const b = require("../assets/b.png");
const d = require("../assets/d.png");
const c = require("../assets/c.png");
const Refresh = require("../assets/catgory/Refresh.png");

import Swiper from "react-native-swiper";
const Product = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          autoplay={true}
          autoplayTimeout={3}
          paginationStyle={styles.pagination}
          dotStyle={styles.dot}
          activeDotStyle={styles.activeDot}
        >
          <View style={styles.slide}>
            <Image
              source={require("../assets/catgory/ca1.png")}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../assets/catgory/ca2.png")}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../assets/catgory/ca3.png")}
              style={styles.image}
            />
          </View>
        </Swiper>
        <View
          style={{
            flexDirection: "column",
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ fontSize: 18, padding: 5 }}>MOHAN</Text>
          <Text style={{ fontSize: 15, padding: 5 }}>
            Recycle Boucle Knit Cardigan Pink
          </Text>
          <Text
            style={
              (styles.price, { color: "#DD8560", fontSize: 15, padding: 5 })
            }
          >
            $120
          </Text>
        </View>
        <View style={{ flexDirection: "row", paddingTop: 10, gap: 20 }}>
          <View
            style={{ flexDirection: "row", paddingHorizontal: 25, gap: 10 }}
          >
            <Text style={{ color: "black" }}>Color</Text>

            <View style={styles.circle}>
              <Text>.</Text>
            </View>
            <View style={styles.circle2}>
              <Text style={{ color: "orange" }}>.</Text>
            </View>
            <View style={styles.circle3}>
              <Text style={{ color: "grey" }}>.</Text>
            </View>
          </View>

          <View
            style={{ flexDirection: "row", paddingHorizontal: 25, gap: 10 }}
          >
            <Text style={{ color: "black" }}>Size</Text>

            <TouchableOpacity>
              <View style={styles.circle}>
                <Text
                  style={{
                    color: "white",
                    fontSize: 9,
                    alignSelf: "center",
                    marginTop: 2.5,
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  S
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.circle4}>
                <Text
                  style={{
                    color: "black",
                    marginTop: 2.5,
                    fontSize: 9,
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  M
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.circle4}>
                <Text
                  style={{
                    color: "black",
                    marginTop: 2.5,
                    fontSize: 9,
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  L
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginTop: 40 }}>
          <View style={styles.buttonBack}>
            <TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  paddingHorizontal: 15,

                  gap: 20,
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white", fontSize: 40 }}>+</Text>

                <Text style={{ fontSize: 16, color: "white" }}>
                  ADD TO BASKET
                </Text>
                <Image style={{ marginHorizontal: 100 }} source={heart} />
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "column",
              paddingHorizontal: 20,
              padding: 20,
            }}
          >
            <Text
              style={{
                color: "#555555",
                fontWeight: "bold",
                paddingBottom: 10,
              }}
            >
              MATERIALS
            </Text>
            <Text style={{ color: "#555555" }}>
              We work with monitoring programmes to ensure compliance with
              safety, health and quality {"\n"}standards for our products.
            </Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              paddingHorizontal: 20,
              padding: 20,
            }}
          >
            <Text
              style={{
                color: "#555555",
                fontWeight: "bold",
                paddingBottom: 10,
              }}
            >
              CARE
            </Text>
            <Text style={{ color: "#555555" }}>
              To keep your jackets and coats clean, you only {"\n"}need to
              freshen them up and go over them with a {"\n"}cloth or a clothes
              brush. If you need to dry clean {"\n"}a garment, look for a dry
              cleaner that uses {"\n"}technologies that are respectful of the
              {"\n"}environment.
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "column",
            paddingHorizontal: 20,
            gap: 10,
          }}
        >
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Image source={Do} />
            <Text style={{ color: "#555555" }}>Do not use bleach</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Image source={Do1} />
            <Text style={{ color: "#555555" }}>Do not tumble dry</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Image source={Do2} />
            <Text style={{ color: "#555555" }}>
              Dry clean with tetrachloroethyl
            </Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Image source={ir} />
            <Text style={{ color: "#555555" }}>
              Iron at a maximum of 110ºC/230ºF
            </Text>
          </View>
        </View>
        <Text
          style={{
            color: "#555555",
            fontWeight: "bold",
            paddingHorizontal: 20,
            paddingTop: 20,
            paddingBottom: 10,
          }}
        >
          CARE
        </Text>
        <View
          style={{
            flexDirection: "column",
            paddingHorizontal: 20,
            gap: 10,
          }}
        >
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Image source={Shipping} />

            <Text style={{ color: "#555555" }}>Free Flat Rate Shipping</Text>
          </View>
          <View
            style={{ flexDirection: "column", gap: 5, paddingHorizontal: 33 }}
          >
            <Text style={{ color: "#555555" }}>
              Estimated to be delivered on
            </Text>
            <Text style={{ color: "#555555" }}>09/11/2021 - 12/11/2021.</Text>
          </View>

          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Image source={Tag} />
            <Text style={{ color: "#555555" }}>COD Policy</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Image source={Refresh} />
            <Text style={{ color: "#555555" }}>Return Policy</Text>
          </View>
        </View>
        <Text style={styles.text3}>YOU MAY ALSO LIKE</Text>
        <View style={{ paddingBottom: 20 }}>
          <Image style={{ alignSelf: "center" }} source={Devider} />
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.card}>
            <Image style={styles.image2} source={e} />
            <View>
              <Text style={styles.tenor}>21WN reversible angora</Text>
              <View>
                <Text>cardigan</Text>
              </View>
              <View>
                <Text style={styles.price}>$120</Text>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <Image style={styles.image2} source={b} />
            <View>
              <View style={{ alignSelf: "center" }}>
                <Text>21WN reversible angora</Text>
                <View style={{}}>
                  <Text>cardigan</Text>
                  <View>
                    <Text style={styles.price}>$120</Text>
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
              <View>
                <Text>cardigan</Text>
              </View>
              <View>
                <Text style={styles.price}>$120</Text>
              </View>
            </View>
          </View>
          <View style={styles.card2}>
            <Image style={styles.image2} source={d} />
            <View>
              <View>
                <Text>Oblong bag</Text>
              </View>
              <View style={{}}>
                <Text>cardigan</Text>
              </View>
              <View style={{}}>
                <Text style={styles.price}>$120</Text>
              </View>
            </View>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 500,
  },
  buttonBack: {
    backgroundColor: "black",
    padding: 5,
    borderRadius: 25,
    alignSelf: "center",
    width: 350,
  },
  slide: {
    paddingTop: 10,
    alignItems: "center",
  },

  pagination: {
    marginBottom: -20,
  },
  dot: {
    backgroundColor: "#00000080",
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  image3: {
    alignSelf: "center",
    marginTop: 40,
  },
  activeDot: {
    backgroundColor: "#fff",
    width: 12,
    height: 12,
    borderRadius: 6,
    margin: 3,
  },
  price: {
    color: "#DD8560",
  },
  circle: {
    backgroundColor: "#000000",
    borderRadius: 100,
    width: 15,
    height: 15,
  },
  circle2: {
    backgroundColor: "orange",
    borderRadius: 100,
    width: 15,
    height: 15,
  },
  circle3: {
    backgroundColor: "grey",
    borderRadius: 100,
    width: 15,
    height: 15,
  },
  circle4: {
    backgroundColor: "white",
    borderColor: "black",
    borderRadius: 100,
    width: 15,
    height: 15,
  },
  text3: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
  },
});

export default Product;
