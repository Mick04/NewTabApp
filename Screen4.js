import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Sceen4() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello SCREEN 4</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "palegreen",
    alignItems: "center",
    // justifyContent: "center",
  },
  text:{
    fontSize: 30,
    color:"white",
    padding:40,
  }
});

