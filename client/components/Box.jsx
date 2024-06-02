import { View, Text, StyleSheet, useWindowDimensions} from "react-native";

export default function Box({ text, bgcolor, axis, top, position }) {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height
  console.log("width: ", width, ", height: ",height)
  return (
    <View style={[width > 550 ? styles.tabletBox : styles.mobileBox]}>
      <Text style={[styles.text, { fontSize: width > 500 ? 56 : 24 }]}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tabletBox: {
    backgroundColor: "red"
  },
  mobileBox: {
    backgroundColor: "blue"
  }
});
