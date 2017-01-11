function hasProperty(obj, length) {
    return !!obj[length];
}

const obj = {
        a: 9,
        b: 0,
        length: 10
    },
    has = hasProperty(obj, 'length');

console.log(has);