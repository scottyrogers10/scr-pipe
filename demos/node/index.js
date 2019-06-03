const pipe = require("../../dist/pipe");

const asyncFn = val => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(val);
        }, 1000);
    });
};

const add10 = val => {
    return val + 10;
};

const div2 = val => {
    return val / 2;
};

const result = pipe(0)
    .bind("sync")
    .flow(add10)
    .flow(div2)
    .flow(add10)
    .flow(asyncFn)
    .flow(add10)
    .flow(div2)
    .flow(add10)
    .close();

result.then(val => console.log(val)).catch(error => console.log(`ERROR: ${error}`));
