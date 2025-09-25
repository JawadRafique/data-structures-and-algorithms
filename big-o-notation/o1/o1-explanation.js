// O(1) Time Complexity - Understanding Real-World Performance
// Let's explore why execution times vary even for O(1) operations

console.log('🔍 Understanding O(1) Performance Variations');
console.log('==============================================\n');

const constantFunc = (arr, testName) => {
    const startTime = performance.now();
    
    // O(1) operations
    const firstElement = arr[0];
    const calculation = 10000 * 10000;
    
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    
    console.log(`${testName}:`);
    console.log(`  First element: ${firstElement}`);
    console.log(`  Execution time: ${executionTime.toFixed(6)} ms`);
    console.log(`  Array size: ${arr.length}`);
    console.log('');
    
    return executionTime;
}

// Run multiple tests to see variation
console.log('📊 Multiple Runs of the Same Function:');
console.log('--------------------------------------');

const testArray = [1, 2, 3, 4, 5];
const times = [];

for (let i = 1; i <= 5; i++) {
    const time = constantFunc(testArray, `Run ${i}`);
    times.push(time);
}

console.log('📈 Analysis:');
console.log(`Average time: ${(times.reduce((a, b) => a + b) / times.length).toFixed(6)} ms`);
console.log(`Min time: ${Math.min(...times).toFixed(6)} ms`);
console.log(`Max time: ${Math.max(...times).toFixed(6)} ms`);
console.log(`Variation: ${(Math.max(...times) - Math.min(...times)).toFixed(6)} ms`);

console.log('\n🤔 Why Times Vary for O(1) Operations:');
console.log('=====================================');

console.log(`
1. 🖥️  **System Load & CPU Scheduling**
   - Other processes running on your computer
   - Operating system task switching
   - Background applications using CPU

2. ⚡ **JavaScript Engine Optimizations**
   - V8 engine (Node.js) optimizes code during execution
   - First run might be slower (compilation overhead)
   - Subsequent runs benefit from optimizations

3. 🧠 **Memory & Caching**
   - CPU cache hits/misses
   - Memory allocation patterns
   - Garbage collection timing

4. ⏱️  **Measurement Precision**
   - performance.now() has microsecond precision
   - Very fast operations show more relative variation
   - System timer resolution limitations

5. 🔄 **JavaScript Event Loop**
   - Non-blocking I/O operations
   - Promise resolution timing
   - Microtask queue processing
`);

console.log('\n✅ What O(1) Really Means:');
console.log('=========================');

console.log(`
📝 **Theoretical O(1)**: The algorithm performs a CONSTANT number of operations
   - Always accesses arr[0] (one operation)
   - Always does one multiplication
   - Does NOT scale with input size

🎯 **Real-world O(1)**: Execution time remains in the same ORDER OF MAGNITUDE
   - Times might vary: 0.1ms, 0.5ms, 0.9ms
   - But won't scale to 10ms, 100ms, 1000ms as input grows
   - The KEY is that doubling input size doesn't double execution time

🔬 **To See True O(1) Behavior**:
   - Run with MUCH larger inputs (millions vs thousands)
   - Average over many runs to reduce noise
   - Compare growth rates, not absolute times
`);

// Demonstrate with more extreme size differences
console.log('\n🧪 Extreme Size Comparison:');
console.log('===========================');

const tinyArray = [42];
const massiveArray = Array(10000000).fill(42); // 10 million elements

console.log('Testing with extreme size differences...');

// Run multiple times and average
const tinyTimes = [];
const massiveTimes = [];

for (let i = 0; i < 10; i++) {
    // Tiny array test
    const start1 = performance.now();
    const first1 = tinyArray[0];
    const calc1 = 10000 * 10000;
    const end1 = performance.now();
    tinyTimes.push(end1 - start1);
    
    // Massive array test
    const start2 = performance.now();
    const first2 = massiveArray[0];
    const calc2 = 10000 * 10000;
    const end2 = performance.now();
    massiveTimes.push(end2 - start2);
}

const avgTiny = tinyTimes.reduce((a, b) => a + b) / tinyTimes.length;
const avgMassive = massiveTimes.reduce((a, b) => a + b) / massiveTimes.length;

console.log(`\n📊 Results (averaged over 10 runs):`);
console.log(`Tiny array (1 element):        ${avgTiny.toFixed(6)} ms`);
console.log(`Massive array (10M elements):  ${avgMassive.toFixed(6)} ms`);
console.log(`Ratio: ${(avgMassive / avgTiny).toFixed(2)}x`);

if (avgMassive / avgTiny < 3) {
    console.log(`\n✅ TRUE O(1): Times are similar despite 10,000,000x size difference!`);
} else {
    console.log(`\n⚠️  Some variation observed, but still within O(1) bounds`);
}

console.log('\n🎓 Key Takeaways:');
console.log('=================');
console.log('• Small timing variations are NORMAL and expected');
console.log('• O(1) means "bounded by a constant", not "exactly the same time"');
console.log('• Focus on growth patterns, not individual measurements');
console.log('• Real performance has many variables beyond algorithmic complexity');