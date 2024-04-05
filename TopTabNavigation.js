import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView,Platform,View,StyleSheet } from "react-native";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import Screen4 from "./Screen4";
import Screen5 from "./Screen5";

const Tab = createMaterialTopTabNavigator();

const TopTabNavigation = () => {
  const screenOptions = ({ route }) => ({
    tabBarStyle: {
      backgroundColor: getBackgroundColor(route), // Call a function to get background color
      height: 75,
    },
    tabBarLabelStyle: {
      fontSize: 10,
      fontWeight: "bold",
      color:"white",
    },
    tabBarItemStyle: {
      backgroundColor: "pink",
      margin: 8,
      padding: 6,
      borderRadius: 15,
    },
  });

  const getBackgroundColor = (route) => {
    switch (route.name) {
      case "Screen1":
        return "aqua"; // Red for Screen1
      case "Screen2":
        return "lightcyan"; // Green for Screen2
      case "Screen3":
        return "hotpink"; // Blue for Screen3
      case "Screen4":
        return "palegreen"; // Yellow for Screen4
      case "Screen5":
        return "lightblue"; // Purple for Screen5
      default:
        return "#00ffff"; // Default color
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? 35 : 0,
    },
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen name="Screen1" component={Screen1} />
          <Tab.Screen name="Screen2" component={Screen2} />
          <Tab.Screen name="Screen3" component={Screen3} />
          <Tab.Screen name="Screen4" component={Screen4} />
          <Tab.Screen name="Screen5" component={Screen5} />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default TopTabNavigation;
