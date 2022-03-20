//1 Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайно задержкой
// от 1 до 5 секунд. Пусть каждый промис своим результатом возвращает эту задержку. С помощью
// Promise.all получите массив результатов, найдите его сумму, выведите на экран.

function getRandom() {
    return Math.floor(Math.random() * (5 - 1 + 1) + 1);
}

Promise.all ([
new Promise((resolve, reject) => {
    let random = getRandom();
    setTimeout(() => {
        resolve(random)
    }, random * 1000)
}),

new Promise((resolve, reject) => {
    let random = getRandom();
    setTimeout(() => {
        resolve(random)
    }, random * 1000)
}),

new Promise((resolve, reject) => {
    let random = getRandom();
    setTimeout(() => {
        resolve(random)
    }, random * 1000)
})

]).then (
    data => {
        console.log(data)
        let sum = data.reduce((a,b) => a+b);
        console.log(sum);
    }
)


//2 Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайно задержкой
// от 1 до 5 секунд. Пусть первый промис возвращает число 1, второй - число 2, третий - число 3.
// С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат
// его работы на экран.

function getRandom() {
    return Math.floor(Math.random() * (5 - 1 + 1) + 1);
}

Promise.race ([
new Promise((resolve, reject) => {
    let random = getRandom();
    console.log(`The first timeout = ${random}`);
    setTimeout(() => {
        resolve(1)
    }, random * 1000)
}),

new Promise((resolve, reject) => {
    let random = getRandom();
    console.log(`The second timeout = ${random}`);
    setTimeout(() => {
        resolve(2)
    }, random * 1000)
}),

new Promise((resolve, reject) => {
    let random = getRandom();
    console.log(`The third timeout = ${random}`);
    setTimeout(() => {
        resolve(3)
    }, random * 1000)
})

]).then (
    data => {
        console.log(`Final number = ${data}`)
    }
)


//3 Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет
// случайное число от 1 до 5. Создайте async функцию, которая с помощью await будет дожидаться
// результата getNum, затем возводить его в квадрат и выводить на экран.

function getRandom() {
    return Math.floor(Math.random() * (5 - 1 + 1) + 1);
}

function getNum () {
    return new Promise((resolve, reject) => {
        let random = getRandom();
        console.log(`Random = ${random}`);
        setTimeout(() => {
            resolve(random)
        }, 3000)
    })   
}

async function calculateSquare(){
    let number = await getNum();
    let squaredNumber = number * number;
    console.log(`Squared number = ${squaredNumber}`);
}

calculateSquare();


//4 Сделайте функцию getNum1, которая возвращает промис, который с задержкой в 3 секунды выведет
// случайное число от 1 до 5. Сделайте также функцию getNum2, которая возвращает промис, который
// с задержкой в 5 секунд выведет случайное число от 6 до 10. Создайте async функцию, которая с
// помощью await будет дожидаться результата getNum1, затем будет дожидаться результата getNum2,
// а затем найдет сумму полученных чисел и выведет на экран.

function getRandom1() {
    return Math.floor(Math.random() * (5 - 1 + 1) + 1);
}

function getNum1 () {
    return new Promise((resolve, reject) => {
        let random = getRandom1();
        console.log(`Random = ${random}`);
        setTimeout(() => {
            resolve(random)
        }, 3000)
    })   
}

function getRandom2() {
    return Math.floor(Math.random() * (10 - 6 + 1) + 6);
}

function getNum2 () {
    return new Promise((resolve, reject) => {
        let random = getRandom2();
        console.log(`Random = ${random}`);
        setTimeout(() => {
            resolve(random)
        }, 5000)
    })   
}

async function calculateSquare(){
    let number1 = await getNum1();
    let number2 = await getNum2();
    let sum = number1 + number2;
    console.log(`Sum = ${sum}`);
}

calculateSquare();