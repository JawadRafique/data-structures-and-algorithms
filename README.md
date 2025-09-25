# Data Structures & Algorithms (DSA) 📚

A comprehensive guide to essential data structures and algorithms concepts, implementations, and analysis.

## 📋 Table of Contents

- [Overview](#overview)
- [Essential Topics](#essential-topics)
- [Big O Notation](#big-o-notation)
- [Data Structures](#data-structures)
- [Algorithms](#algorithms)
- [Getting Started](#getting-started)
- [Resources](#resources)
- [Contributing](#contributing)

## 🎯 Overview

This repository contains study materials, implementations, and examples covering fundamental data structures and algorithms concepts essential for technical interviews and software development.

## 📚 Essential Topics

### Core Concepts
- **Big O Notation** - Time and Space Complexity Analysis
- **Recursion** - Recursive problem-solving techniques
- **Two Pointers** - Efficient array and string manipulation
- **Sliding Window** - Optimized substring and subarray problems

### Data Structures
- **Arrays and Strings** - Basic operations and manipulations
- **Linked Lists** - Singly, doubly, and circular linked lists
- **Stacks and Queues** - LIFO and FIFO data structures
- **Hash Tables (Hash Maps)** - Key-value pair storage and retrieval
- **Trees** - Binary trees, BSTs, AVL trees, tries
- **Graphs** - Adjacency lists/matrices, traversal algorithms
- **Heaps** - Min/max heaps and priority queues

### Algorithms
- **Sorting** - Bubble, selection, insertion, merge, quick, heap sort
- **Searching** - Linear, binary, and advanced search techniques
- **Graph Traversal** - Depth-First Search (DFS) and Breadth-First Search (BFS)
- **Dynamic Programming** - Memoization and tabulation
- **Greedy Algorithms** - Locally optimal choices
- **Backtracking** - Exhaustive search with pruning

## ⏰ Big O Notation

Big O notation analyzes the efficiency of algorithms by describing how their runtime or space requirements grow as input size approaches infinity.

### Common Time Complexities (Best to Worst)

| Notation | Name | Description | Example |
|----------|------|-------------|---------|
| **O(1)** | Constant | Same time regardless of input size | Array access by index |
| **O(log n)** | Logarithmic | Time increases by constant as input doubles | Binary search |
| **O(n)** | Linear | Time increases proportionally with input | Linear search |
| **O(n log n)** | Linearithmic | Combination of linear and logarithmic | Merge sort, heap sort |
| **O(n²)** | Quadratic | Time increases with square of input | Nested loops, bubble sort |
| **O(n³)** | Cubic | Time increases with cube of input | Triple nested loops |
| **O(2ⁿ)** | Exponential | Time doubles with each additional input | Recursive Fibonacci |
| **O(n!)** | Factorial | Extremely rapid growth | Traveling salesman (brute force) |

### Key Principles

1. **Higher-order terms dominate**: O(n² + n) → O(n²)
2. **Constants are ignored**: O(5n) → O(n)
3. **Focus on worst-case scenario**: Analyze the maximum possible time/space
4. **Consider both time and space complexity**: Some algorithms trade time for space

### Space Complexity

- **O(1)** - Constant extra space
- **O(n)** - Linear extra space (proportional to input)
- **O(log n)** - Logarithmic space (recursive call stack)

## 🏗️ Data Structures

### Arrays
- **Access**: O(1)
- **Search**: O(n)
- **Insertion**: O(n)
- **Deletion**: O(n)

### Linked Lists
- **Access**: O(n)
- **Search**: O(n)
- **Insertion**: O(1) at head, O(n) at position
- **Deletion**: O(1) at head, O(n) at position

### Hash Tables
- **Access**: O(1) average, O(n) worst
- **Search**: O(1) average, O(n) worst
- **Insertion**: O(1) average, O(n) worst
- **Deletion**: O(1) average, O(n) worst

### Binary Search Trees
- **Access**: O(log n) average, O(n) worst
- **Search**: O(log n) average, O(n) worst
- **Insertion**: O(log n) average, O(n) worst
- **Deletion**: O(log n) average, O(n) worst

## 🔍 Algorithms

### Sorting Algorithms

| Algorithm | Best | Average | Worst | Space | Stable |
|-----------|------|---------|--------|-------|--------|
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) | Yes |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) | No |
| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) | Yes |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) | Yes |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) | No |
| Heap Sort | O(n log n) | O(n log n) | O(n log n) | O(1) | No |

### Search Algorithms
- **Linear Search**: O(n) - Check each element sequentially
- **Binary Search**: O(log n) - Divide and conquer on sorted arrays
- **DFS**: O(V + E) - Explore as far as possible before backtracking
- **BFS**: O(V + E) - Explore neighbors before going deeper

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/JawadRafique/data-structures-and-algorithms.git
   cd data-structures-and-algorithms
   ```

2. **Choose your language**
   - Navigate to language-specific folders
   - Each implementation includes comments and complexity analysis

3. **Practice problems**
   - Start with basic concepts
   - Progress to more complex algorithms
   - Implement solutions in your preferred language

## 📖 Resources

### Books
- "Introduction to Algorithms" by Cormen, Leiserson, Rivest, and Stein
- "Algorithm Design Manual" by Steven Skiena
- "Elements of Programming Interviews" by Aziz, Lee, and Prakash

### Online Platforms
- [LeetCode](https://leetcode.com/)
- [HackerRank](https://www.hackerrank.com/)
- [CodeSignal](https://codesignal.com/)
- [GeeksforGeeks](https://www.geeksforgeeks.org/)

### Visualization Tools
- [VisuAlgo](https://visualgo.net/)
- [Algorithm Visualizer](https://algorithm-visualizer.org/)
- [Data Structure Visualizations](https://www.cs.usfca.edu/~galles/visualization/)

## 🤝 Contributing

Contributions are welcome! Please feel free to:
- Add new algorithms or data structures
- Improve existing implementations
- Fix bugs or optimize code
- Add more detailed explanations
- Create visualization examples

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy Coding!** 🎉

*Remember: Understanding the concepts is more important than memorizing implementations.* 
