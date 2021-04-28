import React from "react";
import { StyleSheet, ImageBackground, TouchableOpacity } from "react-native";

const Card = ({ character, children, navigation }) => {
  const { id, image } = character;

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Detail", { character, id });
      }}
    >
      <ImageBackground
        style={styles.container}
        source={{
          uri: image,
        }}
      >
        {children}
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    width: 300,
    height: 300,
    margin: 20,
    borderRadius: 5,
    overflow: "hidden",
  },
});
export default Card;
