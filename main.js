function generatePyramid(N) {
    for (let i = 0; i < N; i++) {
        let row = '';
        // Adding spaces before the asterisks
        for (let j = 0; j < N - i - 1; j++) {
            row += ' ';
        }
        // Adding asterisks
        for (let k = 0; k < 2 * i + 1; k++) {
            row += '*';
        }
        console.log(row);
    }
}

// Calling the function with N = 10
generatePyramid(10);
