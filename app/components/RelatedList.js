import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

function RelatedList({ name, image, description }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }}></Image>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
  },
});

export default RelatedList;
