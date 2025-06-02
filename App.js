// App.js
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Text,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import imageData from "./utils/imageData";
import Gallery from "./components/Gallery";
import PuzzleBoard from "./components/PuzzleBoard";

export default function App() {
  const [choice, setChoice] = useState(null);

  /* ─────────── 1 ▸ Thumbnail gallery ─────────── */
  if (!choice) {
    return (
      <View style={styles.screen}>
        <Gallery data={imageData} onPick={setChoice} />
        <StatusBar style="auto" />
      </View>
    );
  }

  /* ─────────── 2 ▸ Puzzle view ─────────── */
  return (
    <View style={styles.screen}>
      {/*  reference image, fixed top-left  */}
      <Image source={choice.thumb} style={styles.reference} />

      {/*  back link, fixed bottom-left  */}
      <Pressable style={styles.backBtn} onPress={() => setChoice(null)}>
        <Text style={styles.backTxt}>← Back</Text>
      </Pressable>

      {/*  centred 3×3 board  */}
      <PuzzleBoard tileSrc={choice.tiles} size={360} />

      <StatusBar style="auto" />
    </View>
  );
}

/* ─────────── 3 ▸ Styles ─────────── */
const styles = StyleSheet.create({
  /** common wrapper **/
  screen: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    alignItems: "center",      // horizontal centring
    justifyContent: "center",  // vertical centring
  },

  /** reference thumb **/
  reference: {
    position: "absolute",
    top: 12,
    left: 12,
    width: 90,
    height: 90,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },

  /** back link **/
  backBtn: {
    position: "absolute",
    bottom: 18,
    left: 18,
  },
  backTxt: {
    fontSize: 16,
    color: "#007aff",
  },
});

