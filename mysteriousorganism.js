// Returns a random DNA base
const returnRandBase = () => {
	const dnaBases = ['A', 'T', 'C', 'G'];
	return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
	const newStrand = [];
	for (let i = 0; i < 15; i++) {
		newStrand.push(returnRandBase());
	}
	return newStrand;
};

// Create function factory
const pAequorFactory = (specimenNum, dna) => {
	return {
		specimenNum,
		dna,

		mutate() {
			const dnaBases = ['A', 'T', 'C', 'G']; // You'd probably want this variable to be global at some point.
			const randomBase = Math.floor(Math.random() * 15);
			const replaceBase = dna[randomBase];
			let newBase = '';

			// Find value at random place in base and replace it with a different base
			do {
				newBase = dnaBases[Math.floor(Math.random() * 3)];
			} while (replaceBase === newBase);
			dna.splice(randomBase, 1, newBase);
			return dna;
		},
	};
};

//Test functionfactory
testNumber = 1;
testStrand = ['G', 'C', 'G', 'T', 'C', 'T', 'C', 'G', 'T', 'C', 'A', 'A', 'A', 'T', 'A'];
testObject = pAequorFactory(testNumber, testStrand);
console.log(testObject.dna);
console.log(testObject.mutate());
