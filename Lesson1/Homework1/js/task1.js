var x1 = prompt("Введите координаты х для первой точки", 1);
var y1 = prompt("Введите координаты y для первой точки", 1);
var x2 = prompt("Введите координаты х для второй точки", 2);
var y2 = prompt("Введите координаты yдля второй точки", 2);

var k = (y1 - y2) / (x1 - x2);
var b = k * x2;
b = y2 - b;
document.write("y = " + k + "x+" + b + '<br>');
var answer1 = confirm("Рассчитать результат?")
if (answer1 == true){
var x = prompt("Введите значене х", 1);
var y = k * x + b;
document.write("у = ", y + '<br>');}
