import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import ExploreButton from "../components/ExploreButton";

function WelcomeScreen({ navigation }) {
  const navigateToLists = () => {
    navigation.navigate("StoreList");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius={5}
        style={styles.background}
        resizeMode="contain"
        source={require("../assets/welcomescreen.jpg")}
      >
        <View style={styles.exploreContainer}>
          <ExploreButton onPress={navigateToLists} text="Explore Our Stores" />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    position: "relative",
  },
  exploreContainer: {
    width: "100%",
    padding: 20,
  },
});

export default WelcomeScreen;
