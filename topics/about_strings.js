
module('About Strings (topics/about_strings.js)');

// concatenation: 文字列結合
test('concatenation', function() {
    const fruit = 'apple';
    const dish = 'pie';
    equal(__, fruit + ' ' + dish, 'what is the concatenated value?');
});

// Unicode: https://www.nic.ad.jp/ja/basics/terms/unicode.html
// and https://www.unicode.org/standard/translations/japanese.html
test('Unicode escape character', function() {
    const stringWithAnEscapedCharacter  = '\u0041pples are \u6700\u9ad8';
    equal(__, stringWithAnEscapedCharacter, 'what is the value?');
});

test('string.length', function() {
    const fruit = 'apple';
    equal(__, fruit.length, 'what is the value?');
});

test('slice', function() {
    const fruit = 'apple pie';
    equal(__, fruit.slice(0,5), 'what is the value?');
});
