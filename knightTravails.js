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
  coor,
  child1,
  child2,
  child3,
  child4,
  child5,
  child6,
  child7,
  child8,
  isSearchedNode
) => {
  return {
    coor,
    child1: null,
    child2: null,
    child3: null,
    child4: null,
    child5: null,
    child6: null,
    child7: null,
    child8: null,
    isSearchedNode: null,
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

/**
 * trverse the tree in breadth-first level order using recursion
 *@param {array} value save data of traversed nodes, empty array
 *@param {array} queue queu of nodes that need to be traversed, root of tree
 *in an array
 *is expected to be pased initiali
 *@return value
 */
const levelOrderExecuteRec = (value, queue) => {
  // console.log("value:");
  // console.log(value);
  // console.log("queue:");
  // console.log(queue[0]);

  if (queue.length === 0) {
    // if queue is empty all nodes have been traversed
    return value;
  }

  // add leftChild of root to queue
  if (queue[0].child1 !== null) {
    queue.push(queue[0].child1);
    //console.log(queue);
  }
  // add rightChild of root to queue
  if (queue[0].child2 !== null) {
    queue.push(queue[0].child2);
    //console.log(queue);
  }
  // push data into value array
  tempFirstEle = queue.shift();
  value.push(tempFirstEle.coor);
  //console.log(queue);
  // recurse
  return levelOrderExecuteRec(value, queue);
};

/**
 * traverse tree breadth-first
 * @param {function} func pass optional function, each node of tree will be
 *  passed to function
 * @returns array with values
 */
const levelOrder = (node) => {
  const traversed = levelOrderExecuteRec([], [node]);
  return traversed;
};

// global Array, saves all coordinates passed by knight
let allCoor = [];

// check for double array
searchAllCoor = (coorArr) => {
  // console.log(allCoor);
  if (allCoor.length === 0) {
    allCoor.push(coorArr);
    // console.log(allCoor);
    return false;
  }
  let i = 0;
  while (i < allCoor.length) {
    if (allCoor[i][0] === coorArr[0] && allCoor[i][1] === coorArr[1]) {
      return true;
    }
    i++;
  }
  allCoor.push(coorArr);
  return false;
};

// // test
// console.log("test searchAllCoor");
// let testtest = searchAllCoor([2, 1]);
// console.log(testtest);

//
let searchStatus = {
  found: false,
};

const moveTreeFactory = (startCoor, endCoor) => {
  const buildTree = (startCoor, endCoor) => {
    // illegal move, x- and y-coordinates are outside of chessboard
    // console.log(startCoor[0]);
    if (
      startCoor[0] > 7 ||
      startCoor[0] < 0 ||
      startCoor[1] > 7 ||
      startCoor[1] < 0
    ) {
      // console.log("hi");
      return null;
    }

    if (searchStatus.found === true) {
      return null;
    }

    // // check if coor is already in global allCorr array
    // let checkedForDouble = searchAllCoor(startCoor);
    // if (checkedForDouble === true) {
    //   return null;
    // }

    // x- and y-coordinates of all possible moves from one location
    // make all moves of current node
    const upLeft = moveUpLeft(startCoor);
    const upRight = moveUpRight(startCoor);
    const rightUp = moveRightUp(startCoor);
    const rightDown = moveRightDown(startCoor);
    const downRight = moveDownRight(startCoor);
    const downLeft = moveDownLeft(startCoor);
    const leftDown = moveLeftDown(startCoor);
    const leftUp = moveLeftUp(startCoor);

    // creat node
    let node = nodeFactory(startCoor);
    //console.log(node);

    // next node will be the one we are looking for
    if (startCoor[0] === endCoor[0] && startCoor[1] === endCoor[1]) {
      node.isSearchedNode = true;
      searchStatus.found = true;
      return node;
    }

    //console.log(node);
    // fill tree
    node.child1 = buildTree(upLeft, endCoor);
    node.child2 = buildTree(upRight, endCoor);
    node.child3 = buildTree(rightUp, endCoor);
    node.child4 = buildTree(rightDown, endCoor);
    node.child5 = buildTree(downRight, endCoor);
    node.child6 = buildTree(downLeft, endCoor);
    node.child7 = buildTree(leftDown, endCoor);
    node.child8 = buildTree(leftUp, endCoor);

    // level order traversal

    // let test = levelOrder(node);
    // console.log("test");
    console.log(node);
    return node;
  };
  // root node of tree executes when object is initilized
  const root = buildTree(startCoor, endCoor);

  return {
    root,
    levelOrder,
  };
};

/** ---------------------------- TESTING */
//tree
let newTree = moveTreeFactory([3, 3], [0, 0]);
console.log("root");
console.log(newTree.root);
let levelOrderArray = newTree.levelOrder(newTree.root);
console.log(levelOrderArray);

// // test node
// let newNode = nodeFactory(3, 3);
// console.log(newNode);

// // test move up
// let newCoorUpLeft = moveDownRight([3, 3]);
// console.log(newCoorUpLeft);
