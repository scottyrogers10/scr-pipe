const maybe = (val, fn) => {
    if (val !== null && val !== undefined) {
        return fn(val);
    } else {
        return null;
    }
};

export default maybe;
