import React from "react";
import { Pressable, Image, StyleSheet } from "react-native";

export default function Tile({ id, onPress, size, tileSrc }) {
  if (id === null) {
    return <Pressable style={[styles.blank, { width: size, height: size }]} />;
  }
  return (
    <Pressable onPress={onPress}>
      <Image source={tileSrc[id]} style={{ width: size, height: size }} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  blank: { backgroundColor: "#fff" },
});

