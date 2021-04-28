import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, View, ScrollView } from "react-native";
import Title from "../components/Card/Title";
import Avatar from "../components/Item/Avatar";
import Item from "../components/Item/Item";

const Detail = ({ route }) => {
  const id = route.params.id;
  const dispatch = useDispatch();
  const character = useSelector((state) => state.selectedCharacter);

  useEffect(() => {
    dispatch({ type: "GET_CHARACTER", id: id });
  }, []);

  if (!character) {
    return <Title>Cargando</Title>;
  }

  return (
    <View style={styles.container}>
      <Title>{character.name}</Title>
      <Avatar image={character.image} />
      <ScrollView>
        <Item title={"Species"} description={character.species} />
        <Item title={"Origin"} description={character.origin.name} />
        <Item title={"Gender"} description={character.gender} />
        <Item title={"Status"} description={character.status} />
        <Item title={"Episodes"} description={character.episode}></Item>
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
