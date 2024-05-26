import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import Box from "./components/Box";

export default function App() {
  return (
    <View style={styles.container}>
      <Box text={"box1"} bgcolor={"red"} flexBasis={140} flexgrow={3} />
      <Box text={"box2"} bgcolor={"blue"} height={140} flexgrow={1} />
      <Box text={"box3"} bgcolor={"green"} />
      <Box text={"box4"} bgcolor={"brown"} />
      <Box text={"box5"} bgcolor={"gray"} />
      <Box text={"box6"} bgcolor={"yellow"} />
      <Box text={"box7"} bgcolor={"purple"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    borderWidth: 4,
    flex: 1,
  },
});
