// 1.	Создать функцию calculate(a, b, sign), где a и b — два числа, sign — знак арифметической операции.
// Функция должна расчитывать результат операции, исходя из переданного ей знака. 
// Функция должна проверять корректность введенных чисел и знака операции.
// Все аргументы для функции принять от пользователя.

function calculate(a, b, sign) {
    switch (sign) {
        case "+":
            let sum = a + b;
            console.log("Результат сложения = " + sum);
            break;
        case "-":
            let sub = a - b;
            console.log("Результат вычитания = " + sub);
            break;
        case "*":
            let mult = a * b;
            console.log("Результат умножения = " + mult);
            break;
        case "/":
            let div = a / b;
            console.log("Результат деления = " + div);
            break;
        case null:
            console.log("Спасибо за использование программы!");
            break;
        case '':
            console.log("Вы не ввели знак");
            break;
        default:
            console.log("Вы ввели неверный знак для математической операции");
    }
}


let num1 = +prompt('Введите число а');
while (isNaN(num1)) {
    alert("Вы ввели не числовое значение!");
    num1 = +prompt('Введите число а');
}
let num2 = +prompt('Введите число b');
while (isNaN(num2)) {
    alert("Вы ввели не числовое значение!");
    num2 = +prompt('Введите число b');
}
let operation = prompt('Введите знак уравнения');

console.log(calculate(num1, num2, operation));
