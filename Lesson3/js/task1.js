// 1. Сделать собственные примеры методов применяемых для массивов.
var books = ["detective, ", "horror, ", "drama, ", "adventure, ", "fantasy "];
var text = books.join("");
console.log(text);

var array = text.split(",");
console.log(array);

var array = array.reverse();
console.log(array);

var array = array.sort();
console.log(array);

var nextArray = ["novel", "poem"];
var bookTypes = array.concat(nextArray);
console.log(bookTypes);

var bookTypes = bookTypes.slice(0, 6);
console.log(bookTypes);

var bookTypes = bookTypes.splice(2, 4);
console.log(bookTypes);

var lastElement = bookTypes.pop();
console.log(lastElement);
