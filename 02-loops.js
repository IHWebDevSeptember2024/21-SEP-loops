let number = 100;

while (number < 100) {
  // si la condición es FALSE, no se ejecuta el loop
  console.log(number);
  number++;
}

do {
  // Primero ejecuta el código
  console.log(number, "DO WHILE");
  number++;
} while (number < 100); // luego comprueba el statement

for (let i = 0; i < 100; i++) {
  console.log(i);
}

const someIterable = "amsterdam is a beautiful city that I want to visit";

for (const character of someIterable) {
  console.log(character);
}

let i = 0;

while (i < 5) {
  i++;
  console.log(`The number is: ${i}.`);
  if (i === 3) {
    break; // El break tambien para el loop
  }
}

let j = 0;

while (j < 5) {
  j++;
  if (j === 3) {
    continue;
  }
  console.log(`The NUMBER: ${j}.`);
}
