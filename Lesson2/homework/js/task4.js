// 4. Дано два числа A и B где (A < B). 
// Выведите на экран суму всех чисел расположенных в числовом промежутке от А до В. 
// Выведите на экран все нечетные значения, расположенные в числовом промежутке от А до В.   

var a = +prompt("Введите первое число");
var b = +prompt("Введите второе число"); 
if (a<b) {
    A = a;
    B = b;
} else {
    A = b;
    B = a;
}
var suma = B; 
for (var suma; A<B; A++) {
    suma = suma + A;
}
document.write('<br>' + "Cумма всех чисел между А и В = " + suma + '<br>');

var odd = a;
do { 
    if (odd % 2 == 1){
    document.write(odd + '<br>');}
    odd++; }
while (odd < B); 