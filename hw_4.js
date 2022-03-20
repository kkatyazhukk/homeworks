let nick = 'Anna';
let age = 30;
let isAdult = true;
let childrenNumber = 9;

//Выполнить сложение различных типов(string+boolean, string+number, number+boolean)
console.log(nick+isAdult);
console.log(nick+age);
console.log(age+isAdult);

//Выполнить умножение различных типов(string * boolean, string * number, number * boolean)
console.log(nick*isAdult);
console.log(nick*age);
console.log(age*isAdult);

//Выполнить деление различных типов(string/boolean, string/number, number/Boolean)
console.log(nick / isAdult);
console.log(nick / age);
console.log(age / isAdult);

//Выполнить явное преобразование(number, string, boolean)
console.log(age.toString());
console.log(isAdult.toString());
console.log(String(age));
console.log(String(isAdult));
console.log(Boolean(childrenNumber));
console.log(Boolean(nick));
console.log(Number(isAdult));
console.log(Number(nick));
