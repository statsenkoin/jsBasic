// ----------------------------------------------------------------------------
/** Comment Your JavaScript Code
You should create a // 
style comment that contains at least five letters.
You should create a /* */
/*style comment that contains at least five letters.
 */

// this is inline comment in js
/** this is inline comment in js*/

// ----------------------------------------------------------------------------

/* ----- Declare JavaScript Variables -----------------------------------------
In computer science, data is anything that is meaningful to the computer. 
JavaScript provides eight different data types which are undefined, null, 
boolean, string, symbol, bigint, number, and object.

For example, computers distinguish between numbers, such as the number 12, 
and strings, such as "12", "dog", or "123 cats", which are collections 
of characters. Computers can perform mathematical operations on a number, 
but not on a string.

Variables allow computers to store and manipulate data in a dynamic fashion. 
They do this by using a "label" to point to the data rather than using the 
data itself. Any of the eight data types may be stored in a variable.

Variables are similar to the x and y variables you use in mathematics, 
which means they're a simple name to represent the data we want to refer to. 
Computer variables differ from mathematical variables in that they can 
store different values at different times.

We tell JavaScript to create or declare a variable by putting 
the keyword var in front of it, like so:

var ourName;
creates a variable called ourName. In JavaScript we end statements 
with semicolons. Variable names can be made up of numbers, letters, 
and $ or _, but may not contain spaces or start with a number.

Use the var keyword to create a variable called myName.

Hint
Look at the ourName example above if you get stuck.
 */

// var myName;

// ----------------------------------------------------------------------------

/* ----- Storing Values with the Assignment Operator --------------------------
In JavaScript, you can store a value in a variable with 
the assignment operator (=).

myVariable = 5;
This assigns the Number value 5 to myVariable.

If there are any calculations to the right of the = operator, those are 
performed before the value is assigned to the variable on the left 
of the operator.

var myVar;
myVar = 5;
First, this code creates a variable named myVar. Then, the code assigns 5 
to myVar. Now, if myVar appears again in the code, the program 
will treat it as if it is 5.

Assign the value 7 to variable a.
*/

// // Setup
// var a;

// // Only change code below this line
// a = 7;

// ----------------------------------------------------------------------------

/* ----- Assigning the Value of One Variable to Another -----------------------
After a value is assigned to a variable using the assignment operator, 
you can assign the value of that variable to another variable using 
the assignment operator.

var myVar;
myVar = 5;
var myNum;
myNum = myVar;

The above declares a myVar variable with no value, then assigns it the value 5. 
Next, a variable named myNum is declared with no value. Then, the contents of 
myVar (which is 5) is assigned to the variable myNum. Now, myNum also has 
the value of 5.

Assign the contents of a to variable b.
 */
// // Setup
// var a;
// a = 7;
// var b;

// // Only change code below this line
// b = a;

// ----------------------------------------------------------------------------

/* ----- Initializing Variables with the Assignment Operator ------------------
It is common to initialize a variable to an initial value in the same line 
as it is declared.

var myVar = 0;
Creates a new variable called myVar and assigns it an initial value of 0.

Define a variable a with var and initialize it to a value of 9.
 */
// var a = 9;

// ----------------------------------------------------------------------------

/* ----- Declare String Variables ---------------------------------------------
Previously you used the following code to declare a variable:

var myName;
But you can also declare a string variable like this:

var myName = "your name";
"your name" is called a string literal. A string literal, or string, is 
a series of zero or more characters enclosed in single or double quotes.

Create two new string variables: myFirstName and myLastName and assign them 
the values of your first and last name, respectively.
 */
// var myFirstName = 'Ihor';
// var myLastName = 'Statsenko';

// ----------------------------------------------------------------------------

/* ----- Алгоритми JavaScript та структури даних ------------------------------
Підрахунок карт

Зміна рахунку	Карти
+1	2, 3, 4, 5, 6
0	7, 8, 9
-1	10, 'J', 'Q', 'К', 'A'
Ви писатимете функцію підрахунку карт. Вона матиме параметр card, який може 
бути числом або рядком, а також збільшить або зменшить загальну змінну count 
відповідно до значення карти (див. таблицю). Тоді функція поверне рядок з 
поточним рахунком і рядок Bet, якщо рахунок більше нуля, або Hold, якщо 
рахунок дорівнює або менше нуля. Між поточним рахунком та рішенням гравця 
(Bet чи Hold) повиннен бути один пробіл.

Приклад результатів: -3 Hold або 5 Bet

Підказка
НЕ скидайте count до 0, коли значення 7, 8 або 9. Не повертайте масив.
Не вставляйте лапки (одинарні чи подвійні) у результаті.
 */

// let count = 0;

// function cc(card) {
//   // Змініть код лише під цим рядком
//   let playerDesition = '';
//   switch (card) {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count += 1;
//       break;
//     case 10:
//     case 'J':
//     case 'Q':
//     case 'K':
//     case 'A':
//       count -= 1;
//       break;
//   }
//   count > 0 ? (playerDesition = 'Bet') : (playerDesition = 'Hold');

//   return `${count} ${playerDesition}`;
//   // Змініть код лише над цим рядком
// }

// console.log(cc(2), cc(3), cc(7), cc('K'), cc('A'));
// console.log(cc(10), cc('J'), cc('Q'), cc('K'), cc('A'));

// ----------------------------------------------------------------------------

/* ----- JavaScript Algorithms and Data Structures ----------------------------

 */
// // Setup
// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name'],
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette'],
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: [],
//   },
//   5439: {
//     albumTitle: 'ABBA Gold',
//   },
// };

// // Only change code below this line
// function updateRecords(records, id, prop, value) {
//   if (prop !== 'tracks' && value) records[id][prop] = value;
//   else if (prop === 'tracks' && !records[id].hasOwnProperty('tracks') && value)
//     records[id][prop] = [value];
//   else if (prop === 'tracks' && records[id].hasOwnProperty('tracks') && value)
//     records[id][prop].push(value);
//   else if (!value) delete records[id][prop];

//   return records;
// }

// // console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
// // console.log(
// //   updateRecords(recordCollection, 5439, 'tracks', 'Take a Chance on Me')
// // );
// // console.log(updateRecords(recordCollection, 2548, 'artist', ''));
// // console.log(
// //   updateRecords(recordCollection, 1245, 'tracks', 'Addicted to Love')
// // );
// // console.log(updateRecords(recordCollection, 2468, 'tracks', 'Free'));
// console.log(updateRecords(recordCollection, 2548, 'tracks', ''));
// // console.log(updateRecords(recordCollection, 1245, 'albumTitle', 'Riptide'));

// // ----------------------------------------------------------------------------

/* ----- Алгоритми JavaScript та структури даних ------------------------------
Заміна циклів за допомогою рекурсії
Рекурсія - це концепція, згідно з якою функція може бути вираженою в термінах 
сама по собі. Щоб краще зрозуміти це, почніть з роздумів про наступне завдання: 
перемножте перші n елементів масиву, щоб створити добуток цих елементів. 
Ви могли б це зробити, використовуючи цикл for:

  function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }

  Проте, зверніть увагу, що multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. 
  Це означає, що ви можете перезаписати multiply саме по собі 
  і ніколи не використовувати цикл.

  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
Рекурсивна версія multiply переривається таким чином. У base case, де n <= 0, 
повертає до 1. Для більших значень n, він викликає сам себе, але з n - 1. 
Цей виклик функції обчислюється так само, викликаючи multiply знову до n <= 0. 
На даному етапі, всі функції можуть повертати результат і початковий multiply 
повертає відповідь.

Примітка: Рекурсивні функції повинні мати базовий регістр, коли вони повертають 
результат, не викликаючи функцію знову (в цьому прикладі, коли n <= 0), 
інакше вони ніколи не зможуть закінчити виконання.

Напишіть рекурсивну функцію, sum(arr, n), що повертає суму перших n елементів 
масиву arr.
 */
// function sum(arr, n) {
//   // Змініть код лише під цим рядком

//   if (n <= 0) {
//     return 0;
//   } else {
//     return sum(arr, n - 1) + arr[n - 1];
//   }
// }
// // Змініть код лише над цим рядком

// console.log(sum([1], 0)); //0
// console.log(sum([2, 3, 4], 1)); //2
// console.log(sum([2, 3, 4, 5], 3)); //9
// ----------------------------------------------------------------------------

/* ----- JavaScript Algorithms and Data Structures ----------------------------
Profile Lookup
We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments 
has been pre-written for you.

The function should check if name is an actual contact's firstName and the 
given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string 
'No such contact'.

If prop does not correspond to any valid properties of a contact found 
to match name then return the string No such property.
 */
// Setup
// const contacts = [
//   {
//     firstName: 'Akira',
//     lastName: 'Laine',
//     number: '0543236543',
//     likes: ['Pizza', 'Coding', 'Brownie Points'],
//   },
//   {
//     firstName: 'Harry',
//     lastName: 'Potter',
//     number: '0994372684',
//     likes: ['Hogwarts', 'Magic', 'Hagrid'],
//   },
//   {
//     firstName: 'Sherlock',
//     lastName: 'Holmes',
//     number: '0487345643',
//     likes: ['Intriguing Cases', 'Violin'],
//   },
//   {
//     firstName: 'Kristian',
//     lastName: 'Vos',
//     number: 'unknown',
//     likes: ['JavaScript', 'Gaming', 'Foxes'],
//   },
// ];

// function lookUpProfile(name, prop) {
//   // Only change code below this line
//   const contact = contacts.find((el) => el.firstName === name);

//   if (!contact) return 'No such contact';
//   else if (contact && !contact.hasOwnProperty(prop)) return 'No such property';
//   else if (contact && contact.hasOwnProperty(prop)) return contact[prop];

//   // Only change code above this line
// }

// console.log(lookUpProfile('Akira', 'likes')); //['Pizza', 'Coding', 'Brownie Points']
// console.log(lookUpProfile('Kristian', 'lastName')); //Vos
// console.log(lookUpProfile('Sherlock', 'likes')); //["Intriguing Cases", "Violin"]
// console.log(lookUpProfile('Harry', 'likes')); //array
// console.log(lookUpProfile('Bob', 'number')); //No such contact
// console.log(lookUpProfile('Bob', 'potato')); //No such contact
// console.log(lookUpProfile('Akira', 'address')); //No such property

// ----------------------------------------------------------------------------

/* ----- Алгоритми JavaScript та структури даних ------------------------------
Використовуйте рекурсію для створення зворотного відліку
In a previous challenge, you learned how to use recursion to replace a for loop. 
Тепер подивимося на більш складну функцію, яка повертає масив послідовних чисел, 
починаючи з 1 до числа, переданого функції.

Як уже було згадано в попередньому завданні, це буде base case. Він повідомляє 
рекурсивній функції, коли їй більше не потрібно викликати саму себе. 
Це простий випадок, коли значення, яке повертається, вже відоме. 
Також існує recursive call, який виконує початкову функцію з різними параметрами. 
Якщо функція написана правильно, то буде досягнутий базовий випадок.

Наприклад, скажімо, ви хочете написати рекурсивну функцію, яка повертає масив, 
що містить числа від 1 до n. Цій функції потрібно прийняти параметр n, який 
означає остаточне число. Тоді їй потрібно викликати саму себе, поступово 
зменшуючи значення числа n, поки воно не досягне 1. Ви можете написати 
функцію наступним чином:

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));
Значення [1, 2, 3, 4, 5] будуть відображені на консолі.

Спочатку це може здатися парадоксальним, адже значення n зростає, але 
значення у остаточному масиві зростають. Так відбувається, тому що підвищення 
відбувається останнім після рекурсивного виклику. У точці, де n вставляється 
в масив countup(n - 1) вже проаналізовано та повернуто [1, 2, ..., n - 1].

Ми вже визначили функцію під назвою countdown з одним параметром (n). 
Функція має використовувати рекурсію, щоб повернути масив, який містить цілі 
числа від n до 1 на основі параметра n. Якщо функція викликається числом 
меншим за 1, вона має повернути порожній масив. Наприклад, виклик цієї функції 
зі значенням n = 5 має повернути масив [5, 4, 3, 2, 1]. Ваша функція має 
використовувати рекурсію шляхом виклику самої себе, 
але не повинна використовувати ніякі цикли.
 */
// function countUp(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const resultArr = countUp(n - 1);
//     resultArr.push(n);
//     return resultArr;
//   }
// }

// console.log(countUp(0));
// console.log(countUp(1));
// console.log(countUp(5));
// console.log(countUp(11));

// function countdown(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const resultArr = countdown(n - 1);
//     resultArr.unshift(n);
//     return resultArr;
//   }
// }

// console.log(countdown(0));
// console.log(countdown(1));
// console.log(countdown(5));
// console.log(countdown(11));

// ----------------------------------------------------------------------------

/* ----- Алгоритми JavaScript та структури даних ------------------------------
Використання рекурсії для створення діапазону чисел
Продовжуючи попереднє завдання, ми пропонуємо вам ще одну можливість створити 
рекурсивну функцію для вирішення проблеми.

Ми визначили функцію під назвою rangeOfNumbers з двома параметрами. 
Функція повинна повернути масив цілих чисел, що починаються з числа, 
представленого параметром startNum і закінчується числом, яке представлене 
параметром endNum. Початкове число завжди буде меншим або рівним кінцевому 
номеру. Ваша функція має використовувати рекурсію, викликаючи сама себе, 
але не повинна використовувати якісь цикли. Вона також повинна працювати 
у випадках, коли startNum і endNum однакові.
 */
// function rangeOfNumbers(startNum, endNum) {
//   if (endNum < startNum) {
//     return [];
//   } else {
//     const newArr = rangeOfNumbers(startNum, endNum - 1);
//     newArr.push(endNum);
//     return newArr;
//   }
// }
// console.log(rangeOfNumbers(1, 5)); //[1, 2, 3, 4, 5]
// console.log(rangeOfNumbers(6, 9)); //[6, 7, 8, 9]
// console.log(rangeOfNumbers(4, 4)); //[4]
// ----------------------------------------------------------------------------

/* ----- Storing Values with the Assignment Operator --------------------------
 */

// ----------------------------------------------------------------------------
// function checkSign(num) {
//   return num === 0 ? 'zero' : num > 0 ? 'positive' : 'negative ';
// }

// console.log(checkSign(-8));
// console.log(checkSign(10));
// console.log(checkSign(0));
