// this

// !'use strict' - {}
// 'use strict' - undefined | {} | null --- [], string

// 1. Global scope
// 2. Function (simple f | arrow f)
// 3. call apply bind
// 4. Function constructor

// ----------------- Global scope -------------------

// "use strict";
// console.log(this);

// ----------------- Function -------------------

// function bar() {
//   //this
//   const foo = () => {
//     console.log(this);
//   };
//   foo();
// }

// bar();

// const car = {

// 	foo: () => {
//     console.log(this);
//   }
// }

// foo();

// "use strict";

// function foo() {
//   console.log(this);
// }

// foo();

// const car = {
//   foo() {
//     console.log(this);
//     //this
//     (() => {
//       console.log(this);
//     })();
//   },
//   bar: function () {
//     console.log(this);
//   },
//   baz: () => {
//     console.log(this);

//     (() => {
//       console.log(this);
//     })();
//   },
// };

// // car.foo();
// // car.bar();
// car.baz();

// let car1 = {
//   maxSpeed: 200,
//   showMaxSpeed() {
//     console.log(this.maxSpeed);
//   },
// };

// // car1.showMaxSpeed();

// const car2 = car1;
// car1 = null;

// car2.showMaxSpeed();

// const car1 = {
//   maxSpeed: 200,
// };

// const car2 = {
//   maxSpeed: 300,
// };

// function foo() {
//   console.log(this.maxSpeed);
// }

// car1.showMaxSpeed = foo;
// car2.showMaxSpeed = foo;

// car1.showMaxSpeed();
// car2.showMaxSpeed();

// ----------------- call apply bind -------------------

// const scooter = {
//   maxSpeed: 60,
// };

// const ferrari = {
//   maxSpeed: 333,
// };
// var maxSpeed = 100;

// const car = {
//   maxSpeed: 200,
//   showMaxSpeed() {
//     console.log(this.maxSpeed);
//     // console.log(c, d);
//     // return 1
//   },
//   showMaxSpeed2: () => {
//     console.log(this.maxSpeed);
//   },
// };

// const arr = [20, 30];

// // car.showMaxSpeed.call(scooter, 20, 30);
// // car.showMaxSpeed.apply(scooter, arr);

// // car.showMaxSpeed.bind(scooter, 20, 30)();
// // car.showMaxSpeed.bind(scooter, )();
// // bindedShowMaxSpeed();

// // car.showMaxSpeed();
// // car.showMaxSpeed.call(scooter).call(ferrari);

// // const bindedShowMaxSpeed = car.showMaxSpeed.bind(scooter);
// // bindedShowMaxSpeed.bind(ferrari)();
// car.showMaxSpeed.bind(scooter).call(ferrari);
// // console.log(something);
// // car.showMaxSpeed2.call(ferrari);

// ----------------- Function constructor -------------------

// function Car(maxSpeed, color = "gold") {
//   //{}
//   this.maxSpeed = maxSpeed; // {maxSpeed: 200}
//   this.color = color; // {maxSpeed: 200, color: 'red}
//   // return { color: "gold" };
//   //return {maxSpeed: 200, color: 'red}
//   this.showMaxSpeed = function () {
//     console.log(this.maxSpeed);
//   };
// }

// const car1 = new Car(200, "red");
// const car2 = new Car(220, "black");

// car1.showMaxSpeed();
// car2.showMaxSpeed();

// // console.log(car1);
// // console.log(car2);

// a.maxSpeed = 2000

// const car = {
//   maxSpeed: 200,
//   showMaxSpeed() {
//     console.log(this.maxSpeed);
//   },
// };

// // car.showMaxSpeed();
// setTimeout(car.showMaxSpeed, 1000);
// // setTimeout(car.showMaxSpeed.bind(car), 1000);
// setTimeout(() => car.showMaxSpeed(), 1000);

// function newSetTimeout(cb, delay) {
// setTimeoutLE  -> globalLE
//   //delay
//   cb();
//(() => car.showMaxSpeed())()
// }

var x = 100;

function foo() {
  const x = 10;

  return {
    x: 20,
    bar: () => {
      console.log(this.x);
    },
    baz: function () {
      console.log(this.x);
    },
  };
}

// const obj1 = foo();
// obj1.bar(); // undefined | 100
// obj1.baz(); // 20

const obj2 = foo.call({ x: 30 });

// obj2.bar(); // 30
// obj2.baz(); // 20
//  // console.log(obj2);

let y = obj2.bar;
let z = obj2.baz;

// y(); // 30
// z(); // 20 | 100
