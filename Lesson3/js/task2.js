// 2. Создать программу, выполняющую вставку элемента в массив после элемента, значение которого укажет пользователь.
//     Описание:
//     п.1 Создайте произвольный массив и заполните его данными, например: var cars = ["Mitsubishi", "Honda", "Toyota", "Suzuki", "Audi", "BMW", "Mercedes"];
//     п.2 Запросите у пользователя название элемента массива
//     п.3.1 Если в массиве такой элемент есть - то необходимо после него вставить новый элемент, который пользователь введет дальше
//     п.3.2 Если в массиве такого элемента нет - добавить в конец массива
//     п.4 Если в массиве есть одинаковые элементы (из. п.2), программа должна добавлять только после первого найденного элемента
//     п.5 Запросите у пользователя новый элемент для массива и вставьте его после найденного элемента или же в конец массива (в зависимости от условий выше)

var cars = ["Mitsubishi", "Honda", "Toyota", "Suzuki", "Audi", "BMW", "Mercedes"];
var element = prompt("Введите элемент массива");

for (i = 0; i < cars.length; i++) {
    if (element == cars[i]) {
        // alert("Есть совпадение!");
        var newElement = prompt("Введите новый элемент массива");
        cars.splice(++i, 0, newElement);
        document.write("Новый массив: " + cars + '<br>');
        break;
    } else {
        cars.push(element);
        document.write("Новый массив :" + cars + '<br>');
        // alert("Совпадений нет");
        var element2 = prompt("Введите еще один элемент массива");
        cars.push(element2);
        document.write("Новый массив :" + cars + '<br>');
        break;
    }
}
