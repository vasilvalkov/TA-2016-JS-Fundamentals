﻿# Prime check

## Description
Implement a javascript function that accepts an array containing an integer **N** as string (which will always be less than **100** or equal) and uses an expression to check if given **N** is prime (i.e. it is divisible without remainder only to itself and 1).
  - _Note: You should check if the number is positive_.

## Input
- The only element of the array will be the integer **N** as a string value.

## Output
- Output **true** if the number is prime and **false** otherwise.
- You can use `console.log` to print the results or you can use `return` to return the answer. Both are correct.

## Constraints
- **N** will always be a valid 32-bit integer number, which will be less than **100** or equal.
- Time limit: **0.1s**
- Memory limit: **16MB**

## Sample tests

### Sample test 1

#### Input
```js
['2']
```

#### Output
```
true
```

### Sample test 2

#### Input
```js
['23']
```

#### Output
```
true
```

### Sample test 3

#### Input
```js
['-3']
```

#### Output
```
false
```

### Sample test 4

#### Input
```js
['0']
```

#### Output
```
false
```

### Sample test 5

#### Input
```js
['1']
```

#### Output
```
false
```
