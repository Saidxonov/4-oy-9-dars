//--------------> Oddiy masalalar <--------------

// 1. Massivdagi birinchi va oxirgi elementni chiqaring.
// let numbers = [1, 2, 3, 4];
// console.log(numbers[0]);
// console.log(numbers[3]);

// 2. Berilgan massivdan ma'lum 4-indeksdagi elementni “salom” so’ziga almashtiring va elementlarni ekranga chiqaring.
// let number = [0, 1, 2, 3, 4];
// number.pop();
// number.push("Salom");
// console.log(number);

// 3. Bo'sh massiv yarating va unga 3 xil meva nomini qo'shing. Natijaviy massivni ekranga chiqaring.
// let fruit = [];
// fruit.push("Olma", "Tarvuz", "Shaftoli", "Qovun");
// console.log(fruit);

// 4. Massivning uzunligini aniqlang va uni ekranga chiqaring.
// let length = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(length.length);

// 5. Massivga yangi element qo'shing va oxirgi holatdagi massivni ekranga chiqaring.
// let numbers = ["Mersedes-Benz", "Bagatata"];
// numbers.push("Yangi moshina", "Batta qanaqadur moshinani nomi");
// console.log(numbers);

// 6. Massivdan oxirgi elementni o'chiring va qolgan elementlarni ekranga chiqaring.
// let numbers = [0, 1, 2, 3];
// numbers.pop();
// console.log(numbers);

// 7. Massivning boshiga yangi element qo'shing va yangilangan massivni ekranga chiqaring.
// let numbers = [2, 3, 4, 5];
// numbers.unshift(0, 1);
// console.log(numbers);

// 8. Massivdan birinchi elementni o'chiring va qolgan elementlarni ekranga chiqaring.
// let numbers = [1, 1, 2, 3, 4];
// numbers.shift();
// console.log(numbers);

// 9. 5 ta raqamdan iborat massiv yarating va massivdagi barcha elementlarni ekranga chiqaruvchi sikl yozing.
// let numbers = [1, 2, 3, 4, 5];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// 9. 5 ta raqamdan iborat massiv yarating va massivdagi barcha elementlarni ekranga chiqaruvchi sikl yozing.
// let numbers = [1, 2, 3, 4, 5];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// 10. Massivda berilgan qiymat mavjudligini tekshiring va natijani (mavjud yoki mavjud emasligini) ekranga chiqaring.
// let numbers = [1, 2, 3, 4];
// if (numbers.length > 0) {
//   console.log("Mavjud");
// } else {
//   console.log("Mavjud emas");
// }

//---------------> For loop ga oid masalalar <-------------

// 1. 10 ta raqamdan iborat massiv yarating va massivdagi barcha elementlarni ekranga chiqaring.
// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// 2. 5 ta meva nomidan iborat massiv yarating va har bir elementni yangi qatorda ekranga chiqaring.
// let fruits = ["Olma", "Banana", "Ananas", "Apelsin", "Tarvuz"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// 3. Massivdagi barcha juft sonlarni ekranga chiqaring.
// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     console.log(numbers[i]);
//   }
// }

// 4. Massivdagi barcha toq sonlarni ekranga chiqaring.
// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 1) {
//     console.log(numbers[i]);
//   }
// }

// 5. Massivdagi musbat sonlarni ekranga chiqaring.
// let numbers = [-1, 1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 0) {
//     console.log(numbers[i]);
//   }
// }

// 6. 10 ta raqamdan iborat massivdagi barcha sonlarni teskari tartibda ekranga chiqaring.
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = numbers.length - 1; i >= 0; i--) {
//   console.log(numbers[i]);
// }

// 7. Berilgan massivdagi barcha elementlarning yig'indisini hisoblang.
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let counter = 0;
// for (let i = 0; i < numbers.length; i++) {
//   counter = counter + numbers[i];
// }
// console.log(counter);

// 8. Massivdagi barcha sonlarni 2 barobar oshirib, yangilangan massivni ekranga chiqaring.
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum;
// for (let i = 0; i < numbers.length; i++) {
//   sum = numbers[i] * 2;
//   console.log(sum);
// }

// 9. Berilgan massivdagi eng katta elementni toping va ekranga chiqaring.
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let max = Math.max(...numbers);
// console.log("Eng katta son--> " + max);

// 10. Berilgan massivdagi eng kichik elementni toping va ekranga chiqaring.
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let min = Math.min(...numbers);
// console.log("Eng kichik son--> " + min);

// 11. Massivdagi barcha manfiy sonlarni ekranga chiqaring.
// let numbers = [-1, 1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < 0) {
//     console.log(numbers[i]);
//   }
// }

// 12. Massivdagi barcha sonlarni yig'indisini ekranga chiqaring, faqat manfiy sonlarni qo'shmang.
// let numbers = [1, -2, 3, 4, 5, -6, 7, 8, -9, 10];
// let sum;
// for (let i = 0; i < numbers.length; i++) {
//   sum = numbers[i] * 2;

//   if (numbers[i] > 0) {
//     sum = sum + numbers[i];
//   }
// }
// console.log(sum);

// 13. Massivning har bir elementini indekslari bilan birgalikda ekranga chiqaring.
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < numbers.length; i++) {
//   console.log("Index--> " + i, numbers[i]);
// }

// 14. 7 ta elementdan iborat massiv yarating va ularni indekslari teskari tartibda ekranga chiqaring.
// let numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// for (let i = 0; i < numbers.length - 1; i++) {
//   console.log("Index--> " + i, numbers[i]);
// }

alert("Assalomu aleykum!");
alert("bu 4-oy 9-dars uyga vazifasi");
const answers = [
  // Oddiy masalalar
  `1.oddiy masala:
    let numbers = [1, 2, 3, 4];
    console.log(numbers[0]);
    console.log(numbers[3]);`,

  `2.oddiy masala:
    let number = [0, 1, 2, 3, 4];
    number.pop();
    number.push("Salom");
    console.log(number);`,

  `3.oddiy masala:
    let fruit = [];
    fruit.push("Olma", "Tarvuz", "Shaftoli", "Qovun");
    console.log(fruit);`,

  `4.oddiy masala:
    let length = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(length.length);`,

  `5.oddiy masala:
    let numbers = ["Mersedes-Benz", "Bagatata"];
    numbers.push("Yangi moshina", "Batta qanaqadur moshinani nomi");
    console.log(numbers);`,

  `6.oddiy masala:
    let numbers = [0, 1, 2, 3];
    numbers.pop();
    console.log(numbers);`,

  `7.oddiy masala:
    let numbers = [2, 3, 4, 5];
    numbers.unshift(0, 1);
    console.log(numbers);`,

  `8.oddiy masala:
    let numbers = [1, 1, 2, 3, 4];
    numbers.shift();
    console.log(numbers);`,

  `9.oddiy masala:
    let numbers = [1, 2, 3, 4, 5];
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }`,

  `10.oddiy masala:
    let numbers = [1, 2, 3, 4];
    if (numbers.length > 0) {
        console.log("Mavjud");
    } else {
        console.log("Mavjud emas");
    }`,

  // For loop ga oid masalalar
  `1.For loop ga oid masalalar:
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }`,

  `2.For loop ga oid masalalar:
    let fruits = ["Olma", "Banana", "Ananas", "Apelsin", "Tarvuz"];
    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }`,

  `3.For loop ga oid masalalar:
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            console.log(numbers[i]);
        }
    }`,

  `4.For loop ga oid masalalar:
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 1) {
            console.log(numbers[i]);
        }
    }`,

  `5.For loop ga oid masalalar:
    let numbers = [-1, 1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            console.log(numbers[i]);
        }
    }`,

  `6.For loop ga oid masalalar:
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = numbers.length - 1; i >= 0; i--) {
        console.log(numbers[i]);
    }`,

  `7.For loop ga oid masalalar:
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let counter = 0;
    for (let i = 0; i < numbers.length; i++) {
        counter = counter + numbers[i];
    }
     console.log(counter);`,
  `8.For loop ga oid masalalar
     let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum;
for (let i = 0; i < numbers.length; i++) {
  sum = numbers[i] * 2;
  console.log(sum);
}`,
  `9.For loop ga oid masalalar:
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let min = Math.min(...numbers);
console.log("Eng kichik son--> " + min);`,

  `10.For loop ga oid masalalar:
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let min = Math.min(...numbers);
console.log("Eng kichik son--> " + min);`,

  `11.For loop ga oid masalalar:
let numbers = [-1, 1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    console.log(numbers[i]);
  }`,
  `12.For loop ga oid masalalar:
  let numbers = [1, -2, 3, 4, 5, -6, 7, 8, -9, 10];
let sum;
for (let i = 0; i < numbers.length; i++) {
  sum = numbers[i] * 2;

  if (numbers[i] > 0) {
    sum = sum + numbers[i];
  }
}
console.log(sum);`,
  `14.For oid ga oid masalalar:
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbers.length; i++) {
  console.log("Index--> " + i, numbers[i]);
}`,
];

let currentIndex = 0;

const card = document.querySelector(".card p");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

function updateCard() {
  card.textContent = answers[currentIndex];
}

leftArrow.addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : answers.length - 1;
  updateCard();
});

rightArrow.addEventListener("click", () => {
  currentIndex = currentIndex < answers.length - 1 ? currentIndex + 1 : 0;
  updateCard();
});

// Initially set the card content
updateCard();
