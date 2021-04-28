import React from "react";
import { StyleSheet, View } from "react-native";
import Tag from "../Tag";

const Content = ({ info }) => {
  return (
    <View style={styles.container}>
      <Tag>{info.species}</Tag>
      <Tag>{info.gender}</Tag>
      <Tag>{info.status}</Tag>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    overflow: "hidden",
  },
});

export default Content;
