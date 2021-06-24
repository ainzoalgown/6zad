const names = "intocode bootcamp";

const nameLetters = names.split('',names.length);

console.log(nameLetters);

const words = names.split(' ');

console.log(words);

// ⚠️ Нельзя напрямую писать эти значения, они должны определяться
//   с помощью соответствующих методов.

// выведи в консоль последнюю букву переменной name.
console.log(names[names.length - 1]);
// выведи в консоль второе слово переменной name
console.log(words[1])
// добавь в конец массива words любое слово
words.push('cool');

console.log(words);
// добавь в начало массива nameLetters четыре новых
// элемента 't', 'h', 'e' и ' '. Последний элемент это пробел.
nameLetters.unshift('t', 'h', 'e', ' ');

console.log(nameLetters);
