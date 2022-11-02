let name = "Jhon doe";
let last_name = "Mount Dallas";

let student = `${name} - ${last_name}`;

let estudianteMayus = student.toUpperCase();

let estudianteMinus = student.toLowerCase();

let letters = student.length;

let letter_first = student.charAt(0);

let letter_end = student.charAt(23);

let letter_space = student.replace(/\s+/g,"");

let name_find = student.includes(name);

console.log(estudianteMayus ,estudianteMinus, letters, letter_end, letter_first,letter_space,name_find);
