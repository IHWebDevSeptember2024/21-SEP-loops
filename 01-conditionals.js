const isMinor = true;

if (isMinor) {
  console.log("No puedes entrar en el local");
} else {
  console.log("Puedes acceder");
}

const age = 18;

if (age >= 18) {
  console.log("Puedes acceder");
} else {
  console.log("No puedes entrar en el local");
}

const day = "Wednesday";

if (day === "Wednesday" || day === "Monday") {
  console.log("Hay clase a las 18:30");
} else if (day === "Saturday") {
  console.log("Hay clase a las 9:00");
} else {
  console.log("No hay clase");
}

const city = "Paris";

switch (city) {
  case "Barcelona":
  case "Paris":
    console.log("The currency here is €");
    break;
  case "Chicago":
    console.log("The currency is $");
    break;
  case "Stockholm":
    console.log("The currency is 👑");
    break;
  default:
    console.log("The currency is unknown");
}

const userName = "Marina";
const role = "Teacher";

switch (userName) {
  case "Marcel":
    if (role === "Teacher") {
      console.log("Puedes acceder al portal en modo admin");
    }
    break;
  case "Marina":
    console.log("Puedes mandarle mensajes a los teachers");
    break;
}
