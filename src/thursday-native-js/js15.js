// Class, set/get, privat fields, static methods

// const car1 = {
//   brand: "bmw",
//   maxSpeed: 220,
//   startEngine() {
//     console.log(`Start ${this.brand}`);
//   },
// };

// const car2 = {
//   brand: "kia",
//   maxSpeed: 320,
//   startEngine() {
//     console.log(`Start ${this.brand}`);
//   },
// };

// function createCar(brand, maxSpeed) {
//   return {
//     brand: brand,
//     maxSpeed: maxSpeed,
//     startEngine() {
//       console.log(`Start ${this.brand}`);
//     },
//   };
// }

// const car1 = createCar("bmw", 200);
// const car2 = createCar("kia", 250);

// console.log(car1);
// console.log(car2);

// ------------------------

// function Car(brand, maxSpeed) {
//   // {}
//   this.brand = brand;
//   this.maxSpeed = maxSpeed;
// }

// Car.prototype.startEngine = function () {
//   console.log(`Start ${this.brand}`);
// };

// const car1 = new Car("bmw", 200);
// const car2 = new Car("kia", 250);

// // console.log(car1);
// // console.log(car2);

// car1.startEngine();
// car2.startEngine();

// ------------------------

// class Car {
//   #brand;
//   constructor(brand, maxSpeed, wheel) {
//     this.#brand = brand;
//     this.maxSpeed = maxSpeed;
//   }
//   startEngine() {
//     console.log(`Start ${this.#brand}`);
//   }
//   getBrand() {
//     return this.#brand;
//   }
//   setBrand(newBrand) {
//     if (newBrand.length < 3) {
//       throw new Error("brand is to short");
//     }
//     this.#brand = newBrand;
//   }
//   get brand() {
//     return this.#brand;
//   }
//   set brand(newBrand) {
//     if (newBrand.length < 3) {
//       throw new Error("brand is to short");
//     }
//     this.#brand = newBrand;
//   }
//   // showMaxSpeed = () => {
//   //   console.log(`Start ${this.maxSpeed}`);
//   // };
//   static compareCars(car1, car2) {
//     car1.maxSpeed > car2.maxSpeed
//       ? console.log(`${car1.brand} is faster ${car2.brand}`)
//       : car1.maxSpeed < car2.maxSpeed
//       ? console.log(`${car2.brand} is faster ${car1.brand}`)
//       : console.log(`speed is equal`);
//   }
// }

// const bmw = new Car("bmw", 250);
// const kia = new Car("kia", 250);

// console.log(bmw);
// console.log(kia);

// bmw.startEngine();
// // bmw.compareCars();

// Car.compareCars(bmw, kia);
// function compareCars(car1, car2) {
// 	car1.maxSpeed > car2.maxSpeed
// 	? console.log(`${car1.brand} is faster ${car2.brand}`)
// 	: car1.maxSpeed < car2.maxSpeed
// 	? console.log(`${car2.brand} is faster ${car1.brand}`)
// 	: console.log(`speed is equal`);
// }
// bmw.compareCars(bmw, kia);

// console.log(car1.brand);
// car1.brand = "audi";
// console.log(car1.brand);

// ----------------------

class Car {
  constructor(brand, maxSpeed) {
    //{}
    this.brand = brand;
    this.maxSpeed = maxSpeed;
    // return{}
  }
  startEngine() {
    console.log(`Start ${this.brand}`);
  }
}

class SuperCar extends Car {
  constructor(brand, maxSpeed, canFly) {
    super(brand, maxSpeed); // {}
    this.canFly = canFly;
  }
}

class SuperSuperCar extends SuperCar {
  constructor(brand, maxSpeed, canFly, canSwim) {
    super(brand, maxSpeed, canFly); // {}
    this.canSwim = canSwim;
  }
}

const superBmw = new SuperCar("bmw", 350, true);
const superSuperBmw = new SuperSuperCar("bmw", 350, true, true);

console.log(superSuperBmw);

superBmw.startEngine();
