// const test = 'I love to code!';
// const testUppercase = test.toUpperCase();
// let cipherArray = [];
// const shift = 2;

// for (let i = 0; i < testUppercase.length; i++) {
// 	j = testUppercase.charCodeAt(i);

// 	if (j >= 65 && j <= 90) {
// 		shiftResult = j + shift;
// 		if (shiftResult >= 90) {
// 			shiftResult = 64 + shift;
// 		}
// 		cipherArray.push(String.fromCharCode(shiftResult));
// 	} else {
// 		cipherArray.push(String.fromCharCode(j));
// 	}
// }

// console.log(cipherArray.join(''));

class ShiftCipher {
	constructor(shift) {
		this._shift = shift;
		this._cipherArray = [];
	}

	get shift() {
		return this._shift;
	}

	set shift(shift) {
		this._shift = shift;
	}

	encrypt(string) {
		for (let i = 0; i < string.length; i++) {
			let j = string.toUpperCase().charCodeAt(i);

			if (j >= 65 && j <= 90) {
				this._shiftResult = j + this._shift;
				if (this._shiftResult >= 90) {
					this._shiftResult = 64 + this._shift;
				}
				this._cipherArray.push(String.fromCharCode(this._shiftResult));
			} else {
				this._cipherArray.push(String.fromCharCode(j));
			}
		}
		return this._cipherArray.join('');
	}
}

const cipher = new ShiftCipher(2);

console.log(cipher.encrypt('I love to code!'));
