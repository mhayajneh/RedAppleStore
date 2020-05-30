import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  FlatList,
  SafeAreaView,
} from "react-native";
import Card from "../components/Card";
import api from "../apis/stores.json";

const data = [api];

function StoreDetails({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerChild}>
        <FlatList
          data={data[0]}
          keyExtractor={(data) => data.id.toString()}
          renderItem={({ item }) => (
            <Card
              onPress={() => {
                navigation.navigate("StoreDetails", {
                  id: item.id,
                  name: item.name,
                  description: item.description,
                  email: item.email,
                  image: item.image,
                  related: item.related,
                });
              }}
              style={styles.card}
              image={item.image}
              name={item.name}
              status={item.description}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F2F2",
    paddingTop: 100,
    height: "100%",
  },
  containerChild: {
    padding: 20,
  },
});

export default StoreDetails;
