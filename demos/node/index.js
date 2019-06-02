const pipe = require("../../dist/pipe");

const value = pipe(5)
    .flow(val => val + 10)
    .close();

console.log(value);
