function mincost(arr)
{ 
//write your code here
// return the min cost
    let minHeap = new MinHeap();
  for (let i = 0; i < arr.length; i++) {
    minHeap.insert(arr[i]);
  }
  let cost = 0;
  while (minHeap.heap.length > 1) {
    let first = minHeap.extractMin();
    let second = minHeap.extractMin();
    cost += first + second;
    minHeap.insert(first + second);
  }
  return cost;
}

module.exports=mincost;
