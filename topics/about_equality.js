
module("About Equality (topics/about_equality.js)");

test('numeric equality', function() {
    equal(3 + __,  7, '');
});

test('string equality', function() {
    equal('3' + '', '37', 'concatenate the strings');
});

// type coercion: 型強制
test('equality without type coercion', function() {
    ok(__ === 3, 'what is exactly equal to 3?');
});

test('equality with type coercion', function() {
    ok(__ == '3', 'what string is equal to 3, with type coercion?');
});

test("string literals", function() {
    // The same quote type (single-quote ' or double-quote ") must be escaped with a backslash.
    // エスケープ文字 on Wikipedia: https://tinyurl.com/yxe7wkbd
    // Just type the expected values out again here:
    equal("", "\"hoge\"", 'double quotes inside double quotes must be escaped.');
    equal('', '\'hoge\'', 'single quotes inside single quotes must be escaped.');

    // Or you can mix the quote styles:
    // Like '"hoge"' or "'hoge'"
    // Try that style here:
    equal("", "\"hoge\"", 'double quotes inside single quotes are OK');
    equal('', '\'hoge\'', 'single quotes inside double quotes are OK.');
});
