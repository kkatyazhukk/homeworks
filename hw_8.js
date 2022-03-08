//1. Замыканием сделайте функцию, которая считает и выводит количество своих вызовов.

function countCallNumber() {
    let count = 1;

    return function() {
        return count++;
    };
}

let counter = countCallNumber();

console.log(counter());
console.log(counter());
console.log(counter());


// 2. Сделайте функцию, каждый вызов который будет генерировать случайные числа от 1 до 100,
// но так, чтобы они не повторялись, пока не будут перебраны все числа из этого промежутка.
//  Решите задачу через замыкания - в замыкании должен хранится массив чисел,
//  которые уже были сгенерированы функцией.

function createArray() {
    let array = [];
    return function addRandomNumber() {
        let random = Math.floor(Math.random() * (100 - 1 + 1) + 1);
        if (!array.includes(random)) {
            array.push(random);
        }
        if (array.length < 100) {
            addRandomNumber();
        }
        return array;
    }
}

let number = createArray();
console.log(number());


//3 Дан массив с числами [1, -2, 3, 0, 4, -5, 6, -11].
// Оставьте в нем только положительные числа.
// Затем извлеките квадратный корень и этих чисел

let array = [1, -2, 3, 0, 4, -5, 6, -11];

function updateArray() {
    let array1 = array.filter(num => num > 0);
    let array2 = array1.map((num) => Math.sqrt(num));
    return array2;
}

console.log(updateArray());


//4. Дан массив с числами. Выведите последовательно его элементы используя рекурсию
//и не используя цикл.

let array = [1,3,11,6,33,5,9];

function getElements(array) {
    console.log(array[0]);
    array.shift();
    if (array.length > 0) {
        getElements(array)
    }
}

console.log(getElements(array))

//5. Дано число. Сложите его цифры. Если сумма получилась более 9-ти,
//опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).
//Использовать рекурсию.

function sumNumber(number) {
   let sum = number.toString().split('').reduce((current, next) => {
       return +current + +next;
   });
   if (sum > 9) {
       return sumNumber(sum);
   }
   return sum;
}
console.log(sumNumber(87));
