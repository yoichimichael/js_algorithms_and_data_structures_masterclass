function addUpTo(n) {
  return n * (n + 1) / 2;
}

// allows use of performance
const {performance} = require('perf_hooks');

// shows time taken to perform addUpTo
let t1 = performance.now();
addUpTo(1000000000); 
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)