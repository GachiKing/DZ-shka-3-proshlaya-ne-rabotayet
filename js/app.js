// Arrow Function

// const sum = (a, b) => {
//   return a + b;
// };

// const result = sum(4, 6);
// result;

// const min = (a, b) => (a < b || a === "w" ? a : b);

//Тоже самое
// function min(a, b) {
//   if (a < b) return a;
//   return b;
// }

// console.log(min("w", 1));

// Домашка:
// Используя функции стрелочные создать, функции которые возвращают колличество символов в вашем предложении

// const countSentanceSymbols = (sentance) => {};




//Колбеки и Объекты





const countSentanceSymbols = (sentance) => {
    alert(`В вашем предложении вот столько символом ${sentance.length}`);
};



countSentanceSymbols(prompt("Напишите все что угодно"));



