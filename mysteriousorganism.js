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

		compareDNA(inputObject) {
			let compareCounter = 0;
			for (i = 0; i < dna.length; i++) {
				if (dna[i] === inputObject.dna[i]) {
					compareCounter += 1;
				}
			}
			return Math.floor((compareCounter / dna.length) * 100);
		},

		willLikelySurvive() {
			let surviveCounter = 0;
			for (i = 0; i < dna.length; i++) {
				if (dna[i] === 'C' || dna[i] === 'G') {
					surviveCounter += 1;
				}
			}
			if (surviveCounter >= 9) {
				return true;
			} else return false;
		},

		complementStrand() {
			let complementingStrand = [];
			for (i = 0; i < dna.length; i++) {
				if (dna[i] === 'A') {
					complementingStrand.push('T');
				}
				if (dna[i] === 'T') {
					complementingStrand.push('A');
				}
				if (dna[i] === 'C') {
					complementingStrand.push('G');
				}
				if (dna[i] === 'G') {
					complementingStrand.push('C');
				}
			}
			return complementingStrand;
		},
	};
};

const createDatabase = factoryAmount => {
	const strandArray = [];
	let strandID = 1;
	// if j = i then bug...
	for (j = 0; j < factoryAmount; j++) {
		let newStrand = pAequorFactory(strandID, mockUpStrand());
		do {
			newStrand.mutate();
		} while (newStrand.willLikelySurvive() === false);
		strandID += 1;
		strandArray.push(newStrand);
	}
	return strandArray;
};

//Test functionfactory
testNumber = 1;
testStrand = ['G', 'C', 'G', 'T', 'C', 'T', 'C', 'G', 'T', 'C', 'C', 'C', 'G', 'T', 'A'];
testObject = pAequorFactory(testNumber, testStrand);

testNumber2 = 2;
testStrand2 = ['G', 'G', 'G', 'A', 'A', 'C', 'A', 'T', 'T', 'C', 'C', 'G', 'G', 'A', 'A'];
testObject2 = pAequorFactory(testNumber2, testStrand2);

testNumber3 = 3;
testStrand3 = ['G', 'G', 'G', 'A', 'A', 'C', 'A', 'T', 'T', 'C', 'C', 'G', 'G', 'A', 'A'];
testObject3 = pAequorFactory(testNumber3, testStrand3);

console.log(testObject.dna);
console.log(testObject.complementStrand());