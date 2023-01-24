/**
 *
 * @param {int} x x-Coordinate
 * @param {int} y y-Coordinate
 * @param {object} child1
 * @param {object} child2
 * @param {object} child3
 * @param {object} child4
 * @param {object} child5
 * @param {object} child6
 * @param {object} child7
 * @param {object} child8
 * @returns a tree-object with all possible moves
 */
const nodeFactory = (
  x,
  y,
  child1,
  child2,
  child3,
  child4,
  child5,
  child6,
  child7,
  child8
) => {
  return {
    x,
    y,
    child1: null,
    child2: null,
    child3: null,
    child4: null,
    child5: null,
    child6: null,
    child7: null,
    child8: null,
  };
};

/**
 * move knight up and left
 * @param {array} param0 old x- and y-coordinates
 * @returns array with new coordinates
 */

const moveUpLeft = ([oldX, oldY]) => {
  return [oldX - 1, oldY + 2];
};

// move knight up and right
const moveUpRight = ([oldX, oldY]) => {
  return [oldX + 1, oldY + 2];
};

// move knight left and up
const moveRightUp = ([oldX, oldY]) => {
  return [oldX + 2, oldY + 1];
};

// move knight left and down
const moveRightDown = ([oldX, oldY]) => {
  return [oldX + 2, oldY - 1];
};

// move knight down and right
const moveDownRight = ([oldX, oldY]) => {
  return [oldX + 1, oldY - 2];
};

// move knight down and left
const moveDownLeft = ([oldX, oldY]) => {
  return [oldX - 1, oldY - 2];
};

// move knight left and down
const moveLeftDown = ([oldX, oldY]) => {
  return [oldX - 2, oldY - 1];
};

// move knight left and up
const moveLeftUp = ([oldX, oldY]) => {
  return [oldX - 2, oldY + 1];
};

const moveTreeFactory = (startCoor, endCoor) => {
  const buildTree = (startCoor, endCoor) => {
    // illegal move, x- and y-coordinates are outside of chessboard
    if (
      startCoor[0] > 7 ||
      start[0] < 0 ||
      startCoor[1] > 7 ||
      startCoor[1] < 0
    ) {
      return null;
    }
  };
  //  root node
  const root = buildTree(startCoor, endCoor);

  return { root };
};

/** ---------------------------- TESTING */
// test node
let newNode = nodeFactory(3, 3);
console.log(newNode);

// test move up
let newCoorUpLeft = moveUpLeft([3, 3]);
console.log(newCoorUpLeft);
