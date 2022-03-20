//   Задача 1 - Эмулировать игру в кубики, 2 человека по очереди бросают кубик, 
// каждый в итоге по 3 раза. У кого сумма трех бросков будет наибольшей - тот выиграл.
//  Если суммы равны то ничья

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  let finalScore1 = 0;
  
  for (let i=0; i<3; i++) {
    let attemptScore1 = getRandomInRange(1, 6);
    console.log(attemptScore1);
    finalScore1 += attemptScore1;
  }
  console.log(`The first player score = ${finalScore1}`);
  
  
  let finalScore2 = 0;
  
  for (let i=0; i<3; i++) {
    let attemptScore2 = getRandomInRange(1, 6);
    console.log(attemptScore2);
    finalScore2 += attemptScore2;
  }
  console.log(`The second player score = ${finalScore2}`);
  
  if (finalScore1>finalScore2) {
    console.log(`The winner is the first player. His score is ${finalScore1}`);
  } else if (finalScore1<finalScore2) {
    console.log(`The winner is the second player. His score is ${finalScore2}`);
  } else {console.log(`Draw - Friendship won!`);}
  
  
  
  // Задача 2 - Подсчитать как много пятниц 13-го было с 01/01/2000 до сегодня.
  
  // Get the first date in UTC (e.g.2000-01-31T23:00:00.000Z)
  let date1 = new Date(2000, 01, 01);
  console.log(date1);
  
  // Get the first date in timestamp (e.g. 949359600000)
  let timestamp1 = Date.parse(date1);
  console.log(timestamp1);
  
  // Get the second date (NOW) in timestamp (e.g. 1644769576642)
  let timestamp2 = Date.now();
  console.log(timestamp2);
  
  //Find delta (e.g. 695409976642)
  let delta = timestamp2 - timestamp1;
  console.log(delta);
  
  let counter = 0;
  
  while (timestamp2>timestamp1) {
    timestamp1 += 86400000;
    let comparedDate = new Date(timestamp1); // convert delta to the date in UTC
    if (comparedDate.getDay() === 5 && comparedDate.getDate() == 13) {
        console.log(comparedDate);
        counter++;
    }
  }
  
  console.log(`There were ${counter} Fridays the 13th since 01/01/2020`);
  
  
  
  // Задача 3.1
  // Напишите код который будет разбивать число на заданное количество рандомных чисел
  // сумма которых будет равна изначальному числу. 
  // изначальное число целое, числа разбивки - целые (4,6,5)
  
  function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  let sum = 15; 
  let partsNumber = 3;
  
  let limit = sum;
  
  for (let i=0; i<partsNumber; i++) {
    if (i===partsNumber-1) {
      let number = limit;
      console.log (number);
    } else {
    let number = getRandomInRange(1,limit)
    limit = limit - number;
    console.log (number);}
  }
  
  
  // Задача 3.2
  // Напишите код который будет разбивать число на заданное количество рандомных чисел
  // сумма которых будет равна изначальному числу. 
  // числа разбивки дробные с 2 знаками после запятой (4.55, 5.20, 5.25)
  
  function getRandomFloat(min, max) {
    let generatedNumber = Math.random() * (max - min) + min;
    return generatedNumber.toFixed(2);
  }
  
  let sum = 15; 
  let partsNumber = 3;
  
  let limit = sum;
  
  for (let i=0; i<partsNumber; i++) {
    if (i===partsNumber-1) {
      let number = limit.toFixed(2);
      console.log (number);
    } else {
    let number = getRandomFloat(1,limit-0.1)
    limit = limit - number;
    console.log (number);}
  }