import React, { useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { StatusBar } from "expo-status-bar";
import Card from "../components/Card/Card";
import Title from "../components/Card/Title";
import Content from "../components/Card/Content";

const Home = ({ navigation }) => {
  const characters = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    !characters &&
      fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((data) =>
          dispatch({ type: "SAVE_CHARACTERS", data: data.results })
        );
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {characters &&
          characters.map((character) => {
            return (
              <Card
                character={character}
                key={character.id}
                navigation={navigation}
              >
                <Title>{character.name}</Title>
                <Content info={character}></Content>
              </Card>
            );
          })}
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#201825",
    alignItems: "center",
  },
});
export default Home;
