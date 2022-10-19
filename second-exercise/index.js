// Funcion que formatea la fecha con split
function format_date(year, month, day) {
    const item = new Date(year, month, day);
    return item.toISOString().split('T')[0];
}
// Creando arreglos
const data = [
    "Juan Oscco Mori",
    24,
    true,
    format_date(1998,02,22)
]

// Creando objeto
const book_favorite = {
    title: "I, Robot",
    author: "Isaac Asimov",
    date: format_date(1950,12,02),
    url: "https://www.amazon.com/-/es/Isaac-Asimov/dp/8435015742"
}

// Imprimiendo arreglos y objetos
console.log(data ,' - ',book_favorite);