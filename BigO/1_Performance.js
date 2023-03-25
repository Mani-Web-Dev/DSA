// Check the performance of the code

let nemo = ["nemo"];

let largeArray = new Array(100).fill("Nemo");

function findNemo(arr) {
    let t0 = performance.now();
    console.log("t0 : ", t0);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Nemo") {
            console.log("Found NEMO!");
        } else {
            console.log("Not Found");
        }
    }
    let t1 = performance.now();
    console.log("t1 : ", t1);
    console.log("Total Time Taken : ", (t0 - t1));
}
findNemo(largeArray)