let budget = 0;
const secondRate = hourRate => {
	return hourRate / 3600;
};

let resetCounter = () => {
	console.log('Hello Test');
	clearInterval(budgetCounter);
	budget = 0;
};

let budgetCounter = setInterval(() => {
	budget += secondRate(100);
	document.getElementById('budget').textContent = `This meeting is costing € ${budget.toFixed(2)}`;
}, 1000);

const reset = document.getElementById('reset');
reset.addEventListener('click', backgroundFunction);

let backgroundFunction = () => {
	document.getElementById('window').style.backgroundColor = 'blue';
	prompt('test');
};
