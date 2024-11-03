
let age = prompt("Enter your age:");
let type = prompt("Enter movie type (regular or 3D):");
let time = prompt(" Enter time of day (matinee or evening):");
let discount = prompt("do you have the discount?(yes or no)");

let price = 0;
function AgeControll(age) {
  switch (true) {
    case age < 10:
      return (price += 5);
    case age >= 10 && age < 65:
      return (price += 15);
    case age > 65:
      return (price += 10);
    default:
      alert("Type number");
      break;
  }
}
AgeControll(age);

function TypeControll(type) {
  switch (true) {
    case type === "3D":
      return (price += 5);
    case type === "regular":
      return price;
    default:
      alert("type 3D or regular");
      break;
  }
}
TypeControll(type);

function TimeControll(time) {
  switch (true) {
    case time === "evening":
      return (price += 5);
    case time === "matinee ":
      return price;
    default:
      alert("Type evening or matinee");
      break;
  }
}
TimeControll(time);

function DiscountControll(discount) {
  switch (true) {
    case discount === "no":
      alert("ბილეთის ფასი თქვენთვის არის:" + price + "ლარი");
    case discount === "yes":
      alert("ბილეთის ფასი თქვენთვის არის:" + (price -= 5) + "ლარი");
      break;
    default:
      alert("Type yes or no");
      break;
  }
}
DiscountControll(discount);
