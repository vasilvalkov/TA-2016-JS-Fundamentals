let people = [
  { firstname: 'Gosho', lastname: 'Petrov', age: 32 },
  { firstname: 'Bay', lastname: 'Ivan', age: 81 },
  { firstname: 'John', lastname: 'Doe', age: 42 },
  { firstname: 'Pesho', lastname: 'Pesho', age: 22 },
  { firstname: 'Asdf', lastname: 'Xyz', age: 81 },
  { firstname: 'Gosho', lastname: 'Gosho', age: 22 }
];

function group (arr) {
    let grouped = {};

    for (let person of arr) {
        let ageProperty = person.age;

        if (grouped.hasOwnProperty(ageProperty)) {
            grouped[ageProperty].push(person);
        } else {
            grouped[ageProperty] = [];
            grouped[ageProperty].push(person);
        }
    }
    return grouped;
}

let groupedByAge = group(people);

console.log(groupedByAge);