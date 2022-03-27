const assert = require('assert');
const vm = require('../vendingmachine');
const VendingMachine = require('../vendingmachine');

describe('vm', () => {
	describe('.getProduct', () => {
		it('returns productName when entering productNumber', () => {
			//Setup
			const productNumber = 6;
			const expected = 'Condoms';

			//Exercise
			const result = vm.getProduct(productNumber).name;

			//Verify
			assert.strictEqual(expected, result);
		});

		it('returns false when productNumber is invalid', () => {
			//Setup
			const productNumber = 200;
			const expected = false;

			//Exercise
			const result = vm.getProduct(productNumber);

			//Verify
			assert.strictEqual(expected, result);
		});
	});
});
