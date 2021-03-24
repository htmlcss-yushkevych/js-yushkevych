// 3. Создать многомерный массив, размер массива получить от пользователя. Каждый нечётный подмассив заполнить значением 'odd', а чётный - 'even'. 
// Размер каждого вложенного массива - 3.
var size = +prompt("Введите размер массива(число)");
var array = new Array(size);

for (var i = 0; i < array.length; i++) {
    array[i] = new Array(3);

    for (var j = 0; j < array[i].length; j++) {
        if (i % 2 == 0) {
            array[i][j] = 'even';
        } else {
            array[i][j] = 'odd';
        }
    }
}
for (var i = 0; i < array.length; i++) {
    document.write(array[i] + "<br/>");
}

console.log(array);