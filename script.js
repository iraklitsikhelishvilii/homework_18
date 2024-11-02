let age = prompt("Enter your age:");
let type = prompt("Enter movie type (regular or 3D):");
let time = prompt(" Enter time of day (matinee or evening):");
let sale = prompt("do you have the discount?(yes or no)");

switch (true) {
  case age < 10 && type === "3D" && time === "matinee" && sale === "no":
    alert("ბილეთის ფასი თქვენთვის არის: 10 ლარი");
    break;
  case age < 10 && type === "3D" && time === "matinee" && sale === "yes":
    alert("ბილეთის ფასი თქვენთვის არის: 5 ლარი");
    break;
  case age < 10 && type === "3D" && time === "evening" && sale === "no":
    alert("ბილეთის ფასი თქვენთვის არის: 15 ლარი");
    break;
  case age < 10 && type === "3D" && time === "evening" && sale === "yes":
    alert("ბილეთის ფასი თქვენთვის არის: 10 ლარი");
    break;
  case age < 10 && type === "regular" && time === "matinee" && sale === "no":
    alert("ბილეთის ფასი თქვენთვის არის: 5 ლარი");
    break;
  case age < 10 && type === "regular" && time === "matinee" && sale === "yes":
    alert("ბილეთის ფასი თქვენთვის არის: უფასო");
    break;
  case age < 10 && type === "regular" && time === "evening" && sale === "no":
    alert("ბილეთის ფასი თქვენთვის არის: 10 ლარი");
    break;
  case age < 10 && type === "regular" && time === "evening" && sale === "yes":
    alert("ბილეთის ფასი თქვენთვის არის: 5 ლარი");
    break;
  case age >= 10 &&
    age < 65 &&
    type === "3D" &&
    time === "matinee" &&
    sale === "no":
    alert("ბილეთის ფასი თქვენთვის არის: 20 ლარი");
    break;
  case age >= 10 &&
    age < 65 &&
    type === "3D" &&
    time === "matinee" &&
    sale === "yes":
    alert("ბილეთის ფასი თქვენთვის არის: 15 ლარი");
    break;
  case age >= 10 &&
    age < 65 &&
    type === "3D" &&
    time === "evening" &&
    sale === "no":
    alert("ბილეთის ფასი თქვენთვის არის: 25 ლარი");
    break;
  case age >= 10 &&
    age < 65 &&
    type === "3D" &&
    time === "evening" &&
    sale === "yes":
    alert("ბილეთის ფასი თქვენთვის არის: 20 ლარი");
    break;
  case age >= 10 &&
    age < 65 &&
    type === "regular" &&
    time === "matinee" &&
    sale === "no":
    alert("ბილეთის ფასი თქვენთვის არის: 15 ლარი");
    break;
  case age >= 10 &&
    age < 65 &&
    type === "regular" &&
    time === "matinee" &&
    sale === "yes":
    alert("ბილეთის ფასი თქვენთვის არის: 10 ლარი");
    break;
  case age >= 10 &&
    age < 65 &&
    type === "regular" &&
    time === "evening" &&
    sale === "no":
    alert("ბილეთის ფასი თქვენთვის არის: 20 ლარი");
    break;
  case age >= 10 &&
    age < 65 &&
    type === "regular" &&
    time === "evening" &&
    sale === "yes":
    alert("ბილეთის ფასი თქვენთვის არის: 15 ლარი");
    break;
  case age > 65 && type === "3D" && time === "matinee" && sale === "no":
    alert("ბილეთის ფასი თქვენთვის არის: 15 ლარი");
    break;
  case age > 65 && type === "3D" && time === "matinee" && sale === "yes":
    alert("ბილეთის ფასი თქვენთვის არის: 10 ლარი");
    break;
  case age > 65 && type === "3D" && time === "evening" && sale === "no":
    alert("ბილეთის ფასი თქვენთვის არის: 20 ლარი");
    break;
  case age > 65 && type === "3D" && time === "evening" && sale === "yes":
    alert("ბილეთის ფასი თქვენთვის არის: 15 ლარი");
    break;
  case age > 65 && type === "regular" && time === "matinee" && sale === "no":
    alert("ბილეთის ფასი თქვენთვის არის: 10 ლარი");
    break;
  case age > 65 && type === "regular" && time === "matinee" && sale === "yes":
    alert("ბილეთის ფასი თქვენთვის არის: 5 ლარი");
    break;
  case age > 65 && type === "regular" && time === "evening" && sale === "no":
    alert("ბილეთის ფასი თქვენთვის არის: 15 ლარი");
    break;
  case age > 65 && type === "regular" && time === "evening" && sale === "yes":
    alert("ბილეთის ფასი თქვენთვის არის: 10 ლარი");
    break;
  default:
    break;
}
