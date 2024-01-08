import React, { useState, useEffect } from "react";
import Apii from "./Apii";
import Col from "./Col";

const Group29 = require("../assets/Group29.png");
const Devider = require("../assets/Devider.png");

import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Api = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the API endpoint
    const apiUrl = "http://localhost:3200/api2/collection";

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!data) {
    return (
      <View>
        <Text>No data available</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        style={styles.container}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
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
            <Col colData={item} />
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
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
export default Api;
