import * as T from './terms';

export const Turn = {
  w: 'white',
  b: 'black',
};

export const Side = {
  white: 'w',
  black: 'b',
  w: 'w',
  b: 'b',
};

export const Opponent = {
  white: 'black',
  black: 'white',
  w: 'b',
  b: 'w',
};

// prettier-ignore
export const Movement = {
  [T.King]: [
    [0, -1], [0, 1], [-1, 0], [1, 0], [-1, -1], [-1, 1], [1, -1], [1, 1]
  ],

  [T.Bishop]: [
    [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7],
    [-1, 1], [-2, 2], [-3, 3], [-4, 4], [-5, 5], [-6, 6], [-7, 7],
    [1, -1], [2, -2], [3, -3], [4, -4], [5, -5], [6, -6], [7, -7],
    [-1, -1], [-2, -2], [-3, -3], [-4, -4], [-5, -5], [-6, -6], [-7, -7]
  ],

  [T.Knight]: [
    [-1, -2], [-1, 2], [1, -2], [1, 2], [-2, -1], [-2, 1], [2, -1], [2, 1]
  ],

  [T.Pawn]: [
    [0, 1]
  ],

  [T.Queen]: [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7],
    [0, -1], [0, -2], [0, -3], [0, -4], [0, -5], [0, -6], [0, -7],
    [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0],
    [-1, 0], [-2, 0], [-3, 0], [-4, 0], [-5, 0], [-6, 0], [-7, 0],
    [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7],
    [-1, 1], [-2, 2], [-3, 3], [-4, 4], [-5, 5], [-6, 6], [-7, 7],
    [1, -1], [2, -2], [3, -3], [4, -4], [5, -5], [6, -6], [7, -7],
    [-1, -1], [-2, -2], [-3, -3], [-4, -4], [-5, -5], [-6, -6], [-7, -7]
  ],

  [T.Rook]: [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7],
    [0, -1], [0, -2], [0, -3], [0, -4], [0, -5], [0, -6], [0, -7],
    [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0],
    [-1, 0], [-2, 0], [-3, 0], [-4, 0], [-5, 0], [-6, 0], [-7, 0]
  ]
};

export const Special = {
  [T.King]: [T.Castling],
  [T.Pawn]: [T.DoubleStep, T.EnPassant, T.Promotion, T.Diagonally],
};

export const PST = {
  [T.Pawn]: [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [50, 50, 50, 50, 50, 50, 50, 50],
    [10, 10, 20, 30, 30, 20, 10, 10],
    [5, 5, 0, 25, 25, 10, 5, 5],
    [0, 0, 0, 20, 20, 0, 0, 0],
    [5, -5, -10, 0, 0, -10, -5, 5],
    [5, 10, 10, -20, -20, 10, 10, 5],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ],

  [T.Knight]: [
    [-50, -40, -30, -30, -30, -30, -40, -50],
    [-40, -20, 0, 0, 0, 0, -20, -40],
    [-30, 0, 10, 15, 15, 10, 0, -30],
    [-30, 5, 15, 20, 20, 15, 5, -30],
    [-30, 0, 15, 20, 20, 15, 0, -30],
    [-30, 5, 10, 15, 15, 10, 5, -30],
    [-40, -20, 0, 5, 5, 0, -20, -40],
    [-50, -40, -30, -30, -30, -30, -40, -50],
  ],

  [T.Bishop]: [
    [-20, -10, -10, -10, -10, -10, -10, -20],
    [-10, 0, 0, 0, 0, 0, 0, -10],
    [-10, 0, 5, 10, 10, 5, 0, -10],
    [-10, 5, 5, 10, 10, 5, 5, -10],
    [-10, 0, 10, 10, 10, 10, 0, -10],
    [-10, 10, 10, 10, 10, 10, 10, -10],
    [-10, 5, 0, 0, 0, 0, 5, -10],
    [-20, -10, -10, -10, -10, -10, -10, -20],
  ],

  [T.Rook]: [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [5, 10, 10, 10, 10, 10, 10, 5],
    [-5, 0, 0, 0, 0, 0, 0, -5],
    [-5, 0, 0, 0, 0, 0, 0, -5],
    [-5, 0, 0, 0, 0, 0, 0, -5],
    [-5, 0, 0, 0, 0, 0, 0, -5],
    [-5, 0, 0, 0, 0, 0, 0, -5],
    [0, 0, 0, 5, 5, 0, 0, 0],
  ],

  [T.Queen]: [
    [-20, -10, -10, -5, -5, -10, -10, -20],
    [-10, 0, 0, 0, 0, 0, 0, -10],
    [-10, 0, 5, 5, 5, 5, 0, -10],
    [-5, 0, 5, 5, 5, 5, 0, -5],
    [0, 0, 5, 5, 5, 5, 0, -5],
    [-10, 5, 5, 5, 5, 5, 0, -10],
    [-10, 0, 5, 0, 0, 0, 0, -10],
    [-20, -10, -10, -5, -5, -10, -10, -20],
  ],

  [T.King]: [
    [-30, -40, -40, -50, -50, -40, -40, -30],
    [-30, -40, -40, -50, -50, -40, -40, -30],
    [-30, -40, -40, -50, -50, -40, -40, -30],
    [-30, -40, -40, -50, -50, -40, -40, -30],
    [-20, -30, -30, -40, -40, -30, -30, -20],
    [-10, -20, -20, -20, -20, -20, -20, -10],
    [20, 20, 0, 0, 0, 0, 20, 20],
    [20, 30, 10, 0, 0, 10, 30, 20],
  ],

  [`${T.King}-e`]: [
    [-50, -40, -30, -20, -30, -40, -40, -50],
    [-30, -20, -10, 0, 0, -10, -20, -30],
    [-30, -10, 20, 30, 30, 20, -10, -30],
    [-30, -10, 30, 40, 40, 30, -10, -30],
    [-30, -10, 30, 40, 40, 30, -10, -30],
    [-30, -10, 20, 30, 30, 20, -10, -30],
    [-30, -30, 0, 0, 0, 0, -30, -30],
    [-50, -30, -30, -30, -30, -30, -30, -50],
  ],
};

// prettier-ignore
export const Snapshot = [
  'bRa8', 'bNb8', 'bBc8', 'bQd8', 'bKe8', 'bBf8', 'bNg8', 'bRh8',
  'bPa7', 'bPb7', 'bPc7', 'bPd7', 'bPe7', 'bPf7', 'bPg7', 'bPh7',
  'wPa2', 'wPb2', 'wPc2', 'wPd2', 'wPe2', 'wPf2', 'wPg2', 'wPh2',
  'wRa1', 'wNb1', 'wBc1', 'wQd1', 'wKe1', 'wBf1', 'wNg1', 'wRh1'
];

// prettier-ignore
export const AxisGroupByDirection = {
  [T.Vertical]: {
    Up: [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7]],
    Down: [[0, -1], [0, -2], [0, -3], [0, -4], [0, -5], [0, -6], [0, -7]]
  },

  [T.Horizontal]: {
    Right: [[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0]],
    Left: [[-1, 0], [-2, 0], [-3, 0], [-4, 0], [-5, 0], [-6, 0], [-7, 0]]
  },

  [T.Diagonal]: {
    TopRight: [[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7]],
    BottomRight: [[-1, 1], [-2, 2], [-3, 3], [-4, 4], [-5, 5], [-6, 6], [-7, 7]],
    TopLeft: [[1, -1], [2, -2], [3, -3], [4, -4], [5, -5], [6, -6], [7, -7]],
    BottomLeft: [[-1, -1], [-2, -2], [-3, -3], [-4, -4], [-5, -5], [-6, -6], [-7, -7]]
  },

  [T.Jumpover]: {
    TopRight1: [[1, 2]],
    TopRight2: [[2, 1]],
    TopLeft1: [[-1, 2]],
    TopLeft2: [[-2, 1]],
    BottomRight1: [[1, -2]],
    BottomRight2: [[2, -1]],
    BottomLeft1: [[-1, -2]],
    BottomLeft2: [[-2, -1]]
  }
}

export const DirectionGroupByPiece = {
  [T.King]: [T.Vertical, T.Horizontal, T.Diagonal],
  [T.Bishop]: [T.Diagonal],
  [T.Knight]: [T.Jumpover],
  [T.Pawn]: [T.Vertical],
  [T.Queen]: [T.Vertical, T.Horizontal, T.Diagonal],
  [T.Rook]: [T.Vertical, T.Horizontal],
};
