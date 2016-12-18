/*Problem 1. JavaScript literals
Assign all the possible JavaScript literals to different variables.*/

var str = 'text';
var strNumb = '1920';
var quote = 'This is "quoted" text';
var numb = 5;
var flo = 2.25;
var boo = true;
var undefine = undefined;
var nullable = null;
var obj1 = {
	Character: 'Mickey Mouse',
	Original_Actor: 'Walt Disney',
	Created: '1928'
	};
var list = [10, 20, 30];
var fruits = ['Apple', 'Peach', 'Banana'];
var count = [str, numb, flo];
var f = function() {;};
var negNumb = -14;
var hexNumb = 0x55AA64;
var floExponent = 4e4;
var inf = Infinity;

/*Problem 2. Quoted text
Create a string variable with quoted text in it.
For example: `'How you doin'?', Joey said'.*/

console.log(quote);

/*Problem 3. Typeof variables
Try typeof on all variables you created.*/

console.log('str is' + ' ' + typeof str);
console.log('strNumb is' + ' ' + typeof strNumb);
console.log('quote is' + ' ' + typeof quote);
console.log('numb is' + ' ' + typeof numb);
console.log('flo is' + ' ' + typeof flo);
console.log('boo is' + ' ' + typeof boo);
console.log('undefine is' + ' ' + typeof undefine);
console.log('nullable is' + ' ' + typeof nullable);
console.log('obj1 is' + ' ' + typeof obj1);
console.log('list is' + ' ' + typeof list);
console.log('fruits is' + ' ' + typeof fruits);
console.log('count is' + ' ' + typeof count);
console.log('f is' + ' ' + typeof f);
console.log('negNumb is' + ' ' + typeof negNumb);
console.log('hexNumb is' + ' ' + typeof hexNumb);
console.log('floExponent is' + ' ' + typeof floExponent);
console.log('inf is' + ' ' + typeof inf);

/*Problem 4. Typeof null
Create null, undefined variables and try typeof on them.*/

var nuller = null;
console.log(typeof nuller);
var undef = undefined;
console.log(typeof undef);