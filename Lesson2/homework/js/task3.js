// 3. Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.
var a = +prompt("Введите первое число");
var b = +prompt("Введите второе число");
var c = +prompt("Введите третье число");
var max;
if (a > b && a > c) {
    max = a;
} else if (b > a && b > c) {
    max = b;
}
else {
    max = c;
}
alert("Максимальное число = "+ max);