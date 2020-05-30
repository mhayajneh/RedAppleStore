import React from "react";
import { View, Image, StyleSheet, Text, FlatList } from "react-native";

import RelatedList from "../components/RelatedList";

import api from "../apis/stores.json";

function StoreDetails(props) {
  const { navigation } = props;
  const id = navigation.getParam("id");
  const name = navigation.getParam("name");
  const email = navigation.getParam("email");
  const description = navigation.getParam("description");
  const image = navigation.getParam("image");
  const data = [api[0]];

  const dataMap = data.reduce((agg, v) => {
    agg[v.id] = v;
    return agg;
  }, {});

  const getWithRelated = (data, id, dataMap) => {
    const items = [];
    const item = dataMap[id];
    if (item) {
      items.push(
        item, // ad item
        ...item.related.map((relatedId) => dataMap[relatedId]) // and all related
      );
    }
  };
  const related = getWithRelated(data, id, dataMap);
  return (
    <View>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text>{email}</Text>
        <Text>{description}</Text>
        <FlatList
          data={related}
          keyExtractor={(related) => related.id.toString()}
          renderItem={({ item }) => (
            <RelatedList
              image={item.image}
              name={item.name}
              status={item.status}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  name: {
    fontWeight: "bold",
    fontSize: 25,
  },
});

export default StoreDetails;
