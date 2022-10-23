let name = "Juan Carlos";
let last_name = "Oscco Mori";

let student = `${name} - ${last_name}`;

let estudianteMayus = student.toUpperCase();

let estudianteMinus = student.toLowerCase();

let letters = student.length;

let letter_first = student.charAt(0);

let letter_end = student.charAt(23);

let letter_space = student.replace(/\s+/g,'');

let name_find = student.includes(name);

console.log(name_find);