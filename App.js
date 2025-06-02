import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Image, StyleSheet } from "react-native";
import PuzzleBoard from "./components/PuzzleBoard";

export default function App() {
  return (
    <View style={styles.container}>
      {/* miniature reference, top-left */}
      <Image
        source={require("./assets/mickey.png")}
        style={styles.thumb}
      />
      <PuzzleBoard size={330} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 60,
    backgroundColor: "#f5f5f5",
  },
  thumb: {
    position: "absolute",
    top: 10,
    left: 10,
    width: 70,
    height: 70,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

