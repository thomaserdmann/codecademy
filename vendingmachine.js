class VendingMachine {
	constructor() {
		this._products = [
			{ number: 1, price: 100, name: 'Orange juice' },
			{ number: 2, price: 200, name: 'Soda' },
			{ number: 3, price: 150, name: 'Chocolate snack' },
			{ number: 4, price: 250, name: 'Cookies' },
			{ number: 5, price: 180, name: 'Gummy bears' },
			{ number: 6, price: 500, name: 'Condoms' },
			{ number: 7, price: 120, name: 'Crackers' },
			{ number: 8, price: 220, name: 'Potato chips' },
			{ number: 9, price: 80, name: 'Small snack' },
		];
		this._coins = [500, 200, 100, 50, 20, 10];
	}

	getProduct(productNumber) {
		for (let i = 0; i < this._products.length; i++) {
			if (this._products[i].number == productNumber) return this._products[i];
		}
		return false;
	}

	placeOrder(productNumber, money) {
		const product = this.getProduct(productNumber);
		if (!product) return 'Enter a valid product number';
		if (product.price > money) return 'Not enough money for this product';

		this._changeInCoins = [];
		this.getChange(money - product.price);
		const change = this._changeInCoins;
		const response = { product: product.name, change: change };
		return response;
	}

	getChange(change) {
		const found = this._coins.find(element => element <= change);
		if (found != undefined) {
			this._changeInCoins.push(found);
			this.getChange(change - found);
		}
	}
}

const vm = new VendingMachine();
console.log(vm.placeOrder(5, 1600));
