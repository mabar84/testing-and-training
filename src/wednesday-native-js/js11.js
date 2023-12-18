import fetch from "node-fetch";

fetch("https://yahoo.com/?query=js")
  .then((datafromYahoo) => {
    console.log(datafromYahoo.url);
    // return 10
    return fetch("https://bing.com/?query=js");
  })
  .then((datafromBing) => {
    console.log(datafromBing.url);
    return fetch("https://www.google.com/search?q=js");
  })
  .then((dataFromGoogle) => {
    console.log(dataFromGoogle.url);
  })
  .catch((err) => {
    console.log("catch", err);
    return 10;
  })
  .finally((data) => {
    console.log("finally", data);
    return 20;
  });

// fetch("https://google.com/?query=js").then((data) => {
//   console.log(data.url);
// });
// fetch("https://bing.com/?query=js");

// console.log(1);

// const foo = async () => {
//   try {
//     const dataFromYahoo = await fetch("https://yahoo.com/?query=js");
//     console.log("dataFromYahoo", dataFromYahoo.url);
//     const dataFromBing = await fetch("https://bifsdgsdfng.com/?query=js");
//     console.log("dataFromBing", dataFromBing.url);
//     const dataFromGoogle = await fetch("https://www.google.com/search?q=js");
//     console.log("dataFromGoogle", dataFromGoogle.url);
//   } catch (e) {
//     console.log("catch", e);
//   } finally {
// 		console('finally')
// 	}
// };

// foo();

// console.log(2);

// --------ALL---------

// Promise.all([
//   fetch("https://yahoo.com/?query=js"),
//   fetch("https://bing.com/?query=js"),
//   fetch("https://www.google.com/search?q=js"),
// ])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const foo = async () => {
//   try {
//     const data = await Promise.all([
//       fetch("https://yahoo.com/?query=js"),
//       fetch("https://bing.com/?query=js"),
//       fetch("https://www.goosdfgle.com/search?q=js"),
//     ]);
//     console.log(data);
//   } catch (e) {
//     console.log(e);
//   }
// };
// foo();

// --------RACE-----------

// Promise.race([
//   fetch("https://bing.com/?query=js"),
//   fetch("https://duckduckgo.com/?query=js"),
//   fetch("https://www.google.com/search?q=js"),
// ])
//   .then((data) => {
//     console.log(data.url);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// --------ANY-----------

Promise.any([
  fetch("https://binasdfg.com/?query=js"),
  fetch("https://duckduckgosdf.com/?query=js"),
  fetch("https://www.googlesdf.com/search?q=js"),
])
  .then((data) => {
    console.log(data.url);
  })
  .catch((err) => {
    console.log("catch", err);
  });

// ---------ALLSETTLED------

// Promise.allSettled([
//   fetch("https://bingsfgd.com/?query=js"),
//   fetch("https://duckducksfdg.com/?query=js"),
//   fetch("https://www.googlefsg.com/search?q=js"),
// ]).then((data) => {
//   console.log("THEN", data);
// });
// .catch((err) => {
//   console.log("CATCH", err);
// });
