// Build a Library
// Congratulations, you’ve become head librarian at your local Books-‘N-Stuff, which is in dire need of your help. They’re still using index cards to organize their content! Yikes.

// But no matter, you know some JavaScript, so let’s get to work modernizing your new digs.

// Books-‘N-Stuff carries three different types of media: books, CDs, and movies. In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD. These three subclasses have the following properties and methods:

// Book

// Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
// Getters: all properties have a getter
// Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
// Movie

// Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)
// Getters: all properties have a getter
// Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
// CD

// Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)
// Getters: all properties have a getter
// Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

class Media {
	constructor(name, title) {
		this._name = name;
		this._title = title;
		this._isCheckedOut = false;
		this._ratings = [];
	}

	get name() {
		return this._name;
	}

	get title() {
		return this._title;
	}

	get isCheckedOut() {
		return this._isCheckedOut;
	}

	get ratings() {
		return this._ratings;
	}

	getAverageRating() {
		return this._ratings.reduce((previousValue, currentValue) => previousValue + currentValue) / this._ratings.length;
	}

	toggleCheckOutStatus() {
		this._isCheckedOut = !this._isCheckedOut;
	}

	addRating(rating) {
		this._ratings.push(rating);
	}
}

class Book extends Media {
	constructor(author, title, pages) {
		super(author, title);
		this._pages = pages;
	}

	get author() {
		return this._name;
	}
}

class Movie extends Media {
	constructor(director, title, runTime) {
		super(director, title);
		this._runTime = runTime;
	}

	get director() {
		return this._name;
	}

	get runTime() {
		return this._runTime;
	}
}

class CD extends Media {
	constructor(artist, title, songs) {
		super(artist, title);
		this._songs = songs;
	}

	get artist() {
		return this._name;
	}
}

