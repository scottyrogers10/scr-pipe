const error = (val, fn) => {
    if (val instanceof Error) {
        return val;
    }

    try {
        return fn(val);
    } catch (err) {
        if (err instanceof Error) {
            return err;
        }
        return Error(err);
    }
};

export default error;
