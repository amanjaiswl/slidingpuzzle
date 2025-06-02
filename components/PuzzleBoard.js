// components/PuzzleBoard.js
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";
import Tile from "./Tile";
import {
  shuffleSolvable,
  legalMoves,
  move,
  isSolved,
} from "../utils/puzzle";

export default function PuzzleBoard({ size = 300 }) {
  const [state, setState] = useState(shuffleSolvable());
  const [done, setDone] = useState(false);

  const tileSize = size / 3;

  const tryMove = (idx) => {
    if (done) return;
    if (legalMoves(state).includes(idx)) {
      const next = move(state, idx);
      setState(next);
      if (isSolved(next)) setDone(true);
    }
  };

  return (
    <View style={[styles.board, { width: size, height: size }]}>
      {state.map((id, i) => (
        <Tile
          key={i}
          id={id}
          size={tileSize}
          onPress={() => tryMove(i)}
        />
      ))}
      {done && <ConfettiCannon count={180} origin={{x: size/2, y: size/2}} />}
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

