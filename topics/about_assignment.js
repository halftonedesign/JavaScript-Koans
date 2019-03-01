
module('About Assignment (topics/about_assignment.js)');

test('local variables', function() {
    const temp = __;
    equal(temp, 1, 'Assign a value to the variable temp');
});

test('global variables', function() {
    temp = 1; // In real code, ALWAYS use let or const.
    equal(window.__, temp, 'global variables are assigned to the window object');
});
