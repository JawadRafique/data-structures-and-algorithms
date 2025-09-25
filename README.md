# Data Structures & Algorithms (DSA)

TOPICS:

- Essential Concepts:
- Big O Notation (Time and Space Complexity).
- Arrays and Linked Lists.
- Stacks and Queues.
- Hash Tables (Hash Maps).
- Trees (Binary Trees, Binary Search Trees).
- Graphs (Basic traversal: DFS and BFS).
- Recursion.

BIG O NOTATION:

Big O notation is used to analyze the efficiency  of an algorithm as its input approaches infinity.

Common Big O Notations in Order of Growth (Slowest to Fastest)

O(1) - Constant: The algorithm takes the same amount of time regardless of the input size. 
O(log n) - Logarithmic: The time taken increases by a constant amount as the input size doubles, such as in a binary search. 
O(n) - Linear: The time taken increases directly proportional to the input size. 
O(n log n) - Loglinear: A combination of linear and logarithmic growth, often seen in efficient sorting algorithms. 
O(n²) - Quadratic: The time taken increases with the square of the input size, as in nested loops. 
O(n^c) - Polynomial: A general term for growth where the input size is raised to a constant power, including O(n^3) and higher. 
O(2^n) - Exponential: The time taken grows exponentially with the input size, which is extremely slow for larger inputs. 
O(n!) - Factorial: The worst-case scenario, where the time taken grows extremely rapidly, even for small inputs. 

Key Principles
Higher-order terms dominate: When combining Big O notations (e.g., O(n) + O(n²)), the term with the highest growth rate determines the overall complexity (in this case, O(n²)). 
Constants are ignored: Big O notation focuses on the growth rate, so constant factors are disregarded (e.g., O(5n) is treated the same as O(n)). 
Focus on the fastest-growing term: To optimize an algorithm, prioritize changing its order of magnitude (e.g., reducing an O(n²) complexity to O(n)) rather than just tweaking constants. 
