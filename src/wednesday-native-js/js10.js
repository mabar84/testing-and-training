// const fetch = (url, callback) => {
//   //....
//   callback(err, data);
// };

// fetch("https://booksite.com/authors", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     fetch("https://booksite.com/authors/id45", (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         fetch("https://booksite.com/authors/id45/books", (err, data) => {
//           if (err) {
//             console.log(err);
//           } else {
//             fetch(
//               "https://booksite.com/authors/id45/books/id88",
//               (err, data) => {
//                 if (err) {
//                   console.log(err);
//                 } else {
//                   fetch(
//                     "https://booksite.com/authors/id45/books/id88/price",
//                     (err, data) => {
//                       if (err) {
//                         console.log(err);
//                       } else {
//                       }
//                     }
//                   );
//                 }
//               }
//             );
//           }
//         });
//       }
//     });
//   }
// });
// // pending | fulfilled | rejected

// fetch("https://booksite.com/authors")
//   .then((data) => {
//     return fetch("https://booksite.com/authors/id45");
//   })
//   .then((data) => {
//     return fetch("https://booksite.com/authors/id45/books");
//   })
//   .then(() => {
//     return fetch("https://booksite.com/authors/id45/books/id88");
//   })
//   .then(() => {
//     return fetch("https://booksite.com/authors/id45/books/id88/price");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const fs = require("fs");

// const filesAxios = {
//   readFile() {
//     return new Promise((res, rej) => {
//       fs.readFile("./index.html", (err, file) => {
//         if (err) {
//           rej("Some error", err);
//         } else {
//           res(file);
//         }
//       });
//     });
//   },
// };

// const pr = filesAxios.readFile();
// console.log(pr);
// const promise = new Promise((res, rej) => {

// })

// const server = {
//   getData() {
//     return new Promise((res, rej) => {
//       setTimeout(() => {
//         // res("Some data");
//         rej("Some error");
//       }, 1000);
//     });
//   },
// };

// const promise1 = server.getData();

// // обработка промиса

// server
//   .getData()
//   .then((data) => {
//     console.log("THEN1 ", data);
//     return data;
//   })
//   .then((data) => {
//     console.log("THEN1 ", data);
//     return data;
//   })
//   .then(
//     (data) => {
//       console.log("THEN1 ", data);
//       return data;
//     },
//     (err) => {
//       console.log("Catch from then", err);
//     }
//   );

// const server = {
//   getData() {
//     return new Promise((res, rej) => {
//       setTimeout(() => {
//         // res("Some data");
//         rej("Some error");
//       }, 1000);
//     });
//   },
// };

// server
//   .getData()
//   .then((data) => {
//     console.log("THEN1 ", data);
//     return data;
//   })
//   .then((data) => {
//     console.log("THEN2 ", data);
//     // return new Error("sdff");
//     // return b;
//   })
//   .catch((err) => {
//     console.log("Catch1 ", err);
//     return b;
//   })
//   .then((data) => {
//     console.log("THEN3 ", data);
//     return 30;
//   })
//   .catch(() => {
//     console.log("Catch2 ");
//     return 40;
//   })
//   .finally((data) => {
//     console.log("finally", data);
//     return b;
//   })
//   .then((data) => {
//     console.log("THEN4 ", data);
//   })
//   .catch(() => {
//     console.log("Catch3 ");
//   });

// promise.catch((err) => {
//   console.log("ERROR", err);
// });

// promise.finally(() => {
//   console.log("finally");
// });

// server
//   .getData()
//   .then((data) => {
//     console.log("THEN1 ", data);
//     return new Promise((res) => {
//       setTimeout(() => {
//         res("Some data2");
//       }, 3000);
//     });
//   })
//   .then((data) => {
//     console.log("Then2 ", data);
//   });

// const delay = (ms) =>
//   new Promise((res) => setTimeout(() => res("resolve"), ms));

// delay(2000).then((data) => {
//   console.log(data);
// });
const server = {
  getData() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        // res("Some data");
        rej("Some error ");
      }, 1000);
    });
  },
};
server
  .getData()
  .catch((t) => t + "catch1 ")
  .catch((t) => t + "catch2 ")
  .then((t) => t + "then1 ")
  .finally((t) => {
    console.log("finally", t);
    return t + "finally ";
  })
  .then((t) => console.log(t));
