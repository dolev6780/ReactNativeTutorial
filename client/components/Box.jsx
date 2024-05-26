import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Box({ text, bgcolor, flexBasis, height, flexgrow }) {
  return (
    <View
      style={[
        styles.box,
        {
          backgroundColor: bgcolor,
          flexGrow: flexgrow,
        },
      ]}
    >
      <Text style={{ fontSize: 24 }}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 70,

    justifyContent: "center",
    alignItems: "center",
  },
});
