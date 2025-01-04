// based on formula
function sum_to_n_a(n: number): number {
	return (n * (n + 1)) / 2;
}


// Recursive
function sum_to_n_b(n: number): number {
    if (n <= 1) {
        return n;
    }

    return n + sum_to_n_b(n - 1);
}


// Iterative
function sum_to_n_c(n: number): number {
	let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sum_to_n_a(100)); // => 5050
console.log(sum_to_n_b(100)); // => 5050
console.log(sum_to_n_c(100)); // => 5050