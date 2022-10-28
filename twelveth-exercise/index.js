const logger = require("./log");

try {
    function myValue(name) {
        if (typeof name === "string") {
            return `Hi ${name} c:`;
        }
        throw new Error("El valor debe de ser un texto!");
    }
    const name = 329;
    const response = myValue(name);
    logger.debug(response);
} catch (e) {
    logger.error(`${e} este es un error personalizado`);
}