import React from "react";
import { View, Text, FlatList, Pressable, Image, StyleSheet } from "react-native";

export default function Gallery({ data, onPick }) {
  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => onPick(item)}
      style={({ pressed }) => [
        styles.thumbWrap,
        pressed && { transform: [{ scale: 0.95 }] },
      ]}
    >
      <Image source={item.thumb} style={styles.thumb} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pick a picture 🖼️</Text>
      <FlatList
        data={data}
        keyExtractor={(it) => it.key}
        numColumns={3}
        renderItem={renderItem}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", paddingTop: 40 },
  title: { fontSize: 22, fontWeight: "600", marginBottom: 20 },
  grid: { gap: 14 },
  thumbWrap: {
    margin: 7,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
  },
  thumb: { width: 100, height: 100 },
});

