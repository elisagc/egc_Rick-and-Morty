import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Item = ({ title, description }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.items}>{title}</Text>

      {title !== "Episodes" ? (
        <Text style={styles.items}>{description}</Text>
      ) : (
        <Text style={styles.items}>
          {description.map((episode, index) => {
            const episodeNumbers = /[0-9]{1,2}/.exec(episode);
            return (
              <View key={index}>
                <Text style={styles.item}>{episodeNumbers}</Text>
              </View>
            );
          })}
        </Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "center",
  },

  items: {
    width: "50%",
    marginBottom: 5,
    color: "#fff",
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#6C517B",
  },

  item: {
    fontSize: 15,
    borderRadius: 5,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    padding: 5,
    margin: 5,
    width: 30,
    backgroundColor: "#201825",
  },
});
export default Item;
