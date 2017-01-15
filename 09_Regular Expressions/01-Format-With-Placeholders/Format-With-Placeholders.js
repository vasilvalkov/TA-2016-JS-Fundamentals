function solve(args) {
    const options = JSON.parse(args[0], (key, value) =>
        typeof value === 'number' ? +value : value);
    const text = args[1];

    String.prototype.format = function (obj) {
        let text = this;
            for (let prop in obj) {
                let regex = new RegExp(`#{${prop}}`, 'g');
                text = text.replace(regex, `${obj[prop]}`);
            }

        return text;
    }
    console.log(text.format(options));
}
solve([
    '{ "name": "John", "age": 13 }',
    "My name is #{name} and I am #{age}-years-old"
]);