import { View, Text, Image, StyleSheet } from "react-native/";

function Apii({ userData }) {
  return (
    <View>
      <View style={styles.card}>
        <View
          style={{
            paddingHorizontal: 20,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Image style={styles.image2} source={{ uri: userData.imageUrl }} />
          <View style={{ alignSelf: "center" }}>
            <Text style={styles.tenor}>{userData.name}</Text>
            <View style={{ alignSelf: "center" }}>
              <Text>{userData.price}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    marginTop: 30,
  },
  image2: {
    width: 165,
    height: 200,
  },
});
export default Apii;
