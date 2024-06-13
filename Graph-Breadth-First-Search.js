const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

function breadthFirstSearch(start, end) {
    // your code here
    /*
1. Create a queue and enqueue the starting node.
2. Create a set to store visited nodes.
3. While the queue is not empty, repeat steps 4-6.
4. Dequeue the first node.
5. IS THIS NODE THE THINK? If so, stop and return a result. Else, continue.
6. For each unvisited neighbor, add it to the visited nodes and to that back of the queue.
7. If the queue has become empty without finding the thing, then the ting has not been found. Return `false` , an error, or a message as apropriate for the problem you are solving.
    */
  let queue = [];
  queue.push(start);
  let visitedNodeSet = new Set();
  visitedNodeSet.add(start);

  while(queue.length > 0){
      let currentNode = queue.shift();

      if(currentNode === end){
          return true;
      }

      for(let i = 0; i < adjList[currentNode].length; i++){
          let neighbor = adjList[currentNode][i];

          if(!visitedNodeSet.has(neighbor)){
              visitedNodeSet.add(neighbor);
              queue.push(neighbor);
          }
      }
  }
  return false;
}

//---------Local Test Area-----------------
console.log("First Test:");
console.log(breadthFirstSearch(1, 3)); // -> true
console.log("Second Test:");
console.log(breadthFirstSearch(4, 1)); // -> true
console.log("Third Test:");
console.log(breadthFirstSearch(6, 1)); // -> false
