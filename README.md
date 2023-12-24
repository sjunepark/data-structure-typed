# data-structure-typed

![npm](https://img.shields.io/npm/v/data-structure-typed)
![npm](https://img.shields.io/npm/dm/data-structure-typed)
![npm package minimized gzipped size (select exports)](https://img.shields.io/bundlejs/size/data-structure-typed)
![GitHub top language](https://img.shields.io/github/languages/top/zrwusa/data-structure-typed)
![GITHUB Star](https://img.shields.io/github/stars/zrwusa/data-structure-typed)
![eslint](https://aleen42.github.io/badges/src/eslint.svg)
![NPM](https://img.shields.io/npm/l/data-structure-typed)

[//]: # (![npm bundle size]&#40;https://img.shields.io/bundlephobia/min/data-structure-typed&#41;)

<p><a href="https://github.com/zrwusa/data-structure-typed/blob/main/README.md">English</a> | <a href="https://github.com/zrwusa/data-structure-typed/blob/main/README_zh-CN.md">简体中文</a></p>

## Why

Do you envy C++ with [STL]() (std::), Python with [collections](), and Java with [java.util]() ? Well, no need to envy
anymore! JavaScript and TypeScript now have [data-structure-typed]().**`Benchmark`** compared with C++ STL. **`API standards`** aligned with ES6 and Java. **`Usability`** is comparable to Python


[//]: # (![Branches]&#40;https://img.shields.io/badge/branches-55.47%25-red.svg?style=flat&#41;)

[//]: # (![Statements]&#40;https://img.shields.io/badge/statements-67%25-red.svg?style=flat&#41;)

[//]: # (![Functions]&#40;https://img.shields.io/badge/functions-66.38%25-red.svg?style=flat&#41;)

[//]: # (![Lines]&#40;https://img.shields.io/badge/lines-68.6%25-red.svg?style=flat&#41;)

### We provide data structures that are not available in JS/TS

Heap, Binary Tree, RedBlack Tree, Linked List, Deque, Trie, Directed Graph, Undirected Graph, BST, AVL Tree, Priority Queue, Queue, Tree Multiset.


### Performance surpasses that of native JS/TS


<table style="display: table; width:100%; table-layout: fixed;">
  <thead>
  <tr>
    <th>Method</th>
    <th>Time Taken (ms)</th>
    <th>Scale</th>
    <th>Belongs To</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Queue.push &amp; shift</td>
    <td>5.83</td>
    <td>100,000</td>
    <td>data-structure-typed</td>
  </tr>
  <tr>
    <td>Array.push &amp; shift</td>
    <td>2829.59</td>
    <td>100,000</td>
    <td>Native JS</td>
  </tr>
  <tr>
    <td>Deque.unshift &amp; shift</td>
    <td>2.44</td>
    <td>100,000</td>
    <td>data-structure-typed</td>
  </tr>
  <tr>
    <td>Array.unshift &amp; shift</td>
    <td>4750.37</td>
    <td>100,000</td>
    <td>Native JS</td>
  </tr>
  <tr>
    <td>HashMap.set</td>
    <td>122.51</td>
    <td>1,000,000</td>
    <td>data-structure-typed</td>
  </tr>
  <tr>
    <td>Map.set</td>
    <td>223.80</td>
    <td>1,000,000</td>
    <td>Native JS</td>
  </tr>
  <tr>
    <td>Set.add</td>
    <td>185.06</td>
    <td>1,000,000</td>
    <td>Native JS</td>
  </tr>
  </tbody>
</table>

## Installation and Usage

Now you can use it in Node.js and browser environments

CommonJS:**`require export.modules =`**

ESModule:&nbsp;&nbsp;&nbsp;**`import export`**

Typescript:&nbsp;&nbsp;&nbsp;**`import export`**

UMD:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**`var Deque = dataStructureTyped.Deque`**


### npm

```bash
npm i data-structure-typed --save
```

### yarn

```bash
yarn add data-structure-typed
```

```js
import {
  BinaryTree, Graph, Queue, Stack, PriorityQueue, BST, Trie, DoublyLinkedList,
  AVLTree, MinHeap, SinglyLinkedList, DirectedGraph, TreeMultimap,
  DirectedVertex, AVLTreeNode
} from 'data-structure-typed';
```

### CDN

Copy the line below into the head tag in an HTML document.

#### development

```html
<script src='https://cdn.jsdelivr.net/npm/data-structure-typed/dist/umd/data-structure-typed.js'></script>
```

#### production

```html
<script src='https://cdn.jsdelivr.net/npm/data-structure-typed/dist/umd/data-structure-typed.min.js'></script>
```

Copy the code below into the script tag of your HTML, and you're good to go with your development.

```js
const {Heap} = dataStructureTyped;
const {
  BinaryTree, Graph, Queue, Stack, PriorityQueue, BST, Trie, DoublyLinkedList,
  AVLTree, MinHeap, SinglyLinkedList, DirectedGraph, TreeMultimap,
  DirectedVertex, AVLTreeNode
} = dataStructureTyped;
```

## Vivid Examples

### Binary Tree

[Try it out](https://vivid-algorithm.vercel.app/), or you can run your own code using
our [visual tool](https://github.com/zrwusa/vivid-algorithm)

![](https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/examples/videos/webp_output/binary-tree-array-to-binary-tree.webp)

### Binary Tree DFS

[Try it out](https://vivid-algorithm.vercel.app/)

![](https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/examples/videos/webp_output/binary-tree-dfs-in-order.webp)

### AVL Tree

[Try it out](https://vivid-algorithm.vercel.app/)

![](https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/examples/videos/webp_output/avl-tree-test.webp)

### Tree Multi Map

[Try it out](https://vivid-algorithm.vercel.app/)

![](https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/examples/videos/webp_output/tree-multiset-test.webp)

### Matrix

[Try it out](https://vivid-algorithm.vercel.app/algorithm/graph/)

![](https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/examples/videos/webp_output/matrix-cut-off-tree-for-golf.webp)

### Directed Graph

[Try it out](https://vivid-algorithm.vercel.app/algorithm/graph/)

![](https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/examples/videos/webp_output/directed-graph-test.webp)

### Map Graph

[Try it out](https://vivid-algorithm.vercel.app/algorithm/graph/)

![](https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/examples/videos/webp_output/map-graph-test.webp)

## Code Snippets

### RedBlackTree snippet

#### TS

```ts
import {RedBlackTree} from 'data-structure-typed';

const rbTree = new RedBlackTree<number>();
rbTree.addMany([11, 3, 15, 1, 8, 13, 16, 2, 6, 9, 12, 14, 4, 7, 10, 5])
rbTree.isAVLBalanced();    // true
rbTree.delete(10);
rbTree.isAVLBalanced();    // true
rbTree.print()
//         ___6________
//        /            \
//      ___4_       ___11________
//     /     \     /             \
//    _2_    5    _8_       ____14__
//   /   \       /   \     /        \
//   1   3       7   9    12__     15__
//                            \        \
//                           13       16
```

#### JS

```js
import {RedBlackTree} from 'data-structure-typed';

const rbTree = new RedBlackTree();
rbTree.addMany([11, 3, 15, 1, 8, 13, 16, 2, 6, 9, 12, 14, 4, 7, 10, 5])
rbTree.isAVLBalanced();    // true
rbTree.delete(10);
rbTree.isAVLBalanced();    // true
rbTree.print()
//         ___6________
//        /            \
//      ___4_       ___11________
//     /     \     /             \
//    _2_    5    _8_       ____14__
//   /   \       /   \     /        \
//   1   3       7   9    12__     15__
//                            \        \
//                           13       16
```

### Binary Search Tree (BST) snippet

```ts
import {BST, BSTNode} from 'data-structure-typed';

const bst = new BST<number>();
bst.add(11);
bst.add(3);
bst.addMany([15, 1, 8, 13, 16, 2, 6, 9, 12, 14, 4, 7, 10, 5]);
bst.size === 16;                // true
bst.has(6);                     // true
const node6 = bst.getNode(6);   // BSTNode
bst.getHeight(6) === 2;         // true
bst.getHeight() === 5;          // true
bst.getDepth(6) === 3;          // true

bst.getLeftMost()?.key === 1;   // true

bst.delete(6);
bst.get(6);                     // undefined
bst.isAVLBalanced();            // true
bst.bfs()[0] === 11;            // true
bst.print()
//       ______________11_____           
//      /                     \          
//   ___3_______            _13_____
//  /           \          /        \    
//  1_     _____8____     12      _15__
//    \   /          \           /     \ 
//    2   4_       _10          14    16
//          \     /                      
//          5_    9
//            \                          
//            7

const objBST = new BST<number, {height: number, age: number}>();

objBST.add(11, { "name": "Pablo", "age": 15 });
objBST.add(3, { "name": "Kirk", "age": 1 });

objBST.addMany([15, 1, 8, 13, 16, 2, 6, 9, 12, 14, 4, 7, 10, 5], [
    { "name": "Alice", "age": 15 },
    { "name": "Bob", "age": 1 },
    { "name": "Charlie", "age": 8 },
    { "name": "David", "age": 13 },
    { "name": "Emma", "age": 16 },
    { "name": "Frank", "age": 2 },
    { "name": "Grace", "age": 6 },
    { "name": "Hannah", "age": 9 },
    { "name": "Isaac", "age": 12 },
    { "name": "Jack", "age": 14 },
    { "name": "Katie", "age": 4 },
    { "name": "Liam", "age": 7 },
    { "name": "Mia", "age": 10 },
    { "name": "Noah", "age": 5 }
  ]
);

objBST.delete(11);
```

### AVLTree snippet

```ts
import {AVLTree} from 'data-structure-typed';

const avlTree = new AVLTree<number>();
avlTree.addMany([11, 3, 15, 1, 8, 13, 16, 2, 6, 9, 12, 14, 4, 7, 10, 5])
avlTree.isAVLBalanced();    // true
avlTree.delete(10);
avlTree.isAVLBalanced();    // true
```

### Directed Graph simple snippet

```ts
import {DirectedGraph} from 'data-structure-typed';

const graph = new DirectedGraph<string>();

graph.addVertex('A');
graph.addVertex('B');

graph.hasVertex('A');       // true
graph.hasVertex('B');       // true
graph.hasVertex('C');       // false

graph.addEdge('A', 'B');
graph.hasEdge('A', 'B');    // true
graph.hasEdge('B', 'A');    // false

graph.deleteEdgeSrcToDest('A', 'B');
graph.hasEdge('A', 'B');    // false

graph.addVertex('C');

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');

const topologicalOrderKeys = graph.topologicalSort(); // ['A', 'B', 'C']
```

### Undirected Graph snippet

```ts
import {UndirectedGraph} from 'data-structure-typed';

const graph = new UndirectedGraph<string>();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.deleteVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('B', 'D');

const dijkstraResult = graph.dijkstra('A');
Array.from(dijkstraResult?.seen ?? []).map(vertex => vertex.key) // ['A', 'B', 'D']


```

### Free conversion between data structures.

```js
const orgArr = [6, 1, 2, 7, 5, 3, 4, 9, 8];
const orgStrArr = ["trie", "trial", "trick", "trip", "tree", "trend", "triangle", "track", "trace", "transmit"];
const entries = [[6, 6], [1, 1], [2, 2], [7, 7], [5, 5], [3, 3], [4, 4], [9, 9], [8, 8]];

const queue = new Queue(orgArr);
queue.print();      
// [6, 1, 2, 7, 5, 3, 4, 9, 8]

const deque = new Deque(orgArr);
deque.print();      
// [6, 1, 2, 7, 5, 3, 4, 9, 8]

const sList = new SinglyLinkedList(orgArr);
sList.print();      
// [6, 1, 2, 7, 5, 3, 4, 9, 8]

const dList = new DoublyLinkedList(orgArr);
dList.print();      
// [6, 1, 2, 7, 5, 3, 4, 9, 8]

const stack = new Stack(orgArr);
stack.print();      
// [6, 1, 2, 7, 5, 3, 4, 9, 8]

const minHeap = new MinHeap(orgArr);
minHeap.print();    
// [1, 5, 2, 7, 6, 3, 4, 9, 8]

const maxPQ = new MaxPriorityQueue(orgArr);
maxPQ.print();      
// [9, 8, 4, 7, 5, 2, 3, 1, 6]

const biTree = new BinaryTree(entries);
biTree.print();
//         ___6___
//        /       \
//     ___1_     _2_
//    /     \   /   \
//   _7_    5   3   4
//  /   \
//  9   8

const bst = new BST(entries);
bst.print();
//     _____5___
//    /         \
//   _2_       _7_
//  /   \     /   \
//  1   3_    6   8_
//        \         \
//        4         9


const rbTree = new RedBlackTree(entries);
rbTree.print();
//     ___4___
//    /       \
//   _2_     _6___
//  /   \   /     \
//  1   3   5    _8_
//              /   \
//              7   9


const avl = new AVLTree(entries);
avl.print();
//     ___4___
//    /       \
//   _2_     _6___
//  /   \   /     \
//  1   3   5    _8_
//              /   \
//              7   9

const treeMulti = new TreeMultimap(entries);
treeMulti.print();
//     ___4___
//    /       \
//   _2_     _6___
//  /   \   /     \
//  1   3   5    _8_
//              /   \
//              7   9

const hm = new HashMap(entries);
hm.print()    
// [[6, 6], [1, 1], [2, 2], [7, 7], [5, 5], [3, 3], [4, 4], [9, 9], [8, 8]]

const rbTreeH = new RedBlackTree(hm);
rbTreeH.print();
//     ___4___
//    /       \
//   _2_     _6___
//  /   \   /     \
//  1   3   5    _8_
//              /   \
//              7   9

const pq = new MinPriorityQueue(orgArr);
pq.print();   
// [1, 5, 2, 7, 6, 3, 4, 9, 8]

const bst1 = new BST(pq);
bst1.print();
//     _____5___
//    /         \
//   _2_       _7_
//  /   \     /   \
//  1   3_    6   8_
//        \         \
//        4         9

const dq1 = new Deque(orgArr);
dq1.print();    
// [6, 1, 2, 7, 5, 3, 4, 9, 8]
const rbTree1 = new RedBlackTree(dq1);
rbTree1.print();
//    _____5___
//   /         \
//  _2___     _7___
// /     \   /     \
// 1    _4   6    _9
//      /         /
//      3         8


const trie2 = new Trie(orgStrArr);
trie2.print();    
// ['trie', 'trial', 'triangle', 'trick', 'trip', 'tree', 'trend', 'track', 'trace', 'transmit']
const heap2 = new Heap(trie2, { comparator: (a, b) => Number(a) - Number(b) });
heap2.print();    
// ['transmit', 'trace', 'tree', 'trend', 'track', 'trial', 'trip', 'trie', 'trick', 'triangle']
const dq2 = new Deque(heap2);
dq2.print();      
// ['transmit', 'trace', 'tree', 'trend', 'track', 'trial', 'trip', 'trie', 'trick', 'triangle']
const entries2 = dq2.map((el, i) => [i, el]);
const avl2 = new AVLTree(entries2);
avl2.print();
//     ___3_______
//    /           \
//   _1_       ___7_
//  /   \     /     \
//  0   2    _5_    8_
//          /   \     \
//          4   6     9
```

## API docs & Examples

[API Docs](https://data-structure-typed-docs.vercel.app)

[Live Examples](https://vivid-algorithm.vercel.app)

<a href="https://github.com/zrwusa/vivid-algorithm" target="_blank">Examples Repository</a>

## Data Structures

<table style="display: table; width:100%; table-layout: fixed;">
<thead>
<tr>
<th>Data Structure</th>
<th>Unit Test</th>
<th>Performance Test</th>
<th>API Docs</th>
</tr>
</thead>
<tbody>
<tr>
<td>Binary Tree</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/BinaryTree.html"><span>View</span></a></td>
</tr>
<tr>
<td>Binary Search Tree (BST)</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/BST.html"><span>View</span></a></td>
</tr>
<tr>
<td>AVL Tree</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/AVLTree.html"><span>View</span></a></td>
</tr>
<tr>
<td>Red Black Tree</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/RedBlackTree.html"><span>View</span></a></td>
</tr>
<tr>
<td>Tree Multimap</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/TreeMultimap.html"><span>View</span></a></td>
</tr>
<tr>
<td>Heap</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/Heap.html"><span>View</span></a></td>
</tr>
<tr>
<td>Priority Queue</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/PriorityQueue.html"><span>View</span></a></td>
</tr>
<tr>
<td>Max Priority Queue</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/MaxPriorityQueue.html"><span>View</span></a></td>
</tr>
<tr>
<td>Min Priority Queue</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/MinPriorityQueue.html"><span>View</span></a></td>
</tr>
<tr>
<td>Trie</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/Trie.html"><span>View</span></a></td>
</tr>
<tr>
<td>Graph</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/AbstractGraph.html"><span>View</span></a></td>
</tr>
<tr>
<td>Directed Graph</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/DirectedGraph.html"><span>View</span></a></td>
</tr>
<tr>
<td>Undirected Graph</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/UndirectedGraph.html"><span>View</span></a></td>
</tr>
<tr>
<td>Queue</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/Queue.html"><span>View</span></a></td>
</tr>
<tr>
<td>Deque</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/Deque.html"><span>View</span></a></td>
</tr>
<tr>
<td>Hash Map</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/HashMap.html"><span>View</span></a></td>
</tr>
<tr>
<td>Linked List</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/SinglyLinkedList.html"><span>View</span></a></td>
</tr>
<tr>
<td>Singly Linked List</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/SinglyLinkedList.html"><span>View</span></a></td>
</tr>
<tr>
<td>Doubly Linked List</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/DoublyLinkedList.html"><span>View</span></a></td>
</tr>
<tr>
<td>Stack</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/Stack.html"><span>View</span></a></td>
</tr>
<tr>
<td>Segment Tree</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/SegmentTree.html"><span>View</span></a></td>
</tr>
<tr>
<td>Binary Indexed Tree</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/BinaryIndexedTree.html"><span>View</span></a></td>
</tr>
</tbody>
</table>

## The corresponding relationships between data structures in different language standard libraries.

<table style="display: table; width:100%; table-layout: fixed;">
  <thead>
  <tr>
    <th>Data Structure Typed</th>
    <th>C++ STL</th>
    <th>java.util</th>
    <th>Python collections</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Heap&lt;E&gt;</td>
    <td>-</td>
    <td>-</td>
    <td>heapq</td>
  </tr>
  <tr>
    <td>PriorityQueue&lt;E&gt;</td>
    <td>priority_queue&lt;T&gt;</td>
    <td>PriorityQueue&lt;E&gt;</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Deque&lt;E&gt;</td>
    <td>deque&lt;T&gt;</td>
    <td>ArrayDeque&lt;E&gt;</td>
    <td>deque</td>
  </tr>
  <tr>
    <td>Queue&lt;E&gt;</td>
    <td>queue&lt;T&gt;</td>
    <td>Queue&lt;E&gt;</td>
    <td>-</td>
  </tr>
  <tr>
    <td>HashMap&lt;K, V&gt;</td>
    <td>unordered_map&lt;K, V&gt;</td>
    <td>HashMap&lt;K, V&gt;</td>
    <td>defaultdict</td>
  </tr>
  <tr>
    <td>DoublyLinkedList&lt;E&gt;</td>
    <td>list&lt;T&gt;</td>
    <td>LinkedList&lt;E&gt;</td>
    <td>-</td>
  </tr>
  <tr>
    <td>SinglyLinkedList&lt;E&gt;</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>BinaryTree&lt;K, V&gt;</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>BST&lt;K, V&gt;</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>RedBlackTree&lt;E&gt;</td>
    <td>set&lt;T&gt;</td>
    <td>TreeSet&lt;E&gt;</td>
    <td>-</td>
  </tr>
  <tr>
    <td>RedBlackTree&lt;K, V&gt;</td>
    <td>map&lt;K, V&gt;</td>
    <td>TreeMap&lt;K, V&gt;</td>
    <td>-</td>
  </tr>
  <tr>
    <td>TreeMultimap&lt;K, V&gt;</td>
    <td>multimap&lt;K, V&gt;</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>TreeMultimap&lt;E&gt;</td>
    <td>multiset&lt;T&gt;</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Trie</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>DirectedGraph&lt;V, E&gt;</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>UndirectedGraph&lt;V, E&gt;</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>PriorityQueue&lt;E&gt;</td>
    <td>priority_queue&lt;T&gt;</td>
    <td>PriorityQueue&lt;E&gt;</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Array&lt;E&gt;</td>
    <td>vector&lt;T&gt;</td>
    <td>ArrayList&lt;E&gt;</td>
    <td>list</td>
  </tr>
  <tr>
    <td>Stack&lt;E&gt;</td>
    <td>stack&lt;T&gt;</td>
    <td>Stack&lt;E&gt;</td>
    <td>-</td>
  </tr>
  <tr>
    <td>HashMap&lt;E&gt;</td>
    <td>unordered_set&lt;T&gt;</td>
    <td>HashSet&lt;E&gt;</td>
    <td>set</td>
  </tr>
  <tr>
    <td>-</td>
    <td>unordered_multiset</td>
    <td>-</td>
    <td>Counter</td>
  </tr>
  <tr>
    <td>LinkedHashMap&lt;K, V&gt;</td>
    <td>-</td>
    <td>LinkedHashMap&lt;K, V&gt;</td>
    <td>OrderedDict</td>
  </tr>
  <tr>
    <td>-</td>
    <td>unordered_multimap&lt;K, V&gt;</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>bitset&lt;N&gt;</td>
    <td>-</td>
    <td>-</td>
  </tr>
  </tbody>
</table>

## Built-in classic algorithms

<table style="display: table; width:100%; table-layout: fixed;">
  <thead>
  <tr>
    <th>Algorithm</th>
    <th>Function Description</th>
    <th>Iteration Type</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Binary Tree DFS</td>
    <td>Traverse a binary tree in a depth-first manner, starting from the root node, first visiting the left subtree,
      and then the right subtree, using recursion.
    </td>
    <td>Recursion + Iteration</td>
  </tr>
  <tr>
    <td>Binary Tree BFS</td>
    <td>Traverse a binary tree in a breadth-first manner, starting from the root node, visiting nodes level by level
      from left to right.
    </td>
    <td>Iteration</td>
  </tr>
  <tr>
    <td>Graph DFS</td>
    <td>Traverse a graph in a depth-first manner, starting from a given node, exploring along one path as deeply as
      possible, and backtracking to explore other paths. Used for finding connected components, paths, etc.
    </td>
    <td>Recursion + Iteration</td>
  </tr>
  <tr>
    <td>Binary Tree Morris</td>
    <td>Morris traversal is an in-order traversal algorithm for binary trees with O(1) space complexity. It allows tree
      traversal without additional stack or recursion.
    </td>
    <td>Iteration</td>
  </tr>
  <tr>
    <td>Graph BFS</td>
    <td>Traverse a graph in a breadth-first manner, starting from a given node, first visiting nodes directly connected
      to the starting node, and then expanding level by level. Used for finding shortest paths, etc.
    </td>
    <td>Recursion + Iteration</td>
  </tr>
  <tr>
    <td>Graph Tarjan's Algorithm</td>
    <td>Find strongly connected components in a graph, typically implemented using depth-first search.</td>
    <td>Recursion</td>
  </tr>
  <tr>
    <td>Graph Bellman-Ford Algorithm</td>
    <td>Finding the shortest paths from a single source, can handle negative weight edges</td>
    <td>Iteration</td>
  </tr>
  <tr>
    <td>Graph Dijkstra's Algorithm</td>
    <td>Finding the shortest paths from a single source, cannot handle negative weight edges</td>
    <td>Iteration</td>
  </tr>
  <tr>
    <td>Graph Floyd-Warshall Algorithm</td>
    <td>Finding the shortest paths between all pairs of nodes</td>
    <td>Iteration</td>
  </tr>
  <tr>
    <td>Graph getCycles</td>
    <td>Find all cycles in a graph or detect the presence of cycles.</td>
    <td>Recursion</td>
  </tr>
  <tr>
    <td>Graph getCutVertexes</td>
    <td>Find cut vertices in a graph, which are nodes that, when removed, increase the number of connected components in
      the graph.
    </td>
    <td>Recursion</td>
  </tr>
  <tr>
    <td>Graph getSCCs</td>
    <td>Find strongly connected components in a graph, which are subgraphs where any two nodes can reach each other.
    </td>
    <td>Recursion</td>
  </tr>
  <tr>
    <td>Graph getBridges</td>
    <td>Find bridges in a graph, which are edges that, when removed, increase the number of connected components in the
      graph.
    </td>
    <td>Recursion</td>
  </tr>
  <tr>
    <td>Graph topologicalSort</td>
    <td>Perform topological sorting on a directed acyclic graph (DAG) to find a linear order of nodes such that all
      directed edges go from earlier nodes to later nodes.
    </td>
    <td>Recursion</td>
  </tr>
  </tbody>
</table>

## Software Engineering Design Standards

We strictly adhere to computer science theory and software development standards. Our LinkedList is designed in the traditional sense of the LinkedList data structure, and we refrain from substituting it with a Deque solely for the purpose of showcasing performance test data. However, we have also implemented a Deque based on a dynamic array concurrently.


<table style="display: table; width:100%; table-layout: fixed;">
    <tr>
        <th>Principle</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>Practicality</td>
        <td>Follows ES6 and ESNext standards, offering unified and considerate optional parameters, and simplifies method names.</td>
    </tr>
    <tr>
        <td>Extensibility</td>
        <td>Adheres to OOP (Object-Oriented Programming) principles, allowing inheritance for all data structures.</td>
    </tr>
    <tr>
        <td>Modularization</td>
        <td>Includes data structure modularization and independent NPM packages.</td>
    </tr>
    <tr>
        <td>Efficiency</td>
        <td>All methods provide time and space complexity, comparable to native JS performance.</td>
    </tr>
    <tr>
        <td>Maintainability</td>
        <td>Follows open-source community development standards, complete documentation, continuous integration, and adheres to TDD (Test-Driven Development) patterns.</td>
    </tr>
    <tr>
        <td>Testability</td>
        <td>Automated and customized unit testing, performance testing, and integration testing.</td>
    </tr>
    <tr>
        <td>Portability</td>
        <td>Plans for porting to Java, Python, and C++, currently achieved to 80%.</td>
    </tr>
    <tr>
        <td>Reusability</td>
        <td>Fully decoupled, minimized side effects, and adheres to OOP.</td>
    </tr>
    <tr>
        <td>Security</td>
        <td>Carefully designed security for member variables and methods. Read-write separation. Data structure software does not need to consider other security aspects.</td>
    </tr>
    <tr>
        <td>Scalability</td>
        <td>Data structure software does not involve load issues.</td>
    </tr>
</table>


## Benchmark

[//]: # (No deletion!!! Start of Replace Section)
<div class="json-to-html-collapse clearfix 0">
      <div class='collapsible level0' ><span class='json-to-html-label'>avl-tree</span></div>
      <div class="content"><table style="display: table; width:100%; table-layout: fixed;"><tr><th>test name</th><th>time taken (ms)</th><th>executions per sec</th><th>sample deviation</th></tr><tr><td>10,000 add randomly</td><td>126.82</td><td>7.88</td><td>0.01</td></tr><tr><td>10,000 add & delete randomly</td><td>186.36</td><td>5.37</td><td>0.00</td></tr><tr><td>10,000 addMany</td><td>133.15</td><td>7.51</td><td>0.00</td></tr><tr><td>10,000 get</td><td>50.65</td><td>19.74</td><td>5.59e-4</td></tr></table></div>
    </div><div class="json-to-html-collapse clearfix 0">
      <div class='collapsible level0' ><span class='json-to-html-label'>binary-tree-overall</span></div>
      <div class="content"><table style="display: table; width:100%; table-layout: fixed;"><tr><th>test name</th><th>time taken (ms)</th><th>executions per sec</th><th>sample deviation</th></tr><tr><td>10,000 RBTree add</td><td>6.12</td><td>163.48</td><td>1.94e-4</td></tr><tr><td>10,000 RBTree add & delete randomly</td><td>15.46</td><td>64.70</td><td>3.64e-4</td></tr><tr><td>10,000 RBTree get</td><td>19.98</td><td>50.06</td><td>0.00</td></tr><tr><td>10,000 AVLTree add</td><td>130.40</td><td>7.67</td><td>0.02</td></tr><tr><td>10,000 AVLTree add & delete randomly</td><td>193.64</td><td>5.16</td><td>0.01</td></tr><tr><td>10,000 AVLTree get</td><td>0.99</td><td>1005.44</td><td>3.95e-5</td></tr></table></div>
    </div><div class="json-to-html-collapse clearfix 0">
      <div class='collapsible level0' ><span class='json-to-html-label'>rb-tree</span></div>
      <div class="content"><table style="display: table; width:100%; table-layout: fixed;"><tr><th>test name</th><th>time taken (ms)</th><th>executions per sec</th><th>sample deviation</th></tr><tr><td>100,000 add</td><td>90.72</td><td>11.02</td><td>0.03</td></tr><tr><td>100,000 add & delete randomly</td><td>228.77</td><td>4.37</td><td>0.02</td></tr><tr><td>100,000 getNode</td><td>192.25</td><td>5.20</td><td>5.16e-4</td></tr><tr><td>100,000 add & iterator</td><td>112.49</td><td>8.89</td><td>0.01</td></tr></table></div>
    </div><div class="json-to-html-collapse clearfix 0">
      <div class='collapsible level0' ><span class='json-to-html-label'>directed-graph</span></div>
      <div class="content"><table style="display: table; width:100%; table-layout: fixed;"><tr><th>test name</th><th>time taken (ms)</th><th>executions per sec</th><th>sample deviation</th></tr><tr><td>1,000 addVertex</td><td>0.11</td><td>9250.94</td><td>1.22e-5</td></tr><tr><td>1,000 addEdge</td><td>6.35</td><td>157.51</td><td>2.88e-4</td></tr><tr><td>1,000 getVertex</td><td>0.05</td><td>2.06e+4</td><td>8.69e-6</td></tr><tr><td>1,000 getEdge</td><td>23.02</td><td>43.43</td><td>0.00</td></tr><tr><td>tarjan</td><td>213.85</td><td>4.68</td><td>0.01</td></tr><tr><td>tarjan all</td><td>6674.11</td><td>0.15</td><td>0.28</td></tr><tr><td>topologicalSort</td><td>179.09</td><td>5.58</td><td>0.00</td></tr></table></div>
    </div><div class="json-to-html-collapse clearfix 0">
      <div class='collapsible level0' ><span class='json-to-html-label'>hash-map</span></div>
      <div class="content"><table style="display: table; width:100%; table-layout: fixed;"><tr><th>test name</th><th>time taken (ms)</th><th>executions per sec</th><th>sample deviation</th></tr><tr><td>1,000,000 set</td><td>131.27</td><td>7.62</td><td>0.05</td></tr><tr><td>Native Map 1,000,000 set</td><td>267.34</td><td>3.74</td><td>0.04</td></tr><tr><td>Native Set 1,000,000 add</td><td>207.03</td><td>4.83</td><td>0.06</td></tr><tr><td>1,000,000 set & get</td><td>132.19</td><td>7.56</td><td>0.03</td></tr><tr><td>Native Map 1,000,000 set & get</td><td>276.30</td><td>3.62</td><td>0.01</td></tr><tr><td>Native Set 1,000,000 add & has</td><td>187.74</td><td>5.33</td><td>0.02</td></tr><tr><td>1,000,000 ObjKey set & get</td><td>336.39</td><td>2.97</td><td>0.03</td></tr><tr><td>Native Map 1,000,000 ObjKey set & get</td><td>394.47</td><td>2.54</td><td>0.09</td></tr><tr><td>Native Set 1,000,000 ObjKey add & has</td><td>295.48</td><td>3.38</td><td>0.04</td></tr></table></div>
    </div><div class="json-to-html-collapse clearfix 0">
      <div class='collapsible level0' ><span class='json-to-html-label'>heap</span></div>
      <div class="content"><table style="display: table; width:100%; table-layout: fixed;"><tr><th>test name</th><th>time taken (ms)</th><th>executions per sec</th><th>sample deviation</th></tr><tr><td>100,000 add & poll</td><td>24.18</td><td>41.35</td><td>6.43e-4</td></tr><tr><td>100,000 add & dfs</td><td>33.64</td><td>29.72</td><td>0.00</td></tr><tr><td>10,000 fib add & pop</td><td>363.38</td><td>2.75</td><td>0.00</td></tr></table></div>
    </div><div class="json-to-html-collapse clearfix 0">
      <div class='collapsible level0' ><span class='json-to-html-label'>doubly-linked-list</span></div>
      <div class="content"><table style="display: table; width:100%; table-layout: fixed;"><tr><th>test name</th><th>time taken (ms)</th><th>executions per sec</th><th>sample deviation</th></tr><tr><td>1,000,000 push</td><td>220.16</td><td>4.54</td><td>0.03</td></tr><tr><td>1,000,000 unshift</td><td>210.84</td><td>4.74</td><td>0.05</td></tr><tr><td>1,000,000 unshift & shift</td><td>189.59</td><td>5.27</td><td>0.07</td></tr><tr><td>1,000,000 addBefore</td><td>412.74</td><td>2.42</td><td>0.17</td></tr></table></div>
    </div><div class="json-to-html-collapse clearfix 0">
      <div class='collapsible level0' ><span class='json-to-html-label'>singly-linked-list</span></div>
      <div class="content"><table style="display: table; width:100%; table-layout: fixed;"><tr><th>test name</th><th>time taken (ms)</th><th>executions per sec</th><th>sample deviation</th></tr><tr><td>1,000,000 push & shift</td><td>252.06</td><td>3.97</td><td>0.09</td></tr><tr><td>10,000 push & pop</td><td>230.29</td><td>4.34</td><td>0.01</td></tr><tr><td>10,000 addBefore</td><td>261.57</td><td>3.82</td><td>0.01</td></tr></table></div>
    </div><div class="json-to-html-collapse clearfix 0">
      <div class='collapsible level0' ><span class='json-to-html-label'>priority-queue</span></div>
      <div class="content"><table style="display: table; width:100%; table-layout: fixed;"><tr><th>test name</th><th>time taken (ms)</th><th>executions per sec</th><th>sample deviation</th></tr><tr><td>100,000 add & poll</td><td>75.71</td><td>13.21</td><td>8.95e-4</td></tr></table></div>
    </div><div class="json-to-html-collapse clearfix 0">
      <div class='collapsible level0' ><span class='json-to-html-label'>deque</span></div>
      <div class="content"><table style="display: table; width:100%; table-layout: fixed;"><tr><th>test name</th><th>time taken (ms)</th><th>executions per sec</th><th>sample deviation</th></tr><tr><td>1,000,000 push</td><td>25.18</td><td>39.71</td><td>0.01</td></tr><tr><td>1,000,000 push & pop</td><td>33.52</td><td>29.83</td><td>0.01</td></tr><tr><td>100,000 push & shift</td><td>3.61</td><td>276.96</td><td>5.50e-4</td></tr><tr><td>Native Array 100,000 push & shift</td><td>2703.16</td><td>0.37</td><td>0.11</td></tr><tr><td>100,000 unshift & shift</td><td>3.73</td><td>268.14</td><td>8.29e-4</td></tr><tr><td>Native Array 100,000 unshift & shift</td><td>4767.61</td><td>0.21</td><td>0.40</td></tr></table></div>
    </div><div class="json-to-html-collapse clearfix 0">
      <div class='collapsible level0' ><span class='json-to-html-label'>queue</span></div>
      <div class="content"><table style="display: table; width:100%; table-layout: fixed;"><tr><th>test name</th><th>time taken (ms)</th><th>executions per sec</th><th>sample deviation</th></tr><tr><td>1,000,000 push</td><td>50.56</td><td>19.78</td><td>0.01</td></tr><tr><td>100,000 push & shift</td><td>5.99</td><td>166.85</td><td>0.00</td></tr><tr><td>Native Array 100,000 push & shift</td><td>2962.43</td><td>0.34</td><td>0.29</td></tr><tr><td>Native Array 100,000 push & pop</td><td>4.49</td><td>222.69</td><td>3.01e-4</td></tr></table></div>
    </div><div class="json-to-html-collapse clearfix 0">
      <div class='collapsible level0' ><span class='json-to-html-label'>stack</span></div>
      <div class="content"><table style="display: table; width:100%; table-layout: fixed;"><tr><th>test name</th><th>time taken (ms)</th><th>executions per sec</th><th>sample deviation</th></tr><tr><td>1,000,000 push</td><td>59.68</td><td>16.76</td><td>0.03</td></tr><tr><td>1,000,000 push & pop</td><td>52.04</td><td>19.22</td><td>0.01</td></tr></table></div>
    </div><div class="json-to-html-collapse clearfix 0">
      <div class='collapsible level0' ><span class='json-to-html-label'>trie</span></div>
      <div class="content"><table style="display: table; width:100%; table-layout: fixed;"><tr><th>test name</th><th>time taken (ms)</th><th>executions per sec</th><th>sample deviation</th></tr><tr><td>100,000 push</td><td>47.70</td><td>20.96</td><td>0.00</td></tr><tr><td>100,000 getWords</td><td>66.53</td><td>15.03</td><td>0.00</td></tr></table></div>
    </div>

[//]: # (No deletion!!! End of Replace Section)
