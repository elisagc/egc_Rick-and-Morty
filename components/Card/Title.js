import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Title = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000a0",
    width: "100%",
    padding: 5,
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Title;
