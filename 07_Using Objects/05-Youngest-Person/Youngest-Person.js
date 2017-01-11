function solve(args) {
    var persons = [],
        len = args.length,
        youngestPerson = {},
        minAge,
        i;

    for (i = 0; i < len; i += 3){
        persons.push( 
            {
                firstName: args[i],
                lastName: args[i + 1],
                age: +args[i + 2] 
            });
    }

    minAge = persons[0].age;
    youngestPerson = persons[0];

    for (i = 1; i < persons.length; i += 1) {
        if (persons[i].age < minAge) {
            youngestPerson = persons[i];
            minAge = persons[i].age;
        }
    }

    console.log(youngestPerson.firstName + ' ' + youngestPerson.lastName); 
}
solve([
  'Gosho', 'Petrov', '32',
  'Bay', 'Ivan', '81',
  'John', 'Doe', '42'
]);
