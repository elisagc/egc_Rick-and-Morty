import React from "react";
import { StyleSheet, Text } from "react-native";

const Tag = ({ children }) => {
  return (
    <Text
      style={[
        styles.tag,
        children.includes("Alive")
          ? styles.alive
          : children.includes("Dead")
          ? styles.dead
          : styles.primary,
      ]}
    >
      {children.includes("unknown") ? "???" : children}
    </Text>
  );
};

const styles = StyleSheet.create({
  tag: {
    fontSize: 15,
    borderRadius: 5,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    padding: 4,
    margin: 5,
    width: 100,
  },
  primary: {
    backgroundColor: "#6C517B",
  },
  alive: {
    backgroundColor: "#3DB876",
  },
  dead: {
    backgroundColor: "#DB5461",
  },
});
export default Tag;
