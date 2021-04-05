const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizers) {
    this._courses.appetizers = appetizers;
  },
  get mains() {
    return this._courese.mains;
  },
  set mains(mains){
    this._courses.mains = mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(dessert){
    this._courses.desserts = desserts;
  },
  get courses(){
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse (courseName) {
    const dishes = this._courses[courseName];
    const randInd = Math.floor(Math.random() * dishes.length);
    return dishes[randInd];    
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your total is: $${totalPrice}. You ate ${appetizer.name} first, then delicious ${main.name}, and then ${dessert.name} to top it all off!`
  }
};

menu.addDishToCourse('appetizers', 'jalepeno poppers', 3.99);
menu.addDishToCourse('appetizers', 'mozzorella cheese sticks', 4.99);
menu.addDishToCourse('appetizers', 'bloomin onion', 8.99);
menu.addDishToCourse('mains', 'steak', 18.99);
menu.addDishToCourse('mains', 'spaghetti', 12.99);
menu.addDishToCourse('mains', 'burger', 10.99);
menu.addDishToCourse('desserts', 'cake', 4.99);
menu.addDishToCourse('desserts', 'creme brule', 8.99);
menu.addDishToCourse('desserts', 'brownie', 3.99);

let meal = menu.generateRandomMeal();
console.log(meal);
