import React, { useState, useEffect } from "react";
import Col from "./Col";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const CollectionApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const CollectionUrl = "http://localhost:3200/api2/collection";

    fetch(CollectionUrl)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

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
            <Col navigation={navigation} colData={item} />
          </View>
        )}
      />
    </View>
  );
};

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

export default CollectionApi;
