const sync = (val, fn) => {
    if (val instanceof Promise) {
        return val.then(result => {
            return fn(result);
        });
    } else {
        return fn(val);
    }
};

export default sync;
