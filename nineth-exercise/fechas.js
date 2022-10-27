const date = new Date(2022,09,26);

console.log(date);

const date_my_born = new Date(1998,02,22);
console.log(date_my_born);

const later = date > date_my_born;
console.log(later);

const my_day_born = date_my_born.getDate();
const my_month_born = date_my_born.getMonth() + 1;
const my_year_born = date_my_born.getFullYear();

console.log(my_day_born, my_month_born, my_year_born);