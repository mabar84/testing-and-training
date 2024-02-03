// globalLE {a: undefined, foo: undefined, startEngine: function } -> null

// let car = "bmw"; // globalLE {startEngine: function, car: 'bmw' } -> null

// function startEngine() {
//   //{} -> globalLE
//   console.log(`Start ${car}`);
// }

// car = "audi";// globalLE {startEngine: function } -> null

// startEngine();

//------------------

// globalLE {foo: function, bar: function}
// let a = 10; // globalLE {foo: function, bar: function, a: 10}
// let b = 20; // globalLE {foo: function, bar: function, a: 10, b: 20} -> null

// function foo() {
//   //fooLE {} -> globalLE
//   let a = 30; //fooLE {a: 30} -> globalLE
//   let b = 40; //fooLE {a: 30, b: 40} -> globalLE
//   console.log(a);

//   bar();
// }
// foo();

// const bar = () => {
// 	//barLE {} -> globalLE
// 	console.log(b);
// };

// 30 40
// 30 20

//----------------------
//globalLE {}

// const counterCreator = () => {
//   //counterCreator1{} -> globalLE
//   //counterCreator2{} -> globalLE
//   let count = 0;
//   return () => {
//     // -> counterCreator1
//     // -> counterCreator2
//     console.log(++count);
//   };
// };

// const counter1 = counterCreator(); //globalLE {counterCreator: function, counter1: function}
// const counter2 = counterCreator();
// //globalLE {counterCreator: function, counter1: function, counter2: function}

// counter1();
// counter1();
// counter1();

// counter2();
// counter2();
// counter2();

//--------------------------

// 2(4) -> 2 * 2(3) -> 2 * 2 * 2(2) -> 2 * 2 * 2 * 2(1)
let count = 0;
const pow = (x, n) => {
    console.log(count++);
    if (n === "a") {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
};

console.log(pow(1, 10));
