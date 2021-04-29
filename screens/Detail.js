import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, View, ScrollView } from "react-native";
import Title from "../components/Card/Title";
import Avatar from "../components/Item/Avatar";
import Item from "../components/Item/Item";

const Detail = () => {
  const character = useSelector((state) => state.selectedCharacter);
  const { name, image, species, origin, gender, status, episode } = character;

  if (!character) {
    return (
      <View style={styles.container}>
        <Title>Loading...</Title>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Title>{name}</Title>
      <Avatar image={image} />
      <ScrollView>
        <Item title={"Species"} description={species} />
        <Item title={"Origin"} description={origin.name} />
        <Item title={"Gender"} description={gender} />
        <Item title={"Status"} description={status} />
        <Item title={"Episodes"} description={episode}></Item>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#201825",
    alignItems: "center",
  },
});
export default Detail;
