// __proto__ | prototype

// class Car {
//   constructor(brand, color, maxSpeed) {
//     this.brand = brand;
//     this.color = color;
//     this.maxSpeed = maxSpeed;
//     // this.weels = 4;
//     this.store = {};
//   }
//   // showMaxSpeed = () => {
//   //   console.log(this.maxSpeed);
//   // };
//   // weels = 4;
//   startEngine() {
//     console.log(`Start ${this.brand}`);
//   }
//   static compareCars() {}
// }

// const car1 = new Car("bmw", "red", 200);
// const car2 = new Car("bmw", "black", 300);

// console.log(car1 === car2); // false
// console.log(car1.brand === car2.brand); // true
// console.log(car1.store === car2.store); // false
// console.log(car1.showMaxSpeed === car2.showMaxSpeed); // false
// console.log(car1.startEngine === car2.startEngine); // true

// const pr = new Promise(() => {});
// console.log(pr);

// console.dir(Car);
// console.log(car1);

// car1.startEngine();
// car1.compareCars();

// console.log(car1.__proto__ === Car.prototype);
// console.log(car1.__proto__ === Car.prototype);

// console.log(car1);
// console.log(Car.prototype);

// const a = new Array(1, 2);

// console.log(a.__proto__ === Array.prototype);

// const b = 23.23423;

// console.log(b.toFixed(2));
// console.log(b === c);

// console.log(b.__proto__ === Number.prototype);

// const str = new String("str");
// const str2 = "str";
// console.log(str.__proto__ === String.prototype);

// const a = null;
// console.log(a.__proto__ === Object.prototype);
// console.log(typeof str2);
// console.log(a instanceof Object);
// console.log(str instanceof String);
// console.log(str2 instanceof String);
// console.log(typeof str);
// console.log(typeof str2);

class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    // this.weels = 4;
    this.store = {};
  }
  // showMaxSpeed = () => {
  //   console.log(this.maxSpeed);
  // };
  // weels = 4;
  startEngine() {
    console.log(`Start ${this.brand}`);
  }
  static compareCars() {}
}

const car1 = new Car("bmw", "red", 200);
// const car2 = new Car("bmw", "black", 300);

// console.log(car1.__proto__ === Car.prototype);
// console.log(car1.__proto__.__proto__ === Object.prototype);
// console.log(Object.prototype);
// console.log(Object.prototype.__proto__ === null);
console.log(car1.__proto__.__proto__.__proto__ === null);

// console.log(car1);
// car1.startEngine();
car1.fagsdn();
// console.log(car1);

// car1.startEngine();
// console.log(car1);

// car1 = {
// 	brand: "bmw",
// 	color: "red",
// 	maxSpeed: 200,
// 	store: {},
// 	__proto__: {}
// };

// car1.__proto__ = {};

// class Car {
//   constructor(brand, maxSpeed) {
//     this.brand = brand;
//     this.maxSpeed = maxSpeed;
//   }
//   startEngine() {
//     console.log(`Start ${this.brand}`);
//   }
//   static compareCars() {}
// }

// class SuperCar extends Car {
//   constructor(brand, maxSpeed, canFly) {
//     super(brand, maxSpeed);
//     this.canFly = canFly;
//   }
// }

// function CarFoo(brand, maxSpeed) {
//   this.brand = brand;
//   this.maxSpeed = maxSpeed;
// }

// CarFoo.prototype.startEngine = function () {
//   console.log(`Start ${this.brand}`);
// };
// CarFoo.compareCars = function () {
//   console.log("compare");
// };

// const carFoo1 = new CarFoo("bmw", 200);

// function SuperCarFoo(brand, maxSpeed, canFly) {
//   this.brand = brand;
//   this.maxSpeed = maxSpeed;
//   this.canFly = canFly;
// }
// SuperCarFoo.prototype.fly = function () {};

// SuperCarFoo.prototype.__proto__ = CarFoo.prototype;
// SuperCarFoo.__proto__ = CarFoo;

// const superCarFoo1 = new SuperCarFoo("superkia", 300, true);

// CarFoo.compareCars();
// console.dir(SuperCarFoo);
// SuperCarFoo.compareCars();
// superCarFoo1.startEngine();

// console.log(Function.__proto__ === Function.prototype);
// console.log(SuperCarFoo.__proto__)

// console.log(SuperCarFoo.__proto__ === Function.prototype);

// function foo() {}
// const bar = () => {};
// console.log(bar.__proto__ === Function.prototype);
