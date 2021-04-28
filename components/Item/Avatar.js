import React from "react";
import { StyleSheet, Image, View } from "react-native";

const Avatar = ({ image }) => {
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 10,
  },
});
export default Avatar;
