
module('About Truthyness (topics/about_truthyness.js)');

// 日本語のドキュメント：
// https://developer.mozilla.org/ja/docs/Glossary/Truthy
// https://developer.mozilla.org/ja/docs/Glossary/Falsy

test('truthyness of positive numbers', function() {
    const oneIsTruthy = 1 ? true : false;
    equal(__, oneIsTruthy, 'is one truthy?');
});

test('truthyness of negative numbers', function() {
    const negativeOneIsTruthy = -1 ? true : false;
    equal(__, negativeOneIsTruthy, 'is -1 truthy?');
});

test('truthyness of zero', function() {
    const zeroIsTruthy = 0 ? true : false;
    equal(__, zeroIsTruthy, 'is 0 truthy?');
});

test('truthyness of null', function() {
    const nullIsTruthy = null ? true : false;
    equal(__, nullIsTruthy, 'is null truthy?');
});
