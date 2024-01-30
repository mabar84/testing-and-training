// generators

// function foo(value) {
// 	//
// 	//
// 	//
// 	//
// return result
// }

// foo(1)
// foo(2)
// foo(3)
// foo(4)

// const a = function* name(arguments) {
//   //
// };

// console.log(a());

// const generator.next() = {
// 	value: value,
// 	done: true/false
// }

// function* generateSalaryWithBonus(salary) {
//   let a = yield salary + (salary / 100) * 15; //
//   console.log("a", a);
//   // a = yield a + (salary / 100) * 5;
//   // a = yield a + (salary / 100) * 5;
//   // a = yield a + (salary / 100) * 5;
//   // a = yield a + (salary / 100) * 5;
//   // yield salary + (salary / 100) * 25;
//   // yield salary + (salary / 100) * 30;
//   // return salary + (salary / 100) * 25;
// }

// const generator = generateSalaryWithBonus(500);

// let result = generator.next();
// console.log(result);
// result = generator.next(result).value;
// console.log(result);
// result = generator.next(result).value;
// console.log(result);
// result = generator.next(result).value;
// console.log(result);
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());

// function* randomize() {
//   while (true) {
//     yield Math.floor(Math.random() * 1000);
//   }
// }

// const ramdom = randomize();
// console.log(ramdom.next().value);
// console.log(ramdom.next().value);
// console.log(ramdom.next().value);
// console.log(ramdom.next().value);
// console.log(ramdom.next().value);
// console.log(ramdom.next().value);
// console.log(ramdom.next().value);

// function randomize1() {
//   return Math.floor(Math.random() * 1000);
// }

// console.log(randomize1());
// console.log(randomize1());
// console.log(randomize1());
// console.log(randomize1());

// function* generateSalaryWithBonus(salary) {
//   console.log("start generation function");
//   const a = yield 20; //STOP 15
//   console.log("generation function after firs yield");
//   console.log(a);
//   yield 25; // 2 STOP
//   console.log("generation function after second yield");
//   yield 30;
// }

// const generator = generateSalaryWithBonus(2000);

// let someValue = generator.next();
// console.log(someValue);
// someValue = generator.next(15);
// console.log(someValue);
// console.log(generator.next());
// console.log(generator.next(15));
// console.log(generator.next());
// console.log(generator.next(25));
// console.log(generator.next(30));
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// generator

// function* ramdomize1() {
//   // while (true) {
//   //   let randome = yield Math.floor(Math.random() * 1000);
//   //   // yield randome;
//   // }
//   yield 1;
//   yield 2;
//   yield 3;
// }

// function* ramdomize2() {
//   yield 4;
//   yield 5;
//   yield 6;
// }

// function* multipleValues() {
//   yield* ramdomize1();
//   yield* ramdomize2();
// }

// const random = multipleValues();

// console.log(random.next().value);
// console.log(random.next().value);
// console.log(random.next().value);
// console.log(random.next().value);
// console.log(random.next().value);
// console.log(random.next().value);

import fetch from "node-fetch";

// const foo = async () => {
//   const dataFromYahoo = await fetch("https://yahoo.com/?query=js");
//   console.log("dataFromYahoo", dataFromYahoo.url);
// };
// console.log("start foo");
// foo();
// console.log("end foo");

const foo2 = newAsync(function* () {
  const dataFromYahoo = yield fetch("https://yahoo.com/?query=js");
  console.log("dataFromYahoo", dataFromYahoo.url);
});

function newAsync(generationFunction) {
  return function () {
    const generator = generationFunction();

    function resolve(next) {
      console.log("next.done", next.done);
      if (next.done) {
        return Promise.resolve(next.value);
      }

      return Promise.resolve(next.value).then((res) => {
        return resolve(generator.next(res));
      });
    }
    return resolve(generator.next());
  };
}

console.log("start foo2");
foo2();
console.log("end foo2");
