import { suma, multiplica } from "./module/controller.js";
import chalk from "chalk";

const addition_one = suma(1, 2);
const addition_two = suma(4, 5);
const mult = multiplica(addition_one, addition_two);

console.log(chalk.green(mult));