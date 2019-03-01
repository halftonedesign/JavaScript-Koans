module('About Control Structures (topics/about_control_structures.js)');

test('if', function() {
	const isPositive = false;
	if (2 > 0) {
		isPositive = true;
	}
	equal(__, isPositive,  'what is the value of isPositive?');
});

test('for', function() {
	const counter = 10;
	for (let i = 1; i <= 3; i++) {
		counter = counter + i;
	}
	equal(__, counter, 'what is the value of counter?');
});

test('for in', function() {
	const person = {
		name: 'Amory Blaine',
		age: 102
	};
	let result = '';
	// "for in" lists the property names in an object
	for (let property_name in person) {
  		result = result + property_name;
	}
	equal(__, result, 'what is the value of result?');
});

test('ternary operator', function() {
	let fruit = true ? 'apple' : 'orange';
	equal(__, fruit, 'what is the value of fruit?');

	fruit = false ? 'apple' : 'orange';
	equal(__, fruit, 'now what is the value of fruit?');
});

test('switch', function() {
	let result = 0;
	switch (2) {
		case 1:
			result = 1;
			break;
		case 1+1:
			result = 2;
			break;
	}
	equal(__, result, 'what is the value of result?');
});

test('switch default case', function() {
    let result = 'Pippin';
    switch ('m') {
        case 'f':
            result = 'Frodo';
            break;
        case 's':
            result = 'Samwise';
                break;
        default:
            result = 'Merry';
            break;
    }
    equal(__, result, 'what is the value of result?');
});

test('null coalescing', function() {
    let result = null || 'a value';
    equal(__, result, 'what is the value of result?');
});
