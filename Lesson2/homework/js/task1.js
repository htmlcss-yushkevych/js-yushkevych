// 1. Среди трех чисел найти среднее арифметическое. Если среди чисел есть равные, вывести сообщение "Ошибка". 
// Числа принять от пользователя.

var a = +prompt("Введите первое число");
var b = +prompt("Введите второе число");
var c = +prompt("Введите третье число");
    if (  a!==b && b!==c && a!==c) {
        var average = a + b + c;
        var average = average / 3;
        console.log("Среднее арифметическое = "+ average);} 
    else {
        console.log("ОШИБКА")};