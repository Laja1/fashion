import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
  SafeAreaView,
  Image,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { addToCart, selectCartItems } from "../store";
const fra = require("../assets/Fra.png");
const bag = require("../assets/bag.png");
const fra18 = require("../assets/Fra18.png");
function Cart() {
  //   const dispatch = useDispatch();

  //   const handleIncrease = () => {
  //     dispatch(addToCart({ id: item.id }));
  //   };
  //   if (cartItems.length) return;
  return (
    <SafeAreaView>
      <View>
        <Text style={{ paddingHorizontal: 20, marginTop: 20, fontSize: 20 }}>
          CART
        </Text>
        <View style={{ flexDirection: "row", padding: 20 }}>
          <Image source={fra} />
          <View
            style={{
              flexDirection: "column",
              paddingTop: 10,
              paddingHorizontal: 10,
              gap: 5,
            }}
          >
            <Text>LAMEREI</Text>
            <Text>Recycle Boucle Knit Cardigan Pink</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Button title="-" />
              <Text>{1}</Text>
              <Button title="+" />
            </View>
            <Text style={styles.price}>$120</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", padding: 20 }}>
          <Image source={fra18} />
          <View
            style={{
              flexDirection: "column",
              paddingTop: 10,
              paddingHorizontal: 10,
              gap: 5,
            }}
          >
            <Text>5252 by o!oi</Text>
            <Text>2021 Signature Sweatshirt [NAVY]</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Button title="-" />
              <Text>{1}</Text>
              <Button title="+" />
            </View>
            <Text style={styles.price}>$120</Text>
          </View>
        </View>
        <Text style={{ color: "grey", alignSelf: "center", paddingTop: 100 }}>
          _______________________________________________
        </Text>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            paddingBottom: 10,

            paddingTop: 25,
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 24 }}>SUB TOTAL</Text>
          <Text style={{ fontSize: 24 }}> $240</Text>
        </View>
        <Text
          style={{
            padding: 25,
            fontSize: 16,
          }}
        >
          *shipping charges, taxes and discount codes {"\n"}are calculated at
          the time of accounting.
        </Text>
      </View>
      <View style={styles.buttonBack}>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              gap: 20,
              alignItems: "center",
            }}
          >
            <Image source={bag} />
            <Text style={{ fontSize: 20, color: "white" }}>BUY NOW</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonBack: {
    backgroundColor: "black",
    padding: 20,
    borderRadius: 35,
    alignSelf: "center",
    width: 350,
  },
  price: {
    color: "#DD8560",
  },
});

export default Cart;
