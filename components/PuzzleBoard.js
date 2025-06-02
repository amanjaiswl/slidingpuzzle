import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";
import Tile from "./Tile";
import {
  shuffleSolvable,
  legalMoves,
  move,
  isSolved,
} from "../utils/puzzle";

export default function PuzzleBoard({ tileSrc, onSolved, size = 360 }) {
  const [state, setState] = useState(shuffleSolvable());
  const [done, setDone] = useState(false);
  const tileSize = size / 3;

  const handle = (idx) => {
    if (done) return;
    if (legalMoves(state).includes(idx)) {
      const next = move(state, idx);
      setState(next);
      if (isSolved(next)) {
        setDone(true);
        onSolved && onSolved();
      }
    }
  };

  return (
    <View style={[styles.wrap, { width: size, height: size }]}>
      {state.map((id, i) => (
        <Tile
          key={i}
          id={id}
          size={tileSize}
          tileSrc={tileSrc}
          onPress={() => handle(i)}
        />
      ))}
      {done && (
        <>
          <ConfettiCannon
            count={300}
            fallSpeed={2500}
            fadeOut
            origin={{ x: size / 2, y: -10 }}
          />
          <View style={styles.overlay}>
            <Text style={styles.big}>🎉 Solved!</Text>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flexDirection: "row", flexWrap: "wrap" },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
  },
  big: { fontSize: 40, fontWeight: "700" },
});

