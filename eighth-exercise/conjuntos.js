const my_data = {
    name: "Juan",
    last_name: "Oscco Mori",
    age: 24,
    heigth: 165,
    isDeveloper: true
}
const age = my_data.age;

const circle = [
    {
        ...my_data
    },
    {
        name: "Hector Alonso",
        last_name: "Loarte Mori",
        age: 26,
        heigth: 161,
        isDeveloper: false
    },
    {
        name: "Simon",
        last_name: "Cuesta Mori",
        age: 21,
        heigth: 167,
        isDeveloper: true
    }
]

circle.sort((a, b) => b.age - a.age);
console.log(age);
console.log(circle);