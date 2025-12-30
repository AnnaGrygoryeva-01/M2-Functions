// 1) Написати функцію, яка приймає два значеня і повертає більше значення, якщо значення одного типу, в усіх інших випадках повертає null
/**
 * Compares two values of the same type and returns the larger one.
 *
 * @param {*} a - The first value (can be any type)
 * @param {*} b - The second value (can be any type)
 * @returns {*|null} Returns larger value if types match, or null if types differ or values are equal.
 */
function chooseBigger(a, b) {
  if (a > b && typeof a === typeof b) {
    return a;
  } else if (b > a && typeof a === typeof b) {
    return b;
  } else {
    return null;
  }
}

// 2) Написати функцію, яка просить користувача ввести число і виводить повідомлення яке він число ввів: "додатнє", "нуль" або "від'ємне", або виводить повідомлення "це не число"
/**
 * Checks if a number is positive, negative, zero, or not a number.
 *
 * @param {number} num - a number to check
 * @returns {string} - returns whether the number is positive, negative, zero, or not a number
 */

function checkNumber(num) {
  if (isNaN(num)) {
    return "This is not a number";
  }
  if (num > 0) {
    return "positive";
  } else if (num < 0) {
    return "negative";
  } else {
    return "zero";
  }
}

// 3) Написати функцію, яка приймає параметром число і перевіряє чи є це число дільником 100. Повертає булеве значення.
/**
 * Checks if a number is a divisor of 100.
 *
 * @param {number} num - number to check
 * @returns {boolean} true if num is a divisor of 100, false otherwise
 */

function isDivisorOf100(num) {
  if (100 % num === 0) {
    return true;
  }
  return false;
}
// or
function isDivisorOf100(num) {
  return 100 % num === 0;
}

console.log(isDivisorOf100(50)); // true
console.log(isDivisorOf100(54)); // false

// 4) Написати функцію, яка перевіряє можливість існування трикутника.
// Функція приймає три числа - сторони трикутника, повертає булеве значення. Значення за замовчуванням 3,4,5.
// Трикутник існує тоді і тільки тоді, коли сума довжин будь-яких двох його сторін більша за третю.

/**
 * Checks if a triangle can exist with the given side lengths.
 *
 * @param {number} [a = 3] - first side length
 * @param {number} [b = 4] - second side length
 * @param {number} [c = 5] - third side length
 * @returns {boolean} true if triangle can exist, false otherwise
 */
function isTriangle(a = 3, b = 4, c = 5) {
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  } else {
    return false;
  }
}
