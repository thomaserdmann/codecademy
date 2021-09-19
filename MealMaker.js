// menu is het parentobject en bevat het object: _courses en een aantal methods om de properties van courses aan te passen.
const menu = {
    _courses: {                  //de underscore maakt deze variabele, dit object, private(syntax). Dit werkt samen met de setter en getter methods hierna om incorrecte interactie met object properties te voorkomen.
        appetizers: [],
        mains: [],
        desserts: [],
    },
    get appetizers() {
        return this._courses.appetizers;
    },
    get mains() {
        return this._courses.mains;
    },
    get desserts() {
        return this._courses.desserts;
    },
    set appetizers(appetizers) {
        this._courses.appetizers = appetizers;
    },
    set mains(mains) {          // de voordelen van set and get ontgaan mij nog even in deze context maar ik kan me voorstellen dat je in de set nog een aantal if statements maakt om input te controleren.
        this._courses.mains = mains;
    },
    set desserts(desserts) {
        this._courses.desserts = desserts;
    },
    addDishToCourse(courseName, dishName, dishPrice) { // 2 variabelen komen in het object dish terecht. courseName wordt gebruikt om dish naar de juiste array te pushen.
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        return this._courses[courseName].push(dish); //push dish naar de property courseName (een array) van het object _courses.
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName]; //dishes is een array die gevuld wordt met de inhoud van de property courseName van het object _courses.
        const randomDish = Math.floor(Math.random() * dishes.length); //dit maakt alleen maar een getal om een random positie in de array te kunnen bepalen.
        return dishes[randomDish]; //return uit de array dishes een randomDish, dit is een van de dish objecten die dishName en dishPrice als properties bevat. 
    },
    generateRandomMeal() { //met bovenstaande methods een menu samenstellen, duidelijk. 
        const appetizer = this.getRandomDishFromCourse('appetizers')
        const main = this.getRandomDishFromCourse('mains')
        const dessert = this.getRandomDishFromCourse('desserts')
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}, and the total price is ${totalPrice}`;
    }
};

// dit is duidelijk, toevoegen van items via de method AddDishToCourse.
menu.addDishToCourse('appetizers', 'salad', 4.00);
menu.addDishToCourse('appetizers', 'wings', 4.50);
menu.addDishToCourse('appetizers', 'fries', 5.00);

menu.addDishToCourse('mains', 'chicken', 12.00);
menu.addDishToCourse('mains', 'steak', 15.50);
menu.addDishToCourse('mains', 'burger', 10.25);

menu.addDishToCourse('desserts', 'cheese', 7.00);
menu.addDishToCourse('desserts', 'icecream', 6.75);
menu.addDishToCourse('desserts', 'chocolate', 4.00);

const meal = menu.generateRandomMeal();
console.log(meal)



