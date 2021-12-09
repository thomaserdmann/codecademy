window.onload = () => {
	let budget = 0;
	let budgetCounter;

	const secondRate = hourRate => {
		return hourRate / 3600;
	};

	let resetCounter = () => {
		console.log('Hello Test');
		budget = 0;
		clearInterval(budgetCounter);
		setBudgetCounter();
	};

	const setBudgetCounter = () => {
		budgetCounter = setInterval(() => {
			budget += secondRate(100);
			document.getElementById('budget').innerHTML = `This meeting is costing &euro; ${budget.toFixed(2)}`;
		}, 1000);
	}

	let backgroundFunction = () => {
		document.body.style.backgroundColor = 'blue';
		prompt('test');
	};

	const reset = document.getElementById('reset');
	reset.addEventListener('click', backgroundFunction);

	setBudgetCounter();
}