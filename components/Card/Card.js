import React from "react";
import { StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

const Card = ({ character, children, navigation }) => {
  const dispatch = useDispatch();
  const { id, image } = character;

  const handleSelectedImage = () => {
    dispatch({ type: "SET_CHARACTER", id: id });
    navigation.navigate("Detail");
  };
  return (
    <TouchableOpacity onPress={handleSelectedImage}>
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
