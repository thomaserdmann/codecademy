const test = 'I love to code!';
const testUppercase = test.toUpperCase();
let cipher = [];
const shift = 2;

for (let i = 0; i < testUppercase.length; i++) {
	j = testUppercase.charCodeAt(i);

	if (j >= 65 && j <= 90) {
		shiftResult = j + shift;
		if (shiftResult >= 90) {
			shiftResult = 64 + shift;
		}
		cipher.push(String.fromCharCode(shiftResult));
	} else {
		cipher.push(String.fromCharCode(j));
	}
}

console.log(cipher.join(''));
