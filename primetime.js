function primeFinder(n) {
	let response = [];

	for (let i = 2; i <= n; i++) {
		isPrime = true;
		for (let j = 2; j < i / 2 + 1; j++) {
			if (i % j == 0) {
				isPrime = false;
				break;
			}
		}
		if (isPrime) {
			response.push(i);
		}
	}
	return response;
}

console.time('time');
let arrayPrimes = primeFinder(500000);
console.log(arrayPrimes[arrayPrimes.length - 1]);
console.timeEnd('time');
