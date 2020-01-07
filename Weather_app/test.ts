function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
};

const mergedObj = merge(30, 30)

console.log(mergedObj);
