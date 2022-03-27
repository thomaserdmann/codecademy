const assert = require('assert');
const vm = require('../vendingmachine');
const VendingMachine = require('../vendingmachine');

describe('vm', () => {
	describe('.getProduct', () => {
		it('returns productname when entering number', () => {
			//Setup
			const productNumber = 6;
			const expected = 'Condoms';

			//Exercise
			const result = vm.getProduct(productNumber).name;

			//Verify
			assert.strictEqual(expected, result);
		});
	});
});
