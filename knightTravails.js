/**
 * global variabless
 */
// queue for bfs
let queue = [];
// array to mark already visited nodes
let moveArray = null;
// ending condition loop
let isNOtFound = true;

let path = null;

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

const shortestPath = (endingNode) => {
  let shortestPathArray = [];
  let tempObj = endingNode;
  while (tempObj !== null) {
    shortestPathArray.push(tempObj.coor);
    tempObj = tempObj.ancestor;
  }
  return shortestPathArray.reverse();
};

/**
 * create array with starting and end points marked
 * all other entris are initilised with false
 * @param {array} start x- and y- coordinates of starting point
 * @param {array} end x- and y- coordinates of end point
 * @returns retrun array
 */
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
      if (x === start[0] && y === start[1]) {
        // mark starting point as visited
        boardArray[y][x] = "s";
      } else if (x === end[0] && y === end[1]) {
        // mark starting point as visited
        boardArray[y][x] = "e";
      } else {
        // mark square as not visited
        boardArray[y][x] = 0;
      }
    }
  }
  return boardArray;
};

const nodeFactory = (coor, ancestor, distance) => {
  return { coor, ancestor: ancestor, distance: distance };
};

// const testNode = nodeFactory([1, 1], null, 0);
// console.log(testNode);

// const testFunc = () => {
//   queue.push(1);
//   console.log("queue");
//   console.log(queue);
// };

const nextMove = (currentNode, moveFunc) => {
  // create next move of knight depending on passed function
  // move is created with regular x- and y-coordinatesystem
  let move = moveFunc([currentNode.coor[0], currentNode.coor[1]]);
  // check if the move is legae
  if (move[0] <= 7 && move[0] >= 0 && move[1] <= 7 && move[1] >= 0) {
    console.log("legal move");
    if (moveArray[move[1]][move[0]] === 0) {
      // if position has not been visited bfore
      // add visited status
      moveArray[move[1]][move[0]] = 1;
      // create node for queue
      let moveNode = nodeFactory(move, currentNode, currentNode.distance + 1);
      queue.push(moveNode);
      return null;
    } else if (moveArray[move[1]][move[0]] === 1) {
      // position has already been visited
      return null;
    } else if (moveArray[move[1]][move[0]] === "e") {
      moveArray[move[1]][move[0]] = "x";
      // arrive at destination
      console.log("found");
      isNOtFound = false;
      let moveNode = nodeFactory(move, currentNode, currentNode.distance + 1);
      path = shortestPath(moveNode);
      // shortestPath(moveNode);
      return;
    }
  } else {
    console.log("been there");
    return null;
  }
};

const knightMoves = (start, end) => {
  // testFunc();
  // create initial startingNode for queue
  const startNode = nodeFactory(start, null, 0);
  queue.push(startNode);
  //console.log(queue);
  // create array
  moveArray = chessBoardVisited(start, end);
  // return value, array with shortest path

  while (isNOtFound) {
    let currentNode = queue.shift();
    console.log(currentNode);
    let upLeft = nextMove(currentNode, moveUpLeft);
    let upRight = nextMove(currentNode, moveUpRight);

    let rightUp = nextMove(currentNode, moveRightUp);
    let rightDown = nextMove(currentNode, moveRightDown);
    let downRight = nextMove(currentNode, moveDownRight);
    let downLeft = nextMove(currentNode, moveDownLeft);

    let leftDown = nextMove(currentNode, moveLeftDown);
    let leftUp = nextMove(currentNode, moveLeftUp);

    // if (upLeft !== null) {
    //   return upLeft;
    // } else if (upRight !== null) {
    //   return upRight;
    // } else if (rightUp !== null) {
    //   return rightUp;
    // } else if (rightDown !== null) {
    //   return rightDown;
    // } else if (downRight !== null) {
    //   return downRight;
    // } else if (downLeft !== null) {
    //   return downLeft;
    // } else if (leftDown !== null) {
    //   return leftDown;
    // } else if (leftUp !== null) {
    //   return leftUp;
    // }
    console.log("loopend");
  }
  return path;
};

// // test
// const testMove = knightMoves([0, 0], [3, 3]);
// console.log(testMove);
// // console.log(path);

const testMove2 = knightMoves([3, 3], [4, 3]);
console.log("shortes path");
console.log(testMove2);

// const testArray = chessBoardVisited([3, 3], [4, 3]);
// console.log(testArray);
// console.log(testArray[4][3]);
console.log(moveArray);
