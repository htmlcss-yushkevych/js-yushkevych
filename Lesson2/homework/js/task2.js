// 2. Построить прямоугольный треугольник состоящий из символа "*".
var q = +prompt("Сколько строк добавить в треугольник?");
var a = 0;
var b = "*";
while (a<q) {
    document.write(b + '<br>');
    a++;
    b = b + "*";
}