x1 = prompt("Введите координаты х для первой точки", 1);
y1 = prompt("Введите координаты y для первой точки", 1);
x2 = prompt("Введите координаты х для второй точки", 2);
y2 = prompt("Введите координаты yдля второй точки", 2);
var k;
var b;
var y;
var x;
k = (y1 - y2) / (x1 - x2);
b = k * x2;
b = y2 - b;
y = k * x + b;
document.write("y = " + k + "x+" + b + '<br>');