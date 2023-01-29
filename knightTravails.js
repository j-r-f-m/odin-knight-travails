// following

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

const testNode = nodeFactory([1, 1], null, 0);
console.log(testNode);

/**
 * create an matrix that saves the distance travelled
 * @param {array} start x- and y- coordinates of starting point
 * @param {array} end x- and y- coordinates of end point
 * @returns
 */
const chessBoardDistance = (start, end) => {
  let boardArray = [];
  // create empty matrix
  for (let i = 0; i < 8; i++) {
    boardArray.push([]);
  }
  // fill empty matrix
  // fill empty matrix
  for (let y = 0; y < 8; y++) {
    //console.log(boardArray[i]);
    for (let x = 0; x < 8; x++) {
      if (x === start[0] && y === start[1]) {
        // mark starting point as visited
        boardArray[y][x] = 0;
      } else if (x === end[0] && y === end[1]) {
        // mark starting point as visited
        boardArray[y][x] = "end";
      } else {
        // mark square as not visited
        boardArray[y][x] = false;
      }
    }
  }

  return boardArray;
};

const knightMoves = (start, end) => {
  // initilize queue with starting point
  let queue = [];
  const startNode = nodeFactory(start, null, 0);
  queue.push(startNode);
  console.log("QUEUE");
  console.log(queue[0]);

  // shortes path
  let shortesPath = [];

  // create initial "visited chess board" with starting- and endpoint marked
  // all other entries of matrix are initilized with false
  let moveArray = chessBoardVisited(start, end);
  console.log("MOVE ARRAY");
  console.log(moveArray);

  // create array where distance is marked
  let distArray = chessBoardDistance(start, end);
  console.log("DISTANCE ARRAY");
  console.log(distArray);

  // console.log("QUEUE");
  // console.log(queue);
  // console.log("CURR");

  let dist = 1;

  let isNOtFound = true;
  while (isNOtFound) {
    let curr = queue.shift();
    console.log("curr: ");
    console.log(curr);
    //console.log(curr.coor[0]);
    //console.log("queue: " + queue[0]);
    console.log("queue Begin Loop: ");
    console.log(queue);

    // UPLEFT

    let upLeft = moveUpLeft([curr.coor[0], curr.coor[0]]);
    console.log("upLeft");
    console.log(upLeft);
    if (upLeft[0] <= 7 && upLeft[0] >= 0 && upLeft[1] <= 7 && upLeft[1] >= 0) {
      // legal move
      console.log("legal move");
      if (moveArray[upLeft[0]][upLeft[1]] === 0) {
        // if position has not been visited bfore
        // add visited status
        moveArray[upLeft[0]][upLeft[1]] = 1;
        // add current dist
        distArray[upLeft[0]][upLeft[1]] = dist;

        let upLeftNode = nodeFactory(upLeft, curr, curr.distance + 1);
        console.log(upLeftNode);
        queue.push(upLeftNode);
      } else if (moveArray[upLeft[0]][upLeft[1]] === 1) {
        // position has already been visited
      } else if (moveArray[upLeft[0]][upLeft[1]] == "e") {
        // if end coordinates are found
        console.log("found");
        return dist++;
      }
    } else {
      //  no legal move
      // -> do nothing
    }

    // UPRIGHT
    let upRight = moveUpRight([curr.coor[0], curr.coor[1]]);
    console.log("upRight");
    console.log(upRight);
    // legal move
    if (
      upRight[0] <= 7 &&
      upRight[0] >= 0 &&
      upRight[1] <= 7 &&
      upRight[1] >= 0
    ) {
      // legal move
      console.log("legal move");
      if (moveArray[upRight[0]][upRight[1]] === 0) {
        // if position has not been visited bfore
        // add visited status
        moveArray[upRight[0]][upRight[1]] = 1;
        // add current dist
        distArray[upRight[0]][upRight[1]] = dist;
        // create node
        let upRightNode = nodeFactory(upRight, curr, curr.distance + 1);
        console.log(upRightNode);
        queue.push(upRightNode);
      } else if (moveArray[upRight[0]][upRight[1]] === 1) {
        // position has already been visited
        // do nothing
      } else if (moveArray[upRight[0]][upRight[1]] == "e") {
        // if end coordinates are found
        console.log("found");
        return dist++;
      }
    } else {
      //  no legal move
      // -> do nothing
    }

    // RIGHTUP
    let rightUp = moveRightUp([curr.coor[0], curr.coor[1]]);

    console.log("rightUp");
    console.log(rightUp);
    // legal move
    if (
      rightUp[0] <= 7 &&
      rightUp[0] >= 0 &&
      rightUp[1] <= 7 &&
      rightUp[1] >= 0
    ) {
      // legal move
      console.log("legal move");
      if (moveArray[rightUp[0]][rightUp[1]] === 0) {
        // add visited status
        moveArray[rightUp[0]][rightUp[1]] = 1;
        // add current dist
        distArray[rightUp[0]][rightUp[1]] = dist;

        let rightUpNode = nodeFactory(rightUp, curr, curr.distance + 1);
        console.log(rightUpNode);
        queue.push(rightUpNode);
      } else if (moveArray[rightUp[0]][rightUp[1]] === 1) {
        // position has already been visited
      }
      // if end coordinates are found
      else if (moveArray[rightUp[0]][rightUp[1]] == "e") {
        console.log("found");
        return dist++;
      }
    } else {
      //  no legal move
      // -> do nothing
    }

    // RIGHTDOWN
    let rightDown = moveRightDown([curr.coor[0], curr.coor[1]]);

    console.log("rightDown");
    console.log(rightDown);
    // legal move
    if (
      rightDown[0] <= 7 &&
      rightDown[0] >= 0 &&
      rightDown[1] <= 7 &&
      rightDown[1] >= 0
    ) {
      // legal move
      console.log("legal move");
      if (moveArray[rightDown[0]][rightDown[1]] === 0) {
        // add visited status
        moveArray[rightDown[0]][rightDown[1]] = 1;
        // add current dist
        distArray[rightDown[0]][rightDown[1]] = dist;

        let rightDownNode = nodeFactory(rightDown, curr, curr.distance + 1);
        console.log(rightDownNode);
        queue.push(rightDownNode);
      } else if (moveArray[rightDown[0]][rightDown[1]] === 1) {
        // position has already been visited
      }
      // if end coordinates are found
      else if (moveArray[rightDown[0]][rightDown[1]] == "e") {
        console.log("found");
        return dist++;
      }
    } else {
      //  no legal move
      // -> do nothing
    }

    // DOWN RIGHT
    let downRight = moveDownRight([curr.coor[0], curr.coor[1]]);

    console.log("downRight");
    console.log(downRight);
    // legal move
    if (
      downRight[0] <= 7 &&
      downRight[0] >= 0 &&
      downRight[1] <= 7 &&
      downRight[1] >= 0
    ) {
      // legal move
      console.log("legal move");
      if (moveArray[downRight[0]][downRight[1]] === 0) {
        // add visited status
        moveArray[downRight[0]][downRight[1]] = 1;
        // add current dist
        distArray[downRight[0]][downRight[1]] = dist;

        let downRightNode = nodeFactory(downRight, curr, curr.distance + 1);
        console.log(downRightNode);
        queue.push(downRightNode);
      } else if (moveArray[downRight[0]][downRight[1]] === 1) {
        // position has already been visited
      }
      // if end coordinates are found
      else if (moveArray[downRight[0]][downRight[1]] == "e") {
        console.log("found");
        return dist++;
      }
    } else {
      //  no legal move
      // -> do nothing
    }

    //CONTINUE HERE
    // DOWN LEFT
    let downLeft = moveDownLeft([curr.coor[0], curr.coor[1]]);

    console.log("downLeft");
    console.log(downLeft);
    // legal move
    if (
      downLeft[0] <= 7 &&
      downLeft[0] >= 0 &&
      downLeft[1] <= 7 &&
      downLeft[1] >= 0
    ) {
      // legal move
      console.log("legal move");
      if (moveArray[downLeft[0]][downLeft[1]] === 0) {
        // add visited status
        moveArray[downLeft[0]][downLeft[1]] = 1;
        // add current dist
        distArray[downLeft[0]][downLeft[1]] = dist;

        let downLeftNode = nodeFactory(downLeft, curr, curr.distance + 1);
        console.log(downLeftNode);
        queue.push(downLeftNode);
      } else if (moveArray[downLeft[0]][downLeft[1]] === 1) {
        // position has already been visited
      }
      // if end coordinates are found
      else if (moveArray[downLeft[0]][downLeft[1]] == "e") {
        console.log("found");
        let downLeftNode = nodeFactory(downLeft, curr, curr.distance + 1);
        let reversedShortestPath = [];

        let tempObj = downLeftNode;
        while (tempObj !== null) {
          reversedShortestPath.push(tempObj.coor);
          tempObj = tempObj.ancestor;
        }
        let shortestPathArray = reversedShortestPath.reverse();
        console.log(downLeftNode);
        console.log("Shortest Path");
        console.log(shortestPathArray);
        return dist++;
      }
    } else {
      //  no legal move
      // -> do nothing
    }

    // LEFT DOWN
    let leftDown = moveLeftDown([curr.coor[0], curr.coor[1]]);

    console.log("leftDown");
    console.log(leftDown);
    // legal move
    if (
      leftDown[0] <= 7 &&
      leftDown[0] >= 0 &&
      leftDown[1] <= 7 &&
      leftDown[1] >= 0
    ) {
      // legal move
      console.log("legal move");
      if (moveArray[leftDown[0]][leftDown[1]] === 0) {
        // add visited status
        moveArray[leftDown[0]][leftDown[1]] = 1;
        // add current dist
        distArray[leftDown[0]][leftDown[1]] = dist;

        let leftDownNode = nodeFactory(leftDown, curr, curr.distance + 1);
        console.log(leftDownNode);
        queue.push(leftDownNode);
      } else if (moveArray[upLeft[0]][upLeft[1]] === 1) {
        // position has already been visited
      }
      // if end coordinates are found
      else if (moveArray[leftDown[0]][leftDown[1]] == "e") {
        console.log("found");
        return dist++;
      }
    } else {
      //  no legal move
      // -> do nothing
    }

    // LEFT UP
    let leftUp = moveLeftUp([curr.coor[0], curr.coor[1]]);

    console.log("leftUp");
    console.log(leftUp);
    // legal move
    if (leftUp[0] <= 7 && leftUp[0] >= 0 && leftUp[1] <= 7 && leftUp[1] >= 0) {
      // legal move
      console.log("legal move");
      if (moveArray[leftUp[0]][leftUp[1]] === 0) {
        // add visited status
        moveArray[leftUp[0]][leftUp[1]] = 1;
        // add current dist
        distArray[leftUp[0]][leftUp[1]] = dist;
        let leftUpNode = nodeFactory(leftUp, curr, curr.distance + 1);
        console.log(leftUpNode);
        queue.push(leftUpNode);
      } else if (moveArray[leftUp[0]][leftUp[1]] === 1) {
        // position has already been visited
      }
      // if end coordinates are found
      else if (moveArray[leftUp[0]][leftUp[1]] == "e") {
        console.log("found");
        return dist++;
      }
    } else {
      //  no legal move
      // -> do nothing
    }
  }
  // after loopt
  console.log(shortesPath);
  // --------------------------
};

// ---------------- TEST ----------------------
const testMove = knightMoves([3, 3], [0, 0]);
console.log(testMove);
