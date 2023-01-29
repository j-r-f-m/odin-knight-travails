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

const chessBoardVisited = (start, end) => {
  //
  let boardArray = [];
  // create empty matrix
  for (let i = 0; i < 8; i++) {
    boardArray.push([]);
  }

  // fill empty matrix
  for (let y = 0; y < 8; y++) {
    //console.log(boardArray[i]);
    for (let x = 0; x < 8; x++) {
      // mark square as not visited
      boardArray[y][x] = null;
      if (x === start[0] && y === start[1]) {
        // mark starting point as visited
        boardArray[y][x] = "st";
      }
      if (x === end[0] && y === end[1]) {
        // mark starting point as visited
        boardArray[y][x] = "en";
      }
    }
  }

  return boardArray;
};

// const chessBoardDistance = start;

const knightMoves = (start, end) => {
  // initilize queue with starting point
  let queue = [start];
  //console.log(queue);

  // create initial visited chess board with starting point marked as visited
  let moveArray = chessBoardVisited(start, end);
  console.log(moveArray);
};

// ---------------- TEST ----------------------
const testMove = knightMoves([2, 2], [5, 1]);

// x- and y-coordinates of all possible moves from one location
// make all moves of current node
// const upLeft = moveUpLeft(startCoor);
// const upRight = moveUpRight(startCoor);
// const rightUp = moveRightUp(startCoor);
// const rightDown = moveRightDown(startCoor);
// const downRight = moveDownRight(startCoor);
// const downLeft = moveDownLeft(startCoor);
// const leftDown = moveLeftDown(startCoor);
// const leftUp = moveLeftUp(startCoor);

//console.log(node);
// fill tree
// node.child1 = buildTree(upLeft, endCoor);
// node.child2 = buildTree(upRight, endCoor);
// node.child3 = buildTree(rightUp, endCoor);
// node.child4 = buildTree(rightDown, endCoor);
// node.child5 = buildTree(downRight, endCoor);
// node.child6 = buildTree(downLeft, endCoor);
// node.child7 = buildTree(leftDown, endCoor);
// node.child8 = buildTree(leftUp, endCoor);
