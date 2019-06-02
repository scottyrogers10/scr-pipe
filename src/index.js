const pipe = value => {
    let bindFn = (val, fn) => fn(val);

    const getPipe = val => {
        return {
            bind: fn => {
                bindFn = fn;
                return getPipe(val);
            },
            flow: fn => getPipe(bindFn(val, fn)),
            close: fn => (fn ? fn(val) : val)
        };
    };

    return getPipe(value);
};

export default pipe;
