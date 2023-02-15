//assending order 

let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));
let num3 = parseInt(prompt("Enter the third number:"));

if (num1 < num2 && num1 < num3) {
  console.log(num1);
  if (num2 < num3) {
    console.log(num2);
    console.log(num3);
  } else {
    console.log(num3);
    console.log(num2);
  }
} else if (num2 < num1 && num2 < num3) {
  console.log(num2);
  if (num1 < num3) {
    console.log(num1);
    console.log(num3);
  } else {
    console.log(num3);
    console.log(num1);
  }
} else {
  console.log(num3);
  if (num1 < num2) {
    console.log(num1);
    console.log(num2);
  } else {
    console.log(num2);
    console.log(num1);
  }
}
