// // Задание 1 - поменять массив в обратном порядке - [1,2,3,4,5,6] -> [6,5,4,3,2,1]

let array = [1,2,3,4,5,6];
function reverseArray(x) {
    return x.reverse();
}
console.log(reverseArray(array));


// Задание 2 - найти максимальное значение числа в массиве ([3,67,15...])
let array = [3,67,15];
function calculateMax(x) {
   return (x.sort((a,b) => b - a))[0];
}
console.log(calculateMax(array));

// Задание 3 - записать в массив ряд фибоначчи начиная с N члена с длинной массива M.
// ряд чисел, в котором каждое последующее число является суммой двух предыдущих:
//  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 и так далее до бесконечности.
function fibCalculation(arrayLength) {
let fibNumbers = [0, 1];
for (let i = 1; i <= arrayLength-2; i++) {
    fibNumbers[i+1] = fibNumbers[i] + fibNumbers[i-1];
    }
    return fibNumbers;
}
console.log(fibCalculation(9));


// Задание 4 - даны два 4-хзначных числа с неповторяющимися цифрами, надо определить
// сколько цифр в этих числах совпадают по значению и позиции и сколько только по значению (3487 и 3794 ---> 1 и 2 ) 

//4.1
let first = 1487;
first = first.toString();
let second = 1487;
second = second.toString();
let index = 0;
let valueMatch = 0;

for (let i = 0; i < first.length; i++) {
    let result = first.includes(second[index]);
    console.log(result);
    index++;
    if (result === true) {
        valueMatch++;
    }
}
console.log(`Value match = ${valueMatch}`);

//4.2
let first = 1487;
first = first.toString();
let second = 1487;
second = second.toString();
let index = 0;
let valuePositionMatch = 0;

for (let i = 0; i < first.length; i++) {
    if (first[index] === second[index]) {
        valuePositionMatch++;
    }
    index++;
}
console.log(`Value & Position match = ${valuePositionMatch}`);

// Задание 5 - cортировка массива по возрастанию/убыванию
let array = [3,67,15, 7,1009,567];

function sortAsc(x) {
    return (x.sort((a,b) => a - b));
 }
 console.log(sortAsc(array));

function sortDesc(x) {
   return (x.sort((a,b) => b - a));
}
console.log(sortDesc(array));

// Задание 6 - удалить из массива все повторяющиеся элементы 
let array = [1,6,4,3,3,7,1];
let newArray = array.filter(function(element, index) {
    return array.indexOf(element) == index;
});
console.log(newArray);

