// 4. Создать два произвольных массива: 
//         один массив - любимая спортивная команда / модели автомобилей / города, 
//         во втором - количество игроков в команде / объем двигателя / количество жителей в городе.
//     Из двух массивов сделайте ассоциативный массив.
//     Массив, который будет выступать в качестве ключа - должен содержать уникальные значения


var keys = ["Киев", "Львов", "Одесса"];
var values = ["2,8 млн.", "721 тыс.", "993 тыс."];

var cities = {};

for (let i = 0; i < keys.length; i++) {
    cities[keys[i]] = values[i];
}

console.log(cities);
