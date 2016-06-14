var test = require('tape');
var postcss = require('postcss');
var plugin = require('./');
var name = require('./package.json').name;

var tests = [
    {
        message: 'should add placeholder',
        fixture: 'h1 { background: placehold(400, 400); }',
        expected: 'h1 { background: url("https://placehold.it/400x400"); }',
        options: {}
    },
    {
        message: 'should maintain declaration values',
        fixture: 'h1 { background: #000 placehold(400, 400) no-repeat top center; }',
        expected: 'h1 { background: #000 url("https://placehold.it/400x400") no-repeat top center; }',
        options: {}
    },
    {
        message: 'should ignore whitespace placeholder',
        fixture: 'h1 { background: placehold(    400    ,    400    ); }',
        expected: 'h1 { background: url("https://placehold.it/400x400"); }',
        options: {}
    },
    {
        message: 'should fail with only width',
        fixture: 'h1 { background: placehold(400); }',
        expected: 'h1 { background: placehold(400); }',
        options: {}
    },
    {
        message: 'should fail with no width or height',
        fixture: 'h1 { background: placehold(); }',
        expected: 'h1 { background: placehold(); }',
        options: {}
    },
    {
        message: 'should add kitten placeholder',
        fixture: 'h1 { background: placehold(400, 400); }',
        expected: 'h1 { background: url("https://placekitten.com/400/400"); }',
        options: {
            service: 'placekitten'
        }
    },
    {
        message: 'should add grayscale kitten placeholder',
        fixture: 'h1 { background: placehold(400, 400); }',
        expected: 'h1 { background: url("https://placekitten.com/g/400/400"); }',
        options: {
            service: 'placekittengray'
        }
    },
    {
        message: 'should prefer placehold.it placeholder',
        fixture: 'h1 { background: placehold(400, 400); }',
        expected: 'h1 { background: url("https://placehold.it/400x400"); }',
        options: {
            service: 'fakeservice'
        }
    }
];

function process (css, options) {
    return postcss(plugin(options)).process(css).css;
}

test(name, function (t) {
    t.plan(tests.length);

    tests.forEach(function (test) {
        var options = test.options || {};
        t.equal(process(test.fixture, options), test.expected, test.message);
    });
});

test('should use the postcss plugin api', function (t) {
    t.plan(2);
    t.ok(plugin().postcssVersion, 'should be able to access version');
    t.equal(plugin().postcssPlugin, name, 'should be able to access name');
});
