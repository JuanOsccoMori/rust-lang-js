let shopping_list = [];
// antes de borrar y poniendo los datos
shopping_list.push("Arroz", "Frejoles", "Leche", "1 litro de agua", "Aceite Girasol");
console.log("Antes de borrar :",shopping_list);
// Despues de borrar el ultimo dato
shopping_list.splice(4,1);
console.log("Despues de borrar :",shopping_list);

/* Creando una lista de mis peliculas favoritas */
function format_date(year, month, day) {
    const item = new Date(year, month -1, day);
    const date = item.toISOString().split('T')[0];
    /*
    -- Invertir la fecha
    const separate = date.split("-");
    const invert = separate.reverse();
    return invert.join("-");
    */
    return date
}

const favorite_movies = [
    {title: "Tiburon 3D", director: "Martin Scorsese", age: format_date(2009, 03, 29)},
    {title: "Kill Bill", director: "Quentin Tarantino", age: format_date(2008, 05, 21)},
    {title: "Spiderman 3", director: "Steven Spielberg", age: format_date(2021, 12, 18)},
]


let later_movies = favorite_movies.filter(value => value.age >= '2010-01-01')
let directors = favorite_movies.map(dict => dict.director);
let title = favorite_movies.map(t => t.title);
let merger = directors.concat(title);
let spread = [...directors, ...title]
console.log(later_movies, directors, title, merger, spread)