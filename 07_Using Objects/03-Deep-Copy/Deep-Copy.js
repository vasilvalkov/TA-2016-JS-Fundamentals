function deepCopy(obj, cloneObj) {
	for (var prop in obj) {
		if (typeof obj[prop] === "object" &&
			obj[prop] !== null ) {
			cloneObj[prop] = cloneObj[prop] || {};
			deepCopy(obj[prop], cloneObj[prop]);
		} else {
			cloneObj[prop] = obj[prop];
		}
	}
	return cloneObj;
}

var obj1 = {
		name: 'ivan',
		age: 40,
		membership: 'active'
	},
	obj2 = {
		name: 'Petar',
		age: 32
	};

console.log('Original object1: ');
console.log(obj1);
console.log('Original object2: ');
console.log(obj2);
deepCopy(obj1,obj2);
console.log('Original object1: ');
console.log(obj1);
console.log('Deep-copied object2: ');
console.log(obj2);
obj1 = {
		name: 'ivan',
		age: 41,
		membership: 'suspended'
	},
console.log('Changed object1: ');
console.log(obj1);
console.log('Deep-copied object2: ');
console.log(obj2);
	