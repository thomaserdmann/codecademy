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

	describe('.placeOrder', () => {
		it('returns an object with 2 properties, product and change', () => {
			//Setup
			const productNumber = 6;
			const money = 600;
			const expected = { product: 'Condoms', change: [100] };

			//Exercise
			result = vm.placeOrder(productNumber, money);

			//Verify
			assert.deepEqual(expected, result);
		});

		it('returns a string when productNumber is invalid', () => {
			//Setup
			const productNumber = 200;
			const money = 600;
			const expected = 'Enter a valid product number';

			//Exercise
			result = vm.placeOrder(productNumber, money);

			//Verify
			assert.strictEqual(expected, result);
		});

		it('returns a string when not enough money', () => {
			//Setup
			const productNumber = 6;
			const money = 5;
			const expected = 'Not enough money for this product';

			//Exercise
			result = vm.placeOrder(productNumber, money);

			//Verify
			assert.strictEqual(expected, result);
		});

		it('returns an empty array when no change', () => {
			//Setup
			const productNumber = 6;
			const money = 500;
			const expected = [];

			//Exercise
			result = vm.placeOrder(productNumber, money).change;

			//Verify
			assert.deepEqual(expected, result);
		});
	});
});
