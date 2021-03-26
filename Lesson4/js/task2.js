// 2.	Создать функцию, возводящую число в степень, число и сама степень вводится пользователем
// Проверить числа на корректность


function calcDegree(num, deg) {
    if (deg == 0) {
        return 1;
    } else {
        const res = num * calcDegree(num, deg - 1)
        return res
    }
}

let a = +prompt('Введите число');
while (isNaN(a)) {
    alert("Вы ввели не числовое значение!");
    a = +prompt('Введите число');
}
let b = +prompt('Введите желаемую степень');
while (isNaN(b) || b < 0) {
    alert("Вводить нужно число, которое больше 0");
    b = +prompt('Введите число b');
}


console.log("Результат операции: " + calcDegree(a, b));
