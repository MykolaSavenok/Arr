const numbers = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
// Знайти суму та кількість позитивних елементів.
let sumPositive = 0;
let positiveCount = 0;
for (let i = 0; i < numbers.length; i++) {
   if (numbers[i] > 0) {
      sumPositive += numbers[i];
      positiveCount += 1;
   }
}

// Знайти максимальний елемент масиву та його порядковий номер.
let maxElement = numbers[0];
let indexElement = numbers[0];
for (let i = 0; i < numbers.length; i++) {
   if (numbers[i] > maxElement) {
      maxElement = numbers[i];
   }
}

// Визначити кількість негативних елементів.
let negativeElement = 0;
for (let i = 0; i < numbers.length; i++) {
   if (numbers[i] < 0) {
      negativeElement += 1
   }
}

// Знайти кількість непарних позитивних елементів.
let howNotPeiredNumber = 0;
for (let i = 0; i < numbers.length; i++) {
   if (numbers[i] % 2 > 0) {
      howNotPeiredNumber += 1;
   }
}

// Визначити кількість парних позитивних елементів.
let peiredNumber = 0;
for (let i = 0; i < numbers.length; i++) {
   if (numbers[i] > 0 && (numbers[i] % 2) === 0) {
      peiredNumber += 1
   }
}

// Знайти суму парних позитивних елементів.
let sumPeiredNumber = 0;
for (let i = 0; i < numbers.length; i++) {
   if (numbers[i] > 0 && (numbers[i] % 2) === 0) {
      sumPeiredNumber += numbers[i]
   }
}

// Знайти суму непарних позитивних елементів.
let sumNotPeiredNumber = 0;
for (let i = 0; i < numbers.length; i++) {
   if (numbers[i] > 0 && numbers[i] % 2 !== 0) {
      sumNotPeiredNumber += numbers[i];
   }
}

// Знайти добуток позитивних елементів.
let mul = 1;
for (let i = 0; i < numbers.length; i++) {
   if (numbers[i] > 0) {
      mul *= numbers[i];
   }
}


alert(
   `Cумa позитивних елементів: ${sumPositive}, Кількість позитивних елементів: ${positiveCount}.
Максимальний елемент масиву: ${maxElement}, порядковий номер: ${numbers.indexOf(maxElement)}.
Кількість негативних елементів: ${negativeElement}.
Кількість непарних позитивних елементів: ${howNotPeiredNumber}.
Кількість парних позитивних елементів: ${peiredNumber}.
Сума парних позитивних елементів: ${sumPeiredNumber}.
Сума непарних позитивних елементів: ${sumNotPeiredNumber}.
Добуток позитивних елементів: ${mul}.
`)
