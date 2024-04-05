import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Sceen2() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello SCREEN 2</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightcyan",
    alignItems: "center",
    // justifyContent: "center",
  },
  text:{
    fontSize: 30,
    color:"blue",
    padding:40,
  }
});
