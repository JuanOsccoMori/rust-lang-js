let myName = "Juan Carlos";
let last_name = "Oscco Mori";

let sentence = myName + " " +last_name;

/* Session Storage */
// sessionStorage.setItem("name", sentence);

/* Locale Storage */
// localStorage.setItem("name", sentence);

var date = new Date();
date.setTime(date.getTime() + (120 * 1000));

/* Cookies */
// document.cookie = `name=${sentence}`;
// document.cookie = `nameCaducate=name;expires=${date.toUTCString()}`
console.log(document.cookie)