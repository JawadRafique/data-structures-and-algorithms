// O(1) - Constant Time Complexity
// The function performs a fixed number of operations regardless of the input size.

const constantFunc = (arr) => {
    // Start time measurement
    const startTime = performance.now();
    
    // O(1) operations - accessing first element
    const firstElement = arr[0];
    console.log(`First element: ${firstElement}`);
    
    // Some constant operations
    const calculation = 10000 * 10000;
    console.log(`Calculation result: ${calculation}`);
    
    // End time measurement
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    
    console.log(`Execution time: ${executionTime.toFixed(6)} milliseconds`);
    console.log(`Array size: ${arr.length}`);
    console.log('---');
    
    return firstElement;
}

// Test with different array sizes to verify O(1) behavior
console.log('Testing O(1) Constant Time Complexity:');
console.log('=====================================');

const smallArray = [1, 2, 3, 4, 5];
const mediumArray = Array.from({length: 1000}, (_, i) => i + 1);
const largeArray = Array.from({length: 100000}, (_, i) => i + 1);

console.log('Small Array (5 elements):');
constantFunc(smallArray);

console.log('Medium Array (1,000 elements):');
constantFunc(mediumArray);

console.log('Large Array (100,000 elements):');
constantFunc(largeArray);

console.log('Notice: Execution time should be roughly the same regardless of array size!');