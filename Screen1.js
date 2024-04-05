import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import App from './App'

export default function Sceen1() {
  return (
    <View style={styles.container}>
       <Text style={styles.text}>Hello SCREEN 1</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aqua",
    alignItems: "center",
    //justifyContent: "center",
  },
  text:{
    fontSize: 30,
    color:"white",
    padding:40,
  }

});
