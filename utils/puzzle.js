// utils/puzzle.js
export const goal = [0,1,2,3,4,5,6,7,null];     // null = blank square

export function shuffleSolvable() {
  let arr = goal.slice();
  do {
    arr = arr
      .map(v => ({v, r: Math.random()}))
      .sort((a,b) => a.r - b.r)
      .map(o => o.v);
  } while (!isSolvable(arr) || isSolved(arr));
  return arr;
}

export function isSolved(state) {
  return state.every((v, i) => v === goal[i]);
}

export function isSolvable(state) {
  const tiles = state.filter(v => v !== null);
  let inversions = 0;
  for (let i = 0; i < tiles.length; i++) {
    for (let j = i + 1; j < tiles.length; j++) {
      if (tiles[i] > tiles[j]) inversions++;
    }
  }
  // For 3×3 with blank in any row, puzzle is solvable when inversions is even
  return inversions % 2 === 0;
}

export function legalMoves(state) {
  const i = state.indexOf(null);
  const moves = [];
  const row = Math.floor(i / 3);
  const col = i % 3;
  if (row > 0) moves.push(i - 3);
  if (row < 2) moves.push(i + 3);
  if (col > 0) moves.push(i - 1);
  if (col < 2) moves.push(i + 1);
  return moves;
}

export function move(state, index) {
  const blank = state.indexOf(null);
  const newState = state.slice();
  newState[blank] = state[index];
  newState[index] = null;
  return newState;
}

